import fb from "../../../public/icons/social/fb.svg";
import insta from "../../../public/icons/social/insta.svg";
import yt from "../../../public/icons/social/yt.svg";
import x from "../../../public/icons/social/x.svg";
import bluesky from "../../../public/icons/social/bluesky.svg";
import linkedin from "../../../public/icons/social/linkedin.svg";
import Image from "next/image";


const SocialIconBase = ({src}) => {
    return <Image
        src={src}
        width={16}
        height={16}
        alt="Icon"
    />
}

export const SocialIconFB = () => {
    return <SocialIconBase src={fb} />
}

export const SocialIconInsta = () => {
    return <SocialIconBase src={insta} />
}

export const SocialIconYT = () => {
    return <SocialIconBase src={yt} />
}

export const SocialIconX = () => {
    return <SocialIconBase src={x} />
}

export const SocialIconBlueSky = () => {
    return <SocialIconBase src={bluesky} />
}

export const SocialIconLinkedin = () => {
    return <SocialIconBase src={linkedin} />
}