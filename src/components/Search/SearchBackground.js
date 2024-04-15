import style from './SearchBackground.module.scss';
import {
    IconAudio,
    IconCuratedCollections,
    IconDigitalRepository,
    IconDocument,
    IconMovingImage,
    IconPhoto
} from "@/components/Icon/Icon";

const ICONS = [
    <IconMovingImage />,
    <IconAudio />,
    <IconDocument />,
    <IconPhoto />,
    <IconCuratedCollections />,
    <IconDigitalRepository />
]

const getRandomInt = (num) => {
    return Math.floor(Math.random() * num);
}

const SearchBackground = ({max=100}) => {
    return (
        <div className={style.SearchBackgroundWrapper}>
            {
                Array.from(Array(max).keys()).map((m, idx) => {
                    return ICONS[getRandomInt(ICONS.length)]
                })
            }
        </div>
    )
}

export default SearchBackground;