import Image from "next/image";
import academics from "../../../public/icons/categories/academics.svg";
import archivum from "../../../public/icons/categories/archivum.svg";
import collections from "../../../public/icons/categories/collections.svg";
import public_programs from "../../../public/icons/categories/public_programs.svg";
import style from "@/components/Icon/Icon.module.scss";
import useTranslation from "next-translate/useTranslation";

const IconBase = ({src, size, color, alt}) => {
	const { t } = useTranslation('accessibility');

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
				alt={t(alt)}
			/>
		</div>
	)
}

export const IconAcademics = ({size='normal', color='neutral'}) => {
	return <IconBase src={academics} size={size} color={color} alt={'alt_text__academics_icon'} />
}

export const IconArchivum = ({size='normal', color='neutral'}) => {
	return <IconBase src={archivum} size={size} color={color} alt={'alt_text__archivum_icon'} />
}

export const IconCollections = ({size='normal', color='neutral'}) => {
	return <IconBase src={collections} size={size} color={color} alt={'alt_text__collections_icon'} />
}

export const IconPublicPrograms = ({size='normal', color='neutral'}) => {
	return <IconBase src={public_programs} size={size} color={color} alt={'alt_text__public_programs_icon'} />
}