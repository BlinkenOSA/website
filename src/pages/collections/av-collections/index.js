import {fetchCollectionHighlightsList} from "@/utils/api/fetchCollectionHighlights";
import style from "../style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import CollectionCard from "@/components/Cards/CollectionCard";
import fetcher from "@/utils/api/fetcher";
import useSWR, {SWRConfig, unstable_serialize} from "swr";
import clientFetcher from "@/utils/api/clientFetcher";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import Spacer from "@/components/Spacer/Spacer";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export const getServerSideProps = (async () => {
    const [url, params] = fetchCollectionHighlightsList(100, 'AV')
    const [collectionsData] = await Promise.all([
        fetcher(url, params)
    ])
    return {
        props: {
            initialData: {
                [unstable_serialize([url, params])]: collectionsData
            }
        }
    }
})


const CollectionCards = ({selectedFilter}) => {
    const { data } = useSWR(
        fetchCollectionHighlightsList(undefined, 'AV'),
        ([url, params]) => clientFetcher(url, params)
    )

    return data && data["data"].map(collection => {
        return (
            <Col xs={12} sm={6} md={4}>
                <CollectionCard
                    key={collection["id"]}
                    data={collection['attributes']}
                />
            </Col>
        )
    })
}


const CollectionHighlightsPage = ({initialData}) => {
    const { t, lang } = useTranslation('page')

    return (
        <>
            <Head>
                <title>Blinken OSA Archivum | {t('av_collections__title')}</title>
            </Head>
            <div className={style.Page}>
                <Container>
                    <SimplePageHeader title={t('av_collections__title')} menu={'collections'} breadCrumb={t('breadcrumb__collections')} />
                    <Row>
                        <Col xs={12}>
                            <div className={style.Description}>
                                {
                                    <p>
                                        {t('av_collections__text01')}<br/><br/>
                                        {t('av_collections__text02')}<br/><br/>
                                        {t('av_collections__text03a')}
                                        &nbsp;<Link href={'/collections/online-collections'}>{t('av_collections__link01')}</Link>&nbsp;
                                        {t('av_collections__text03b')}
                                        &nbsp;<Link href={'https://catalog.archivum.org/registration'} target={'_blank'}>{t('av_collections__link02')}</Link>.
                                    </p>
                                }
                            </div>
                        </Col>
                    </Row>
                    <Spacer />
                    <Row>
                        <SWRConfig value={{ fallback: initialData }}>
                            <CollectionCards />
                        </SWRConfig>
                    </Row>
                    <Spacer />
                </Container>
            </div>
        </>
    )
}

export default CollectionHighlightsPage;