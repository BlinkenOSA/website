import style from "./CollectionCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import {IconAudio, IconDocument, IconFilm, IconMovingImage, IconPhoto} from "@/components/Icon/Icon";
import getImageUrl from "@/utils/content/getImageUrl";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";

const CollectionCard = ({data}) => {
    const title = data['Title']
    const image = getImageUrl(data['Image'])
    const size = data['Size']
    const description = data['CardText']
    const types = data['MaterialTypes']
    const contentTypes = data['ContentTypes'].join(', ')

    const chooseIcon = (type, key) => {
      switch(type) {
        case 'Audio':
          return <IconAudio key={key} size={'small'} color={'orange'} />
        case 'Moving Image':
          return <IconMovingImage key={key} size={'small'} color={'orange'} />
        case 'Textual':
          return <IconDocument key={key} size={'small'} color={'orange'} />
        case 'Still Image':
          return <IconPhoto key={key} size={'small'} color={'orange'} />
      }
    }

    const getIcons = () => {
      return types.map((t, idx) => {
        return (
            chooseIcon(t, `${data['Title']}_icon_${idx}`))
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
                {truncateWithEllipses(description, 190)}
            </div>
            <div className={style.CollectionType}>
                {contentTypes}
            </div>
        </div>
    )
}

export default CollectionCard