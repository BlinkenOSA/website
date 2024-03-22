import {Row} from "react-bootstrap";

const SectionPanel = ({title, children}) => {
    return (
        <>
            <Row style={{flexWrap: 'nowrap', overflow: 'hidden'}}>
                {children}
            </Row>
        </>
    )
}

export default SectionPanel;