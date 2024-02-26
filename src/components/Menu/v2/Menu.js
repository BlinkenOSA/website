"use client"

import style from "./Menu.module.scss";
import {useState} from "react";
import MenuItem from "@/components/Menu/v2/MenuItem";
import {menuConfig} from "@/components/Menu/v2/config/menuConfig";

const DesktopMenu = () => {
  const [menuOpen, setMenuOpen] = useState([])

  const handleMenuClick = (menuItem) => {
    if (menuOpen.includes(menuItem) && menuOpen.indexOf(menuItem) + 1 === menuOpen.length) {
      setMenuOpen([])
    } else {
      switch (menuItem) {
        case 1:
          setMenuOpen([1])
          break;
        case 2:
          setMenuOpen([1, 2])
          break;
        case 3:
          setMenuOpen([1, 2, 3])
          break;
        case 4:
          setMenuOpen([1, 2, 3, 4])
          break;
      }
    }
  }

  return (
      <nav className={style.BarNavigation}>
          <div className={style.NavList}>
              {
                menuConfig.map((cfg, index) => {
                  return (
                      <MenuItem
                          menuID={cfg['key']}
                          title={cfg['title']}
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