import style from "./Hero.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Button from "@/components/Button/Button";

const Hero = ({image, title_1, title_2, subtitle_1, subtitle_2, date, location, buttonText, color='mustard'}) => {
    return (
        <div className={`${style.HeroWrapper}`}>
            <div className={`${style.TopRow} hero-top-row`}>
                <div className={style.Logo}/>
                <div className={style.Date}>
                    {date}
                </div>
                <div className={style.Location}>
                    {location}
                </div>
            </div>
            <div className={style.TitleRow}>
                <div style={{width: '120px'}}/>
                <div className={`${style.Title} hero-title`}>
                    {title_1}
                    {
                        title_2 &&
                        <><br/>{title_2}</>
                    }
                    {
                        subtitle_1 &&
                        <div className={`${style.Subtitle} hero-subtitle`}>
                            {subtitle_1}
                            {
                                subtitle_2 &&
                                <><br/>{subtitle_2}</>
                            }
                        </div>
                    }
                </div>
            </div>
            {
                buttonText &&
                <div className={style.BottomRow}>
                    <Button size={'medium'} type={'hero-primary'} color={'neutral'}>{buttonText}</Button>
                </div>
            }
            <div className={style.PosterWrapper}>
                <MaskedImage src={image} type={'hero'}/>
            </div>
        </div>
    )
}

export default Hero;