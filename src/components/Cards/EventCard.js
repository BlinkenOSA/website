import style from "./EventCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Tag from "@/components/Tag/Tag";
import getDateString from "@/utils/content/getDateString";
import getColor from "@/utils/content/getColor";
import getIconByType from "@/utils/content/getIconByType";
import truncateWithEllipsis from "@/utils/truncateWithEllipsis";
import getImageData from "@/utils/content/getImageData";

const EventCard = ({id, data}) => {
    // Populate fields
    const date = getDateString(data['StartDate'], undefined)
    const title = data['Title']
    const description = data['CardText']
    const imageData = getImageData(data['Image'], 'medium')
    const icon = getIconByType(data['EventType'], 'small')
    const color= getColor(data['Profile'])

    return (
        <div className={style.Wrapper}>
            <a href={`/events/${id}`}>
                <div className={style.Image}>
                    <MaskedImage src={imageData['url']} type={'landscape'} />
                    <div className={style.Tag}>
                        <Tag text={date} icon={icon} color={color}/>
                    </div>
                </div>
            </a>
            <a href={`/events/${id}`}>
                <h3 className={`${style.Title} subtitle-large`}>{title}</h3>
            </a>
            <div className={style.Description}>
                {truncateWithEllipsis(description, 180)}
            </div>
        </div>
    )
}

export default EventCard