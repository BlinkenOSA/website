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
            <button
                type="button"
                className={lang === 'en' ? style.Selected : undefined}
                onClick={() => handleClick('en')}
                aria-pressed={lang === 'en'}>
                EN
            </button>
            <button
                type="button"
                className={lang === 'hu' ? style.Selected : undefined}
                onClick={() => handleClick('hu')}
                aria-pressed={lang === 'hu'}>
                HU
            </button>
        </div>
    )
}

export default LanguageSelector;
