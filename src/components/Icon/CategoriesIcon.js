import Image from "next/image";
import academics from "../../../public/icons/categories/academics.svg";
import archivum from "../../../public/icons/categories/archivum.svg";
import collections from "../../../public/icons/categories/collections.svg";
import public_programs from "../../../public/icons/categories/public_programs.svg";
import style from "@/components/Icon/Icon.module.scss";

const IconBase = ({src, size, color}) => {
	const getSize = () => {
		switch (size) {
			case 'normal':
				return 48
		}
	}

	return (
		<div className={style[color]}>
			<Image
				priority
				src={src}
				width={getSize()}
				height={getSize()}
				alt="Icon"
			/>
		</div>
	)
}

export const IconAcademics = ({size='normal', color='neutral'}) => {
	return <IconBase src={academics} size={size} color={color} />
}

export const IconArchivum = ({size='normal', color='neutral'}) => {
	return <IconBase src={archivum} size={size} color={color} />
}

export const IconCollections = ({size='normal', color='neutral'}) => {
	return <IconBase src={collections} size={size} color={color} />
}

export const IconPublicPrograms = ({size='normal', color='neutral'}) => {
	return <IconBase src={public_programs} size={size} color={color} />
}