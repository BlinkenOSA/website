'use client'

import style from "./MenuV2.module.scss";
import {useState} from "react";
import MenuItem from "@/app/components/Menu/MenuItem";

const MenuV2 = () => {
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
        <MenuItem title={'what about us'} number={1} menuOpen={menuOpen} onClick={handleMenuClick} />
        <MenuItem title={'collections'} number={2} menuOpen={menuOpen} onClick={handleMenuClick} />
        <MenuItem title={'academics'} number={3} menuOpen={menuOpen} onClick={handleMenuClick} />
        <MenuItem title={'public events'} number={4} menuOpen={menuOpen} onClick={handleMenuClick} />
      </ul>
    </nav>
  )
}

export default MenuV2;