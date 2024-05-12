import style from "../style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Content from "@/components/Content/Content";
import EventTypeTag from "@/components/Tag/EventTypeTag";
import {fetchEntriesDetail} from "@/utils/api/fetchEntries";
import Authors from "@/components/Authors/Authors";
import getCreationDate from "@/utils/content/getCreationDate";
import PageHeader from "@/components/PageHeader/PageHeader";
import {toCapitalize} from "@/utils/toCapitalize";
import LabeledData from "@/components/LabeledData/LabeledData";
import getImageData from "@/utils/content/getImageData";
import getImageUrl from "@/utils/content/getImageUrl";

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
	const image = getImageUrl(data['Image'])

	const breadcrumbObject = [
		{ menu: 'about-us', title: 'About Us'},
		{ menu: 'blog', link: '/entries', title: 'Blogs, Podcasts, Videos'},
	]

	return (
		<div className={style.Page}>
			<PageHeader
				title={data['Title']}
				color={data['Profile']}
				image={image}
				breadcrumbObject={breadcrumbObject}
				scrollScale={0.5}
				isBlur={true}
			/>
			<Container>
				<Row>
					<Col xs={6}>
						<div className={style.CreationDate}>
							<LabeledData
								marginBottom={0}
								data={getCreationDate(originalCreationDate, createdAt)}
								label={'Published'}/>
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
