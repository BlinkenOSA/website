import style from "./NewsCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";

const NewsCard = ({title, image, date, description, icon}) => {
    return (
      <div className={style.Wrapper}>
          <div className={style.Header}>
              <div className={style.Icon}>{icon}</div>
              <div className={style.Date}>{date}</div>
          </div>
          <div className={style.Image}>
              <MaskedImage src={image} type={'landscape'} />
          </div>
          <h3 className={style.Title}>{title}</h3>
          <div className={style.Description}>
              {description}
          </div>
      </div>
    )
}

export default NewsCard