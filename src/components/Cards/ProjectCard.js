import style from "./ProjectCard.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Button from "@/components/Button/Button";
import getColor from "@/utils/content/getColor";
import truncateWithEllipses from "@/utils/truncateWithEllipsis";
import getImageData from "@/utils/content/getImageData";
import {useMedia} from "react-use";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";

const ProjectCard = ({data, profile}) => {
    const { t, lang } = useTranslation('cards')

    // Populate fields
    const title = getLocData(data, 'Title', lang)
    const description = getLocData(data, 'CardText', lang)
    const imageData = getImageData(data['Image'], 'small')
    const link = data['Link']
    const buttonText = data['ButtonText']
    const slug = data['Slug']

    const color = getColor(profile)

    const isMobile = useMedia('(max-width: 1200px)', true);

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

    const getButtonText = () => {
        if (buttonText) {
            if (isMobile) {
                return truncateWithEllipses(buttonText, 10)
            } else {
                return buttonText
            }
        } else {
            return t('project__button')
        }
    }

    return (
        <div className={style.Wrapper}>
            <Link href={`${getURL()}/${slug}`}>
                <div className={style.Image}>
                    <MaskedImage
                      src={imageData['url']}
                      type={'hdtv'}
                      alt={`${t('alt_text__project_card_image')}: ${truncateWithEllipses(title, 100)}`}/>
                </div>
            </Link>
            <div className={`${style.Title} subtitle-large`}>{truncateWithEllipses(title, 150)}</div>
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
                        link={link}>{getButtonText()}</Button>
                }
                <Button
                    type={'secondary'}
                    size={'large'}
                    color={color}
                    linkTarget={'_self'}
                    link={`${getURL()}/${slug}`}>{t('project__more_button')}</Button>
            </div>
        </div>
    )
}

export default ProjectCard;