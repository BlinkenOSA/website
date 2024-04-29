import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {fetchPartnerProjects} from "@/utils/api/fetchProjects";
import ProjectCard from "@/components/Cards/ProjectCard";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";

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
                <Col xs={12} sm={6} md={6}>
                    <ProjectCard
                        key={project["id"]}
                        data={project['attributes']}
                        profile={'Archivum'}
                    />
                </Col>
            )
        })
    }

    return (
        <div className={style.Page}>
            <Container>
                <SimplePageHeader title={'Partner Projects'} menu={'about-us'} breadCrumb={'About Us'} />
                <Row>
                    {renderProjects()}
                </Row>
            </Container>
        </div>
    )
}

export default PartnerProjectsPage;