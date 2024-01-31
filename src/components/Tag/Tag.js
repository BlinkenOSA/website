import style from "./Tag.module.scss";

const Tag = ({text, icon}) => {
    return (
        <span className={style.Tag}>
            <span className={style.Icon}>{icon}</span>
            <span className={'tag'}>{text}</span>
        </span>
    )
}

export default Tag;