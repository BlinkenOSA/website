import style from "./StaffCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageData from "@/utils/content/getImageData";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";

const StaffCard = ({id, data}) => {
    const { lang } = useTranslation('cards')

    // Populate fields
    const firstName = data['FirstName']
    const lastName = data['LastName']
    const imageData = getImageData(data['Image'], 'small')
    const position = getLocData(data, 'Position', lang)
    const slug = data['Slug']
    const OSAUnit = getLocData(data, 'Unit', lang)

    return (
        <div className={style.Wrapper}>
            <Link href={`/about-us/staff/${slug}`}>
                <div className={style.Image}>
                    <MaskedImage src={imageData['url']} type={'portrait'} alt={`Photo of ${lang === 'en' ? `${firstName} ${lastName}` : `${lastName} ${firstName}`}`} />
                </div>
                <div className={`${style.Name} subtitle-large`}>
                    {lang === 'en' ? `${firstName} ${lastName}` : `${lastName} ${firstName}`}
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