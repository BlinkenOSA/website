import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {fetchCollectionHighlightsDetail} from "@/utils/api/fetchCollectionHighlights";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import Button from "@/components/Button/Button";
import Content from "@/components/Content/Content";
import Spacer from "@/components/Spacer/Spacer";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";
import Head from "next/head";
import getImageUrl from "@/utils/content/getImageUrl";
import {getFullURL} from "@/utils/getFullURL";
import {Media} from "@/utils/media";
import RelatedMaterials from "@/components/RelatedMaterials/RelatedMaterials";
import getRelatedMaterials from "@/utils/content/getRelatedMaterials";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    const relatedMaterialsData = getRelatedMaterials(collectionData['data']['id'], data)

    const description = getLocData(data, 'CardText', lang)
    const image = getImageUrl(data['Image'])

    const breadCrumbObject = [
        {menu: 'collections', title: t('breadcrumb__collections')},
        {menu: 'collections/av-collections', link: '/collections/av-collections', title: t('av_collections__title')}
    ]

    return (
        <>
            <Head>
                <title>Blinken OSA Archivum | {title}</title>
                <meta property="og:site_name" content="Blinken OSA Archivum"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={title}/>
                <meta property="og:locale" content={lang}/>
                <meta property="og:description" content={description}/>
                <meta property="og:image" content={image}/>
                <meta property="og:url" content={getFullURL(lang)}/>
                <meta name="twitter:site" content="@BlinkenOSA"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:image" content={image}/>
            </Head>
            <div className={style.Page}>
                <Container>
                    <SimplePageHeader title={title} breadCrumbObject={breadCrumbObject}/>
                    <Row>
                        <Col xs={12}>
                            <Content contentObject={content} profile={'Collections'}/>
                        </Col>
                    </Row>
                    <Spacer/>
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
                <Container>
                    <Media at="xs">
                        <RelatedMaterials materialData={relatedMaterialsData} slidesToShow={1} />
                    </Media>
                    <Media at="sm">
                        <RelatedMaterials materialData={relatedMaterialsData} slidesToShow={2} />
                    </Media>
                    <Media greaterThanOrEqual="md">
                        <RelatedMaterials materialData={relatedMaterialsData} slidesToShow={3} />
                    </Media>
                </Container>
            </div>
        </>
    )
}

export default CollectionDetailPage