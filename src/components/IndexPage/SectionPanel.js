import {Carousel, Col, Row} from "react-bootstrap";
import {useState} from "react";
import Button from "@/components/Button/Button";
import {IconGeneralLeft, IconGeneralRight} from "@/components/Icon/Icon";
import style from './SectionPanel.module.scss';
import SectionDivider from "@/components/IndexPage/SectionDivider";

const SectionPanel = ({title, children}) => {
    const [activeItem, setActiveItem] = useState(0);

    const renderItems = () => {
        return children.map((child, idx) => {
            return child
        })
    }

    const handleSelect = (selectedIndex) => {
        setActiveItem(selectedIndex);
    };

    const handlePrevious = () => {
        setActiveItem(activeItem === 0 ? children.length - 1 : activeItem - 1)
    }

    const handleNext = () => {
        setActiveItem(activeItem === children.length - 1 ? 0 : activeItem + 1)
    }

    return (
        <>
            <SectionDivider title={title} />
            <Row style={{flexWrap: 'nowrap', overflow: 'hidden'}}>
                {renderItems()}
            </Row>
        </>
    )
}

export default SectionPanel;