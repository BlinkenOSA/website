import style from "./DesktopMenu.module.scss";
import {motion} from "framer-motion";

const DesktopMenuItem = ({title, id, number, menuOpen, onClick, children}) => {
  const menu = {
    open: { left: `0px`},
    closed: { left: `calc(100vw - ${(200-((number-1)*50))}px)`},
  }

  const transition = {
    ease: [1, 0.2, 0.2, 1], duration: 0.6
  }

  const iconOpenSpin = {
    hover: { rotate: 270 }
  }

  const iconClosedSpin = {
    hover: { rotate: 90 },
  }

  const styles = {
    1: {backgroundColor: '#8AB3B8'},
    2: {backgroundColor: '#DCCC7A'},
    3: {backgroundColor: '#a4a4a4'},
    4: {backgroundColor: '#ED8251'}
  }

  const titleVariants = {
    hover: {y: 15}
  }

  return (
    <motion.li
      style={styles[id]}
      className={`${style.NavItem}`}
      animate={menuOpen === id ? 'open': 'closed'}
      variants={menu}
      initial={{left: '100vw'}}
      transition={transition}>
      <motion.div
        onClick={(e) => onClick(id)}
        animate={menuOpen === id ? 'open': 'closed'}
        whileHover={'hover'}
        className={style.MenuTitle}>
        <motion.span variants={titleVariants}>
          {title}
        </motion.span>
        <motion.div
          initial={{ rotate: 180 }}
          variants={menuOpen === id ? iconOpenSpin : iconClosedSpin}
          className={style.Logo}>
          <img src={'logo-compact.svg'}/>
        </motion.div>
      </motion.div>
      <div className={style.MenuContent}>
        {children}
      </div>
    </motion.li>
  )
}

export default DesktopMenuItem;