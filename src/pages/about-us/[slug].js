import {fetchStaticPage} from "@/utils/api/fetchStaticPage";
import staticPageConfig from "@/config/staticPageConfig";
import style from "./style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Content from "@/components/Content/Content";
import PageHeader from "@/components/PageHeader/PageHeader";
import {useRouter} from "next/router";
import getImageUrl from "@/utils/content/getImageUrl";

export const getServerSideProps = (async (context) => {
    const { slug } = context.query;

    const [pageData] = await Promise.all([
        fetchStaticPage(slug)
    ])

    if (pageData['data'].length === 0) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            pageData
        }
    }
})

const StaticPage = ({pageData}) => {
    const data = pageData['data'][0]['attributes'];
    const image = getImageUrl(data['CardImage'], 'full')

    return (
        <div className={style.Page}>
            <PageHeader title={data['Title']} image={image} scrollScale={0.5}/>
            <Container>
                <Content contentObject={data['Content']} profile={'Collections'} />
            </Container>
        </div>
    )
}

export default StaticPage