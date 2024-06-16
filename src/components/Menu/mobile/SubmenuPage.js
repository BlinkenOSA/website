import {AnimatePresence, motion} from "framer-motion"
import style from "./SubmenuPage.module.scss";
import {useContext} from "react";
import {MenuDispatchContext} from "@/utils/context/MenuContext";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";
import {SearchDispatchContext} from "@/utils/context/SearchContext";
import detectCurrentMenuTitle from "@/utils/detectCurrentMenuTitle";
import menu from "@/components/Menu/desktop/Menu";
import {IconGeneralLeft} from "@/components/Icon/GeneralIcon";

const SubmenuPage = ({menuID, status, selectedSubmenu, onBackClick}) => {
    const { t } = useTranslation('menu')

    const dispatch = useContext(MenuDispatchContext);
    const router = useRouter();

    const searchDispatch = useContext(SearchDispatchContext);

    const submenu = {
        closed: { opacity: 0, y: '-30%'},
        open: { opacity: 1, y: 0 }
    }

    const handleMenuClick = (e, url) => {
        if (url) {
            e.preventDefault();
            dispatch({
                type: 'close'
            })
            searchDispatch ({
                type: 'close'
            })
            router.push(url);
        }
    }

    const getSubmenuItems = () => {
        const submenuStatus = selectedSubmenu ? 'open' : status
        const getSubMenuList = () => {
            return selectedSubmenu['submenu'].map((sm, idx) => {
                return (
                    <a key={sm['key']} href={'url' in sm ? sm['url'] : undefined} onClick={(e) => handleMenuClick(e, sm['url'])}>
                        <motion.div
                            initial={"closed"}
                            variants={submenu}
                            animate={submenuStatus}
                            transition={{delay: 0.05 * (idx + 1)}}
                            exit={{ opacity: 0, y: '-30%', transition: {delay: 0.05 * (idx + 1)}}}
                            className={`${style.SubmenuItem} ${detectCurrentMenuTitle(sm, router.asPath) ? style.Current : ''}`}
                        >
                            <div className={`${style.Title}`}>{t(sm['key'])}</div>
                            {
                                t(`${sm['key']}__text`) !== '' &&
                                <div className={style.Description}>{t(`${sm['key']}__text`)}</div>
                            }
                        </motion.div>
                    </a>
                )
            })
        }

        return (
            <div className={style.Submenu}>
                { selectedSubmenu && getSubMenuList() }
            </div>
        )
    }

    return (
        <div className={style.SubmenuWrapper}>
            <motion.div
                initial={"closed"}
                variants={submenu}
                animate={selectedSubmenu ? 'open' : status}
                exit={{ opacity: 0, y: '-30%'}}
                className={style.BackButton}
                onClick={onBackClick}
                >
                <IconGeneralLeft/> {selectedSubmenu['title']}
            </motion.div>
            {getSubmenuItems()}
        </div>
    )
}

export default SubmenuPage