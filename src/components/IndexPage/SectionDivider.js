import style from "./SectionDivider.module.scss";
import Button from "@/components/Button/Button";

const SectionDivider = ({title, buttonText, subTitle}) => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Header}>
                <h1>{title}</h1>
                <Button type={'primary'} size={'large'} color={'neutral'}>{buttonText}</Button>
            </div>
            {
                subTitle &&
                <div className={style.SubText}>
                    <span>{subTitle}</span>
                </div>
            }
        </div>
    )
}

export default SectionDivider;