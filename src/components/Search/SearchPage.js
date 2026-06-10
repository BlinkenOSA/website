import style from "./SearchPage.module.scss"
import {motion} from 'framer-motion';
import SearchBox from "@/components/Input/SearchBox";
import Image from "next/image";
import Button from "@/components/Button/Button";
import {IconGeneralClose} from "@/components/Icon/GeneralIcon";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";
import {useId} from "react";

const SearchPage = ({searchOpen, onClose}) => {
    const router = useRouter();
    const { t, lang } = useTranslation('page')
    const catalogHeadingId = useId();
    const websiteHeadingId = useId();

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

    const handleCatalogSearch = (value) => {
        window.open(`https://catalog.archivum.org/?query=${value}`)
    }

    const handleWebsiteSearch = (value) => {
        onClose();
        router.push(`/search?website[query]=${value}`)
    }

    return (
        <motion.div className={style.SearchPageWrapper} id="site-search-panel" role="dialog" aria-modal="true" aria-label={t('search')}>
            <motion.div
                animate={searchOpen ? 'open' : 'closed'}
                variants={searchPageVariables}
                initial={'closed'}
                exit={{x: '-100%', transition: {ease: 'linear', delay: 0.2}}}
                transition={{ease: "linear", duration: 0.2}}
                aria-labelledby={catalogHeadingId}
                className={style.CatalogSearch}>
                <div className={style.Wrapper}>
                    <motion.div
                        transition={{delay: 0.3}}
                        variants={searchBoxVariables}
                        className={style.TitleBox}>
                        <h2 id={catalogHeadingId}>{t('catalog__search')}</h2>
                    </motion.div>
                    <motion.div
                        transition={{delay: 0.4}}
                        variants={searchBoxVariables}
                        className={style.SearchBox}>
                        <SearchBox bordered={true} placeholder={t('search')} onPressEnter={handleCatalogSearch}/>
                    </motion.div>
                </div>
                <Image
                    priority={true}
                    alt={'Catalog search background'}
                    src={'/images/search-catalog.webp'}
                    fill={true}
                />
            </motion.div>
            <motion.div
                animate={searchOpen ? 'open' : 'closed'}
                variants={searchCatalogVariables}
                initial={'closed'}
                exit={{x: '-200%', transition: {ease: 'linear', delay: 0}}}
                transition={{ease: "linear", duration: 0.4}}
                aria-labelledby={websiteHeadingId}
                className={style.WebsiteSearch}>
                <div className={style.Wrapper}>
                    <motion.div
                        transition={{delay: 0.5}}
                        variants={searchBoxVariables}
                        className={style.TitleBox}>
                        <h2 id={websiteHeadingId}>{t('website__search')}</h2>
                    </motion.div>
                    <motion.div
                        transition={{delay: 0.6}}
                        variants={searchBoxVariables}
                        className={style.SearchBox}>
                        <SearchBox bordered={true} placeholder={t('search')} onPressEnter={handleWebsiteSearch} />
                    </motion.div>
                </div>
                <motion.div
                    transition={{delay: 0.7}}
                    variants={searchBoxVariables}
                    className={style.CloseButton}>
                    <Button type={'secondary'} color={'neutral'} size={'medium'} onClick={onClose} ariaLabel={t('close__button')}>
                        <IconGeneralClose/>
                    </Button>
                </motion.div>
                <Image
                    className={style.WebsiteSearchBackground}
                    priority={true}
                    alt={'Search background'}
                    src={'/images/search.webp'}
                    fill={true}
                />
            </motion.div>
        </motion.div>
    )
}

export default SearchPage;
