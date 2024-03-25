import {Col, Container, Row} from "react-bootstrap";
import style from "./PageHeader.module.scss";
import {useRef} from "react";
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";


const PageHeader = ({title, profile, image}) => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("Page scroll: ", latest)
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -2000]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 1000]);

    return (
        <div ref={ref} className={style.Parallax}>
            <Container className={style.Container}>
                <Row>
                    <Col xs={12}>
                        <motion.div
                            style={{y: textY}}
                            className={style.TitleBox}
                        >
                            <h1>{title}</h1>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            <motion.div
                style={{backgroundImage: `url(${image})`, y: backgroundY}}
                className={style.BackgroundImage} />
        </div>
    )
}

export default PageHeader;