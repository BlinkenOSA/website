import style from "./ContentWithImage.module.scss";
import ImageWithCaption from "@/components/Content/elements/ImageWithCaption";
import {Col, Row} from "react-bootstrap";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";

const ContentWithImage = ({content}) => {
    const imagePlacement = content['ImagePlacement']

    const renderImages = () => {
        return content['Images'].map((imageData, idx) => {
            return (
                <div className={style.ImageWrapper}>
                    <div className={style.StickyImage}>
                        <ImageWithCaption imageContent={imageData} />
                    </div>
                </div>
            )
        })
    }

    switch (imagePlacement) {
        case 'Right':
            return (
                <Row>
                    <Col xs={8}>
                        <BlocksRenderer content={content['Content']} />
                    </Col>
                    <Col xs={4}>
                        <div className={style.ImageColumn}>
                            {renderImages()}
                        </div>
                    </Col>
                </Row>
            )
        case 'Left':
            return (
                <Row>
                    <Col xs={4}>
                        <div className={style.ImageColumn}>
                            {renderImages()}
                        </div>
                    </Col>
                    <Col xs={8}>
                        <BlocksRenderer content={content['Content']} />
                    </Col>
                </Row>
            )
        case 'Full':
            return (
                <Row>
                    <Col xs={12}>
                        <div className={style.ImageColumn}>
                            {renderImages()}
                        </div>
                    </Col>
                    <Col xs={12}>
                        <BlocksRenderer content={content['Content']} />
                    </Col>
                </Row>
            )
        default:
            return (
                <Row>
                    <Col xs={12}>
                        <BlocksRenderer content={content['Content']} />
                    </Col>
                </Row>
            )

    }
}

export default ContentWithImage;