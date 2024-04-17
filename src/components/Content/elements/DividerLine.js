import style from './DividerLine.module.scss';
import {Col, Row} from "react-bootstrap";
import getColor from "@/utils/content/getColor";

const DividerLine = ({content, profile}) => {
    const placement = content['Placement']
    const color = getColor(profile)

    switch (placement) {
        case 'Left':
            return (
                <Row>
                    <Col xs={8}>
                        <hr className={`${style.DividerLine} ${style[color]}`} />
                    </Col>
                    <Col xs={4}/>
                </Row>
            )
        case 'Right':
            return (
                <Row>
                    <Col xs={4}/>
                    <Col xs={8}>
                        <hr className={`${style.DividerLine} ${style[color]}`} />
                    </Col>
                </Row>
            )
        case 'Full':
        default:
            return (
                <Row>
                    <Col xs={12}>
                        <hr className={`${style.DividerLine} ${style[color]}`} />
                    </Col>
                </Row>
            )
    }
}

export default DividerLine;