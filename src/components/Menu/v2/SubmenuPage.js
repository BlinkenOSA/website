import {AnimatePresence, motion} from "framer-motion"
import AboutUsBackground from "@/components/Menu/v2/backgrounds/AboutUsBackground";
import AcademicsBackground from "@/components/Menu/v2/backgrounds/AcademicsBackground";
import PublicProgramsBackground from "@/components/Menu/v2/backgrounds/PublicProgramsBackground";
import style from "./SubmenuPage.module.scss";
import CollectionsBackground from "@/components/Menu/v2/backgrounds/CollectionsBackground";
import {useContext} from "react";
import {MenuDispatchContext} from "@/utils/context/MenuContext";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";

const SubmenuPage = ({menuID, status, selectedSubmenu}) => {
    const { t } = useTranslation('menu')

    const dispatch = useContext(MenuDispatchContext);
    const router = useRouter();

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
                            className={style.SubmenuItem}
                        >
                            <div className={style.Title}>{t(sm['key'])}</div>
                            <div className={style.Description}>{sm['highlight']}</div>
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