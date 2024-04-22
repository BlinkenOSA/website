import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import {fetchPublicHistoryProjects} from "@/utils/api/fetchProjects";
import ProjectCard from "@/components/Cards/ProjectCard";

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
                    <ProjectCard
                        key={project["id"]}
                        data={project['attributes']}
                        profile={'Public'}
                    />
                </Col>
            )
        })
    }

    return (
        <div className={style.Page}>
            <Container>
                <div style={{height: '48px'}} />
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