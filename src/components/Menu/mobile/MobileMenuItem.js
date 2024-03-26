import style from "./MobileMenuItem.module.scss";
import {AnimatePresence, motion} from "framer-motion";
import {Collapse} from 'react-collapse';

const MobileMenuItem = ({title, icon, color, number, menuOpen, onClick, menuVisible}) => {
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

                        </div>
                    </Collapse>
                </motion.div>

            }
        </AnimatePresence>
    )
}

export default MobileMenuItem;