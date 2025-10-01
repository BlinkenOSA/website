import style from "./FellowCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageData from "@/utils/content/getImageData";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";

const InternCard = ({data}) => {
    const { t, lang } = useTranslation('cards')

    // Populate fields
    const name = data['Name']
    const project = getLocData(data, 'Project', lang)
    const slug = data['Slug']
    const imageData = getImageData(data['Image'], 'small')

    return (
        <div className={style.Wrapper}>
            <Link href={`/academics/interns/${slug}`}>
                <div className={style.Image}>
                    <MaskedImage src={imageData['url']} type={'portrait'}  alt={`${t('alt_text__photo_of')} ${name}`}/>
                </div>
                <div className={`${style.Name} subtitle-large`}>
                    {name}
                </div>
                <div className={style.Unit}>
                    {project}
                </div>
            </Link>
        </div>
    )
}

export default InternCard;