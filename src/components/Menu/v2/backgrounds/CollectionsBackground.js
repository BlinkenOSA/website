import style from "./CollectionsBackground.module.scss"
import Image from "next/image";
import collectionsTopLeft from "../../../../../public/icons/menu/collections_middle_left.svg";
import collectionsBottomLeft from "../../../../../public/icons/menu/collections_bottom_left.svg";
import collectionsMiddle from "../../../../../public/icons/menu/collections_middle.svg";
import collectionsTopRight from "../../../../../public/icons/menu/collections_top_right.svg";
import {motion, AnimatePresence} from "framer-motion";


const CollectionsBackground = ({backgroundStatus}) => {
    const leftVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "50%" },
    }

    const middleVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "50%" },
    }

    const topVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    }

    return (
        <AnimatePresence>
            {
                backgroundStatus === 'open' &&
                <div className={style.Wrapper}>
                    <div className={style.Left}>
                        <div className={style.Top}>
                            <motion.div
                                initial={"closed"}
                                variants={leftVariants}
                                animate={backgroundStatus}
                                exit={{ opacity: 0, x: "50%", transition: {delay: 0.1, duration: 0.2 }}}
                                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.5 }}
                                style={{zIndex: 1}}
                            >
                                <Image
                                    priority
                                    src={collectionsTopLeft}
                                    width={300}
                                    height={300}
                                    alt="Icon"
                                />
                            </motion.div>
                        </div>
                        <div className={style.Bottom}>
                            <motion.div
                                initial={"closed"}
                                variants={leftVariants}
                                animate={backgroundStatus}
                                exit={{ opacity: 0, x: "50%", transition: {delay: 0.2, duration: 0.2 }}}
                                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.4 }}
                                style={{zIndex: 1}}
                            >
                                <Image
                                    priority
                                    src={collectionsBottomLeft}
                                    width={300}
                                    height={300}
                                    alt="Icon"
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className={style.Middle}>
                        <motion.div
                            initial={"closed"}
                            variants={middleVariants}
                            animate={backgroundStatus}
                            exit={{ opacity: 0, x: "50%", transition: {delay: 0, duration: 0.2 }}}
                            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.6 }}
                            style={{zIndex: 1}}
                        >
                            <Image
                                priority
                                src={collectionsMiddle}
                                width={300}
                                height={300}
                                alt="Icon"
                            />
                        </motion.div>
                    </div>
                    <div className={style.Right}>
                        <motion.div
                            initial={"closed"}
                            variants={middleVariants}
                            animate={backgroundStatus}
                            exit={{ opacity: 0, x: "50%", transition: {delay: 0, duration: 0.2 }}}
                            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.7 }}
                            style={{zIndex: 1}}
                        >
                            <Image
                                priority
                                src={collectionsTopRight}
                                width={300}
                                height={300}
                                alt="Icon"
                            />
                        </motion.div>
                    </div>
                </div>
            }
        </AnimatePresence>
    )

}

export default CollectionsBackground;