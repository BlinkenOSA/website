import {useState} from "react";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageType from "@/utils/content/getImageType";
import style from "./ImageWithCaption.module.scss";
import getImageData from "@/utils/content/getImageData";
import LightBox from "@/components/Content/elements/LightBox";

const ImageWithCaption = ({imageContent, size}) => {
    const imageData = getImageData(imageContent['Image'], size)
    const caption = imageContent['Caption']
    const [index, setIndex] = useState(-1)
    const hasImage = Boolean(imageData['url'])

    const image = (
        <MaskedImage
            src={imageData['url']}
            aspectRatio={imageData['width'] / imageData['height']}
            type={getImageType(imageContent['Image'])}
            alt={caption || "Image"}
        />
    )

    return (
        <div className={style.ImageWithCaption}>
            {
                hasImage ? (
                    <button
                        type={'button'}
                        className={style.ImageButton}
                        onClick={() => setIndex(0)}
                        aria-label={caption ? `Open image: ${caption}` : 'Open image'}
                    >
                        {image}
                    </button>
                ) : image
            }
            {
                (caption && caption !== '') && <div className={style.Caption}>{caption}</div>
            }
            <LightBox
                index={index}
                imageData={[imageContent]}
                onClose={() => setIndex(-1)}
                showNavigation={false}
                useResponsiveSources={false}
            />
        </div>
    )
}

export default ImageWithCaption;
