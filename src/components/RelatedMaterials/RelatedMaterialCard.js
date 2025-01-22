import style from "./RelatedMaterialCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import getColor from "@/utils/content/getColor";

import {motion} from 'framer-motion';
import Link from "next/link";
import getIconByType from "@/utils/content/getIconByType";

const RelatedMaterialCard = ({ id, data}) => {
    // Populate fields
    const title = data['Title']
    const description = data['CardText'] ? data['CardText'] : ''
    const imageData = data['Image']
    const icon = getIconByType(data['IconDefine'], 'normal')
    const slug = data['Slug']

    const imageAnim = {
        hover: { scale: 0.85 }
    }

    const detectColorSelector = () => {
      if (data.hasOwnProperty('ColorDefine')) {
        return getColor(data['ColorDefine'])
      } else {
        return 'mustard'
      }
    }

    const getType = () => {
      switch (data['Type']) {
        case 'collection':
          return 'Collection'
        case 'entry':
          return 'Blog / Video / Podcast'
        case 'event':
          return 'Program'
        case 'news':
          return 'News'
        case 'page':
          return 'Page'
        case 'project':
          return 'Project'
      }
    }

    const color= detectColorSelector()

    return (
      <motion.div whileHover={"hover"} className={style.Wrapper}>
          <Link href={data['URL']}>
              <div className={style.Image} >
                  <motion.div variants={imageAnim} style={{position: 'relative', zIndex: 2}} >
                    <MaskedImage src={imageData} type={'landscape'} />
                  </motion.div>
                  <div className={`${style.Icon} ${style[color]}`}>
                      {icon}
                  </div>
                  <div className={`${style.UnderLayer} ${style[color]}`} />
              </div>
          </Link>
          <div className={style.Header}>
              <div className={`${style.EventType} subtitle-small`}>{getType()}</div>
          </div>
          <Link href={data['URL']}>
            <h3 className={`${style.Title} subtitle-large`}>{truncateWithEllipses(title, 60)}</h3>
          </Link>
          <div className={style.Description}>
              {truncateWithEllipses(description, title.length > 60 ? 100 : 150)}
          </div>
      </motion.div>
    )
}

export default RelatedMaterialCard;