import style from "./CollectionCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import {IconAudio, IconDocument, IconFilm, IconPhoto} from "@/components/Icon/Icon";
import getImageUrl from "@/utils/content/getImageUrl";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";

const CollectionCard = ({data}) => {
    const title = data['Title']
    const image = getImageUrl(data['Image'])
    const size = data['Size']
    const description = data['CardText']
    const types = data['MaterialTypes']
    const contentTypes = data['ContentTypes'].join(', ')

    const chooseIcon = (type) => {
      switch(type) {
        case 'Audio':
          return <IconAudio size={'small'} color={'orange'} />
        case 'Moving Image':
          return <IconFilm size={'small'} color={'orange'} />
        case 'Textual':
          return <IconDocument size={'small'} color={'orange'} />
        case 'Still Image':
          return <IconPhoto size={'small'} color={'orange'} />
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
                <div className={style.ItemNumber}>{size} {size > 1 ? 'items' : 'item'}</div>
                <div className={style.Icons}>{getIcons()}</div>
            </div>
            <div className={style.Image}>
                <MaskedImage src={image} type={'landscape'} />
            </div>
            <h3 className={style.Title}>{truncateWithEllipses(title, 50)}</h3>
            <div className={style.Description}>
                {truncateWithEllipses(description, 200)}
            </div>
            <div className={style.CollectionType}>
                {contentTypes}
            </div>
        </div>
    )
}

export default CollectionCard