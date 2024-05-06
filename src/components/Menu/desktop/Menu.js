"use client"

import style from "./Menu.module.scss";
import MenuItem from "@/components/Menu/desktop/MenuItem";
import {menuConfig} from "@/config/menuConfig";
import {useContext, useEffect} from 'react';
import {MenuContext, MenuDispatchContext} from "@/utils/context/MenuContext";
import useTranslation from "next-translate/useTranslation";
import {SearchContext, SearchDispatchContext} from "@/utils/context/SearchContext";
import {useRouter} from "next/router";

const DesktopMenu = () => {
    const { t } = useTranslation('menu')

    const router = useRouter();

    const menuOpen = useContext(MenuContext);
    const dispatch = useContext(MenuDispatchContext);

    const searchOpen = useContext(SearchContext);
    const searchDispatch = useContext(SearchDispatchContext);

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
      <nav className={style.BarNavigation}>
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