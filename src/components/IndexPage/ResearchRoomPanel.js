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
                src={'/images/panel-research-room.webp'}
                fill={true}
            />
            <div className={style.Overlay}>
                <Container>
                    <Row>
                        <Col xs={12} sm={8} md={8}>
                            <div className={style.Text}>
                                <h1>{t('research_room')}</h1>
                                <p>{t('research_room__text')}</p>
                                <p>
                                    <span className={`${style.Label}`}>{t('research_room__where_to_find')}</span>
                                    <span className={style.Value}>{t('research_room__where_to_find__text')}</span>
                                    <br/>
                                    <span className={`${style.Label}`}>{t('research_room__opening_hours')}</span>
                                    <span className={style.Value}>{t('research_room__opening_hours__text')}</span>
                                </p>
                                <div className={style.Buttons}>
                                    <Button type={'primary'} size={'medium'} color={'mustard'} link={'https://catalog.archivum.org/registration'}>{t('research_room__registration')}</Button>
                                    <Button type={'secondary'} size={'medium'} color={'neutral'} link={'/collections/research-room'} linkTarget={'_self'}>{t('research_room__more_info')}</Button>
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