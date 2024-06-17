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
import getLocData from "@/utils/content/getLocData";
import Head from "next/head";
import TranslationChecker from "@/components/TranslationChecker/TranslationChecker";

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
		<>
			<Head>
				<title>Blinken OSA Archivum | {getLocData(data, 'Title', lang)}</title>
			</Head>
			<div className={style.Page}>
				<PageHeader
					title={getLocData(data, 'Title', lang)}
					color={data['Profile']}
					image={image}
					breadCrumbObject={breadcrumbObject}
					scrollScale={0.5}
					isBlur={true}
				/>
				<Container>
					<TranslationChecker data={data}/>
					<Row>
						<Col xs={6}>
							<div>
								<span>{getCreationDate(originalCreationDate, createdAt, lang)}</span>
							</div>
						</Col>
						<Col xs={6}>
							<Authors author={author} authorStaff={authorStaff} />
						</Col>
					</Row>
					<Spacer size={'medium'} />
					<Content contentObject={getLocData(data, 'Content', lang)} profile={profile}/>
					<Spacer size={'medium'} />
				</Container>
			</div>
		</>
	)
}

export default NewsPage;
