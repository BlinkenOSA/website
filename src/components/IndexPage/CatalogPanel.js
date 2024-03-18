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
                        <Col xs={4}>
                            <h1>{t('catalog')}</h1>
                            <SearchBox />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default CatalogPanel;