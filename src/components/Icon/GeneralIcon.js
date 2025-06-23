import close from "../../../public/icons/general/close.svg";
import down from "../../../public/icons/general/down.svg";
import eye from "../../../public/icons/general/eye.svg";
import help from "../../../public/icons/general/help.svg";
import info from "../../../public/icons/general/info.svg";
import left from "../../../public/icons/general/left.svg";
import menu from "../../../public/icons/general/menu.svg";
import minus from "../../../public/icons/general/minus.svg";
import more from "../../../public/icons/general/more.svg";
import plus from "../../../public/icons/general/plus.svg";
import right from "../../../public/icons/general/right.svg";
import search from "../../../public/icons/general/search.svg";
import trash from "../../../public/icons/general/trash.svg";
import up from "../../../public/icons/general/up.svg";
import warning from "../../../public/icons/general/warning.svg";

import style from "./Icon.module.scss";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const IconBase = ({src, size, color, alt}) => {
	const { t } = useTranslation('accessibility');

	const getSize = () => {
		switch (size) {
			case 'small':
				return 24
			case 'normal':
				return 32
			case 'large':
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
		</div>)
}


export const IconGeneralClose = ({size='normal', color='neutral'}) => {
	return <IconBase src={close} size={size} color={color} alt={'alt_text__close_icon'}/>
}

export const IconGeneralDown = ({size='normal', color='neutral'}) => {
	return <IconBase src={down} size={size} color={color} alt={'alt_text__down_icon'} />
}

export const IconGeneralEye = ({size='normal', color='neutral'}) => {
	return <IconBase src={eye} size={size} color={color}  alt={'alt_text__eye_icon'} />
}

export const IconGeneralHelp = ({size='normal', color='neutral'}) => {
	return <IconBase src={help} size={size} color={color} alt={'alt_text__help_icon'} />
}

export const IconGeneralInfo = ({size='normal', color='neutral'}) => {
	return <IconBase src={info} size={size} color={color} alt={'alt_text__info_icon'} />
}

export const IconGeneralLeft = ({size='normal', color='neutral'}) => {
	return <IconBase src={left} size={size} color={color} alt={'alt_text__left_icon'} />
}

export const IconGeneralMenu = ({size='normal', color='neutral'}) => {
	return <IconBase src={menu} size={size} color={color} alt={'alt_text__menu_icon'} />
}

export const IconGeneralMinus = ({size='normal', color='neutral'}) => {
	return <IconBase src={minus} size={size} color={color} alt={'alt_text__minus_icon'} />
}

export const IconGeneralMore = ({size='normal', color='neutral'}) => {
	return <IconBase src={more} size={size} color={color} alt={'alt_text__more_icon'} />
}

export const IconGeneralPlus = ({size='normal', color='neutral'}) => {
	return <IconBase src={plus} size={size} color={color} alt={'alt_text__plus_icon'} />
}

export const IconGeneralRight = ({size='normal', color='neutral'}) => {
	return <IconBase src={right} size={size} color={color} alt={'alt_text__right_icon'} />
}

export const IconGeneralSearch = ({size='normal', color='neutral'}) => {
	return <IconBase src={search} size={size} color={color} alt={'alt_text__search_icon'} />
}

export const IconGeneralTrash = ({size='normal', color='neutral'}) => {
	return <IconBase src={trash} size={size} color={color} alt={'alt_text__trash_icon'} />
}

export const IconGeneralUp = ({size='normal', color='neutral'}) => {
	return <IconBase src={up} size={size} color={color} alt={'alt_text__up_icon'} />
}

export const IconGeneralWarning = ({size='normal', color='neutral'}) => {
	return <IconBase src={warning} size={size} color={color} alt={'alt_text__warning_icon'} />
}