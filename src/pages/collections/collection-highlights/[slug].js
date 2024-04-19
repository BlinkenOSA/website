import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {fetchCollectionHighlightsDetail} from "@/utils/api/fetchCollectionHighlights";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";

export const getServerSideProps = (async (context) => {
    const { slug } = context.query;

    const [collectionData] = await Promise.all([
        fetchCollectionHighlightsDetail(slug)
    ])

    if (collectionData['data'].length === 0) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            collectionData
        }
    }
})

const CollectionDetailPage = ({collectionData}) => {
    const data = collectionData['data'][0]['attributes'];

    const title = data['Title']
    const content = data['Content']
    const contentTypes = data['ContentTypes']
    const materialTypes = data['MaterialTypes']

    return (
        <div className={style.Page}>
            <Container>
                <div style={{height: '48px'}} />
                <Row>
                    <Col xs={12}>
                        <h1>{title}</h1>
                    </Col>
                </Row>
                <div style={{height: '48px'}} />
                <Row>
                    <Col xs={12}>
                        <BlocksRenderer content={content} />
                    </Col>
                </Row>
                <div style={{height: '48px'}} />
            </Container>
        </div>
    )
}

export default CollectionDetailPage