import style from "./Tag.module.scss";

const Tag = ({text}) => {
    return (
        <span className={style.Tag}>
            <span className={'tag'}>{text}</span>
        </span>
    )
}

export default Tag;