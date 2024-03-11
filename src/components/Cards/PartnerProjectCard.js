import style from "./PartnerProjectCard.module.scss";
import getDateString from "@/utils/content/getDateString";
import getImageUrl from "@/utils/content/getImageUrl";
import getIconByEventType from "@/utils/content/getIconByType";
import getColor from "@/utils/content/getColor";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Button from "@/components/Button/Button";

const PartnerProjectCard = ({id, data}) => {
    // Populate fields
    const title = data['Title']
    const description = data['CardText']
    const startDate = getDateString(data['StartDate'], 'YYYY-MM-DDTHH:mm:ss', 'date_only')
    const endDate = getDateString(data['EndDate'], 'YYYY-MM-DDTHH:mm:ss', 'date_only')
    const image = getImageUrl(data['Image'])
    const link= data['Link']

    return (
        <div className={style.Wrapper}>
            <div className={style.Image}>
                <MaskedImage src={image} type={'hdtv'} />
            </div>
            <div className={`${style.Title} subtitle-large`}>
                {title} {startDate ? startDate : undefined} {endDate ? `- ${endDate}` : undefined}
            </div>
            <div className={style.Description}>
                {description}
            </div>
            <div className={style.Footer}>
                <Button type={'primary'} size={'large'} color={'mustard'} link={link}>Visit Website</Button>
                <div className={style.Warning}>
                    Please be aware that by clicking this button, you are about to leave The Archivum’s website.
                    Thank you for visiting.
                </div>
            </div>
        </div>
    )
}

export default PartnerProjectCard;