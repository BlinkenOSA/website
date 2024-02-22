import {fetchAnnualReports} from "@/utils/api/fetchAnnualReports";
import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import AnnualReportCard from "@/components/Cards/AnnualReportCard";

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

    return (
        <div className={style.Page}>
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