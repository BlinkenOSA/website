import style from "@/components/experiementing/LayoutV1/MobileMenu/MobileMenu.module.scss";
import {AnimatePresence, motion} from "framer-motion";

const MobileMenuItem = ({title, number, menuOpen, onClick, menuVisible}) => {
  const menu = {
    open: { left: 0, top: `${(number-1)*50}px`},
    closed: { left: 0, top: `calc(100vh - ${(200-((number-1)*50))}px)`},
  }

  const transition = {
    ease: [1, 0.2, 0.2, 1], duration: 0.6
  }

  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0}
  }

  const styles = {
    1: {backgroundColor: '#8AB3B8'},
    2: {backgroundColor: '#DCCC7A'},
    3: {backgroundColor: '#a4a4a4'},
    4: {backgroundColor: '#ED8251'}
  }

  const titleVariants = {
    hover: {x: 15}
  }

  return (
    <AnimatePresence>
      {
        menuVisible &&
        <motion.li
          key={'mobile-menu'}
          style={styles[number]}
          className={`${style.NavItem}`}
          initial={{ left: 0, top: '100vh'}}
          exit={{ left: 0, top: '100vh'}}
          variants={menu}
          animate={menuOpen.includes(number) ? 'open': 'closed'}
          transition={transition}>
          <motion.div
            onClick={(e) => onClick(number)}
            className={style.MenuTitle}>
            <motion.span variants={titleVariants}>
              {title}
            </motion.span>
            <motion.div
              initial={{ rotate: 0 }}
              variants={iconVariants}
              className={style.Logo}>
              <img src={'logo-compact.svg'}/>
            </motion.div>
          </motion.div>
        </motion.li>
      }
    </AnimatePresence>
  )
}

export default MobileMenuItem;