import getImageUrl from "@/utils/content/getImageUrl";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageType from "@/utils/content/getImageType";
import style from "./ImageWithCaption.module.scss";

const ImageWithCaption = ({imageContent}) => {
    const source = getImageUrl(imageContent['Image'])
    const caption = imageContent['Caption']

    return (
        <div>
            <MaskedImage src={source} type={getImageType(imageContent['Image'])} />
            {
                (caption && caption !== '') && <div className={style.Caption}>{caption}</div>
            }
        </div>
    )
}

export default ImageWithCaption;