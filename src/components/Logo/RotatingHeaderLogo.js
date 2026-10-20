import {useEffect, useState} from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Logo from "@/components/Logo/Logo";
import CEUIcon from "@/components/Icon/CEUIcon";

import style from "./RotatingHeaderLogo.module.scss";

const ARCHIVUM_DISPLAY_TIME = 5000;
const CEU_DISPLAY_TIME = 3000;

const RotatingHeaderLogo = ({height = 30}) => {
	const {lang} = useTranslation('header');
	const [showCEU, setShowCEU] = useState(false);
	const [paused, setPaused] = useState(false);

	useEffect(() => {
		if (paused) return;

		const timer = window.setTimeout(
			() => setShowCEU((currentValue) => !currentValue),
			showCEU ? CEU_DISPLAY_TIME : ARCHIVUM_DISPLAY_TIME
		);

		return () => window.clearTimeout(timer);
	}, [paused, showCEU]);

	return (
		<div
			className={`${style.LogoSwitcher} ${showCEU ? style.ShowCEU : ''}`}
			style={{'--archivum-logo-height': `${height}px`}}
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
			onFocusCapture={() => setPaused(true)}
			onBlurCapture={() => setPaused(false)}
		>
			<div className={`${style.Face} ${style.ArchivumFace}`} aria-hidden={showCEU}>
				<Logo height={height} link={'/'} mode={'dark'} tabIndex={showCEU ? -1 : 0} />
			</div>
			<div className={`${style.Face} ${style.CEUFace}`} aria-hidden={!showCEU}>
				<Link
					href={'/'}
					tabIndex={showCEU ? 0 : -1}
					aria-label={lang === 'hu' ? 'A Blinken OSA Archivum kezdőlapja' : 'Blinken OSA Archivum home page'}
				>
					<CEUIcon ariaHidden={true} />
				</Link>
			</div>
		</div>
	);
};

export default RotatingHeaderLogo;
