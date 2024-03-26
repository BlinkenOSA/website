"use client"

import style from "./MobileMenu.module.scss";
import {useContext, useState} from "react";
import MobileMenuItem from "@/components/Menu/mobile/MobileMenuItem";
import useTranslation from "next-translate/useTranslation";
import {MenuContext, MenuDispatchContext} from "@/utils/context/MenuContext";
import {menuConfig} from "@/config/menuConfig";

const Menu = () => {
    const { t } = useTranslation('menu')

    const menuOpen = useContext(MenuContext);
    const dispatch = useContext(MenuDispatchContext);

    const handleMenuClick = (menuItem) => {
        dispatch({
            type: 'open-mobile-menu-item',
            value: menuItem
        });
    }

    return (
        <>
            <nav className={style.BarNavigation}>
                {
                    menuConfig.map((cfg, index) => {
                        return (
                            <MobileMenuItem
                                title={t(cfg['key'])}
                                icon={cfg['icon']}
                                color={cfg['color']}
                                number={index+1}
                                menuOpen={menuOpen}
                                onClick={handleMenuClick}
                                menuVisible={menuOpen.includes('openMobileMenu')}
                            />
                        )
                    }
                )}
            </nav>
        </>
    )
}

export default Menu;