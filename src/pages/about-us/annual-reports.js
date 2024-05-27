import {fetchAnnualReports} from "@/utils/api/fetchAnnualReports";
import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import AnnualReportCard from "@/components/Cards/AnnualReportCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export const getServerSideProps = (async () => {
    const [reportData] = await Promise.all([
        fetchAnnualReports()
    ])
    return {
        props: {
            reportData
        }
    }
})

const AnnualReportsPage = ({reportData}) => {
    const { t, lang } = useTranslation('page')

    const renderReports = () => {
        return reportData["data"].map(report => {
            return <AnnualReportCard
                key={report["id"]}
                data={report['attributes']}
            />
        })
    }

    return (
        <>
            <Head>
                <title>Blinken OSA Archivum | {t('annual_reports__title')}</title>
            </Head>
            <div className={style.Page}>
                <PageHeader
                    title={t('annual_reports__title')}
                    breadCrumb={t('breadcrumb__about_us')}
                    menu={'about-us'}
                    image={'/images/header-annual-reports.jpg'} />
                <Container>
                    <Row>
                        <Col xs={12}>
                            {renderReports()}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AnnualReportsPage;