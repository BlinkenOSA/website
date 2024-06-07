import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {fetchCollectionHighlightsDetail} from "@/utils/api/fetchCollectionHighlights";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import Button from "@/components/Button/Button";
import Content from "@/components/Content/Content";
import Spacer from "@/components/Spacer/Spacer";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";
import {Head} from "next/document";

export const getServerSideProps = (async (context) => {
    const { slug } = context.query;

    const [collectionData] = await Promise.all([
        fetchCollectionHighlightsDetail(slug, 'AV')
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
    const { t, lang } = useTranslation('page')
    const data = collectionData['data'][0]['attributes'];

    const title = getLocData(data, 'Title', lang)
    const content = getLocData(data, 'Content', lang)
    const link = data['Link']

    const breadCrumbObject = [
        {menu: 'collections', title: t('breadcrumb__collections')},
        {menu: 'collections/av-collections', link: '/collections/av-collections', title: t('av_collections__title')}
    ]

    return (
        <>
            <Head>
                <title>Blinken OSA Archivum | {title}</title>
            </Head>
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
                            link={link}>{t('collections__visit_button__text')}</Button>
                    }
                </Container>
                <Spacer />
            </div>
        </>
    )
}

export default CollectionDetailPage