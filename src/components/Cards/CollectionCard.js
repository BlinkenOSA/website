import style from "./CollectionCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import {IconAudio, IconDocument, IconFilm, IconPhoto} from "@/components/Icon/Icon";
import getImageUrl from "@/utils/getImageUrl";

const CollectionCard = ({data}) => {
    const title = data['Title']
    const image = getImageUrl(data['Image'])
    const itemNumber = 0
    const description = data['CardText']
    const types = data['MaterialTypes']

    const chooseIcon = (type) => {
      switch(type) {
        case 'Audio':
          return <IconAudio size={'small'} />
        case 'Moving Image':
          return <IconFilm size={'small'} />
        case 'Textual':
          return <IconDocument size={'small'} />
        case 'Still Image':
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