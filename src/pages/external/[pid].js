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
	const data = pageData['data']['attributes'];

	const content = data['Content']
	const image = getImageUrl(data['CardImage'], 'full')
	const profile = externalPageConfig[pid]['profile']

	return (
		<div className={style.Page}>
			<PageHeader title={data['Title']} image={image} scrollScale={0.2} />
			<Container>
				<Content contentObject={content} profile={profile} />
				<div className={style.BottomLine}>
					<Button link={data['Link']} color={getColor(profile)}>{data['LinkButtonText']}</Button>
				</div>
				<div style={{height: '48px'}}/>
			</Container>
		</div>
	)
}

export default ExternalPage