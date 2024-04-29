import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import {fetchArchivalProjects, fetchPartnerProjects} from "@/utils/api/fetchProjects";
import ProjectCard from "@/components/Cards/ProjectCard";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";

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
                <Col xs={12} sm={6} md={6}>
                    <ProjectCard
                        key={project["id"]}
                        data={project['attributes']}
                        profile={'Collections'}
                    />
                </Col>
            )
        })
    }

    return (
        <div className={style.Page}>
            <Container>
                <SimplePageHeader title={'Archival Projects'} menu={'collections'} breadCrumb={'Collections'} />
                <Row>
                    {renderProjects()}
                </Row>
            </Container>
        </div>
    )
}

export default ArchivalProjectsPage;