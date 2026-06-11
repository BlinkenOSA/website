"use client"

import style from "./MobileMenu.module.scss";
import {useContext, useEffect, useRef, useState} from "react";
import MobileMenuItem from "@/components/Menu/mobile/MobileMenuItem";
import useTranslation from "next-translate/useTranslation";
import {MenuContext, MenuDispatchContext} from "@/utils/context/MenuContext";
import {menuConfig} from "@/config/menuConfig";
import {motion} from "framer-motion"
import {useRouter} from "next/router";
import focusableSelector from "@/utils/focusableSelector";

const Menu = () => {
    const { t } = useTranslation('menu')

    const router = useRouter();

    const menuOpen = useContext(MenuContext);
    const dispatch = useContext(MenuDispatchContext);
    const navRef = useRef(null);
    const lastTriggerRef = useRef(null);

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

    useEffect(() => {
        const activeElement = document.activeElement;
        const navElement = navRef.current;
        const isMenuVisible = menuOpen[0] === 'openMobileMenu';
        const hasSubmenuOpen = menuOpen.length > 1;

        if (isMenuVisible && activeElement instanceof HTMLElement && activeElement.matches(':focus-visible')) {
            if (activeElement.closest('nav') !== navElement) {
                lastTriggerRef.current = activeElement;
            }

            const focusRoot = hasSubmenuOpen
                ? document.getElementById(`mobile-menu-panel-${menuOpen[menuOpen.length - 1]}`)
                : navElement;
            const focusTarget = focusRoot?.querySelector(focusableSelector);

            window.setTimeout(() => {
                if (focusTarget instanceof HTMLElement) {
                    focusTarget.focus();
                }
            }, 0);
        }

        if (!isMenuVisible && lastTriggerRef.current instanceof HTMLElement) {
            lastTriggerRef.current.focus();
            lastTriggerRef.current = null;
        }
    }, [menuOpen]);

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
                id="mobile-site-menu"
                ref={navRef}
                animate={menuOpen[0] === 'openMobileMenu' ? 'open' : 'closed'}
                variants={navVariants}
                aria-label={t('menu')}
                aria-hidden={menuOpen[0] !== 'openMobileMenu'}
                inert={menuOpen[0] !== 'openMobileMenu' ? '' : undefined}
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
