import {Col, Row} from "react-bootstrap";
import style from "./ImageFull.module.scss";
import ImageWithCaption from "@/components/Content/elements/ImageWithCaption";

const ImageFull = ({content}) => {
    return (
        <Row>
            <Col xs={12}>
                <div className={style.ImageFull}>
                    <ImageWithCaption imageContent={content} />
                </div>
            </Col>
        </Row>
    )
}

export default ImageFull;