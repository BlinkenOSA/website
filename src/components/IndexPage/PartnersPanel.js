import style from "./PartnersPanel.module.scss"
import galeriaLogo from "../../../public/logos/galeria-centralis.svg"
import verzioLogo from "../../../public/logos/verzio.svg"
import Image from "next/image";

const PartnersPanel = () => {
    return (
        <div className={style.PartnersPanel}>
            <div className={style.Left}>
                <Image
                    priority
                    src={galeriaLogo}
                    height={50}
                    alt="Galeria Centralis Logo"
                />
            </div>
            <div className={style.Right}>
                <Image
                    priority
                    src={verzioLogo}
                    height={100}
                    alt="Verzio Logo"
                />
            </div>
        </div>
    )
}

export default PartnersPanel;