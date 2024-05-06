import style from "./EventCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Tag from "@/components/Tag/Tag";
import getDateString from "@/utils/content/getDateString";
import getColor from "@/utils/content/getColor";
import getIconByType from "@/utils/content/getIconByType";
import truncateWithEllipsis from "@/utils/truncateWithEllipsis";
import getImageData from "@/utils/content/getImageData";
import Link from "next/link";
import {motion} from "framer-motion";

const EventCard = ({id, data}) => {
    // Populate fields
    const date = getDateString(data['StartDate'], undefined)
    const title = data['Title']
    const description = data['CardText']
    const imageData = getImageData(data['Image'], 'medium')
    const icon = getIconByType(data['EventType'], 'small')
    const color= getColor(data['Profile'])

    const imageAnim = {
        hover: { scale: 0.85 }
    }

    return (
        <motion.div whileHover={"hover"} className={style.Wrapper}>
            <Link href={`/events/${id}`}>
                <div className={style.Image}>
                    <motion.div variants={imageAnim} style={{position: 'relative', zIndex: 2}} >
                        <MaskedImage src={imageData['url']} type={'landscape'} />
                    </motion.div>
                    <div className={style.Tag}>
                        <Tag text={date} icon={icon} color={color}/>
                    </div>
                    <div className={`${style.UnderLayer} ${style[color]}`} />
                </div>
            </Link>
            <Link href={`/events/${id}`}>
                <h3 className={`${style.Title} subtitle-large`}>{truncateWithEllipsis(title, 70)}</h3>
            </Link>
            <div className={style.Description}>
                {truncateWithEllipsis(description, 180)}
            </div>
        </motion.div>
    )
}

export default EventCard