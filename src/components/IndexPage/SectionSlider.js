import style from "./SectionSlider.module.scss";
import Button from "@/components/Button/Button";
import {IconGeneralLeft, IconGeneralRight} from "@/components/Icon/GeneralIcon";
import {Media} from "@/utils/media";

const SectionSlider = ({link, onPreviousClick, onNextClick}) => {
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
                    isIcon={false}>View All</Button>
            }
            <Button
                type={'primary'}
                size={'medium'}
                color={'neutral'}
                onClick={onPreviousClick}
                isIcon={true}><IconGeneralLeft/></Button>
            <Button
                type={'primary'}
                size={'medium'}
                color={'neutral'}
                onClick={onNextClick}
                isIcon={true}><IconGeneralRight/></Button>
        </div>
    )
}

export default SectionSlider;