"use client"

import style from "./MobileMenu.module.scss";
import {useContext, useState} from "react";
import MobileMenuItem from "@/components/Menu/mobile/MobileMenuItem";
import useTranslation from "next-translate/useTranslation";
import {MenuContext, MenuDispatchContext} from "@/utils/context/MenuContext";
import {menuConfig} from "@/components/Menu/config/menuConfig";

const Menu = () => {
    const { t } = useTranslation('menu')

    const menuOpen = useContext(MenuContext);
    const dispatch = useContext(MenuDispatchContext);

    const handleMenuClick = (menuItem) => {
        dispatch({
            type: 'open',
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
                                color={cfg['color']}
                                number={index+1}
                                menuOpen={menuOpen}
                                onClick={handleMenuClick}
                                menuVisible={menuOpen.length > 0}
                            />
                        )
                    }
                )}
            </nav>
        </>
    )
}

export default Menu;