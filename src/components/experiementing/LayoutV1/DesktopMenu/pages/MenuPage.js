"use client"

import style from "./MenuPage.module.scss";
import {motion, AnimatePresence} from "framer-motion";

const MenuPage = ({options, number, menuOpen}) => {
  const titleVariants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 100, opacity: 0 }
  }

  const textVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 50, opacity: 0 }
  }

  const menuVariants = {
    visible: { opacity: 1, transition: {
      delayChildren: 0.7,
      staggerChildren: 0.05
    }},
    hidden: { opacity: 0 }
  }

  const renderMenuItems = () => (
    <motion.div className={style.Menu} variants={menuVariants} exit={{ y: 50, opacity: 0 }}>
      {
        options['menu'].map(menu => {
          return (
            <motion.span
              key={menu['title']}
              whileHover={{ x: 20 }}
              variants={textVariants}
              className={style.MenuItem}>
              <a href={'#'}>
                {menu['title']}
              </a>
            </motion.span>
          )
        })
      }
    </motion.div>
  )

  return (
    <AnimatePresence>
      {
        menuOpen.includes(number) &&
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          className={style.MenuPageWrapper}>
          <motion.div
            className={style.TitleWrapper}>
            <motion.div
              variants={titleVariants}
              exit={{ x: 100, opacity: 0, transition: {delay: 0} }}
              transition={{ delay: 0.5 }}
              className={style.Icon}/>
            <motion.div
              variants={titleVariants}
              exit={{ x: 100, opacity: 0, transition: {delay: 0} }}
              transition={{ delay: 0.7 }}
              className={style.Title}>{options['title']}</motion.div>
          </motion.div>
          <motion.div
            className={style.MenuContent}>
            {renderMenuItems()}
            <div className={style.Static}>
              <motion.div variants={textVariants} transition={{ delay: 0.7}} >
                Menu
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default MenuPage;