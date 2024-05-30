import style from "./MaskedImage.module.scss";
import Image from 'next/image';

/**
 *
 * @param type One of 'landscape', 'portrait', 'hero'
 */
const MaskedImage = ({src, aspectRatio, type='landscape', alt="Image", mask=true}) => {
    const getStyle = () => {
        if (aspectRatio) {
            return style.MaskedImageBase
        }

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
        <div className={mask ? getStyle() : `${getStyle()} ${style.NoMask}`}
             style={{aspectRatio: aspectRatio ? aspectRatio : undefined}}
        >
            {
                src ?
                <Image
                    alt={alt}
                    src={src}
                    fill={true}
                /> : <div className={style.Placeholder} />
            }
        </div>
    )
}

export default MaskedImage;