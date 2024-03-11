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
            case 'square':
                return style.Square
            case 'hdtv':
                return style.HDTV
            case 'hero':
                return style.Hero
        }
    }

    if (type === 'hero') {
        return (
            <div className={getStyle()}>
                <Image
                    alt={alt}
                    src={src}
                    fill={true}
                />
            </div>
        )
    } else {
        return (
            <div className={getStyle()}>
                <Image
                    alt={alt}
                    src={src}
                    fill={true}
                />
            </div>
        )
    }
}

export default MaskedImage;