import style from "./pages.module.scss";
import { LoremIpsum } from 'react-lorem-ipsum';

const IndexPage = () => {
  return (
    <div className={style.PageWithMenuOpen}>
      <h1>Academics</h1>
      <LoremIpsum p={4} random={false} avgWordsPerSentence={22} avgSentencesPerParagraph={24} />
    </div>
  )
}

export default IndexPage;
