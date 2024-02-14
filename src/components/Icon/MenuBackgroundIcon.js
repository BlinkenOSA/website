import Image from "next/image";
import about_us from "../../../public/icons/menu/about_us.svg";
import collections from "../../../public/icons/menu/collections.svg";
import academics from "../../../public/icons/menu/academics.svg";
import public_programs from "../../../public/icons/menu/public_programs.svg";


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

export const IconCollectionsMenu = ({size=300}) => {
    return <IconBase src={collections} size={size} />
}

export const IconPublicProgramsMenu = ({size=300}) => {
    return <IconBase src={public_programs} size={size} />
}

export const IconAcademicsMenu = ({size=300}) => {
    return <IconBase src={academics} size={size} />
}