import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {fetchPartnerProjectsDetail} from "@/utils/api/fetchProjects";
import Button from "@/components/Button/Button";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import Content from "@/components/Content/Content";
import Spacer from "@/components/Spacer/Spacer";
import BlockContent from "@/components/Content/BlockContent";
import PageHeader from "@/components/PageHeader/PageHeader";
import getImageUrl from "@/utils/content/getImageUrl";
import useTranslation from "next-translate/useTranslation";

export const getServerSideProps = (async (context) => {
    const { slug } = context.query;

    const [projectData] = await Promise.all([
        fetchPartnerProjectsDetail(slug)
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

    const title = data['Title']
    const link = data['Link']
    const buttonText = data['ButtonText']
    const content = data['Content']
    const image = getImageUrl(data['Image'])

    const breadCrumbObject = [
        {menu: 'about-us', title: t('breadcrumb__about_us')},
        {menu: 'about-us/partner-projects', link: '/about-us/partner-projects', title: t('partner_projects__title')}
    ]

    return (
        <div className={style.Page}>
            <PageHeader title={title} breadcrumbObject={breadCrumbObject} image={image} scrollScale={0.2} isBlur={true} />
            <Container>
                <Row>
                    <Col xs={12}>
                        <Content contentObject={content} />
                    </Col>
                </Row>
                <Spacer />
                <div>
                    <Button
                        type={'primary'}
                        size={'large'}
                        color={'mustard'}
                        link={link}>{buttonText ? buttonText : 'Visit Project'}</Button>
                </div>
                <Spacer />
            </Container>
        </div>
    )
}

export default ProjectPage