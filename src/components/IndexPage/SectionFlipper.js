import style from "./SectionDivider.module.scss";
import Button from "@/components/Button/Button";
import {IconGeneralLeft, IconGeneralRight} from "@/components/Icon/Icon";

const SectionFlipper = ({title}) => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Header}>
                <h1>{title}</h1>
                <div className={style.Controls}>
                    <Button
                        type={'primary'}
                        size={'medium'}
                        color={'neutral'}
                        isIcon={true}><IconGeneralLeft/></Button>
                    <Button
                        type={'primary'}
                        size={'medium'}
                        color={'neutral'}
                        isIcon={true}><IconGeneralRight/></Button>
                </div>
            </div>
        </div>
    )
}

export default SectionFlipper;