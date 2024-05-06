import style from "./StaffCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageData from "@/utils/content/getImageData";
import Link from "next/link";

const StaffCard = ({id, data}) => {
    // Populate fields
    const firstName = data['FirstName']
    const lastName = data['LastName']
    const imageData = getImageData(data['Image'], 'medium')
    const position = data['Position']
    const slug = data['Slug']
    const OSAUnit = data['Unit']

    return (
        <div className={style.Wrapper}>
            <Link href={`/about-us/staff/${slug}`}>
                <div className={style.Image}>
                    <MaskedImage src={imageData['url']} type={'portrait'} />
                </div>
                <div className={`${style.Name} subtitle-large`}>
                    {firstName} {lastName}
                </div>
                <div className={`${style.Position} subtitle-small`}>
                    {position}
                </div>
                <div className={style.Unit}>
                    {OSAUnit}
                </div>
            </Link>
        </div>
    )
}

export default StaffCard;