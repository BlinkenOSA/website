import Header from "@/components/Layout/Header";
import style from "@/components/Layout/Layout.module.scss";
import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Layout/Footer";
import {Col, Container, Row} from "react-bootstrap";

const Layout = ({ children }) => {
    return (
      <>
            <div className={style.Header}>
              <Header />
            </div>
            <div className={`${style.Page} suisseIntlRegular`}>
                <Container fluid={true}>
                    <Row>
                        <Col xs={12}>
                            {children}
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={style.Menu}>
                <Menu />
            </div>
            <Footer />
      </>
    )
}

export default Layout