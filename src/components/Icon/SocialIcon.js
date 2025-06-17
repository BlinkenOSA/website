import fb from "../../../public/icons/social/fb.svg";
import insta from "../../../public/icons/social/insta.svg";
import yt from "../../../public/icons/social/yt.svg";
import x from "../../../public/icons/social/x.svg";
import bluesky from "../../../public/icons/social/bluesky.svg";
import linkedin from "../../../public/icons/social/linkedin.svg";
import Image from "next/image";


const SocialIconBase = ({src, alt}) => {
    return <Image
        src={src}
        width={16}
        height={16}
        alt={alt}
    />
}

export const SocialIconFB = () => {
    return <SocialIconBase src={fb} alt={'Facebook Icon'}/>
}

export const SocialIconInsta = () => {
    return <SocialIconBase src={insta} alt={'Instagram Icon'} />
}

export const SocialIconYT = () => {
    return <SocialIconBase src={yt} alt={'Youtube Icon'} />
}

export const SocialIconX = () => {
    return <SocialIconBase src={x} alt={'X (ex-Twitter) Icon'} />
}

export const SocialIconBlueSky = () => {
    return <SocialIconBase src={bluesky} alt={'BlueSky Icon'} />
}

export const SocialIconLinkedin = () => {
    return <SocialIconBase src={linkedin} alt={'LinkedIn Icon'} />
}