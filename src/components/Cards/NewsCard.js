import style from "./NewsCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getDateString from "@/utils/getDateString";
import getImageUrl from "@/utils/getImageUrl";
import getIconByEventType from "@/utils/getIconByType";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";

const NewsCard = ({ data }) => {
    // Populate fields
    const date = getDateString(data['createdAt'], 'YYYY-MM-DDTHH:mm:ss', 'news')
    const title = data['Title']
    const description = data['CardText']
    const image = getImageUrl(data['Image'])
    const icon = getIconByEventType(data['EventType'], 'small')
    const eventType = data['EventType']

    return (
      <div className={style.Wrapper}>
          <div className={style.Image}>
              <MaskedImage src={image} type={'landscape'} />
          </div>
          <div className={style.Header}>
              <div className={`${style.EventType} subtitle-small`}>{eventType}</div>
              <div className={style.Date}>{date}</div>
          </div>
          <h3 className={`${style.Title} subtitle-large`}>{title}</h3>
          <div className={style.Description}>
              {truncateWithEllipses(description, 50)}
          </div>
      </div>
    )
}

export default NewsCard