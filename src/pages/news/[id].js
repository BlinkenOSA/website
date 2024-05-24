import style from "./style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Content from "@/components/Content/Content";
import {fetchNewsDetail} from "@/utils/api/fetchNews";
import Authors from "@/components/Authors/Authors";
import getCreationDate from "@/utils/content/getCreationDate";
import PageHeader from "@/components/PageHeader/PageHeader";
import getImageUrl from "@/utils/content/getImageUrl";
import Spacer from "@/components/Spacer/Spacer";
import useTranslation from "next-translate/useTranslation";

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
	const { t, lang } = useTranslation('page')
	const data = newsData['data']['attributes'];

	const activityType = data['ActivityType']
	const profile = data['Profile']
	const author = data['Author']
	const authorStaff = data['AuthorStaff']
	const originalCreationDate = data['OriginalCreationDate']
	const createdAt = data['createdAt']
	const image = getImageUrl(data['Image'])

	const breadcrumbObject = [
		{menu: 'about-us', title: t('breadcrumb__about_us')},
		{menu: 'news', link: '/news', title: t('news__title')}
	]

	return (
		<div className={style.Page}>
			<PageHeader
				title={data['Title']}
				color={data['Profile']}
				image={image}
				breadCrumbObject={breadcrumbObject}
				scrollScale={0.5}
				isBlur={true}
			/>
			<Container>
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
				<Spacer size={'medium'} />
				<Content contentObject={data['Content']} profile={profile}/>
			</Container>
		</div>
	)
}

export default NewsPage;
