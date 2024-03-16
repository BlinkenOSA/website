import style from "./style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Content from "@/components/Content/Content";
import EventTypeTag from "@/components/Tag/EventTypeTag";
import {fetchEntriesDetail} from "@/utils/api/fetchEntries";
import Authors from "@/components/Authors/Authors";
import getCreationDate from "@/utils/content/getCreationDate";

export const getServerSideProps = (async (context) => {
	const { id } = context.query;

	const [entriesData] = await Promise.all([
		fetchEntriesDetail(id)
	])

	if (entriesData['data'] === null) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			entriesData
		}
	}
})

const EntryPage = ({entriesData}) => {
	const data = entriesData['data']['attributes'];

	const language = data['Language']
	const profile = data['Profile']
	const entryType = data['EntryType']
	const author = data['Author']
	const authorStaff = data['AuthorStaff']
	const originalCreationDate = data['OriginalCreationDate']
	const createdAt = data['createdAt']
	const podcastLink = data['PodcastLink']
	const eventType = data['EventType']

	const breadcrumbObject = [
		{ key: 'news', title: 'Blogs, Podcasts, Videos'},
		// { key: eventData['id'], title: data['Title']},
	]

	return (
		<div className={style.Page}>
			<Container>
				<Breadcrumb breadcrumbObject={breadcrumbObject} />
				<Row>
					<Col xs={12}>
						<h1>{data['Title']}</h1>
					</Col>
				</Row>
				<div style={{height: '48px'}}/>
				<Row>
					<Col xs={6}>
						<EventTypeTag eventType={eventType} profile={profile} />
						<div>
							<span>{getCreationDate(originalCreationDate, createdAt)}</span>
						</div>
					</Col>
					<Col xs={6}>
						<Authors author={author} authorStaff={authorStaff} />
					</Col>
				</Row>
				<Content contentObject={data['Content']} />
			</Container>
		</div>
	)
}

export default EntryPage;
