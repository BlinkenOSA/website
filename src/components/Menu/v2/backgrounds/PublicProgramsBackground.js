import publicProgramsTopLeft from "../../../../../public/icons/menu/public_programs_top_left.svg";
import publicProgramsBottomLeft from "../../../../../public/icons/menu/public_programs_bottom_left.svg";
import publicProgramsRight from "../../../../../public/icons/menu/public_programs_right.svg";

import Image from "next/image";
import style from "./PublicProgramsBackground.module.scss"
import { motion } from "framer-motion"

const PublicProgramsBackground = ({status}) => {
    const topVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
    }

    const bottomVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "100%" },
    }

    const rightVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    }

    return (
        <div className={style.Wrapper}>
            <div className={style.Left}>
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
                            src={publicProgramsTopLeft}
                            width={300}
                            height={300}
                            alt="Icon"
                        />
                    </motion.div>
                </div>
                <div className={style.Bottom}>
                    <motion.div
                        initial={"closed"}
                        variants={bottomVariants}
                        animate={status}
                        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.7 }}
                        style={{zIndex: 1}}
                    >
                        <Image
                            priority
                            src={publicProgramsBottomLeft}
                            width={300}
                            height={300}
                            alt="Icon"
                        />
                    </motion.div>
                </div>
            </div>
            <div className={style.Right}>
                <motion.div
                    initial={"closed"}
                    variants={rightVariants}
                    animate={status}
                    transition={{ ease: "easeInOut", duration: 0.5, delay: 0.9 }}
                    style={{zIndex: 1}}
                >
                    <Image
                        priority
                        src={publicProgramsRight}
                        width={300}
                        height={300}
                        alt="Icon"
                    />
                </motion.div>
            </div>
        </div>
    )

}

export default PublicProgramsBackground;