import {useMeasure} from "react-use";
import {motion} from "framer-motion";
import style from "./SubMenu.module.scss";

const SubMenu = ({submenuConfig, color}) => {
    const [ref, { height }] = useMeasure();

    return (
        <motion.div
            initial={{x: '-120%'}}
            animate={{ x: '0' }}
            transition={{ delay: 0.5 }}
            className={style.SubMenuList}
        >
            <motion.ul
                ref={ref}
                className={'suisseIntlBook'}
            >
                {
                    submenuConfig.map((submenu, index) => {
                        return <li key={submenu['title']} className={style[color]}>{submenu['title']}</li>
                    })
                }
            </motion.ul>
        </motion.div>
    )
}

export default SubMenu;