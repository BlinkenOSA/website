import aboutUsLeft from "../../../../../public/icons/menu/about_us_left.svg";
import aboutUsRight from "../../../../../public/icons/menu/about_us_right.svg";
import Image from "next/image";
import style from "./AboutUsBackground.module.scss";
import { motion } from "framer-motion"

const AboutUsBackground = ({status}) => {
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    }

    return (
        <div className={style.Wrapper}>
            <div style={{flex: 1}}>
                <motion.div
                    initial={"closed"}
                    variants={variants}
                    animate={status}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
                    style={{zIndex: 2}}
                >
                <Image
                    priority
                    src={aboutUsLeft}
                    width={300}
                    height={300}
                    alt="Icon"
                />
                </motion.div>
            </div>
            <div style={{flex: 1}}>
                <motion.div
                    initial={"closed"}
                    variants={variants}
                    animate={status}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 0.8 }}
                    style={{zIndex: 1}}
                >
                    <Image
                        priority
                        src={aboutUsRight}
                        width={300}
                        height={300}
                        alt="Icon"
                    />
                </motion.div>
            </div>
        </div>
    )

}

export default AboutUsBackground;