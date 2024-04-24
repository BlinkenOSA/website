import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {fetchCollectionHighlightsDetail} from "@/utils/api/fetchCollectionHighlights";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";

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

    const breadCrumbObject = [
        {menu: 'collections', title: 'Collections'},
        {menu: 'collections/collection-highlights', link: '/collections/collection-highlights', title: 'Collection Highlights'}
    ]

    return (
        <div className={style.Page}>
            <Container>
                <SimplePageHeader title={title} breadCrumbObject={breadCrumbObject} />
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