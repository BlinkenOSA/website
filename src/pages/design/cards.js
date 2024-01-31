import style from "@/pages/pages.module.scss";
import CollectionCard from "@/components/Cards/CollectionCard";
import {Col, Row} from "react-bootstrap";
import NewsCard from "@/components/Cards/NewsCard";
import {IconDocument} from "@/components/Icon/Icon";

const TextPage = () => {
	return (
		<div className={style.PageWithMenuOpen}>
			<h1>Cards</h1><br/><br/>
			<h3>Collection Card</h3><br/><br/>
			<Row>
				<Col xs={4}>
					<CollectionCard
						itemNumber={1285}
						title={'1956 Digital Archive'}
						author={'Darius Krolikowski'}
						description={'The 1956 Digital Archive is a collection of English-language text documents, ' +
							'photographs, and films on the 1956 Revolution in Hungary and its reception abroad.'}
						image={'https://fortepan.download/file/fortepan-eu/480/fortepan_23685.jpg'}
						types={['audio', 'movingImage', 'textual', 'stillImage']}
					/>
				</Col>
				<Col xs={4}>
					<CollectionCard
						itemNumber={120}
						title={'1956 Hungarian Refugees in the United States'}
						author={'Darius Krolikowski'}
						description={'In 2016 with the generous support of the Blinken family, the archives extended ' +
							'the scope of its research to other archives in the United States that also possess ' +
							'relevant, still largely unexplored records on the 1956 Hungarian refugees.'}
						image={'http://www.refugees1956.org/wp-content/uploads/2016/11/nara-refugees01.jpg'}
						types={['textual', 'stillImage']}
					/>
				</Col>
				<Col xs={4}>
					<CollectionCard
						itemNumber={86}
						title={'David Rohde Collection on Srebrenica'}
						author={'Darius Krolikowski'}
						description={'This research collection contains correspondence, eyewitness accounts, transcripts of phone ' +
							'conversations and other intelligence material, reports of human rights NGO, interoffice memos'}
						image={'https://osaarchivum.org/files/tmp/0039_rohde.jpg?1704815330'}
						types={['textual']}
					/>
				</Col>
			</Row>
			<br/>
			<h3>News Card</h3><br/><br/>
			<Row>
				<Col xs={4}>
					<NewsCard
						data={'18.08.2023.'}
						title={'János Kornai Correspondence Donated to the Archivum'}
						description={'János Kornai was an internationally acclaimed expert of Socialist economies and post-Communist tranistions.'}
						image={'https://fortepan.download/file/fortepan-eu/480/fortepan_23685.jpg'}
						icon={<IconDocument/>}
					/>
				</Col>
			</Row>
		</div>
	)
}

export default TextPage;