import style from "./MaskedImage.module.scss";
import Image from 'next/image';

/**
 *
 * @param type One of 'landscape', 'portrait', 'hero'
 */
const MaskedImage = ({src, aspectRatio, priority=false, type='landscape', alt="Image",
                      mask=true, quality=75}) => {
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

    const getSizes = () => {
        switch (type) {
            case 'hero':
                return "100vw"
            default:
                return "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    priority={priority}
                    quality={quality}
                    sizes={getSizes()}
                /> : <div className={style.Placeholder} />
            }
        </div>
    )
}

export default MaskedImage;