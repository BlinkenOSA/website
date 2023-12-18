"use client"

import style from "./Menu.module.scss";
import {useState} from "react";
import MenuItem from "@/components/Layout/desktop/parts/menuParts/MenuItem";
import Image from "next/image";
import aboutUSLogo from "../../../../../public/icons/blinken-osa-logo-a.svg";
import collectionsLogo from "../../../../../public/icons/collections.svg";
import academicsLogo from "../../../../../public/icons/academics.svg";
import publicProgramsLogo from "../../../../../public/icons/public-programs.svg";
import {useRouter} from "next/router";
import SubMenu from "@/components/Layout/desktop/parts/menuParts/SubMenu";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(-1)

  const router = useRouter();

  const menuConfig = [
    {
      title: 'about us',
      icon: <Image priority src={aboutUSLogo} height={25} alt="About us" />,
      css: style.AboutUs,
      url: '/about'
    }, {
      title: 'collections',
      icon: <Image priority src={collectionsLogo} height={25} alt="Collections" />,
      css: style.Collections,
      url: '/collections'
    }, {
      title: 'academics',
      icon: <Image priority src={academicsLogo} height={25} alt="Academics" />,
      css: style.Academics,
      url: '/academics'
    }, {
      title: 'public events',
      icon: <Image priority src={publicProgramsLogo} height={25} alt="Public Programs" />,
      css: style.PublicPrograms,
      url: '/public-programs'
    }
  ]

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
                css={cfg['css']}
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
        menuOpen > -1 && <SubMenu subMenu={menuOpen} css={menuConfig[menuOpen]['css']} />
      }
    </nav>
  )
}

export default Menu;