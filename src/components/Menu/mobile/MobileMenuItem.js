import style from "./MobileMenuItem.module.scss";
import {AnimatePresence, motion} from "framer-motion";

const MobileMenuItem = ({title, color, number, menuOpen, onClick, menuVisible}) => {
    return (
        <AnimatePresence>
            {
                menuVisible &&
                <motion.div
                    className={style.MenuItem}
                >
                    <div className={`${style.MenuHeader} ${style[color]}`}>{title}</div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default MobileMenuItem;