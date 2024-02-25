import academicsBottomLeft from "../../../../../public/icons/menu/academics_bottom_left.svg";
import academicsBottomRight from "../../../../../public/icons/menu/academics_bottom_right.svg";
import academicsTop from "../../../../../public/icons/menu/academics_top.svg";
import Image from "next/image";
import style from "./AcademicsBackground.module.scss"
import { motion } from "framer-motion"

const AcademicsBackground = ({status}) => {
    const topVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
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
        <div className={style.Wrapper}>
            <div className={style.Top}>
                <motion.div
                    initial={"closed"}
                    variants={topVariants}
                    animate={status}
                    transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
                    style={{zIndex: 1}}
                >
                    <Image
                        priority
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
                        animate={status}
                        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.9 }}
                        style={{zIndex: 1}}
                    >
                        <Image
                            priority
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
                        animate={status}
                        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.7 }}
                        style={{zIndex: 1}}
                    >
                        <Image
                            priority
                            src={academicsBottomRight}
                            width={300}
                            height={300}
                            alt="Icon"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )

}

export default AcademicsBackground;