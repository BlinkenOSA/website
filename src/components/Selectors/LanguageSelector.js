import style from "./Selectors.module.scss";
import {useState} from "react";

const LanguageSelector = ({onClick}) => {
    const [selectedLanguage, setSelectedLanguage] = useState('EN')

    const handleClick = (language) => {
        setSelectedLanguage(language)
        onClick && onClick(language)
    }

    return (
        <div className={`${style.LanguageSelector} suisseIntlMedium`}>
            <span className={selectedLanguage === 'EN' ? style.Selected : undefined} onClick={() => handleClick('EN')}>EN</span>
            <span className={selectedLanguage === 'HU' ? style.Selected : undefined} onClick={() => handleClick('HU')}>HU</span>
        </div>
    )
}

export default LanguageSelector;