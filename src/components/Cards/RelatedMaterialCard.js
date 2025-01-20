import style from "./NewsCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import getColor from "@/utils/content/getColor";

import {motion} from 'framer-motion';
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const RelatedMaterialCard = ({ id, data}) => {
    const {t, lang} = useTranslation('cards')

    console.log(data)

    // Populate fields
    const title = data['Title']
    const description = data['CardText']
    const imageData = data['Image']
    const icon = data['Type']
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
              <div className={`${style.EventType} subtitle-small`}></div>
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

export default RelatedMaterialCard;