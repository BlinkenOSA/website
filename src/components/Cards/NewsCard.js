import style from "./NewsCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getDateString from "@/utils/getDateString";
import getImageUrl from "@/utils/getImageUrl";
import getIconByEventType from "@/utils/getIconByType";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import Tag from "@/components/Tag/Tag";
import getColor from "@/utils/getColor";

const NewsCard = ({ data }) => {
    // Populate fields
    const date = getDateString(data['createdAt'], 'YYYY-MM-DDTHH:mm:ss', 'news')
    const title = data['Title']
    const description = data['CardText']
    const image = getImageUrl(data['Image'])
    const icon = getIconByEventType(data['EventType'], 'normal')
    const eventType = data['EventType']
    const color= getColor(data['Profile'])

    return (
      <div className={style.Wrapper}>
          <div className={style.Image}>
              <MaskedImage src={image} type={'landscape'} />
              <div className={`${style.Icon} ${style[color]}`}>
                  {icon}
              </div>
          </div>
          <div className={style.Header}>
              <div className={`${style.EventType} subtitle-small`}>{eventType}</div>
              <div className={style.Date}>{date}</div>
          </div>
          <h3 className={`${style.Title} subtitle-large`}>{truncateWithEllipses(description, 60)}</h3>
          <div className={style.Description}>
              {truncateWithEllipses(description, 60)}
          </div>
      </div>
    )
}

export default NewsCard