import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {fetchArchivalProjects, fetchPartnerProjects} from "@/utils/api/fetchProjects";
import PartnerProjectCard from "@/components/Cards/PartnerProjectCard";

export const getServerSideProps = (async () => {
    const [projectsData] = await Promise.all([
        fetchArchivalProjects()
    ])
    return {
        props: {
            projectsData
        }
    }
})

const ArchivalProjectsPage = ({projectsData}) => {
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
        { key: 'collections', title: 'Collections'},
    ]

    return (
        <div className={style.Page}>
            <Container>
                <Breadcrumb breadcrumbObject={breadcrumbObject} />
                <Row>
                    <Col xs={12}>
                        <h1>Archival Projects</h1>
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

export default ArchivalProjectsPage;