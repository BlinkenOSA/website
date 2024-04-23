import style from "./StaffCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageData from "@/utils/content/getImageData";

const StaffCard = ({id, data}) => {
    // Populate fields
    const name = data['Name']
    const imageData = getImageData(data['Image'], 'medium')
    const position = data['Position']
    const slug = data['Slug']
    const OSAUnit = data['Unit']

    return (
        <div className={style.Wrapper}>
            <a href={`/about-us/staff/${slug}`}>
                <div className={style.Image}>
                    <MaskedImage src={imageData['url']} type={'portrait'} />
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
            </a>
        </div>
    )
}

export default StaffCard;