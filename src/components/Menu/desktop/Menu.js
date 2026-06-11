"use client"

import style from "./Menu.module.scss";
import MenuItem from "@/components/Menu/desktop/MenuItem";
import {menuConfig} from "@/config/menuConfig";
import {useContext, useEffect, useRef} from 'react';
import {MenuContext, MenuDispatchContext} from "@/utils/context/MenuContext";
import useTranslation from "next-translate/useTranslation";
import {SearchContext, SearchDispatchContext} from "@/utils/context/SearchContext";
import {useRouter} from "next/router";
import focusableSelector from "@/utils/focusableSelector";

const DesktopMenu = () => {
    const { t } = useTranslation('menu')

    const router = useRouter();

    const menuOpen = useContext(MenuContext);
    const dispatch = useContext(MenuDispatchContext);

    const searchOpen = useContext(SearchContext);
    const searchDispatch = useContext(SearchDispatchContext);
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
        const isMenuOpen = menuOpen.length > 0;

        if (
            isMenuOpen &&
            activeElement instanceof HTMLElement &&
            activeElement.closest('nav') === navElement &&
            activeElement.matches(':focus-visible')
        ) {
            lastTriggerRef.current = activeElement;

            const activePanelNumber = menuOpen[menuOpen.length - 1];
            const panel = document.getElementById(`desktop-menu-panel-${activePanelNumber}`);
            const focusTarget = panel?.querySelector(focusableSelector);

            window.setTimeout(() => {
                if (focusTarget instanceof HTMLElement) {
                    focusTarget.focus();
                }
            }, 0);
        }

        if (!isMenuOpen && lastTriggerRef.current instanceof HTMLElement) {
            lastTriggerRef.current.focus();
            lastTriggerRef.current = null;
        }
    }, [menuOpen]);

  const handleMenuClick = (menuItem) => {
      if (searchOpen) {
          searchDispatch({
              type: 'close',
          });
      }

      dispatch({
        type: 'open',
        value: menuItem
      });
  }

  return (
      <nav className={style.BarNavigation} ref={navRef} aria-label={t('menu')}>
          <div className={style.NavList}>
              {
                menuConfig.map((cfg, index) => {
                  return (
                      <MenuItem
                          key={cfg['key']}
                          menuID={cfg['key']}
                          title={t(cfg['key'])}
                          color={cfg['color']}
                          id={index}
                          number={index + 1}
                          menuOpen={menuOpen}
                          icon={cfg['icon']}
                          bgIcon={cfg['menuBGIcon']}
                          menuItems={cfg['menuItems']}
                          onClick={handleMenuClick} />
                  )
                })
              }
          </div>
      </nav>
  )
}

export default DesktopMenu;
