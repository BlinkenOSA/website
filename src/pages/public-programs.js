import style from "./pages.module.scss";
import { LoremIpsum } from 'react-lorem-ipsum';

const IndexPage = () => {
  return (
    <div className={style.PageWithMenuOpen}>
      <h1>Public Programs</h1>
      <LoremIpsum p={4} random={false} avgWordsPerSentence={13} avgSentencesPerParagraph={22} />
    </div>
  )
}

export default IndexPage;
