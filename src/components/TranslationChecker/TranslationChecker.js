import style from './TranslationChecker.module.scss';
import Spacer from "@/components/Spacer/Spacer";
import useTranslation from "next-translate/useTranslation";

const TranslationChecker = ({data}) => {
    const { t, lang } = useTranslation('page')
    let translationExists = false

    // Check if there are localization data
    if ('localizations' in data) {
        if (data['localizations']['data'].length > 0) {
            translationExists = true
        }
    }

    if (!translationExists && lang !== 'en') {
        return (
            <>
                <div className={style.TranslationCheckerBox}>
                    <div className={'subtitle-large'}>{t('page__not_yet_translated__text')}</div>
                </div>
                <Spacer size={'medium'} />
            </>
        )
    } else {
        return ''
    }

}

export default TranslationChecker;