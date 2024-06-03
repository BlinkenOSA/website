import style from "./PartnersPanel.module.scss"
import galeriaLogo from "../../../public/logos/galeria-centralis.svg"
import verzioLogo from "../../../public/logos/verzio.svg"
import Image from "next/image";
import {Col, Container, Row} from "react-bootstrap";
import Button from "@/components/Button/Button";
import useTranslation from "next-translate/useTranslation";

const PartnersPanel = () => {
    const { t } = useTranslation('index')

    return (
        <>
            <Row className={style.PartnersRow}>
                <Col xs={12} sm={6} md={6}>
                    <div className={`${style.Panel} ${style.Left}`}>
                        <div className={style.Text}>
                            <h2>{t('partners__galeria')}</h2>
                        </div>
                        <div className={style.Row}>
                            <div className={style.Button}>
                                <Button
                                    type={'primary'}
                                    size={'medium'}
                                    color={'sage'}
                                    link={'/external/galeria-centralis'}
                                    linkTarget={'_self'}
                                >{t('partners__button')}</Button>
                            </div>
                            <div className={style.Logo}>
                                <Image
                                    src={galeriaLogo}
                                    height={20}
                                    alt="Galeria Centralis Logo"
                                />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6}>
                    <div className={`${style.Panel} ${style.Right}`}>
                        <div className={style.Text}>
                            <h2>{t('partners__verzio')}</h2>
                        </div>
                        <div className={style.Row}>
                            <div className={style.Button}>
                                <Button
                                    type={'primary'}
                                    size={'medium'}
                                    color={'sage'}
                                    linkTarget={'_self'}
                                    link={'/external/verzio'}
                                >{t('partners__button')}</Button>
                            </div>
                            <div className={style.Logo}>
                                <Image
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