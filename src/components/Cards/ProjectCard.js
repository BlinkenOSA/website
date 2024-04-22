import style from "./ProjectCard.module.scss";
import getImageUrl from "@/utils/content/getImageUrl";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Button from "@/components/Button/Button";
import getColor from "@/utils/content/getColor";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import getImageData from "@/utils/content/getImageData";

const ProjectCard = ({data, profile}) => {
    // Populate fields
    const title = data['Title']
    const description = data['CardText']
    const imageData = getImageData(data['Image'], 'medium')
    const link = data['Link']
    const buttonText = data['ButtonText']
    const slug = data['Slug']

    const color = getColor(profile)

    const getURL = () => {
        switch (profile) {
            case 'Archivum':
                return '/about-us/partner-projects'
            case 'Collections':
                return '/collections/archival-projects'
            case 'Public':
                return '/public-programs/public-history-projects'
        }
    }

    return (
        <div className={style.Wrapper}>
            <a href={`/${getURL()}/${slug}`}>
                <div className={style.Image}>
                    <MaskedImage src={imageData['url']} type={'hdtv'} />
                </div>
            </a>
            <div className={`${style.Title} subtitle-large`}>{title}</div>
            <div className={style.Description}>
                {truncateWithEllipses(description, 350)}
            </div>
            <div className={style.Footer}>
                {
                    link &&
                    <Button
                        type={'primary'}
                        size={'large'}
                        color={color}
                        link={link}>{buttonText ? buttonText : 'Visit Project'}</Button>
                }
                <Button
                    type={'secondary'}
                    size={'large'}
                    color={color}
                    linkTarget={'_self'}
                    link={`/${getURL()}/${slug}`}>Learn More</Button>
            </div>
        </div>
    )
}

export default ProjectCard;