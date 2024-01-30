import style from "./pages.module.scss";
import { LoremIpsum } from 'react-lorem-ipsum';
import {Col, Container, Row} from "react-bootstrap";

const IndexPage = () => {
  return (
      <div className={style.IndexPage}>
        <h1>Home Page</h1>
        <LoremIpsum p={10} random={false} avgWordsPerSentence={18} avgSentencesPerParagraph={12} />
      </div>
  )
}

export default IndexPage;
