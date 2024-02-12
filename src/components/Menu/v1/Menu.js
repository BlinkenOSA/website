"use client"

import style from "./Menu.module.scss";
import {useState} from "react";
import MenuItem from "@/components/Menu/v1/MenuItem";
import {useRouter} from "next/router";
import SubMenu from "@/components/experiementing/Layout/desktop/parts/menuParts/SubMenu";
import {IconAcademics, IconArchivum, IconCollections, IconPublicPrograms} from "@/components/Icon/CategoriesIcon";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(-1)

  const router = useRouter();

  const menuConfig = [
    {
      title: 'About Us',
      icon: <IconArchivum />,
      css: style.AboutUs,
      url: '/about'
    }, {
      title: 'Collections',
      icon: <IconCollections />,
      css: style.Collections,
      url: '/collections'
    }, {
      title: 'Academics',
      icon: <IconAcademics />,
      css: style.Academics,
      url: '/academics'
    }, {
      title: 'Public Programs',
      icon: <IconPublicPrograms />,
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