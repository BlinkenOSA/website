import {Col, Row} from "react-bootstrap";
import BlocksContentRenderer from "@/components/Content/BlocksContentRenderer";

const ContentFull = ({content}) => {
    return (
        <Row>
            <Col xs={12}>
                <BlocksContentRenderer content={content['Content']} />
            </Col>
        </Row>
    )
}

export default ContentFull;
