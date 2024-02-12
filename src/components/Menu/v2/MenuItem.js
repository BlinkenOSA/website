import style from "./MenuItem.module.scss"
import {motion} from "framer-motion";

const MenuItem = ({id, title, icon, number, color, menuOpen, onClick, submenu, children}) => {
    const menuVariants = {
        open: { right: (4 - number) * 56 - (4 - number)},
        closed: { right: (-400 + (5 - number) * 56 - (4 - number))}
    }

    const transition = {
        ease: [0.8, 0.3, 0.3, 0.8], duration: 0.4
    }

    const getStyle = () => {
        return {
            right: (-400 + (5 - number) * 56 - (4 - number)),
            zIndex: number
        }
    }

    const getSubmenu = () => {
        return submenu.map((sm, idx) => {
            return <div key={`submenu_${number}_${idx}`} className={'menu-text'}>{sm['title']}</div>
        })
    }

    return (
        <motion.div
            className={`${style.MenuItem} ${style[color]}`}
            style={getStyle()}
            animate={menuOpen.includes(number) ? 'open': 'closed'}
            variants={menuVariants}
            transition={transition}
            onClick={(e) => onClick(number)}
        >
            <div className={style.MenuHeader}>
                <div className={style.MenuTitle}>{title}</div>
                <div className={style.MenuIcon}>{icon}</div>
            </div>
            <div className={style.MenuContent}>
                <div className={style.MenuTopTitle}>{title}</div>
                {getSubmenu()}
            </div>
        </motion.div>
    )
}

export default MenuItem;