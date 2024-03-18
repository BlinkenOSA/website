import style from "./Selectors.module.scss";
import {useState} from "react";
import setLanguage from 'next-translate/setLanguage'

const LanguageSelector = ({onClick}) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en')

    const handleClick = async (language) => {
        setSelectedLanguage(language)
        onClick && onClick(language)
        await setLanguage(language)
    }

    return (
        <div className={`${style.LanguageSelector} suisseIntlMedium`}>
            <span className={selectedLanguage === 'en' ? style.Selected : undefined} onClick={() => handleClick('en')}>EN</span>
            <span className={selectedLanguage === 'hu' ? style.Selected : undefined} onClick={() => handleClick('hu')}>HU</span>
        </div>
    )
}

export default LanguageSelector;