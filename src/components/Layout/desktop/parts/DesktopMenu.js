"use client"

import style from "./DesktopMenu.module.scss";
import {useState} from "react";
import DesktopMenuItem from "@/components/Layout/desktop/parts/DesktopMenuItem";

const DesktopMenu = () => {
  const [menuOpen, setMenuOpen] = useState(0)

  const handleMenuClick = (menuItem) => {
    if (menuOpen === menuItem) {
      setMenuOpen(0)
    } else {
      setMenuOpen(menuItem)
    }
  }

  return (
    <nav className={style.BarNavigation}>
      <ul className={style.NavList}>
        <DesktopMenuItem title={'what about us'} id={1} number={menuOpen > 1 ? 2 : 1} menuOpen={menuOpen} onClick={handleMenuClick}>
        </DesktopMenuItem>
        <DesktopMenuItem title={'collections'} id={2} number={menuOpen > 2 ? 3 : 2} menuOpen={menuOpen} onClick={handleMenuClick}>
        </DesktopMenuItem>
        <DesktopMenuItem title={'academics'} id={3} number={menuOpen > 3 ? 4 : 3} menuOpen={menuOpen} onClick={handleMenuClick}>
        </DesktopMenuItem>
        <DesktopMenuItem title={'public events'} id={4} number={4} menuOpen={menuOpen} onClick={handleMenuClick}>
        </DesktopMenuItem>
      </ul>
    </nav>
  )
}

export default DesktopMenu;