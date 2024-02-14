"use client"

import style from "./Menu.module.scss";
import {useState} from "react";
import MenuItem from "@/components/Menu/v1/MenuItem";
import {useRouter} from "next/router";
import {menuConfig} from "@/components/Menu/v1/config/menuConfig";
import SubMenu from "@/components/Menu/v1/SubMenu";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(-1)

  const router = useRouter();

  const handleMenuClick = (menuItem) => {
    if (menuOpen === menuItem) {
      setMenuOpen(-1)
      router.push('/', undefined, {shallow: true})
    } else {
      setMenuOpen(menuItem)
      menuConfig[menuItem]['url'] && router.push(menuConfig[menuItem]['url'], undefined, {shallow: true})
    }
  }

  return (
    <nav className={style.BarNavigation}>
      <ul className={style.NavList}>
        {
          menuConfig.map((cfg, index) => {
            return (
              <MenuItem
                key={index}
                title={cfg['title']}
                color={cfg['color']}
                id={index}
                number={menuOpen > index ? index + 2 : index + 1}
                menuOpen={menuOpen}
                icon={cfg['icon']}
                onClick={handleMenuClick} />
            )
          })
        }
      </ul>
      {
        menuOpen > -1 && <SubMenu submenuConfig={menuConfig[menuOpen]['submenu']} color={menuConfig[menuOpen]['color']} />
      }
    </nav>
  )
}

export default Menu;