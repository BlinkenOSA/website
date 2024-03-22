import externalPageConfig from "@/config/externalPageConfig";
import style from "./style.module.scss";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {Col, Container, Row} from "react-bootstrap";
import Content from "@/components/Content/Content";
import {fetchExternalPage} from "@/utils/api/fetchExternalPage";

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
	const data = pageData['data']['attributes'];

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
				<Content contentObject={data['Content']} />
			</Container>
		</div>
	)
}

export default ExternalPage