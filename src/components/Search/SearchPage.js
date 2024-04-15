import style from "./SearchPage.module.scss"
import {motion} from 'framer-motion';
import SearchBox from "@/components/Input/SearchBox";
import Image from "next/image";
import Button from "@/components/Button/Button";
import {IconGeneralClose} from "@/components/Icon/GeneralIcon";

const SearchPage = ({searchOpen, onClose}) => {
    const searchPageVariables = {
        open: { x: 0 },
        closed: { x: '-100%' }
    }

    const searchCatalogVariables = {
        open: { x: 0 },
        closed: { x: '-200%' }
    }

    const searchBoxVariables = {
        open: { y: 0, opacity: 1 },
        closed: { y: '-10%', opacity: 0 }
    }

    return (
        <motion.div className={style.SearchPageWrapper}>
            <motion.div
                animate={searchOpen ? 'open' : 'closed'}
                variants={searchPageVariables}
                initial={'closed'}
                exit={{x: '-100%', transition: {ease: 'linear', delay: 0.2}}}
                transition={{ease: "linear", duration: 0.2}}
                className={style.WebsiteSearch}>
                <motion.div
                    transition={{delay: 0.3}}
                    variants={searchBoxVariables}
                    className={style.SearchBox}>
                    <SearchBox bordered={true} placeholder={'Search our catalog'} />
                </motion.div>
            </motion.div>
            <motion.div
                animate={searchOpen ? 'open' : 'closed'}
                variants={searchCatalogVariables}
                initial={'closed'}
                exit={{x: '-200%', transition: {ease: 'linear', delay: 0}}}
                transition={{ease: "linear", duration: 0.4}}
                className={style.CatalogSearch}>
                <Image
                    priority={true}
                    alt={'Catalog background'}
                    src={'/images/search.jpg'}
                    fill={true}
                />
                <motion.div
                    transition={{delay: 0.5}}
                    variants={searchBoxVariables}
                    className={style.SearchBox}>
                    <SearchBox bordered={true} placeholder={'Search our website'} />
                </motion.div>
                <motion.div
                    transition={{delay: 0.7}}
                    variants={searchBoxVariables}
                    className={style.CloseButton}>
                    <Button type={'secondary'} color={'neutral'} size={'medium'} onClick={onClose}>
                        <IconGeneralClose/>
                    </Button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default SearchPage;