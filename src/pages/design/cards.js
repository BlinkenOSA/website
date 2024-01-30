import style from "@/pages/pages.module.scss";
import CollectionCard from "@/components/Cards/CollectionCard";
import {Col, Row} from "react-bootstrap";

const TextPage = () => {
	return (
		<div className={style.PageWithMenuOpen}>
			<h1>Cards</h1><br/><br/>
			<h3>Collection Card</h3><br/><br/>
			<Row>
				<Col xs={4}>
					<CollectionCard
						itemNumber={546}
						title={'1956 Digital Archive'}
						author={'Darius Krolikowski'}
						description={'The 1956 Digital Archive is a collection of English-language text documents, ' +
							'photographs, and films on the 1956 Revolution in Hungary and its reception abroad.'}
						image={'https://fortepan.download/file/fortepan-eu/480/fortepan_23685.jpg'}
					/>
				</Col>
				<Col xs={4}>
					<CollectionCard
						itemNumber={546}
						title={'1956 Hungarian Refugees in the United States'}
						author={'Darius Krolikowski'}
						description={'In 2016 with the generous support of the Blinken family, the archives extended ' +
							'the scope of its research to other archives in the United States that also possess ' +
							'relevant, still largely unexplored records on the 1956 Hungarian refugees.'}
						image={'http://www.refugees1956.org/wp-content/uploads/2016/11/nara-refugees01.jpg'}
					/>
				</Col>
				<Col xs={4}>
					<CollectionCard
						itemNumber={546}
						title={'1956 Digital Archive'}
						author={'Darius Krolikowski'}
						description={'A collection of English-language text documents, photographs, and films on the ' +
							'1956 Revolution in Hungary and its reception abroad...'}
						image={'https://fortepan.download/file/fortepan-eu/480/fortepan_23685.jpg'}
					/>
				</Col>
			</Row>
			<br/>
		</div>
	)
}

export default TextPage;