import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/academics/style.module.scss";
import {useList} from "react-use";
import useSWR, {SWRConfig, unstable_serialize} from "swr";
import fetcher from "@/utils/api/fetcher";
import clientFetcher from "@/utils/api/clientFetcher";
import {fetchCurrentFellowsList} from "@/utils/api/fetchFellows";
import FellowCard from "@/components/Cards/FellowCard";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import {fetchCurrentInternsList, fetchPastInternsList} from "@/utils/api/fetchInterns";
import InternCard from "@/components/Cards/InternCard";
import Spacer from "@/components/Spacer/Spacer";

export const getServerSideProps = (async () => {
    const [url, params] = fetchPastInternsList()
    const [internData] = await Promise.all([
        fetcher(url, params)
    ])
    return {
        props: {
            initialData: {
                [unstable_serialize([url, params])]: internData
            }
        }
    }
})

const InternCards = () => {
    const { data } = useSWR(
        fetchPastInternsList(),
        ([url, params]) => clientFetcher(url, params)
    )

    return data && data["data"].map(staff => {
        return (
            <Col xs={12} sm={6} md={3}>
                <InternCard
                    key={staff["id"]}
                    data={staff['attributes']}
                />
            </Col>
        )
    })
}

const InternsPage = ({initialData}) => {
    const { t, lang } = useTranslation('page')

    return (
        <>
            <Head>
                <title>Blinken OSA Archivum | {t('past_interns__title')}</title>
            </Head>
            <div className={style.Page}>
                <Container>
                    <SimplePageHeader title={t('past_interns__title')} menu={'academics'} breadCrumb={'Academics'} />
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <SWRConfig value={{ fallback: initialData }}>
                                    <InternCards />
                                </SWRConfig>
                            </Row>
                        </Col>
                    </Row>
                    <Spacer />
                </Container>
            </div>
        </>
    )
}

export default InternsPage;