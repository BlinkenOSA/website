import style from "./style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Content from "@/components/Content/Content";
import {fetchNewsDetail} from "@/utils/api/fetchNews";
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
				<div style={{height: '48px'}}/>
				<Row>
					<Col xs={12}>
						<h1>{data['Title']}</h1>
					</Col>
				</Row>
				<div style={{height: '48px'}}/>
				<Row>
					<Col xs={6}>
						<div>
							<span>{getCreationDate(originalCreationDate, createdAt)}</span>
						</div>
					</Col>
					<Col xs={6}>
						<Authors author={author} authorStaff={authorStaff} />
					</Col>
				</Row>
				<Content contentObject={data['Content']} profile={profile}/>
			</Container>
		</div>
	)
}

export default NewsPage;
