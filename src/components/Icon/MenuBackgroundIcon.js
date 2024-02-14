import Image from "next/image";
import about_us from "../../../public/icons/menu/about_us.svg";

const IconBase = ({src, size}) => {
    return <Image
        priority
        src={src}
        width={size}
        height={size}
        alt="Icon"
    />
}

export const IconAboutUsMenu = ({size=300}) => {
    return <IconBase src={about_us} size={size} />
}