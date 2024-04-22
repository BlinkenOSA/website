import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageType from "@/utils/content/getImageType";
import style from "./ImageWithCaption.module.scss";
import getImageData from "@/utils/content/getImageData";

const ImageWithCaption = ({imageContent, size}) => {
    const imageData = getImageData(imageContent['Image'], size)

    const caption = imageContent['Caption']

    return (
        <div>
            <MaskedImage
                src={imageData['url']}
                aspectRatio={imageData['width'] / imageData['height']}
                type={getImageType(imageContent['Image'])}
            />
            {
                (caption && caption !== '') && <div className={style.Caption}>{caption}</div>
            }
        </div>
    )
}

export default ImageWithCaption;