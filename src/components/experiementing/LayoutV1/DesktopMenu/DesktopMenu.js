"use client"

import style from "./DesktopMenu.module.scss";
import {useState} from "react";
import DesktopMenuItem from "@/components/experiementing/LayoutV1/DesktopMenu/DesktopMenuItem";
import MenuPage from "@/components/experiementing/LayoutV1/DesktopMenu/pages/MenuPage";
import {submenuConfig} from "@/components/experiementing/LayoutV1/common/submenuConfig";

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
      <ul className={style.NavList}>
        <DesktopMenuItem title={'what about us'} number={1} menuOpen={menuOpen} onClick={handleMenuClick}>
          <MenuPage options={submenuConfig['WhatAboutUs']} number={1} menuOpen={menuOpen} />
        </DesktopMenuItem>
        <DesktopMenuItem title={'collections'} number={2} menuOpen={menuOpen} onClick={handleMenuClick}>
          <MenuPage options={submenuConfig['Collections']} number={2} menuOpen={menuOpen} />
        </DesktopMenuItem>
        <DesktopMenuItem title={'academics'} number={3} menuOpen={menuOpen} onClick={handleMenuClick}>
          <MenuPage options={submenuConfig['Academics']} number={3} menuOpen={menuOpen} />
        </DesktopMenuItem>
        <DesktopMenuItem title={'public events'} number={4} menuOpen={menuOpen} onClick={handleMenuClick}>
          <MenuPage options={submenuConfig['PublicPrograms']} number={4} menuOpen={menuOpen} />
        </DesktopMenuItem>
      </ul>
    </nav>
  )
}

export default DesktopMenu;