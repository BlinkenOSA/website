import style from "./NewsCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getDateString from "@/utils/getDateString";
import getImageUrl from "@/utils/getImageUrl";

const NewsCard = ({ data }) => {
    // Populate fields
    const date = getDateString(data['createdAt'], 'YYYY-MM-DDTHH:mm:ss', 'news')
    const title = data['Title']
    const description = data['CardText']
    const image = getImageUrl(data['Image'])

    return (
      <div className={style.Wrapper}>
          <div className={style.Image}>
              <MaskedImage src={image} type={'landscape'} />
          </div>
          <div className={style.Header}>
              <div className={style.Icon}>{}</div>
              <div className={style.Date}>{date}</div>
          </div>
          <h3 className={`${style.Title} subtitle-large`}>{title}</h3>
          <div className={style.Description}>
              {description}
          </div>
      </div>
    )
}

export default NewsCard