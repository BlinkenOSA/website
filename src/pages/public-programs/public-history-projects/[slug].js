import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {fetchPublicHistoryProjectsDetail} from "@/utils/api/fetchProjects";
import Button from "@/components/Button/Button";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import Content from "@/components/Content/Content";
import Spacer from "@/components/Spacer/Spacer";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import getLocData from "@/utils/content/getLocData";
import getImageUrl from "@/utils/content/getImageUrl";
import PageHeader from "@/components/PageHeader/PageHeader";


export const getServerSideProps = (async (context) => {
    const { slug } = context.query;

    const [projectData] = await Promise.all([
        fetchPublicHistoryProjectsDetail(slug)
    ])

    if (projectData['data'].length === 0) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            projectData
        }
    }
})

const ProjectPage = ({projectData}) => {
    const { t, lang } = useTranslation('page')
    const data = projectData['data'][0]['attributes'];

    const title = getLocData(data, 'Title', lang)
    const link = data['Link']
    const buttonText = getLocData(data, 'ButtonText', lang)
    const content = getLocData(data, 'Content', lang)
    const image = getImageUrl(data['Image'])

    const breadCrumbObject = [
        {menu: 'public-programs', title: t('breadcrumb__public_programs')},
        {menu: 'public-programs/public-history-projects', link: '/public-programs/public-history-projects', title: t('public_history_projects__title')}
    ]

    return (
        <>
            <Head>
                <title>Blinken OSA Archivum | {title}</title>
            </Head>
            <div className={style.Page}>
                <Container>
                    <PageHeader title={title} breadcrumbObject={breadCrumbObject} image={image} scrollScale={0.2} isBlur={true} />
                    <Row>
                        <Col xs={12}>
                            <Content contentObject={content} profile={'Public'} />
                        </Col>
                    </Row>
                    <Spacer />
                    <div>
                        <Button
                            type={'primary'}
                            size={'large'}
                            color={'sage'}
                            link={link}>{buttonText ? buttonText : t('project__visit_button__text')}</Button>
                    </div>
                    <Spacer />
                </Container>
            </div>
        </>
    )
}

export default ProjectPage