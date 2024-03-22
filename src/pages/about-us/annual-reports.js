import {fetchAnnualReports} from "@/utils/api/fetchAnnualReports";
import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import AnnualReportCard from "@/components/Cards/AnnualReportCard";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import PageHeader from "@/components/PageHeader/PageHeader";
import staticPageConfig from "@/config/staticPageConfig";

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
    const renderReports = () => {
        return reportData["data"].map(report => {
            return <AnnualReportCard
                key={report["id"]}
                data={report['attributes']}
            />
        })
    }

    return (
        <div className={style.Page}>
            <PageHeader title={'Annual Reports'} image={''} />
            <Container>
                <Row>
                    <Col xs={12}>
                        {renderReports()}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AnnualReportsPage;