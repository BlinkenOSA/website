import style from "./Selectors.module.scss";
import setLanguage from 'next-translate/setLanguage'
import useTranslation from "next-translate/useTranslation";

const LanguageSelector = ({onClick}) => {
    const {lang} = useTranslation()

    const handleClick = async (language) => {
        onClick && onClick(language)
        await setLanguage(language)
    }

    return (
        <div className={`${style.LanguageSelector} suisseIntlMedium`}>
            <span className={lang === 'en' ? style.Selected : undefined} onClick={() => handleClick('en')}>EN</span>
            <span className={lang === 'hu' ? style.Selected : undefined} onClick={() => handleClick('hu')}>HU</span>
        </div>
    )
}

export default LanguageSelector;