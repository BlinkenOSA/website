import style from './ResearchRoomPanel.module.scss'
import Image from "next/image";
import {Col, Container, Row} from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";
import {useInView} from "framer-motion";
import {useEffect, useMemo, useRef, useState} from "react";
import Button from "@/components/Button/Button";

const ResearchRoomPanel = () => {
    const { t } = useTranslation('index')

    const ref = useRef(null)
    const isInView = useInView(ref)
    const [startAnimation, setStartAnimation] = useState(false)

    useEffect(() => {
        setStartAnimation(true)
    })

    return (
        <div ref={ref} className={style.PanelWrapper}>
            <Image
                priority={true}
                alt={'Research Room background'}
                src={'/images/panel-research-room.jpg'}
                fill={true}
            />
            <div className={style.Overlay}>
                <Container>
                    <Row>
                        <Col xs={12} sm={8} md={8}>
                            <div className={style.Text}>
                                <h1>{t('research_room')}</h1>
                                <p>
                                    The Archivum is an open-access facility committed to making research materials available
									free of charge. Our Research Room is freely accessible to the public and offers a
                                    friendly environment for quiet study.
								</p>
                                <p>
                                    <span className={`${style.Label}`}>Where to find us: </span>
                                    <span className={style.Value}>Arany Janos u. 32., Budapest, Hungary</span>
                                    <br/>
                                    <span className={`${style.Label}`}>Opening hours: </span>
                                    <span className={style.Value}>Mon-Fri 10:00 - 17:45</span>
                                </p>
                                <div className={style.Buttons}>
                                    <Button type={'primary'} size={'medium'} color={'mustard'} link={'https://catalog.osaarchivum.org/registration'}>Registration</Button>
                                    <Button type={'secondary'} size={'medium'} color={'neutral'} link={'/collections/research-room'} linkTarget={'_self'}>More info and booking!</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ResearchRoomPanel;