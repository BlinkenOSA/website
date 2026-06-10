import style from "./MenuItem.module.scss"
import {motion} from "framer-motion";
import MenuPage from "@/components/Menu/desktop/MenuPage";

const MenuItem = ({menuID, title, icon, number, color, menuOpen, onClick, menuItems}) => {
    const menuVariants = {
        open: { left: (56 * (number - 1) - number)},
        closed: { left: `calc(100% - ${(5 - number) * 56 - (5 - number)}px)`}
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

    return (
        <motion.div
            className={`${style.MenuItem}`}
            style={getStyle()}
            animate={menuOpen.includes(number) ? 'open': 'closed'}
            initial={'closed'}
            variants={menuVariants}
            transition={transition}
        >
            <button
                type="button"
                className={`${style.MenuHeader} ${style[color]}`}
                onClick={() => onClick(number)}
                aria-expanded={menuOpen.includes(number)}
                aria-controls={`desktop-menu-panel-${number}`}>
                <div className={style.MenuTitle}>{title}</div>
                <div className={style.MenuIcon}>{icon}</div>
            </button>
            <MenuPage
                id={`desktop-menu-panel-${number}`}
                menuID={menuID}
                menuItems={menuItems}
                number={number}
                status={menuOpen.includes(number) ? 'open': 'closed'} />
        </motion.div>
    )
}

export default MenuItem;
