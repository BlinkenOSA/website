import Image from "next/image";
import logoHero from "../../../public/logos/logo-hero.svg";

const LogoHero = ({mode, height}) => {
	return (
		<Image
			priority
			src={logoHero}
			height={height}
			alt="Blinken OSA Archivum logo"
		/>
	)
}

export default LogoHero;