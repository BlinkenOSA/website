import style from "./MaskedImage.module.scss";
import Image from 'next/image';

/**
 *
 * @param type One of 'landscape', 'portrait', 'hero'
 */
const MaskedImage = ({src, type='landscape', alt="Image", mask=true}) => {
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

    return (
        <div className={mask ? getStyle() : `${getStyle()} ${style.NoMask}`}>
            <Image
                alt={alt}
                src={src}
                fill={true}
            />
        </div>
    )
}

export default MaskedImage;