import style from "../style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Content from "@/components/Content/Content";
import {fetchEntriesDetail} from "@/utils/api/fetchEntries";
import Authors from "@/components/Authors/Authors";
import getCreationDate from "@/utils/content/getCreationDate";
import PageHeader from "@/components/PageHeader/PageHeader";
import LabeledData from "@/components/LabeledData/LabeledData";
import getImageUrl from "@/utils/content/getImageUrl";
import Spacer from "@/components/Spacer/Spacer";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import getLocData from "@/utils/content/getLocData";
import TranslationChecker from "@/components/TranslationChecker/TranslationChecker";
import {getFullURL} from "@/utils/getFullURL";

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
	const { t, lang } = useTranslation('page')
	const data = entriesData['data']['attributes'];

	const profile = data['Profile']
	const author = data['Author']
	const authorStaff = data['AuthorStaff']
	const originalCreationDate = data['OriginalCreationDate']
	const createdAt = data['createdAt']
	const image = getImageUrl(data['Image'])

	const title = getLocData(data, 'Title', lang)
	const description = getLocData(data, 'CardText', lang)

	const breadcrumbObject = [
		{ menu: 'about-us', title: t('breadcrumb__about_us')},
		{ menu: 'blog', link: '/entries', title: t('entries__title')},
	]

	return (
		<>
			<Head>
				<title>Blinken OSA Archivum | {title}</title>
				<meta property="og:site_name" content="Blinken OSA Archivum"/>
				<meta property="og:type" content="article"/>
				<meta property="og:title" content={title}/>
				<meta property="og:locale" content={lang}/>
				<meta property="og:description" content={description}/>
				<meta property="og:image" content={image}/>
				<meta property="og:url" content={getFullURL(lang)}/>
				<meta name="twitter:site" content="@BlinkenOSA"/>
				<meta name="twitter:card" content="summary"/>
				<meta name="twitter:title" content={title}/>
				<meta name="twitter:description" content={description}/>
				<meta name="twitter:image" content={image}/>
			</Head>
			<div className={style.Page}>
				<PageHeader
					title={getLocData(data, 'Title', lang)}
					color={data['Profile']}
					image={image}
					breadcrumbObject={breadcrumbObject}
					scrollScale={0.5}
					isBlur={true}
				/>
				<Container>
					<TranslationChecker data={data}/>
					<Row>
						<Col xs={6}>
							<div className={style.CreationDate}>
								<LabeledData
									marginBottom={0}
									data={getCreationDate(originalCreationDate, createdAt, lang)}
									label={t('blog__published__text')}/>
							</div>
						</Col>
						<Col xs={6}>
							<Authors author={author} authorStaff={authorStaff} />
						</Col>
					</Row>
					<Spacer size={'medium'} />
					<Content contentObject={getLocData(data,'Content', lang)} profile={profile} />
					<Spacer size={'medium'} />
				</Container>
			</div>
		</>
	)
}

export default EntryPage;
