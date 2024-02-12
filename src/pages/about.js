import style from "./pages.module.scss";
import { LoremIpsum } from 'react-lorem-ipsum';
import {Col, Container, Row} from "react-bootstrap";

const IndexPage = () => {
  return (
    <div className={style.PageWithMenuOpen}>
        <Container>
            <Row>
                <Col xs={12}>
                      <h1>About Page</h1>
                      <LoremIpsum p={4} random={false} avgWordsPerSentence={22} avgSentencesPerParagraph={24} />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default IndexPage;
