import style from "./FellowCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageData from "@/utils/content/getImageData";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";

const StaffCard = ({data}) => {
    const { t, lang } = useTranslation('cards')

    // Populate fields
    const name = data['Name']
    const researchTopic = getLocData(data, 'ResearchTopic', lang)
    const affiliation = getLocData(data, 'Affiliation', lang)
    const slug = data['Slug']
    const imageData = getImageData(data['Image'], 'small')

    return (
        <div className={style.Wrapper}>
            <Link href={`/academics/fellows/${slug}`}>
                <div className={style.Image}>
                    <MaskedImage src={imageData['url']} type={'portrait'}  alt={`${t('alt_text__photo_of')} ${name}`}/>
                </div>
                <div className={`${style.Name} subtitle-large`}>
                    {name}
                </div>
                <div className={`${style.Position} subtitle-small`}>
                    {affiliation}
                </div>
                <div className={style.Unit}>
                    {researchTopic}
                </div>
            </Link>
        </div>
    )
}

export default StaffCard;