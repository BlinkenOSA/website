import style from "./EventCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Tag from "@/components/Tag/Tag";
import Dotdotdot from "react-dotdotdot";
import getImageUrl from "@/utils/getImageUrl";
import getDateString from "@/utils/getDateString";
import getColor from "@/utils/getColor";
import getIconByEventType from "@/utils/getIconByType";

const EventCard = ({id, data}) => {
    // Populate fields
    const date = getDateString(data['StartDate'], 'YYYY-MM-DDTHH:MM:SS')
    const title = data['Title']
    const description = data['CardText']
    const image = getImageUrl(data['Image'])
    const icon = getIconByEventType(data['EventType'], 'small')
    const color= getColor(data['Profile'])

    return (
        <div className={style.Wrapper}>
            <a href={`/events/${id}`}>
                <div className={style.Image}>
                    <MaskedImage src={image} type={'landscape'} />
                    <div className={style.Tag}>
                        <Tag text={date} icon={icon} color={color}/>
                    </div>
                </div>
                <h3 className={`${style.Title} subtitle-large`}>{title}</h3>
                <div className={style.Description}>
                    <Dotdotdot clamp={4} >
                        {description}
                    </Dotdotdot>
                </div>
            </a>
        </div>
    )
}

export default EventCard