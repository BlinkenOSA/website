import style from "./MaskedImage.module.scss";
import Image from 'next/image';

/**
 *
 * @param type One of 'landscape', 'portrait', 'hero'
 */
const MaskedImage = ({src, type='landscape', alt="Image"}) => {
    const getStyle = () => {
        switch (type) {
            case 'landscape':
                return style.Landscape
            case 'portrait':
                return style.Portrait
            case 'hero':
                return style.Hero
        }
    }

    return (
        <div className={getStyle()}>
            <Image
                alt={alt}
                src={src}
                layout="fill"
                objectFit="contain" // Scale your image down to fit into the container
            />
        </div>
    )
}

export default MaskedImage;