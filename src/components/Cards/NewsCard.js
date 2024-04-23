import style from "./EntryCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getIconByType from "@/utils/content/getIconByType";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import getColor from "@/utils/content/getColor";
import getCreationDate from "@/utils/content/getCreationDate";
import getImageData from "@/utils/content/getImageData";

const NewsCard = ({ id, data}) => {
    // Populate fields
    const originalDate = data['OriginalCreationDate']
    const date = data['createdAt']
    const title = data['Title']
    const description = data['CardText']
    const imageData = getImageData(data['Image'], 'medium')
    const icon = getIconByType(data['ActivityType'], 'normal')
    const color= getColor(data['Profile'])

    return (
      <div className={style.Wrapper}>
          <a href={`/news/${id}`}>
              <div className={style.Image}>
                  {imageData && <MaskedImage src={imageData['url']} type={'landscape'} />}
                  <div className={`${style.Icon} ${style[color]}`}>
                      {icon}
                  </div>
              </div>
          </a>
          <div className={style.Header}>
              <div className={`${style.EventType} subtitle-small`}>{data['ActivityType']}</div>
              <div className={style.Date}>{getCreationDate(originalDate, date)}</div>
          </div>
          <a href={`/news/${id}`}>
            <h3 className={`${style.Title} subtitle-large`}>{truncateWithEllipses(title, 60)}</h3>
          </a>
          <div className={style.Description}>
              {truncateWithEllipses(description, title.length > 60 ? 100 : 150)}
          </div>
      </div>
    )
}

export default NewsCard;