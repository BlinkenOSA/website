"use client"

import style from "./MobileMenu.module.scss";
import {useContext, useEffect, useState} from "react";
import MobileMenuItem from "@/components/Menu/mobile/MobileMenuItem";
import useTranslation from "next-translate/useTranslation";
import {MenuContext, MenuDispatchContext} from "@/utils/context/MenuContext";
import {menuConfig} from "@/config/menuConfig";
import {motion} from "framer-motion"
import {useRouter} from "next/router";

const Menu = () => {
    const { t } = useTranslation('menu')

    const router = useRouter();

    const menuOpen = useContext(MenuContext);
    const dispatch = useContext(MenuDispatchContext);

    useEffect(() => {
        router.beforePopState(({ as }) => {
            if (as !== router.asPath) {
                dispatch({
                    type: 'close',
                });
            }
            return true;
        });

        return () => {
            router.beforePopState(() => true);
        };
    }, [router]);

    const handleMenuClick = (menuItem) => {
        dispatch({
            type: 'open-mobile-menu-item',
            value: menuItem
        });
    }

    const navVariants = {
        open: {opacity: 1},
        closed: {opacity: 0}
    }

    return (
        <>
            <motion.nav
                animate={menuOpen[0] === 'openMobileMenu' ? 'open' : 'closed'}
                variants={navVariants}
                className={menuOpen[0] === 'openMobileMenu' ? `${style.BarNavigation} ${style.Open}` : style.BarNavigation}>
                {
                    menuConfig.map((cfg, index) => {
                        return (
                            <MobileMenuItem
                                key={cfg['key']}
                                title={t(cfg['key'])}
                                icon={cfg['icon']}
                                color={cfg['color']}
                                number={index+1}
                                menuOpen={menuOpen}
                                menuItems={cfg['menuItems']}
                                onClick={handleMenuClick}
                                menuVisible={menuOpen.includes('openMobileMenu')}
                            />
                        )
                    }
                )}
            </motion.nav>
        </>
    )
}

export default Menu;