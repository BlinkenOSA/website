import style from "./Hero.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import LogoHero from "@/components/Logo/LogoHero";

const Hero = ({image, date, location, firstLine, secondLine, subtitleTextFirst, subtitleTextSecond}) => {
    return (
        <div className={style.HeroWrapper}>
            <MaskedImage src={image} type={'hero'}/>
            <div className={style.TopRow}>
                <div style={{flex: 2}}> </div>
                <div className={`${style.Date} subtitle-small`}>{date}</div>
                <div className={`${style.Location} subtitle-small`}>{location}</div>
            </div>
            <div className={style.Logo}>
                <LogoHero />
            </div>
        </div>
    )
}

export default Hero;