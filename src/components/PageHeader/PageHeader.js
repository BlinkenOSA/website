import {Col, Container, Row} from "react-bootstrap";
import style from "./PageHeader.module.scss";
import {useContext, useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {IconGeneralRight} from "@/components/Icon/GeneralIcon";
import {MenuDispatchContext} from "@/utils/context/MenuContext";
import {useMedia} from "react-use";
import {useRouter} from "next/router";


const PageHeader = ({title, breadcrumbObject, breadCrumb, menu, image, scrollScale=1, isBlur=false}) => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll();

    const router = useRouter();
    const dispatch = useContext(MenuDispatchContext);

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -1500*scrollScale]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -100*scrollScale]);

    const isCompact = useMedia('(max-width: 1200px)');

    const handleClick = (e, m, link) => {
        e.preventDefault();
        let menuItem;

        if (link) {
            router.push(link)
        } else {
            switch (m) {
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

            if (isCompact) {
                dispatch({
                    type: 'open-mobile-menu-item',
                    value: menuItem
                });
            } else {
                dispatch({
                    type: 'open',
                    value: menuItem
                });
            }
        }
    }

    const renderBreadCrumbs = () => {
        const renderBreadCrumb = (key, title, menuString, link) => {
            return (
                <a key={key} href={'#'} onClick={(e) => handleClick(e, menuString, link)}>
                    <div className={style.Breadcrumb}>{title} <IconGeneralRight /></div>
                </a>
            )
        }

        if (breadcrumbObject) {
            return (
                <div className={style.Breadcrumbs}>
                    {
                        breadcrumbObject.map((obj, idx) => {
                            return renderBreadCrumb(idx, obj['title'], obj['menu'], obj['link'])
                        })
                    }
                </div>
            )

        } else {
            return (
                breadCrumb && renderBreadCrumb('bc', breadCrumb, menu)
            )
        }
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
                            { renderBreadCrumbs() }
                            <div style={{height: '16px'}}/>
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