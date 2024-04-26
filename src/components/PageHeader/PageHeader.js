import {Col, Container, Row} from "react-bootstrap";
import style from "./PageHeader.module.scss";
import {useContext, useRef} from "react";
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import {IconGeneralRight} from "@/components/Icon/GeneralIcon";
import {MenuDispatchContext} from "@/utils/context/MenuContext";


const PageHeader = ({title, breadCrumb, menu, image, scrollScale=1, isBlur=false}) => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll();

    const dispatch = useContext(MenuDispatchContext);

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -1500*scrollScale]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -100*scrollScale]);

    const handleClick = (e) => {
        e.preventDefault();
        let menuItem;

        switch (menu) {
            case 'about-us':
                menuItem = 1;
                break;
            case 'collections':
                menuItem = 2;
                break;
            case 'academics':
                menuItem = 3;
                break;
            case 'public-programs':
                menuItem = 4;
                break;
        }

        dispatch({
            type: 'open',
            value: menuItem
        });
    }

    return (
        <div ref={ref} className={style.Parallax}>
            <Container className={style.Container}>
                <Row>
                    <Col xs={12}>
                        <motion.div
                            style={{y: textY}}
                            className={style.TitleBox}
                        >
                            {
                                breadCrumb &&
                                <>
                                    <a href={'#'} onClick={handleClick}>
                                        <div className={style.Breadcrumb}>{breadCrumb} <IconGeneralRight /></div>
                                    </a>
                                    <div style={{height: '16px'}}/>
                                </>
                            }
                            <h1>{title}</h1>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            <motion.div
                style={{
                    backgroundImage: `url(${image})`,
                    y: backgroundY,
                    filter: isBlur ? 'blur(5px)' : 'blur(0)'
                }}
                className={style.BackgroundImage} />
        </div>
    )
}

export default PageHeader;