import fb from "../../../public/icons/social/fb.svg";
import insta from "../../../public/icons/social/insta.svg";
import yt from "../../../public/icons/social/yt.svg";
import x from "../../../public/icons/social/x.svg";
import bluesky from "../../../public/icons/social/bluesky.svg";
import linkedin from "../../../public/icons/social/linkedin.svg";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";


const SocialIconBase = ({src, alt}) => {
    const { t } = useTranslation('accessibility');

    return <Image
        src={src}
        width={16}
        height={16}
        alt={alt}
    />
}

export const SocialIconFB = () => {
    return <SocialIconBase src={fb} alt={'alt_text__facebook_icon'}/>
}

export const SocialIconInsta = () => {
    return <SocialIconBase src={insta} alt={'alt_text__instagram_icon'} />
}

export const SocialIconYT = () => {
    return <SocialIconBase src={yt} alt={'alt_text__youtube_icon'} />
}

export const SocialIconX = () => {
    return <SocialIconBase src={x} alt={'alt_text__x_icon'} />
}

export const SocialIconBlueSky = () => {
    return <SocialIconBase src={bluesky} alt={'alt_text__bluesky_icon'} />
}

export const SocialIconLinkedin = () => {
    return <SocialIconBase src={linkedin} alt={'alt_text__linkedin_icon'} />
}