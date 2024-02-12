import style from "./Hero.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import LogoHero from "@/components/Logo/LogoHero";

const Hero = ({image, title_1, title_2, date, location, color='mustard'}) => {
    return (
        <div className={`${style.HeroWrapper} ${style[color]}`}>
            <div className={`${style.TopRow} hero-top-row`}>
                <div className={style.Logo}>
                    <LogoHero />
                </div>
                <div className={style.Date}>
                    {date}
                </div>
                <div className={style.Location}>
                    {location}
                </div>
                <div style={{flex: 3}}/>
            </div>
            <div className={style.TitleRow}>
                <div style={{width: '120px'}}/>
                <div className={`${style.Title} hero-title`}>
                    {title_1}
                    {
                        title_2 &&
                        <><br/>{title_2}</>
                    }
                </div>
                <div style={{flex: 3}}/>
            </div>
            <div className={style.SubtitleRow}>

            </div>
            <div className={style.PosterWrapper}>
                <div style={{flex: 5}}></div>
                <div style={{flex: 3}}>
                    <MaskedImage src={image} type={'landscape'}/>
                </div>
            </div>
        </div>
    )
}

export default Hero;