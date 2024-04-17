import {Col, Row} from "react-bootstrap";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";

const ContentFull = ({content}) => {
    return (
        <Row>
            <Col xs={12}>
                <BlocksRenderer content={content['Content']} />
            </Col>
        </Row>
    )
}

export default ContentFull;