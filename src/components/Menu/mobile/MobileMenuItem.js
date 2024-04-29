import style from "./MobileMenuItem.module.scss";
import {AnimatePresence, motion} from "framer-motion";
import {Collapse} from 'react-collapse';
import MenuPage from "@/components/Menu/mobile/MenuPage";

const MobileMenuItem = ({title, icon, color, number, menuOpen, menuItems, onClick, menuVisible}) => {
    return (
        <AnimatePresence>
            {
                menuVisible &&
                <motion.div
                    className={style.MenuItem}
                >
                    <div onClick={(e) => onClick(number)}
                         className={`${style.MenuHeader} ${style[color]}`}>
                        <div className={style.MenuTitle}>{title}</div>
                        <div className={style.MenuIcon}>{icon}</div>
                    </div>
                    <Collapse isOpened={menuOpen.includes(number)}>
                        <div className={style.MenuPage}>
                            <MenuPage
                                menuID={menuOpen[1]}
                                menuItems={menuItems}
                                number={number}
                                status={menuOpen.includes(number) ? 'open': 'closed'} />
                        </div>
                    </Collapse>
                </motion.div>

            }
        </AnimatePresence>
    )
}

export default MobileMenuItem;