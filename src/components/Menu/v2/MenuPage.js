import style from "./MenuPage.module.scss"
import {AnimatePresence, motion} from "framer-motion"
import {IconGeneralRight} from "@/components/Icon/Icon";
import {useState} from "react";
import SubmenuPage from "@/components/Menu/v2/SubmenuPage";

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
        closed: { opacity: 0, x: '-20%'},
        open: { opacity: 1, x: 0}
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
                            style={{display: "flex"}}
                        >
                            <div
                                onClick={() => handleSelectMenu(item['key'])}
                                className={menuItem['key'] === selectedMenuItem ? `${style.Title} ${style.Active}` : style.Title}
                            >
                                {item['title']}
                            </div>
                            <div style={{display: "flex", flex: 1, justifyContent: 'center', alignItems: "center"}}>
                                <IconGeneralRight />
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className={style.MenuItem}>
                            <a href>
                                <div className={selectedMenuItem !== '' ? `${style.Title} ${style.NotActive}` : style.Title}>
                                    {item['title']}
                                </div>
                            </a>
                        </div>
                    )
                }
            }

            return (
                <motion.div
                    variants={submenu}
                    key={`submenu_${idx}`}
                    className={'menu-text'}
                >
                    { renderMenuTitle(menuItem) }
                </motion.div>
            )
        })
    }

    const getSelectedSubmenu = () => {
        const selectedSubmenus = menuItems.filter(menuItem => menuItem['key'] === selectedMenuItem)
        return selectedSubmenus[0]
    }

    return (
        <div className={style.MenuPageWrapper} style={{width: `calc(100% - (${number * 56 - (4 - number)}px))`}}>
            <div className={style.SubmenuWrapper}>
                <motion.div
                    variants={submenuContainer}
                    animate={status}
                    className={style.Submenu}>
                    { getMenuList() }
                </motion.div>
            </div>
            <div className={style.SubmenuSecondLevel}>
                <SubmenuPage menuID={menuID} status={status} selectedSubmenu={getSelectedSubmenu()} />
            </div>
        </div>
    )
}

export default MenuPage;