import style from './CatalogPanel.module.scss'
import SearchBox from "@/components/Input/SearchBox";
import Image from "next/image";
import {Col, Container, Row} from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";

const CatalogPanel = () => {
    const { t } = useTranslation('index')

    return (
        <div className={style.PanelWrapper}>
            <Image
                priority={true}
                alt={'Catalog background'}
                src={'https://fortepan.download/file/fortepan-eu/1600/fortepan_190463.jpg'}
                fill={true}
            />
            <div className={style.Overlay}>
                <Container>
                    <Row>
                        <Col xs={4} className={style.Left}>
                            <h1>{t('catalog')}</h1>
                            <SearchBox />
                        </Col>
                        <Col xs={8}>
                            <p>
                                10,000 linear meters, 17,000 hours of audiovisual, and 15 TB of digital records, as well
                                as 150,000 photographs, 6000+ documentary film titles and 19,000 library items on
                                four main areas of interest:
                            </p>
                            <p>
                                Communism and Cold War, and their Afterlives in Europe
                                Human Rights and Social Justice globally the Central European University in
                                Budapest and Vienna and the Open Society Foundations Network worldwide.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default CatalogPanel;