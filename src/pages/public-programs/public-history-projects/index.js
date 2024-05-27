import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import {fetchPublicHistoryProjects} from "@/utils/api/fetchProjects";
import ProjectCard from "@/components/Cards/ProjectCard";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

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
    const { t, lang } = useTranslation('page')

    const renderProjects = () => {
        return projectsData["data"].map(project => {
            return (
                <Col xs={12} sm={6} md={6}>
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
        <>
            <Head>
               <title>{t('public_history_projects__title')}</title>
            </Head>
            <div className={style.Page}>
                <Container>
                    <SimplePageHeader title={t('public_history_projects__title')} menu={'public-programs'} breadCrumb={t('breadcrumb__public_programs')} />
                    <Row>
                        {renderProjects()}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default PublicHistoryProjectsPage;