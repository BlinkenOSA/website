import {fetchAnnualReports} from "@/utils/api/fetchAnnualReports";
import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import AnnualReportCard from "@/components/Cards/AnnualReportCard";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

export const getServerSideProps = (async () => {
    const [reportRes] = await Promise.all([
        fetchAnnualReports()
    ]);
    const [reportData] = await Promise.all([
        reportRes.json()
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

    const breadcrumbObject = [
        { key: 'about-us', title: 'About Us'},
    ]

    return (
        <div className={style.Page}>
            <Container>
                <Breadcrumb breadcrumbObject={breadcrumbObject} />
                <Row>
                    <Col xs={12}>
                        <h1>Annual Reports</h1>
                    </Col>
                </Row>
                <div style={{height: '48px'}} />
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