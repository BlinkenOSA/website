"use client"

import style from "./MobileMenu.module.scss";
import {useState} from "react";
import MobileMenuItem from "@/components/LayoutV1/MobileMenu/MobileMenuItem";
import MenuButton from "@/components/LayoutV1/MobileMenu/MenuButton";
import MenuPage from "@/components/LayoutV1/DesktopMenu/pages/MenuPage";
import {submenuConfig} from "../common/submenuConfig";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState([])
  const [menuVisible, setMenuVisible] = useState(false)

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

  const menuButtonStyle = {
    marginLeft: "2rem"
  };

  return (
    <>
      <div className={style.MenuButton}>
        <MenuButton
          width={30}
          height={30}
          strokeWidth={2}
          isOpen={menuVisible}
          onClick={() => setMenuVisible(!menuVisible)}
          style={menuButtonStyle}
        />
      </div>
      <nav className={style.BarNavigation}>
        <ul className={style.NavList}>
          <MobileMenuItem
            title={'what about us'}
            number={1}
            menuOpen={menuOpen}
            onClick={handleMenuClick}
            menuVisible={menuVisible}
          />
          <MobileMenuItem title={'collections'} number={2} menuOpen={menuOpen} onClick={handleMenuClick} menuVisible={menuVisible} />
          <MobileMenuItem title={'academics'} number={3} menuOpen={menuOpen} onClick={handleMenuClick} menuVisible={menuVisible} />
          <MobileMenuItem title={'public events'} number={4} menuOpen={menuOpen} onClick={handleMenuClick} menuVisible={menuVisible} />
        </ul>
      </nav>
    </>
  )
}

export default MobileMenu;