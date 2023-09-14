import style from "./MenuPage.module.scss";
import {motion, AnimatePresence} from "framer-motion";

const MenuPage = ({options, number, menuOpen}) => {
  const menuItemVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  const titleVariants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 100, opacity: 0 }
  }

  const renderMenuItems = () => {
    return options['menu'].map(menu => {
      return (
        <motion.div
          varaints={menuItemVariants}
          className={style.MenuItem}>
          {menu['title']}
        </motion.div>
      )
    })
  }

  return (
      <motion.div className={style.MenuPageWrapper}>
          <motion.div className={style.TitleWrapper}>
            <motion.div
              initial={"hidden"}
              animate={"visible"}
              varants={titleVariants}
              transition={{delay: 0.5}}
              className={style.Icon}/>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1}}
              transition={{delay: 0.7}}
              className={style.Title}>{options['title']}</motion.div>
          </motion.div>
          <div className={style.MenuContent}>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }}
              className={style.Menu}>
              {renderMenuItems()}
            </motion.div>
            <div className={style.Static}>Menu</div>
          </div>
      </motion.div>
  )
}

export default MenuPage;