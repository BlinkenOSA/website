import style from "./Credo.module.scss"
import archivumLogo from "../../../public/icons/credo/archivum.svg"
import collectionLogo from "../../../public/icons/credo/collections.svg"
import academicsLogo from "../../../public/icons/credo/academics.svg"
import publicProgramsLogo from "../../../public/icons/credo/public-programs.svg"
import Image from "next/image";
import {Container} from "react-bootstrap";
import getColor from "@/utils/content/getColor";
import {motion} from "framer-motion"
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";

const CredoCard = ({data, active}) => {
    const {lang} = useTranslation('page')

    const weAreText = getLocData(data, 'WeAre', lang)
    const credoText = getLocData(data, 'CredoText', lang)
    const type = data['Type']

    const titleVariants = {
        active: {
            x: 0,
            opacity: 1,
        },
        notActive: {
            x: '-100%',
            opacity: 0
        }
    }

    const credoTextVariants = {
        active: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2,
            }
        },
        notActive: {
            y: '100%',
            opacity: 0
        }
    }

    const logoVariants = {
        active: {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                ease: "easeInOut",
                delay: 0.4,
            }
        },
        notActive: {
            x: '100%',
            opacity: 0,
            filter: "blur(5px)",
        }
    }

    const getImage = () => {
        switch (type) {
            case 'Archivum':
                return archivumLogo
            case 'Collection':
                return collectionLogo
            case 'Academics':
                return academicsLogo
            case 'Public Programs':
                return publicProgramsLogo
        }
    }

    return (
        <motion.div
            className={`${style.Credo} 
            ${style[getColor(type)]}`}>
            <Container>
                <div className={style.Card}>
                    <motion.div className={style.Text}>
                        <motion.h1
                            animate={active ? 'active' : 'notActive'}
                            variants={titleVariants}>We are {weAreText}</motion.h1>
                        <motion.div
                            animate={active ? 'active' : 'notActive'}
                            variants={credoTextVariants}>{credoText}</motion.div>
                    </motion.div>
                    <motion.div
                        animate={active ? 'active' : 'notActive'}
                        variants={logoVariants}
                        className={style.Logo}>
                        <Image
                            src={getImage()}
                            height={400}
                            alt="Blinken OSA Archivum"
                        />
                    </motion.div>
                </div>
            </Container>
        </motion.div>
    )
}

export default CredoCard;