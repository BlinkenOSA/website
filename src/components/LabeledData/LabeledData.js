import style from "./LabeledData.module.scss";

const LabeledData = ({label, data}) => {
    return (
        data !== null &&
        <div className={style.LabeledData}>
            <span className={'subtitle-small'}>{label}: </span>
            <span>{data}</span>
        </div>
    )
}

export default LabeledData;