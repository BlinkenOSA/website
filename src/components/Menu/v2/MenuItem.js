import style from "./MenuItem.module.scss"
import {motion} from "framer-motion";

const MenuItem = ({id, title, icon, bgIcon, number, color, menuOpen, onClick, submenu, children}) => {
    const menuVariants = {
        open: { left: (56 * (number - 1) - number)},
        closed: { left: `calc(100vw - ${(5 - number) * 56 - (5 - number)}px)`}
    }

    const transition = {
        ease: [1, 0.3, 0.3, 1], duration: 0.7
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
            className={`${style.MenuItem}`}
            style={getStyle()}
            animate={menuOpen.includes(number) ? 'open': 'closed'}
            variants={menuVariants}
            transition={transition}
            onClick={(e) => onClick(number)}
        >
            <div className={`${style.MenuHeader} ${style[color]}`}>
                <div className={style.MenuTitle}>{title}</div>
                <div className={style.MenuIcon}>{icon}</div>
            </div>
            <div className={`${style.MenuContent} ${style[color]}`}>
                {getSubmenu()}
                <div className={style.BackgroundIcon}>
                    {bgIcon}
                </div>
            </div>
        </motion.div>
    )
}

export default MenuItem;