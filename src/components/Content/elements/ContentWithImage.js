import style from "./ContentWithImage.module.scss";
import ImageWithCaption from "@/components/Content/elements/ImageWithCaption";
import {Col, Row} from "react-bootstrap";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";

const ContentWithImage = ({content}) => {
    const imagePlacement = content['ImagePlacement']

    const renderImages = (size) => {
        return content['Images'] && content['Images'].map((imageData, idx) => {
            return (
                <div className={style.ImageWrapper}>
                    <div className={style.StickyImage}>
                        <ImageWithCaption imageContent={imageData} size={size} />
                    </div>
                </div>
            )
        })
    }

    switch (imagePlacement) {
        case 'Right':
            return (
                <Row>
                    <Col xs={{order: 2, span: 12}} sm={{order: 1, span: 6}} md={{order: 1, span: 8}}>
                        <BlocksRenderer content={content['Content']} />
                    </Col>
                    <Col xs={{order: 1, span: 12}} sm={{order: 2, span: 6}} md={{order: 2, span: 4}}>
                        <div className={style.ImageColumn}>
                            {renderImages('small')}
                        </div>
                    </Col>
                </Row>
            )
        case 'Left':
            return (
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <div className={style.ImageColumn}>
                            {renderImages('small')}
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={8}>
                        <BlocksRenderer content={content['Content']} />
                    </Col>
                </Row>
            )
        case 'Full':
            return (
                <Row>
                    <Col xs={12}>
                        <div className={style.ImageColumn}>
                            {renderImages('large')}
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