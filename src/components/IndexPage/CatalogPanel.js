import style from './CatalogPanel.module.scss'
import SearchBox from "@/components/Input/SearchBox";
import Image from "next/image";
import {Col, Container, Row} from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Typewriter from "@/components/Typewriter/Typewriter";
import {useInView} from "framer-motion";
import {useEffect, useMemo, useRef, useState} from "react";
import {Media} from "@/utils/media";
import Spacer from "@/components/Spacer/Spacer";

const CatalogPanel = () => {
    const { t } = useTranslation('index')

    const ref = useRef(null)
    const isInView = useInView(ref)
    const [startAnimation, setStartAnimation] = useState(false)

    useEffect(() => {
        setStartAnimation(true)
    })

    const handleEnter = (value) => {
        window.open(`https://catalog.osaarchivum.org/?query=${value}`)
    }

    return (
        <div ref={ref} className={style.PanelWrapper}>
            <Image
                priority={true}
                alt={'Catalog background'}
                src={'/images/panel-catalog.jpg'}
                fill={true}
            />
            <div className={style.Overlay}>
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={4} className={style.Left}>
                            <Link href={'https://catalog.osaarchivum.org/'} target={'_blank'}>
                                <h1>{t('catalog')}</h1>
                            </Link>
                            <SearchBox onPressEnter={handleEnter} />
                        </Col>
                        <Media lessThan="sm">
                            <Spacer />
                        </Media>
                        <Col xs={12} sm={6} md={8}>
                            {
                                startAnimation &&
                                <Typewriter text={'10,000 linear meters, 17,000 hours of audiovisual, and 15 TB of digital records, as well ' +
                                    'as 150,000 photographs, 6000+ documentary film titles and 19,000 library items on ' +
                                    'four main areas of interest: communism and Cold War, and their afterlives; ' +
                                    'human rights and social justice; ' +
                                    'Central European University; ' +
                                    'Open Society Foundations network.'}
                                />
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default CatalogPanel;