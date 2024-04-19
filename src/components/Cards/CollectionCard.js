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
    const slug = data['Slug']

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

    const getSize = () => {
        if (size > 0) {
            return `${size} ${size > 1 ? 'items' : 'item'}`
        }
    }

    return (
        <div className={style.Wrapper}>
            <div className={style.Header}>
                <div className={style.ItemNumber}>{getSize()}</div>
                <div className={style.Icons}>{getIcons()}</div>
            </div>
            <div className={style.Image}>
                <a href={`/collections/collection-highlights/${slug}`}>
                    <MaskedImage src={image} type={'landscape'} />
                </a>
            </div>
            <h3 className={style.Title}>
                <a href={`/collections/collection-highlights/${slug}`}>
                    {truncateWithEllipses(title, 50)}
                </a>
            </h3>
            <div className={style.Description}>
                <a href={`/collections/collection-highlights/${slug}`}>
                    {truncateWithEllipses(description, 190)}
                </a>
            </div>
            <div className={style.CollectionType}>
                {contentTypes}
            </div>
        </div>
    )
}

export default CollectionCard