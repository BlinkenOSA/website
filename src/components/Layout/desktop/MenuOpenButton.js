import {useContext} from "react";
import {MenuContext, MenuDispatchContext} from "@/utils/context/MenuContext";
import Button from "@/components/Button/Button";
import style from "./MenuOpenButton.module.scss"
import {motion, AnimatePresence} from "framer-motion";

const MenuOpenButton = () => {
    const menuOpen = useContext(MenuContext);
    const dispatch = useContext(MenuDispatchContext);

    const handleClick = () => {
        dispatch({
            type: 'close'
        })
    }

    const buttonVariants = {
        open: {x: 0, opacity: 1},
        closed: {x: '50%', opacity: 0}
    }

    return (
        <div className={style.MenuOpenButton}>
            <AnimatePresence>
                {
                    menuOpen.length > 0 &&
                    <motion.div
                        initial={'closed'}
                        animate={menuOpen.length > 0 ? 'open' : 'closed'}
                        variants={buttonVariants}
                        transition={{delay: 0.3}}
                        exit={{x: '50%', opacity: 0}}
                    >
                        <Button type={'primary'} color={'neutral'} onClick={handleClick} size={'medium'} >Close Menu</Button>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default MenuOpenButton;