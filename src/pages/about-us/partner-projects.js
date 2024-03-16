import {fetchAnnualReports} from "@/utils/api/fetchAnnualReports";
import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import AnnualReportCard from "@/components/Cards/AnnualReportCard";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {fetchPartnerProjects} from "@/utils/api/fetchPartnerProjects";
import PartnerProjectCard from "@/components/Cards/PartnerProjectCard";

export const getServerSideProps = (async () => {
    const [projectsData] = await Promise.all([
        fetchPartnerProjects()
    ])
    return {
        props: {
            projectsData
        }
    }
})

const PartnerProjectsPage = ({projectsData}) => {
    const renderProjects = () => {
        return projectsData["data"].map(project => {
            return (
                <Col xs={6}>
                    <PartnerProjectCard
                        key={project["id"]}
                        data={project['attributes']}
                    />
                </Col>
            )
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
                        <h1>Partner Projects</h1>
                    </Col>
                </Row>
                <div style={{height: '48px'}} />
                <Row>
                    {renderProjects()}
                </Row>
            </Container>
        </div>
    )
}

export default PartnerProjectsPage;