import {Col, Container, Row} from "react-bootstrap";
import style from "./SimplePageHeader.module.scss";
import {useContext} from "react";
import {IconGeneralRight} from "@/components/Icon/GeneralIcon";
import {MenuDispatchContext} from "@/utils/context/MenuContext";
import {useRouter} from "next/router";
import Spacer from "@/components/Spacer/Spacer";
import {useMedia} from "react-use";


const SimplePageHeader = ({title, breadCrumb, menu, breadCrumbObject}) => {
    const router = useRouter();
    const dispatch = useContext(MenuDispatchContext);

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

        if (breadCrumbObject) {
            return (
                <div className={style.Breadcrumbs}>
                    {
                        breadCrumbObject.map((obj, idx) => {
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
        <>
            <Spacer />
                <Container className={style.Container}>
                    <Row>
                        <Col xs={12}>
                            <div className={style.TitleBox}>
                                { renderBreadCrumbs() }
                                <div style={{height: '16px'}}/>
                                <h1>{title}</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            <Spacer />
        </>
)
}

export default SimplePageHeader;