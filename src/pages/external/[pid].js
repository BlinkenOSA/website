import externalPageConfig from "@/config/externalPageConfig";
import style from "./style.module.scss";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {Col, Container, Row} from "react-bootstrap";
import Content from "@/components/Content/Content";
import {fetchExternalPage} from "@/utils/api/fetchExternalPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import {useRouter} from "next/router";
import staticPageConfig from "@/config/staticPageConfig";
import Button from "@/components/Button/Button";
import getColor from "@/utils/content/getColor";

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

const breadcrumbObject = [
	{ key: 'about-us', title: 'About Us'},
	// { key: eventData['id'], title: data['Title']},
]

const ExternalPage = ({pageData}) => {
	const router = useRouter();
	const {pid} = router.query;
	const data = pageData['data']['attributes'];
	const profile = externalPageConfig[pid]['profile']

	const content = [{
		"__component": "contents.content",
		"Content": data['Content']
	}]

	return (
		<div className={style.Page}>
			<PageHeader title={data['Title']} image={externalPageConfig[pid]['header']} scrollScale={0.2} />
			<Container>
				<Content contentObject={content} profile={profile} />
				<div className={style.BottomLine}>
					<Button link={data['Link']} color={getColor(profile)}>{data['LinkButtonText']}</Button>
					<div className={style.Text}>Please be aware that by clicking this button, you are about to leave <br/>The Archivum’s website. Thank you for visiting.</div>
				</div>
				<div style={{height: '48px'}}/>
			</Container>
		</div>
	)
}

export default ExternalPage