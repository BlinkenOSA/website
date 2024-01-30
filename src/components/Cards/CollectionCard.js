import style from "./CollectionCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import {IconAudio, IconDocument, IconFilm, IconPhoto} from "@/components/Icon/Icon";

const CollectionCard = ({title, image, itemNumber = 0, description, types=[], author}) => {
    const chooseIcon = (type) => {
      switch(type) {
        case 'audio':
          return <IconAudio size={'small'} />
        case 'movingImage':
          return <IconFilm size={'small'} />
        case 'textual':
          return <IconDocument size={'small'} />
        case 'stillImage':
          return <IconPhoto size={'small'} />
      }
    }

    const getIcons = () => {
      return types.map(t => {
        return (chooseIcon(t))
      })
    }

    return (
        <div className={style.Wrapper}>
            <div className={style.Header}>
                <div className={style.ItemNumber}>{itemNumber} {itemNumber > 1 ? 'items' : 'item'}</div>
                <div className={style.Icons}>{getIcons()}</div>
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

export default CollectionCard