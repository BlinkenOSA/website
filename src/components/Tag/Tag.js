import style from "./Tag.module.scss";

const Tag = ({text, icon, color='neutral'}) => {
    return (
        <span className={`${style.Tag} ${style[color]}`}>
            <span className={style.Icon}>{icon}</span>
            <span className={'tag'}>{text}</span>
        </span>
    )
}

export default Tag;