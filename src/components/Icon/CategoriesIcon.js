import Image from "next/image";
import academics from "../../../public/icons/categories/academics.svg";
import archivum from "../../../public/icons/categories/archivum.svg";
import collections from "../../../public/icons/categories/collections.svg";
import public_programs from "../../../public/icons/categories/public_programs.svg";

const IconBase = ({src, size}) => {
	const getSize = () => {
		switch (size) {
			case 'normal':
				return 48
		}
	}

	return <Image
		priority
		src={src}
		width={getSize()}
		height={getSize()}
		alt="Icon"
	/>
}

export const IconAcademics = ({size='normal'}) => {
	return <IconBase src={academics} size={size} />
}

export const IconArchivum = ({size='normal'}) => {
	return <IconBase src={archivum} size={size} />
}

export const IconCollections = ({size='normal'}) => {
	return <IconBase src={collections} size={size} />
}

export const IconPublicPrograms = ({size='normal'}) => {
	return <IconBase src={public_programs} size={size} />
}