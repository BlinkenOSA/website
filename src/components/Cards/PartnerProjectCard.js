import style from "./PartnerProjectCard.module.scss";
import getImageUrl from "@/utils/content/getImageUrl";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Button from "@/components/Button/Button";

const PartnerProjectCard = ({id, data}) => {
    // Populate fields
    const title = data['Title']
    const description = data['CardText']
    const image = getImageUrl(data['Image'])
    const link= data['Link']

    return (
        <div className={style.Wrapper}>
            <div className={style.Image}>
                <MaskedImage src={image} type={'hdtv'} />
            </div>
            <div className={`${style.Title} subtitle-large`}>{title}</div>
            <div className={style.Description}>
                {description}
            </div>
            <div className={style.Footer}>
                <Button type={'primary'} size={'large'} color={'mustard'} link={link}>Visit Project</Button>
                <Button type={'secondary'} size={'large'} color={'mustard'} link={link}>Learn More</Button>
            </div>
        </div>
    )
}

export default PartnerProjectCard;