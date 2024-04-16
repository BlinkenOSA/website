import {fetchStaticPage} from "@/utils/api/fetchStaticPage";
import staticPageConfig from "@/config/staticPageConfig";
import style from "./style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Content from "@/components/Content/Content";
import PageHeader from "@/components/PageHeader/PageHeader";
import {useRouter} from "next/router";
import getImageUrl from "@/utils/content/getImageUrl";

export const getServerSideProps = (async (context) => {
    const { pid } = context.query;

    if (pid in staticPageConfig) {
        const identifier = staticPageConfig[pid]['id']
        const [pageData] = await Promise.all([
            fetchStaticPage(identifier)
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

const StaticPage = ({pageData}) => {
    const router = useRouter();
    const {pid} = router.query;

    const data = pageData['data']['attributes'];
    const image = getImageUrl(data['CardImage'])

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