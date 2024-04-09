import style from "./FellowCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageUrl from "@/utils/content/getImageUrl";
import getDateString from "@/utils/content/getDateString";

const StaffCard = ({id, data}) => {
    // Populate fields
    const name = data['Name']
    const fellowshipProgram = data['FellowshipProgram']
    const researchTopic = data['ResearchTopic']
    const affiliation = data['Affiliation']
    const startDate = getDateString(data['StartDate'], 'YYYY-MM-DD', 'fellow')
    const endDate = getDateString(data['EndDate'], 'YYYY-MM-DD', 'fellow')
    const image = getImageUrl(data['Image'])

    return (
        <div className={style.Wrapper}>
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
        </div>
    )
}

export default StaffCard;