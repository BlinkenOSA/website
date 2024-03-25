import {Col, Container, Row} from "react-bootstrap";
import style from "./PageHeader.module.scss";
import getColor from "@/utils/content/getColor";


const PageHeader = ({title, profile, image}) => {
    const color = getColor(profile)

    return (
        <div className={style.Wrapper}>
            <img src={image} className={style.BackgroundImage} />
            <Container className={style.Container}>
                <Row>
                    <Col xs={12}>
                        <div className={style.TitleBox}>
                            <h1>{title}</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PageHeader;