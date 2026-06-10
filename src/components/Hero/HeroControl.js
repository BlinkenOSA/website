import {Carousel, Col, Container, Row} from "react-bootstrap";
import {useState} from "react";
import Button from "@/components/Button/Button";
import {IconGeneralLeft, IconGeneralRight} from "@/components/Icon/GeneralIcon";
import style from './HeroControl.module.scss';
import {useReducedMotion} from "framer-motion";

const HeroControl = ({children}) => {
    const [activeItem, setActiveItem] = useState(0);
    const [pauseAutoplay, setPauseAutoplay] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    const renderItems = () => {
        return children.map((child, idx) => {
            return <Carousel.Item key={idx}>{child}</Carousel.Item>
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
            <Container
                onFocusCapture={() => setPauseAutoplay(true)}
                onBlurCapture={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                        setPauseAutoplay(false);
                    }
                }}>
                <Row className={style.HeroRow}>
                    <Col xs={12}>
                        <div className={style.HeroControlWrapper}>
                            <div className={style.Controls}>
                                <Button
                                    onClick={handlePrevious}
                                    disabled={activeItem === 0}
                                    type={'hero-primary'}
                                    size={'medium'}
                                    color={'neutral'}
                                    ariaLabel={'Previous hero slide'}
                                    isIcon={true}><IconGeneralLeft/></Button>
                                <Button
                                    onClick={handleNext}
                                    disabled={activeItem === children.length - 1}
                                    type={'hero-primary'}
                                    size={'medium'}
                                    color={'neutral'}
                                    ariaLabel={'Next hero slide'}
                                    isIcon={true}><IconGeneralRight/></Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Carousel
                activeIndex={activeItem}
                controls={false}
                indicators={false}
                onSelect={handleSelect}
                interval={shouldReduceMotion || pauseAutoplay ? null : 7000}
                pause={'hover'}
                touch={!shouldReduceMotion}>
                {renderItems()}
            </Carousel>
        </>
    )
}

export default HeroControl;
