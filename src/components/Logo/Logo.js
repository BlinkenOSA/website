import Link from "next/link";
import Image from "next/image";
import logoDark from "../../../public/logos/logo-dark.svg";
import logoLight from "../../../public/logos/logo-light.svg";

const Logo = ({mode, height, link}) => {
	if (link) {
		return (
			<Link href={'/'} shallow={true} style={{display: "inline-block", height: height}}>
				<Image
					priority
					src={mode === 'dark' ? logoDark : logoLight}
					height={height}
					alt="Blinken OSA Archivum"
				/>
			</Link>
		)
	} else {
		return (
			<Image
				priority
				src={mode === 'dark' ? logoDark : logoLight}
				height={height}
				alt="Blinken OSA Archivum"
			/>
		)
	}
}

export default Logo;