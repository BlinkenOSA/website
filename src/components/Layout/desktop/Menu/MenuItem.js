import style from "@/src/components/Layout/desktop/Menu/Menu.module.scss";
import {motion} from "framer-motion";

const MenuItem = ({title, number, menuOpen, onClick}) => {
  const menu = {
    open: { left: `${(number-1)*50}px`},
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
      style={styles[number]}
      className={`${style.NavItem}`}
      variants={menu}
      animate={menuOpen.includes(number) ? 'open': 'closed'}
      transition={transition}>
      <motion.div
        onClick={(e) => onClick(number)}
        whileHover={'hover'}
        className={style.MenuTitle}>
        <motion.span variants={titleVariants}>
          {title}
        </motion.span>
        <motion.div
          initial={{ rotate: 180 }}
          variants={menuOpen.includes(number) ? iconOpenSpin : iconClosedSpin}
          className={style.Logo}>
          <img src={'logo-compact.svg'}/>
        </motion.div>
      </motion.div>
    </motion.li>
  )
}

export default MenuItem;