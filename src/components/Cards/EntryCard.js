import style from "./EntryCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getDateString from "@/utils/getDateString";
import getImageUrl from "@/utils/getImageUrl";
import getIconByEventType from "@/utils/getIconByType";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import getColor from "@/utils/getColor";

const EntryCard = ({ data, type='news' }) => {
    // Populate fields
    const date = getDateString(data['createdAt'], 'YYYY-MM-DDTHH:mm:ss', 'news')
    const title = data['Title']
    const description = data['CardText']
    const image = getImageUrl(data['Image'])
    const icon = getIconByEventType(type === 'news' ? data['ActivityType'] : data['EventType'], 'normal')
    const entryType = type === 'news' ? data['ActivityType'] : data['EntryType']
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
              <div className={`${style.EventType} subtitle-small`}>{entryType}</div>
              <div className={style.Date}>{date}</div>
          </div>
          <h3 className={`${style.Title} subtitle-large`}>{truncateWithEllipses(title, 60)}</h3>
          <div className={style.Description}>
              {truncateWithEllipses(description, title.length > 60 ? 100 : 150)}
          </div>
      </div>
    )
}

export default EntryCard