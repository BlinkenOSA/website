import Image from "next/image";
import academics from "../../../public/icons/categories/academics.svg";
import archivum from "../../../public/icons/categories/archivum.svg";
import collections from "../../../public/icons/categories/collections.svg";
import public_programs from "../../../public/icons/categories/public_programs.svg";
import style from "@/components/Icon/Icon.module.scss";

const IconBase = ({src, size, color, alt}) => {
	const getSize = () => {
		switch (size) {
			case 'normal':
				return 48
		}
	}

	return (
		<div className={style[color]}>
			<Image
				src={src}
				width={getSize()}
				height={getSize()}
				alt={alt}
			/>
		</div>
	)
}

export const IconAcademics = ({size='normal', color='neutral'}) => {
	return <IconBase src={academics} size={size} color={color} alt={'Academics Icon'} />
}

export const IconArchivum = ({size='normal', color='neutral'}) => {
	return <IconBase src={archivum} size={size} color={color} alt={'Archivum Icon'} />
}

export const IconCollections = ({size='normal', color='neutral'}) => {
	return <IconBase src={collections} size={size} color={color} alt={'Collections Icon'} />
}

export const IconPublicPrograms = ({size='normal', color='neutral'}) => {
	return <IconBase src={public_programs} size={size} color={color} alt={'Public Programs Icon'} />
}