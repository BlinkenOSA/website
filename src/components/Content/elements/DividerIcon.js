import style from "./DividerIcon.module.scss"
import getColor from "@/utils/content/getColor";
import {Col, Row} from "react-bootstrap";
import getIconByProfile from "@/utils/content/getIconByProfile";


const DividerIcon = ({content, profile, numberOfIcons=1}) => {
    const placement = content['Placement']
    const color = getColor(profile)
    const icon = getIconByProfile(profile, 'small', color)

    const renderIcons = () => {
        return Array.from(Array(numberOfIcons).keys()).map((n, idx) => {
            return <div key={`iconDivider_${idx}`}>{icon}</div>
        })
    }

    switch (placement) {
        case 'Left':
            return (
                <Row>
                    <Col xs={8}>
                        <div className={style.IconWrapper}>
                            {renderIcons()}
                        </div>
                    </Col>
                    <Col xs={4}/>
                </Row>
            )
        case 'Right':
            return (
                <Row>
                    <Col xs={4}/>
                    <Col xs={8}>
                        <div className={style.IconWrapper}>
                            {renderIcons()}
                        </div>
                    </Col>
                </Row>
            )
        case 'Full':
        default:
            return (
                <Row>
                    <Col xs={12}>
                        <div className={style.IconWrapper}>
                            {renderIcons()}
                        </div>
                    </Col>
                </Row>
            )
    }
}

export default DividerIcon;