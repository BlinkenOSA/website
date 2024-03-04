import style from "./PartnersPanel.module.scss"
import galeriaLogo from "../../../public/logos/galeria-centralis.svg"
import verzioLogo from "../../../public/logos/verzio.svg"
import Image from "next/image";
import {Col, Container, Row} from "react-bootstrap";
import Button from "@/components/Button/Button";

const PartnersPanel = () => {

    return (
        <>
            <Row>
                <Col xs={12} md={6}>
                    <div className={`${style.Panel} ${style.Left}`}>
                        <div className={style.Text}>
                            <h2>Visit Galeria<br/>Centralis</h2>
                        </div>
                        <div className={style.Row}>
                            <div className={style.Button}>
                                <Button
                                    type={'primary'}
                                    size={'medium'}
                                    color={'sage'}
                                    link={'https://galeriacentralis.osaarchivum.org'}
                                >Find out more</Button>
                            </div>
                            <div className={style.Logo}>
                                <Image
                                    priority
                                    src={galeriaLogo}
                                    height={20}
                                    alt="Galeria Centralis Logo"
                                />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className={`${style.Panel} ${style.Right}`}>
                        <div className={style.Text}>
                            <h2>Visit Verzio<br/>Filmfestival</h2>
                        </div>
                        <div className={style.Row}>
                            <div className={style.Button}>
                                <Button
                                    type={'primary'}
                                    size={'medium'}
                                    color={'sage'}
                                    link={'https://verzio.org'}
                                >Find out more</Button>
                            </div>
                            <div className={style.Logo}>
                                <Image
                                    priority
                                    src={verzioLogo}
                                    height={40}
                                    alt="Verzio Logo"
                                />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default PartnersPanel;