import {AnimatePresence, motion} from "framer-motion"
import AboutUsBackground from "@/components/Menu/desktop/backgrounds/AboutUsBackground";
import AcademicsBackground from "@/components/Menu/desktop/backgrounds/AcademicsBackground";
import PublicProgramsBackground from "@/components/Menu/desktop/backgrounds/PublicProgramsBackground";
import style from "./SubmenuPage.module.scss";
import CollectionsBackground from "@/components/Menu/desktop/backgrounds/CollectionsBackground";
import {useContext} from "react";
import {MenuDispatchContext} from "@/utils/context/MenuContext";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";
import {SearchDispatchContext} from "@/utils/context/SearchContext";
import detectSelectedMenuItem from "@/utils/detectSelectedMenuItem";
import detectCurrentMenuTitle from "@/utils/detectCurrentMenuTitle";

const SubmenuPage = ({menuID, status, selectedSubmenu}) => {
    const { t } = useTranslation('menu')

    const dispatch = useContext(MenuDispatchContext);
    const router = useRouter();

    const searchDispatch = useContext(SearchDispatchContext);

    const getSubmenuBackground = () => {
        const backgroundStatus = selectedSubmenu ? 'closed' : status

        switch (menuID) {
            case 'about-us':
                return <AboutUsBackground backgroundStatus={backgroundStatus} />
            case 'collections':
                return <CollectionsBackground backgroundStatus={backgroundStatus} />
            case 'academics':
                return <AcademicsBackground backgroundStatus={backgroundStatus} />
            case 'public-programs':
                return <PublicProgramsBackground backgroundStatus={backgroundStatus} />
        }
    }

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
                            transition={{delay: 0.6 + (0.05 * (idx + 1))}}
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
                <AnimatePresence>
                    { selectedSubmenu && getSubMenuList() }
                </AnimatePresence>
            </div>
        )

    }

    return (
        <>
            <div className={style.SubmenuWrapper}>
                {getSubmenuItems()}
            </div>
            <div className={style.BackgroundIcon}>
                {getSubmenuBackground()}
            </div>
        </>
    )
}

export default SubmenuPage