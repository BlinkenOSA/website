import style from "./Hero.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Button from "@/components/Button/Button";
import getImageUrl from "@/utils/content/getImageUrl";

const Hero = ({data}) => {

    // Populate fields
    const date = data['Date']
    const time = data['Time']
    const location = data['Location']
    const title_1 = data['Title1stRow']
    const title_2 = data['Title2ndRow']
    const subtitle_1 = data['Subtitle1stRow']
    const subtitle_2 = data['Subtitle2ndRow']
    const buttonText = data['ButtonText']
    const buttonLink = data['ButtonLink']
    const image = getImageUrl(data['Image'])

    const generateButton = () => {
        if (buttonText !== null) {
            if (buttonLink) {
                return (
                    <a href={buttonLink}>
                        <div className={style.BottomRow}>
                            <Button size={'medium'} type={'hero-primary'} color={'neutral'}>{buttonText}</Button>
                        </div>
                    </a>
                )
            } else {
                return (
                    <div className={style.BottomRow}>
                        <Button size={'medium'} type={'hero-primary'} color={'neutral'}>{buttonText}</Button>
                    </div>
                )
            }
        } else {
            return ''
        }
    }

    const generateTime = () => {
        if (time !== null) {
            const separator = time.indexOf(':');
            return <span style={{marginLeft: '10px'}}>{time.slice(0, separator+3)}</span>
        } else {
            return ''
        }

    }

    return (
        <div
            style={{backgroundImage: `url(/icons/hero/about-us.svg)`}}
            className={`${style.HeroWrapper}`}
        >
            <div className={`${style.TopRow} hero-top-row`}>
                <div className={style.Logo}/>
                <div className={style.Date}>
                    <span>{date}</span>
                    {generateTime()}
                </div>
                <div className={style.Location}>
                    {location}
                </div>
            </div>
            <div className={style.TitleRow}>
                <div className={`${style.Title} hero-title`}>
                    {title_1}
                    {
                        title_2 !== null &&
                        <><br/>{title_2}</>
                    }
                    {
                        subtitle_1 !== null &&
                        <div className={`${style.Subtitle} hero-subtitle`}>
                            {subtitle_1}
                            {
                                subtitle_2 !== null &&
                                <><br/>{subtitle_2}</>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Hero;