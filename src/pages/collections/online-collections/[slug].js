import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {fetchCollectionHighlightsDetail} from "@/utils/api/fetchCollectionHighlights";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import Button from "@/components/Button/Button";
import Content from "@/components/Content/Content";
import Spacer from "@/components/Spacer/Spacer";

export const getServerSideProps = (async (context) => {
    const { slug } = context.query;

    const [collectionData] = await Promise.all([
        fetchCollectionHighlightsDetail(slug, 'Online')
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
    const link = data['Link']

    const breadCrumbObject = [
        {menu: 'collections', title: 'Collections'},
        {menu: 'collections/online-collections', link: '/collections/online-collections', title: 'Online Collections'}
    ]

    return (
        <div className={style.Page}>
            <Container>
                <SimplePageHeader title={title} breadCrumbObject={breadCrumbObject} />
                <Row>
                    <Col xs={12}>
                        <Content contentObject={content} profile={'Collections'} />
                    </Col>
                </Row>
                <Spacer />
                {
                    link &&
                    <Button
                        type={'primary'}
                        size={'large'}
                        color={'orange'}
                        link={link}>{'Visit Collection'}</Button>
                }
                <Spacer />
            </Container>
        </div>
    )
}

export default CollectionDetailPage