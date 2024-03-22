import {fetchStaticPage} from "@/utils/api/fetchStaticPage";
import pageConfig from "@/config/pageConfig";
import style from "./style.module.scss";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {Col, Container, Row} from "react-bootstrap";
import Content from "@/components/Content/Content";
import {useRouter} from "next/router";
import Image from "next/image";

export const getServerSideProps = (async (context) => {
    const { pid } = context.query;

    if (pid in pageConfig) {
        const identifier = pageConfig[pid]['id']
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

const breadcrumbObject = [
    { key: 'about-us', title: 'About Us'},
    // { key: eventData['id'], title: data['Title']},
]

const StaticPage = ({pageData}) => {
    const router = useRouter();
    const {pid} = router.query;
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

export default StaticPage