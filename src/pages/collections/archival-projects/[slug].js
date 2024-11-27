import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {fetchArchivalProjectsDetail} from "@/utils/api/fetchProjects";
import Button from "@/components/Button/Button";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import Content from "@/components/Content/Content";
import Spacer from "@/components/Spacer/Spacer";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import getLocData from "@/utils/content/getLocData";
import PageHeader from "@/components/PageHeader/PageHeader";
import getImageUrl from "@/utils/content/getImageUrl";

export const getServerSideProps = (async (context) => {
    const { slug } = context.query;

    const [projectData] = await Promise.all([
        fetchArchivalProjectsDetail(slug)
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

    const description = getLocData(data, 'CardText', lang)

    const breadCrumbObject = [
        {menu: 'collections', title: t('breadcrumb__collections')},
        {menu: 'collections/archival-projects', link: '/collections/archival-projects', title: t('archival_projects__title')}
    ]

    return (
        <>
            <Head>
                <title>Blinken OSA Archivum | {title}</title>
                <meta property="og:site_name" content="Blinken OSA Archivum"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={title}/>
                <meta property="og:locale" content={lang}/>
                <meta property="og:description" content={description}/>
                <meta property="og:image" content={image}/>
                <meta name="twitter:site" content="@BlinkenOSA"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:image" content={image}/>
            </Head>
            <div className={style.Page}>
                <Container>
                    <PageHeader title={title} breadcrumbObject={breadCrumbObject} image={image} scrollScale={0.2}
                                isBlur={true}/>
                    <Row>
                        <Col xs={12}>
                            <Content contentObject={content} profile={'Collections'}/>
                        </Col>
                    </Row>
                    <Spacer/>
                    <div>
                        <Button
                            type={'primary'}
                            size={'large'}
                            color={'orange'}
                            link={link}>{buttonText ? buttonText : t('project__visit_button__text')}</Button>
                    </div>
                    <Spacer />
                </Container>
            </div>
        </>
    )
}

export default ProjectPage