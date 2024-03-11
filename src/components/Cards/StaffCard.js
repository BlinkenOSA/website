import style from "./StaffCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageUrl from "@/utils/content/getImageUrl";

const StaffCard = ({id, data}) => {
    // Populate fields
    const name = data['Name']
    const image = getImageUrl(data['Image'])
    const position = data['Position']
    const OSAUnit = data['Unit']

    return (
        <div className={style.Wrapper}>
            <div className={style.Image}>
                <MaskedImage src={image} type={'portrait'} />
            </div>
            <div className={`${style.Name} subtitle-large`}>
                {name}
            </div>
            <div className={`${style.Position} subtitle-small`}>
                {position}
            </div>
            <div className={style.Unit}>
                {OSAUnit}
            </div>
        </div>
    )
}

export default StaffCard;