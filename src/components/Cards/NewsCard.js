import style from "./NewsCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getIconByType from "@/utils/content/getIconByType";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import getColor from "@/utils/content/getColor";
import getCreationDate from "@/utils/content/getCreationDate";
import getImageData from "@/utils/content/getImageData";

import {motion} from 'framer-motion';
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";

const NewsCard = ({ id, data}) => {
    const {lang} = useTranslation('cards')

    // Populate fields
    const originalDate = data['OriginalCreationDate']
    const date = data['createdAt']
    const title = getLocData(data, 'Title', lang)
    const description = getLocData(data, 'CardText', lang)
    const imageData = getImageData(data['Image'], 'medium')
    const icon = getIconByType(data['ActivityType'], 'normal')
    const color= getColor(data['Profile'])
    const slug = data['Slug']

    const imageAnim = {
        hover: { scale: 0.85 }
    }

    return (
      <motion.div whileHover={"hover"} className={style.Wrapper}>
          <Link href={`/news/${slug ? slug : id}`}>
              <div
                  className={style.Image}
              >
                  <motion.div variants={imageAnim} style={{position: 'relative', zIndex: 2}} >
                    <MaskedImage src={imageData['url']} type={'landscape'} />
                  </motion.div>
                  <div className={`${style.Icon} ${style[color]}`}>
                      {icon}
                  </div>
                  <div className={`${style.UnderLayer} ${style[color]}`} />
              </div>
          </Link>
          <div className={style.Header}>
              <div className={`${style.EventType} subtitle-small`}>{data['ActivityType']}</div>
              <div className={style.Date}>{getCreationDate(originalDate, date)}</div>
          </div>
          <Link href={`/news/${slug ? slug : id}`}>
            <h3 className={`${style.Title} subtitle-large`}>{truncateWithEllipses(title, 60)}</h3>
          </Link>
          <div className={style.Description}>
              {truncateWithEllipses(description, title.length > 60 ? 100 : 150)}
          </div>
      </motion.div>
    )
}

export default NewsCard;