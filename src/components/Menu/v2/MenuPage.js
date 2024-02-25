import style from "./MenuPage.module.scss"
import AboutUsBackground from "@/components/Menu/v2/backgrounds/AboutUsBackground";
import AcademicsBackground from "@/components/Menu/v2/backgrounds/AcademicsBackground";
import PublicProgramsBackground from "@/components/Menu/v2/backgrounds/PublicProgramsBackground";
import { motion } from "framer-motion"

const MenuPage = ({submenuConfig, menuID, number, status}) => {
    const submenuContainer = {
        closed: { opacity: 0 },
        open: {
            opacity: 1,
            transition: {
                delay: 0.3,
                delayChildren: 0.5,
                staggerChildren: 0.05
            }
        }
    }

    const submenu = {
        closed: { opacity: 0, x: '-20%', ease: "linear",},
        open: { opacity: 1, x: 0, ease: "linear" }
    }

    const getSubmenu = () => {
        return submenuConfig.map((sm, idx) => {
            return <motion.div variants={submenu} key={`submenu_${idx}`} className={'menu-text'}>{sm['title']}</motion.div>
        })
    }

    const getMenuBackground = () => {
        switch (menuID) {
            case 'about_us':
                return <AboutUsBackground status={status} />
            case 'academics':
                return <AcademicsBackground status={status} />
            case 'public_programs':
                return <PublicProgramsBackground status={status} />
        }
    }

    return (
        <div className={style.MenuPageWrapper} style={{width: `calc(100vw - (${number * 56 - (4 - number)}px))`}}>
            <div className={style.SubmenuWrapper}>
                <motion.div
                    variants={submenuContainer}
                    animate={status}
                    className={style.Submenu}>
                    {getSubmenu()}
                </motion.div>
            </div>
            <div className={style.SubmenuSecondLevel}>
                <div className={style.BackgroundIcon}>
                    {getMenuBackground()}
                </div>
            </div>
        </div>
    )
}

export default MenuPage;