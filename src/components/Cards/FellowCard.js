import style from "./FellowCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageUrl from "@/utils/content/getImageUrl";

const StaffCard = ({id, data}) => {
    // Populate fields
    const name = data['Name']
    const researchTopic = data['ResearchTopic']
    const affiliation = data['Affiliation']
    const slug = data['Slug']
    const image = getImageUrl(data['Image'])

    return (
        <div className={style.Wrapper}>
            <a href={`/academics/fellows/${slug}`}>
                <div className={style.Image}>
                    <MaskedImage src={image} type={'portrait'} />
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
            </a>
        </div>
    )
}

export default StaffCard;