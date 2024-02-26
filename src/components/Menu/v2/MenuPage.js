import style from "./MenuPage.module.scss"
import AboutUsBackground from "@/components/Menu/v2/backgrounds/AboutUsBackground";
import AcademicsBackground from "@/components/Menu/v2/backgrounds/AcademicsBackground";
import PublicProgramsBackground from "@/components/Menu/v2/backgrounds/PublicProgramsBackground";
import { motion } from "framer-motion"
import {IconGeneralRight} from "@/components/Icon/Icon";
import {useState} from "react";

const MenuPage = ({menuItems, menuID, number, status}) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('')

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

    const handleSelectMenu = (key) => {
        if (selectedMenuItem === key) {
            setSelectedMenuItem('')
        } else {
            setSelectedMenuItem(key)
        }
    }

    const getMenuList = () => {
        return menuItems.map((menuItem, idx) => {
            const renderMenuTitle = (item) => {
                if ('submenu' in item) {
                    return (
                        <div
                            className={style.MenuItem}
                            onClick={() => handleSelectMenu(item['key'])}
                            style={{display: "flex", justifyContent: "space-between"}}
                        >
                            <div>{item['title']}</div>
                            <div style={{display: "flex", alignItems: "center"}}><IconGeneralRight /></div>
                        </div>
                    )
                } else {
                    return (
                        <div className={style.MenuItem}>
                            <a href>
                                {item['title']}
                            </a>
                        </div>
                    )
                }
            }

            return (
                <motion.div
                    variants={submenu}
                    key={`submenu_${idx}`}
                    className={'menu-text'}>
                    {renderMenuTitle(menuItem)}
                </motion.div>
            )
        })
    }

    const getMenuBackground = () => {
        switch (menuID) {
            case 'about-us':
                return <AboutUsBackground status={status} />
            case 'academics':
                return <AcademicsBackground status={status} />
            case 'public-programs':
                return <PublicProgramsBackground status={status} />
        }
    }

    return (
        <div className={style.MenuPageWrapper} style={{width: `calc(100% - (${number * 56 - (4 - number)}px))`}}>
            <div className={style.SubmenuWrapper}>
                <motion.div
                    variants={submenuContainer}
                    animate={status}
                    className={style.Submenu}>
                    {getMenuList()}
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