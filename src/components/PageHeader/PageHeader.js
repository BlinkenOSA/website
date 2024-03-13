import {Col, Container, Row} from "react-bootstrap";
import style from "./PageHeader.module.scss";
import getColor from "@/utils/content/getColor";
import Image from "next/image";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const PageHeader = ({breadcrumbObject, title, profile, image}) => {
    const color = getColor(profile)

    return (
        <div className={style.Wrapper}>
            <Container>
                <Row>
                    <Col xs={8}>
                        <div style={{height: '48px'}}/>
                        <Breadcrumb breadcrumbObject={breadcrumbObject} />
                        <h1>{title}</h1>
                    </Col>
                    <Col xs={4}>
                        <div className={style.Image}>
                            <MaskedImage type={"landscape"} src={image} mask={false} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PageHeader;