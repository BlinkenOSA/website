import externalPageConfig from "@/config/externalPageConfig";
import style from "./style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Content from "@/components/Content/Content";
import {fetchExternalPage} from "@/utils/api/fetchExternalPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import {useRouter} from "next/router";
import Button from "@/components/Button/Button";
import getColor from "@/utils/content/getColor";
import getImageUrl from "@/utils/content/getImageUrl";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";

export const getServerSideProps = (async (context) => {
	const { pid } = context.query;

	if (pid in externalPageConfig) {
		const identifier = externalPageConfig[pid]['id']
		const [pageData] = await Promise.all([
			fetchExternalPage(identifier)
		])

		if (pageData['data'] === null) {
			return {
				notFound: true,
			}
		}

		return {
			props: {
				pageData
			}
		}
	} else {
		return {
			notFound: true,
		}
	}
})

const ExternalPage = ({pageData}) => {
	const router = useRouter();
	const {pid} = router.query;

	const {t, lang} = useTranslation('menu')

	const data = pageData['data']['attributes'];

	const title = getLocData(data, 'Title', lang)
	const content = getLocData(data, 'Content', lang)
	const image = getImageUrl(data['CardImage'], 'full')
	const link = getLocData(data, 'Link', lang)
	const linkButtonText = getLocData(data, 'LinkButtonText', lang)

	const profile = externalPageConfig[pid]['profile']
	const breadCrumb = t(externalPageConfig[pid]['menu'])
	const menu = externalPageConfig[pid]['menu']

	return (
		<>
			<Head>
				<title>Blinken OSA Archivum | {title}</title>
				<meta property="og:site_name" content="Blinken OSA Archivum"/>
				<meta property="og:type" content="website"/>
				<meta property="og:title" content={title}/>
				<meta property="og:locale" content={lang}/>
				<meta property="og:image" content={image}/>
				<meta name="twitter:site" content="@BlinkenOSA"/>
				<meta name="twitter:card" content="summary"/>
				<meta name="twitter:title" content={title}/>
				<meta name="twitter:image" content={image}/>
			</Head>
			<div className={style.Page}>
				<PageHeader title={title} image={image} scrollScale={0.2} breadCrumb={breadCrumb} menu={menu}/>
				<Container>
					<Content contentObject={content} profile={profile}/>
					<div className={style.BottomLine}>
						<Button link={link} color={getColor(profile)}>{linkButtonText}</Button>
					</div>
					<div style={{height: '48px'}}/>
				</Container>
			</div>
		</>
	)
}

export default ExternalPage