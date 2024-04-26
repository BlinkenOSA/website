import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import {fetchArchivalProjectsDetail, fetchPublicHistoryProjectsDetail} from "@/utils/api/fetchProjects";
import Button from "@/components/Button/Button";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import Content from "@/components/Content/Content";

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
    const data = projectData['data'][0]['attributes'];

    const title = data['Title']
    const link = data['Link']
    const buttonText = data['ButtonText']
    const contentOld = data['ContentOld']
    const content = data['Content']

    const breadCrumbObject = [
        {menu: 'public-programs', title: 'Public Programs'},
        {menu: 'public-programs/public-history-projects', link: '/public-programs/public-history-projects', title: 'Public History Projects'}
    ]

    return (
        <div className={style.Page}>
            <Container>
                <SimplePageHeader title={title} breadCrumbObject={breadCrumbObject} />
                <Row>
                    <Col xs={12}>
                        <Content contentObject={content} />
                    </Col>
                </Row>
                {
                    contentOld &&
                    <Row>
                        <Col xs={12}>
                            <BlocksRenderer content={contentOld}/>
                        </Col>
                    </Row>
                }
                <div style={{height: '48px'}} />
                <div>
                    <Button
                        type={'primary'}
                        size={'large'}
                        color={'sage'}
                        link={link}>{buttonText ? buttonText : 'Visit Project'}</Button>
                </div>
                <div style={{height: '48px'}} />
            </Container>
        </div>
    )
}

export default ProjectPage