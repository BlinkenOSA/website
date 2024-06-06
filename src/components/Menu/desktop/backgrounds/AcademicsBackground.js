import academicsBottomLeft from "../../../../../public/icons/menu/academics_bottom_left.svg";
import academicsBottomRight from "../../../../../public/icons/menu/academics_bottom_right.svg";
import academicsTop from "../../../../../public/icons/menu/academics_top.svg";
import Image from "next/image";
import style from "./AcademicsBackground.module.scss"
import {AnimatePresence, motion} from "framer-motion"

const AcademicsBackground = ({backgroundStatus}) => {
    const topVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    }

    const leftVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "100%" },
    }

    const rightVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    }

    return (
        <AnimatePresence>
            {
                backgroundStatus === 'open' &&
                <div className={style.Wrapper}>
                    <div className={style.Top}>
                        <motion.div
                            initial={"closed"}
                            variants={topVariants}
                            animate={backgroundStatus}
                            exit={{ opacity: 0, x: "50%", transition: {delay: 0, duration: 0.2 }}}
                            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.5 }}
                            style={{zIndex: 1}}
                        >
                            <Image
                                priority={true}
                                src={academicsTop}
                                width={300}
                                height={300}
                                alt="Icon"
                            />
                        </motion.div>
                    </div>
                    <div className={style.Bottom}>
                        <div className={style.Left}>
                            <motion.div
                                initial={"closed"}
                                variants={leftVariants}
                                exit={{ opacity: 0, y: "50%", transition: {delay: 0.1, duration: 0.2 }}}
                                animate={backgroundStatus}
                                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.9 }}
                                style={{zIndex: 1}}
                            >
                                <Image
                                    priority={true}
                                    src={academicsBottomLeft}
                                    width={300}
                                    height={300}
                                    alt="Icon"
                                />
                            </motion.div>
                        </div>
                        <div className={style.Right}>
                            <motion.div
                                initial={"closed"}
                                variants={rightVariants}
                                exit={{ opacity: 0, x: "50%", transition: {delay: 0.1, duration: 0.2 }}}
                                animate={backgroundStatus}
                                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.7 }}
                                style={{zIndex: 1}}
                            >
                                <Image
                                    priority={true}
                                    src={academicsBottomRight}
                                    width={300}
                                    height={300}
                                    alt="Icon"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            }
        </AnimatePresence>
    )

}

export default AcademicsBackground;