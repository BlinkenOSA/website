import {fetchStaticPage} from "@/utils/api/fetchStaticPage";
import staticPageConfig from "@/config/staticPageConfig";
import style from "./style.module.scss";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {Col, Container, Row} from "react-bootstrap";
import Content from "@/components/Content/Content";
import {useRouter} from "next/router";
import Image from "next/image";
import PageHeader from "@/components/PageHeader/PageHeader";

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

    return (
        <div className={style.Page}>
            <PageHeader title={data['Title']} image={staticPageConfig[pid]['header']} />
            <Container>
                <Content contentObject={data['Content']} />
            </Container>
        </div>
    )
}

export default StaticPage