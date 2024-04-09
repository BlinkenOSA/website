import {fetchStaticPage} from "@/utils/api/fetchStaticPage";
import staticPageConfig from "@/config/staticPageConfig";
import style from "./style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Content from "@/components/Content/Content";

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
    const data = pageData['data']['attributes'];

    return (
        <div className={style.Page}>
            <Container>
                <div style={{height: '48px'}}/>
                <Row>
                    <Col xs={12}>
                        <h1>{data['Title']}</h1>
                    </Col>
                </Row>
                <div style={{height: '48px'}}/>
                <Content contentObject={data['Content']} profile={'Academics'} />
            </Container>
        </div>
    )
}

export default StaticPage