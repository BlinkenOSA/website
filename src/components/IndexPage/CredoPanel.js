import style from "./CredoPanel.module.scss"
import archivumLogo from "../../../public/icons/credo/archivum.svg"
import Image from "next/image";

const CredoPanel = () => {
    return (
        <div className={style.Panel}>
            <div className={style.Card}>
                <div className={style.Text}>
                    <h1>We are the Archivum</h1>
                    <span>
                        The Blinken OSA at Central European University is a dynamic archival institution focused on
                        Cold War and human rights collections, employing innovative practices.
                    </span>
                </div>
                <div className={style.Logo}>
                    <Image
                        priority
                        src={archivumLogo}
                        height={600}
                        alt="Blinken OSA Archivum"
                    />
                </div>
            </div>
        </div>
    )
}

export default CredoPanel;