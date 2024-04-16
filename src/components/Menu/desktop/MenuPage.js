import style from "./MenuPage.module.scss"
import {AnimatePresence, motion} from "framer-motion"
import {IconGeneralClose, IconGeneralRight} from "@/components/Icon/GeneralIcon";
import {useContext, useEffect, useState} from "react";
import SubmenuPage from "@/components/Menu/desktop/SubmenuPage";
import {MenuDispatchContext} from "@/utils/context/MenuContext";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";
import {useUpdateEffect} from "react-use";
import Button from "@/components/Button/Button";
import {SearchDispatchContext} from "@/utils/context/SearchContext";

const MenuPage = ({menuItems, menuID, number, status}) => {
    const { t } = useTranslation('menu')

    const [selectedMenuItem, setSelectedMenuItem] = useState('')

    const dispatch = useContext(MenuDispatchContext);
    const router = useRouter();

    const searchDispatch = useContext(SearchDispatchContext);

    useUpdateEffect(() => {
        if (status === 'closed') {
            setSelectedMenuItem('')
        }
    }, [status])

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

    const closeButtonVariants = {
        closed: { opacity: 0},
        open: { opacity: 1, transition: { delay: 1.0 }}
    }

    const handleSelectMenu = (key) => {
        if (selectedMenuItem === key) {
            setSelectedMenuItem('')
        } else {
            setSelectedMenuItem(key)
        }
    }

    const handleMenuClick = (e, url) => {
        e.preventDefault();
        dispatch({
            type: 'close'
        })
        searchDispatch ({
            type: 'close'
        })
        router.push(url);
    }

    const getMenuList = () => {
        const getClass = (menuItemKey) => {
            if ( menuItemKey === selectedMenuItem ) {
                return `${style.MenuItem} ${style.Active}`
            } else {
                if (selectedMenuItem === '') {
                    return style.MenuItem
                } else {
                    return `${style.MenuItem} ${style.NotActive}`
                }
            }
        }

        return menuItems.map((menuItem, idx) => {
            const renderMenuTitle = (item) => {
                if ('submenu' in item) {
                    return (
                        <div
                            className={getClass(item['key'])}
                            style={{display: "flex"}}
                        >
                            <div
                                onClick={() => handleSelectMenu(item['key'])}
                                className={style.Title}
                            >
                                {t(item['key'])}
                            </div>
                            <div
                                onClick={() => handleSelectMenu(item['key'])}
                                className={style.Icon}>
                                <IconGeneralRight />
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className={getClass(item['key'])}>
                            <a href={'url' in item ? item['url'] : undefined} onClick={(e) => handleMenuClick(e, item['url'])}>
                                <div className={style.Title}>
                                    {t(item['key'])}
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

    const handleClose = () => {
        dispatch({
            type: 'close'
        })
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
                <motion.div
                    initial={'closed'}
                    variants={closeButtonVariants}
                    animate={status}
                    className={style.BackButton}
                    style={{right: `${(4 - number) * 56 + 32}px`}}
                >
                    <Button type={'secondary'} color={'neutral'} size={'medium'} onClick={handleClose}>
                        <IconGeneralClose/>
                    </Button>
                </motion.div>
                <SubmenuPage menuID={menuID} status={status} selectedSubmenu={getSelectedSubmenu()} />
            </div>
        </div>
    )
}

export default MenuPage;