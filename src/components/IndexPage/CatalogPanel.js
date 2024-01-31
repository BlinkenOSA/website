import style from './CatalogPanel.module.scss'
import SearchBox from "@/components/Input/SearchBox";
import Image from "next/image";
import {Col, Row} from "react-bootstrap";

const CatalogPanel = () => {
    return (
        <div className={style.PanelWrapper}>
            <Image
                priority={true}
                alt={'Catalog background'}
                src={'https://fortepan.download/file/fortepan-eu/1600/fortepan_190463.jpg'}
                fill={true}
            />
            <div className={style.Overlay}>
                <Row>
                    <Col xs={4}>
                        <h1>Catalog</h1>
                        <SearchBox />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CatalogPanel;