import style from "./style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Content from "@/components/Content/Content";
import getDateString from "@/utils/content/getDateString";
import EventTypeTag from "@/components/Tag/EventTypeTag";
import {fetchNewsDetail} from "@/utils/api/fetchNews";
import AuthorBadge from "@/components/Authors/AuthorBadge";
import Authors from "@/components/Authors/Authors";
import getCreationDate from "@/utils/content/getCreationDate";

export const getServerSideProps = (async (context) => {
	const { id } = context.query;

	const [newsData] = await Promise.all([
		fetchNewsDetail(id)
	])

	if (newsData['data'] === null) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			newsData
		}
	}
})

const NewsPage = ({newsData}) => {
	const data = newsData['data']['attributes'];

	const activityType = data['ActivityType']
	const profile = data['Profile']
	const author = data['Author']
	const authorStaff = data['AuthorStaff']
	const originalCreationDate = data['OriginalCreationDate']
	const createdAt = data['createdAt']

	const breadcrumbObject = [
		{ key: 'news', title: 'News'},
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
						<EventTypeTag label={'News Type'} eventType={activityType} profile={profile} />
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

export default NewsPage;
