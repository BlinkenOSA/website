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
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";

const EventCard = ({id, data}) => {
    const {lang} = useTranslation('cards')

    // Populate fields
    const startDate = getDateString(data['StartDate'], undefined, data['EventType'] === 'Exhibition' ? 'exhibition' : 'event', lang)
    const endDate = getDateString(data['EndDate'], undefined, data['EventType'] === 'Exhibition' ? 'exhibition' : 'event', lang)
    const title = getLocData(data, 'Title', lang)
    const description = getLocData(data, 'CardText', lang)
    const imageData = getImageData(data['Image'], 'small')
    const icon = getIconByType(data['EventType'], 'small')
    const color= getColor(data['Profile'])
    const slug = data['Slug']

    const imageAnim = {
        hover: { scale: 0.85 }
    }

    const getDate = () => {
        if (data['EventType'] === 'Exhibition' && endDate !== '') {
           return `${startDate} - ${endDate}`
        } else {
           return startDate
        }
    }

    return (
        <motion.div whileHover={"hover"} className={style.Wrapper}>
            <Link href={`/events/${slug ? slug : id}`}>
              <div className={style.Image}>
                  <motion.div variants={imageAnim} style={{position: 'relative', zIndex: 2}} >
                      <MaskedImage src={imageData['url']} type={'landscape'} alt={`Cover image of the event: ${truncateWithEllipsis(title, 70)}`} />
                  </motion.div>
                  <div className={style.Tag}>
                      <Tag text={getDate()} icon={icon} color={color}/>
                  </div>
                  <div className={`${style.UnderLayer} ${style[color]}`} />
              </div>
              <h2 className={`${style.Title} subtitle-large`}>{truncateWithEllipsis(title, 70)}</h2>
              <div className={style.Description}>
                  {truncateWithEllipsis(description, 180)}
              </div>
            </Link>
        </motion.div>
    )
}

export default EventCard