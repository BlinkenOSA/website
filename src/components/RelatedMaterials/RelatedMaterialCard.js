import style from "./RelatedMaterialCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import getColor from "@/utils/content/getColor";

import {motion} from 'framer-motion';
import Link from "next/link";
import getIconByType from "@/utils/content/getIconByType";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";

const RelatedMaterialCard = ({ data }) => {
    const { t, lang } = useTranslation('cards')

    // Populate fields
    const title = getLocData(data, 'Title', lang)
    const description = data['CardText'] ? getLocData(data, 'CardText', lang) : ''
    const imageData = data['Image']
    const icon = getIconByType(data['IconDefine'], 'normal')

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

    const color= detectColorSelector()

    return (
      <motion.div whileHover={"hover"} className={style.Wrapper}>
          <Link href={data['URL']}>
            <div className={style.Image} >
                <motion.div variants={imageAnim} style={{position: 'relative', zIndex: 2}} >
                  <MaskedImage
                    src={imageData}
                    type={'landscape'}
                    alt={`${t('alt_text__entry_card_image')}: ${title}`}
                  />
                </motion.div>
                <div className={`${style.Icon} ${style[color]}`}>
                    {icon}
                </div>
                <div className={`${style.UnderLayer} ${style[color]}`} />
            </div>
            <div className={style.Header}>
              <div className={`${style.EventType} subtitle-small`}>{t(`related_content__${data['Type']}`)}</div>
            </div>
            <h2 className={`${style.Title} subtitle-large`}>{truncateWithEllipses(title, 60)}</h2>
            <div className={style.Description}>
                {truncateWithEllipses(description, title.length > 60 ? 100 : 150)}
            </div>
          </Link>
      </motion.div>
    )
}

export default RelatedMaterialCard;