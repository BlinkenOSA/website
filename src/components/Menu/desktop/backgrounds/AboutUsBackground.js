import aboutUsLeft from "../../../../../public/icons/menu/about_us_left.svg";
import aboutUsRight from "../../../../../public/icons/menu/about_us_right.svg";
import Image from "next/image";
import style from "./AboutUsBackground.module.scss";
import {AnimatePresence, motion} from "framer-motion"

const AboutUsBackground = ({backgroundStatus}) => {
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    }

    return (
        <AnimatePresence>
            {
                backgroundStatus === 'open' &&
                <div className={style.Wrapper}>
                    <div>
                        <motion.div
                            initial={"closed"}
                            variants={variants}
                            animate={backgroundStatus}
                            exit={{opacity: 0, x: "100%", transition: {duration: 0.2, delay: 0.1}}}
                            transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
                            style={{zIndex: 2}}
                        >
                        <Image
                            priority={true}
                            src={aboutUsLeft}
                            width={300}
                            height={300}
                            alt="Icon"
                        />
                        </motion.div>
                    </div>
                    <div>
                        <motion.div
                            initial={"closed"}
                            variants={variants}
                            animate={backgroundStatus}
                            exit={{opacity: 0, x: "100%", transition: {duration: 0.2}}}
                            transition={{ ease: "easeOut", duration: 0.5, delay: 0.8 }}
                            style={{zIndex: 1}}
                        >
                            <Image
                                priority={true}
                                src={aboutUsRight}
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

export default AboutUsBackground;