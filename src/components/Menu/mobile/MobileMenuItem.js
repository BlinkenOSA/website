import style from "./MobileMenuItem.module.scss";
import {AnimatePresence, motion} from "framer-motion";
import {Collapse} from 'react-collapse';
import MenuPage from "@/components/Menu/mobile/MenuPage";

const MobileMenuItem = ({title, icon, color, number, menuOpen, menuItems, onClick, menuVisible}) => {
    const navVariants = {
        open: {x: 0, opacity: 1},
        closed: {x: `100%`, opacity: 0}
    }

    return (
        menuVisible &&
        <motion.div
            initial={'closed'}
            animate={menuOpen ? 'open' : 'closed'}
            transition={{delay: number * 0.05, ease: 'easeOut'}}
            variants={navVariants}
            style={{zIndex: 5 - number}}
            className={style.MenuItem}
        >
            <div onClick={(e) => onClick(number)}
                 className={`${style.MenuHeader} ${style[color]}`}>
                <div className={style.MenuIcon}>{icon}</div>
                <div className={style.MenuTitle}>{title}</div>
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
    )
}

export default MobileMenuItem;