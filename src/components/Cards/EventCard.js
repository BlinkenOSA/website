import style from "./EventCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Tag from "@/components/Tag/Tag";

const EventCard = ({title, image, date, description, icon}) => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Image}>
                <MaskedImage src={image} type={'landscape'} />
                <div className={style.Tag}>
                    <Tag text={date} icon={icon}/>
                </div>
            </div>
            <h3 className={`${style.Title} subtitle-large`}>{title}</h3>
            <div className={style.Description}>
                {description}
            </div>
        </div>
    )
}

export default EventCard