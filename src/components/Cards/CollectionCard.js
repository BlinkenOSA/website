import style from "./CollectionCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";

const CollectionCard = ({title, image, itemNumber = 0, description, types, author}) => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Header}>
                <div className={style.ItemNumber}>{itemNumber} {itemNumber > 1 ? 'items' : 'item'}</div>
                <div></div>
            </div>
            <h3 className={style.Title}>{title}</h3>
            <div className={style.Image}>
                <MaskedImage src={image} type={'landscape'} />
            </div>
            <div className={style.Description}>
                {description}
            </div>
            <div className={style.Author}>
                By {author}
            </div>
        </div>
    )
}

export default CollectionCard