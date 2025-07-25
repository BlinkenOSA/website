import Link from "next/link";
import Image from "next/image";
import logoDark from "../../../public/logos/logo-dark.svg";
import logoLight from "../../../public/logos/logo-light.svg";

const Logo = ({mode, height, link}) => {
	if (link) {
		return (
			<Link href={'/'} style={{display: "inline-block", height: height}}>
				<Image
					src={mode === 'dark' ? logoDark : logoLight}
					height={height}
					alt="Blinken OSA Archivum logo"
				/>
			</Link>
		)
	} else {
		return (
			<Image
				src={mode === 'dark' ? logoDark : logoLight}
				height={height}
				alt="Blinken OSA Archivum logo"
			/>
		)
	}
}

export default Logo;