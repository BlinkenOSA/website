import style from "./EntryCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getDateString from "@/utils/content/getDateString";
import getImageUrl from "@/utils/content/getImageUrl";
import getIconByEventType from "@/utils/content/getIconByType";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import getColor from "@/utils/content/getColor";

const EntryCard = ({ id, data}) => {
    // Populate fields
    const originalDate = getDateString(data['OriginalCreationDate'], 'YYYY-MM-DD', 'news')
    const date = getDateString(data['createdAt'], 'YYYY-MM-DDTHH:mm:ss', 'news')
    const title = data['Title']
    const description = data['CardText']
    const image = getImageUrl(data['Image'])
    const icon = getIconByEventType(data['EntryType'], 'normal')
    const color= getColor(data['Profile'])

    const url = data['EntryType'].toLowerCase();

    return (
      <div className={style.Wrapper}>
          <a href={`/entry/${url}/${id}`}>
              <div className={style.Image}>
                  <MaskedImage src={image} type={'landscape'} />
                  <div className={`${style.Icon} ${style[color]}`}>
                      {icon}
                  </div>
              </div>
          </a>
          <div className={style.Header}>
              <div className={`${style.EventType} subtitle-small`}>{data['EntryType']}</div>
              <div className={style.Date}>{originalDate !== '' ? originalDate : date}</div>
          </div>
          <a href={`/entry/${url}/${id}`}>
            <h3 className={`${style.Title} subtitle-large`}>{truncateWithEllipses(title, 60)}</h3>
          </a>
          <div className={style.Description}>
              {truncateWithEllipses(description, title.length > 60 ? 100 : 150)}
          </div>
      </div>
    )
}

export default EntryCard