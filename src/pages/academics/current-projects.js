import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import {fetchAcademicProjectsCurrent, fetchArchivalProjects, fetchPartnerProjects} from "@/utils/api/fetchProjects";
import ProjectCard from "@/components/Cards/ProjectCard";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export const getServerSideProps = (async () => {
    const [projectsData] = await Promise.all([
        fetchAcademicProjectsCurrent()
    ])
    return {
        props: {
            projectsData
        }
    }
})

const AcademicCurrentProjectsPage = ({projectsData}) => {
    const { t, lang } = useTranslation('page')

    const renderProjects = () => {
        return projectsData["data"].map(project => {
            return (
                <Col xs={12} sm={6} md={6}>
                    <ProjectCard
                        key={project["id"]}
                        data={project['attributes']}
                        profile={'Academic'}
                    />
                </Col>
            )
        })
    }

    return (
        <>
            <Head>
                <title>Blinken OSA Archivum | {t('academic_current_projects__title')}</title>
            </Head>
            <div className={style.Page}>
                <Container>
                    <SimplePageHeader title={t('academic_current_projects__title')} menu={'academics'} breadCrumb={t('breadcrumb__academics')} />
                    <Row>
                        {renderProjects()}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AcademicCurrentProjectsPage;