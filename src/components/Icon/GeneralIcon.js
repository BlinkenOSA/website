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

const IconBase = ({src, size, color, alt}) => {
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
				alt={alt}
			/>
		</div>)
}


export const IconGeneralClose = ({size='normal', color='neutral'}) => {
	return <IconBase src={close} size={size} color={color} alt={'Close Icon'}/>
}

export const IconGeneralDown = ({size='normal', color='neutral'}) => {
	return <IconBase src={down} size={size} color={color} alt={'Down Icon'} />
}

export const IconGeneralEye = ({size='normal', color='neutral'}) => {
	return <IconBase src={eye} size={size} color={color}  alt={'Eye Icon'} />
}

export const IconGeneralHelp = ({size='normal', color='neutral'}) => {
	return <IconBase src={help} size={size} color={color} alt={'Help Icon'} />
}

export const IconGeneralInfo = ({size='normal', color='neutral'}) => {
	return <IconBase src={info} size={size} color={color} alt={'Info Icon'} />
}

export const IconGeneralLeft = ({size='normal', color='neutral'}) => {
	return <IconBase src={left} size={size} color={color} alt={'Left Icon'} />
}

export const IconGeneralMenu = ({size='normal', color='neutral'}) => {
	return <IconBase src={menu} size={size} color={color} alt={'Menu Icon'} />
}

export const IconGeneralMinus = ({size='normal', color='neutral'}) => {
	return <IconBase src={minus} size={size} color={color} alt={'Minus Icon'} />
}

export const IconGeneralMore = ({size='normal', color='neutral'}) => {
	return <IconBase src={more} size={size} color={color} alt={'More Icon'} />
}

export const IconGeneralPlus = ({size='normal', color='neutral'}) => {
	return <IconBase src={plus} size={size} color={color} alt={'Plus Icon'} />
}

export const IconGeneralRight = ({size='normal', color='neutral'}) => {
	return <IconBase src={right} size={size} color={color} alt={'Right Icon'} />
}

export const IconGeneralSearch = ({size='normal', color='neutral'}) => {
	return <IconBase src={search} size={size} color={color} alt={'Search Icon'} />
}

export const IconGeneralTrash = ({size='normal', color='neutral'}) => {
	return <IconBase src={trash} size={size} color={color} alt={'Trash Icon'} />
}

export const IconGeneralUp = ({size='normal', color='neutral'}) => {
	return <IconBase src={up} size={size} color={color} alt={'Up Icon'} />
}

export const IconGeneralWarning = ({size='normal', color='neutral'}) => {
	return <IconBase src={warning} size={size} color={color} alt={'Warning Icon'} />
}