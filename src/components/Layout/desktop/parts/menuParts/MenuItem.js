import style from "../Menu.module.scss";
import {motion} from "framer-motion";

const MenuItem = ({title, id, number, menuOpen, icon, onClick, css}) => {
  const menu = {
    open: { left: 0, right: 'unset'},
    closed: { left: 'unset', right: `${((4 - number)*49)}px`},
  }

  const transition = {
    ease: [1, 0.2, 0.2, 1], duration: 0.6
  }

  const titleVariants = {
    hover: {y: 15}
  }

  return (
    <motion.li
      className={`${style.NavItem} ${css}`}
      animate={menuOpen === id ? 'open': 'closed'}
      variants={menu}
      initial={{left: 'unset', right: 0}}
      transition={transition}>
      <motion.div
        onClick={(e) => onClick(id)}
        animate={menuOpen === id ? 'open': 'closed'}
        whileHover={'hover'}
        className={`${style.MenuTitle} suisseIntlRegular`}>
        <motion.span variants={titleVariants}>
          {title}
        </motion.span>
        <motion.div className={style.Logo}>
          {icon}
        </motion.div>
      </motion.div>
    </motion.li>
  )
}

export default MenuItem;