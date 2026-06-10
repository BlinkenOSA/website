import style from "./SectionSlider.module.scss";
import Button from "@/components/Button/Button";
import {IconGeneralLeft, IconGeneralRight} from "@/components/Icon/GeneralIcon";
import {Media} from "@/utils/media";
import useTranslation from "next-translate/useTranslation";

const SectionSlider = ({link, onPreviousClick, onNextClick}) => {
    const { t, lang } = useTranslation('index')

    return (
        <div className={style.Controls}>
            {
                link &&
                <Button
                    type={'primary'}
                    size={'medium'}
                    color={'neutral'}
                    link={link}
                    linkTarget={'_self'}
                    isIcon={false}>{t('view_all__button_text')}</Button>
            }
            <Button
                type={'primary'}
                size={'medium'}
                color={'neutral'}
                onClick={onPreviousClick}
                ariaLabel={lang === 'hu' ? 'Előző' : 'Previous'}
                isIcon={true}><IconGeneralLeft/></Button>
            <Button
                type={'primary'}
                size={'medium'}
                color={'neutral'}
                onClick={onNextClick}
                ariaLabel={lang === 'hu' ? 'Következő' : 'Next'}
                isIcon={true}><IconGeneralRight/></Button>
        </div>
    )
}

export default SectionSlider;
