import {Carousel, Col, Row} from "react-bootstrap";
import {useState} from "react";
import Button from "@/components/Button/Button";
import {IconGeneralLeft, IconGeneralRight} from "@/components/Icon/Icon";
import style from './SectionPanel.module.scss';
import SectionFlipper from "@/components/IndexPage/SectionFlipper";

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