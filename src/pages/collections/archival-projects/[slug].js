import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import {fetchArchivalProjectsDetail} from "@/utils/api/fetchProjects";
import Button from "@/components/Button/Button";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import Content from "@/components/Content/Content";
import Spacer from "@/components/Spacer/Spacer";

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
    const data = projectData['data'][0]['attributes'];

    const title = data['Title']
    const link = data['Link']
    const buttonText = data['ButtonText']
    const content = data['Content']

    const breadCrumbObject = [
        {menu: 'collections', title: 'Collections'},
        {menu: 'collections/archival-projects', link: '/collections/archival-projects', title: 'Archival Projects'}
    ]

    return (
        <div className={style.Page}>
            <Container>
                <SimplePageHeader title={title} breadCrumbObject={breadCrumbObject} />
                <Row>
                    <Col xs={12}>
                        <Content contentObject={content} profile={'Collections'} />
                    </Col>
                </Row>
                <Spacer />
                <div>
                    <Button
                        type={'primary'}
                        size={'large'}
                        color={'orange'}
                        link={link}>{buttonText ? buttonText : 'Visit Project'}</Button>
                </div>
                <Spacer />
            </Container>
        </div>
    )
}

export default ProjectPage