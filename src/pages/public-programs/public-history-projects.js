import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {fetchArchivalProjects, fetchPartnerProjects, fetchPublicHistoryProjects} from "@/utils/api/fetchProjects";
import PartnerProjectCard from "@/components/Cards/PartnerProjectCard";

export const getServerSideProps = (async () => {
    const [projectsData] = await Promise.all([
        fetchPublicHistoryProjects()
    ])
    return {
        props: {
            projectsData
        }
    }
})


const PublicHistoryProjectsPage = ({projectsData}) => {
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
        { key: 'public-programs', title: 'Public Programs'},
    ]

    return (
        <div className={style.Page}>
            <Container>
                <Breadcrumb breadcrumbObject={breadcrumbObject} />
                <Row>
                    <Col xs={12}>
                        <h1>Public History Projects</h1>
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

export default PublicHistoryProjectsPage;