import style from "../style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Content from "@/components/Content/Content";
import EventTypeTag from "@/components/Tag/EventTypeTag";
import {fetchEntriesDetail} from "@/utils/api/fetchEntries";
import Authors from "@/components/Authors/Authors";
import getCreationDate from "@/utils/content/getCreationDate";
import PageHeader from "@/components/PageHeader/PageHeader";
import {toCapitalize} from "@/utils/toCapitalize";

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

	const title = data['Title']
	const profile = data['Profile']
	const author = data['Author']
	const authorStaff = data['AuthorStaff']
	const entryType = data['EntryType']
	const originalCreationDate = data['OriginalCreationDate']
	const createdAt = data['createdAt']
	const eventType = data['EventType']

	const breadcrumbObject = [
		{ key: 'news', title: 'Blogs, Podcasts, Videos'},
		// { key: eventData['id'], title: data['Title']},
	]

	return (
		<div className={style.Page}>
			<PageHeader
				title={`${toCapitalize(entryType)}s`}
				image={undefined}
				breadcrumbObject={breadcrumbObject}
			/>
			<Container>
				<Row>
					<Col xs={12}>
						<h1>{title}</h1>
					</Col>
				</Row>
				<div style={{height: '48px'}}/>
				<Row>
					<Col xs={6}>
						<EventTypeTag label={'Activity Type'} eventType={eventType} profile={profile} />
						<div>
							<span>{getCreationDate(originalCreationDate, createdAt)}</span>
						</div>
					</Col>
					<Col xs={6}>
						<Authors author={author} authorStaff={authorStaff} />
					</Col>
				</Row>
				<Content contentObject={data['Content']} profile={profile} />
			</Container>
		</div>
	)
}

export default EntryPage;
