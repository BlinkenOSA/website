import {AnimatePresence, motion} from "framer-motion"
import AboutUsBackground from "@/components/Menu/v2/backgrounds/AboutUsBackground";
import AcademicsBackground from "@/components/Menu/v2/backgrounds/AcademicsBackground";
import PublicProgramsBackground from "@/components/Menu/v2/backgrounds/PublicProgramsBackground";
import style from "./SubmenuPage.module.scss";
import CollectionsBackground from "@/components/Menu/v2/backgrounds/CollectionsBackground";

const SubmenuPage = ({menuID, status, selectedSubmenu}) => {
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

    const getSubmenuItems = () => {
        const submenuStatus = selectedSubmenu ? 'open' : status

        const getSubMenuList = () => {
            return selectedSubmenu['submenu'].map((sm, idx) => {
                return (
                    <motion.div
                        key={sm['key']}
                        initial={"closed"}
                        variants={submenu}
                        animate={submenuStatus}
                        transition={{delay: 0.05 * (idx + 1)}}
                        exit={{ opacity: 0, y: '-30%', transition: {delay: 0.05 * (idx + 1)}}}
                        className={style.SubmenuItem}
                    >
                        <div className={style.Title}>{sm['title']}</div>
                        <div className={style.Description}>{sm['highlight']}</div>
                    </motion.div>
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