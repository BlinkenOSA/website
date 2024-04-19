import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import {fetchArchivalProjectsDetail} from "@/utils/api/fetchProjects";
import Button from "@/components/Button/Button";

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
    const content = data['ContentOld']

    return (
        <div className={style.Page}>
            <Container>
                <div style={{height: '48px'}} />
                <Row>
                    <Col xs={12}>
                        <h1>{title}</h1>
                    </Col>
                </Row>
                <div style={{height: '48px'}} />
                <Row>
                    <Col xs={12}>
                        <BlocksRenderer content={content} />
                    </Col>
                </Row>
                <div style={{height: '48px'}} />
                <div>
                    <Button
                        type={'primary'}
                        size={'large'}
                        color={'orange'}
                        link={link}>{buttonText ? buttonText : 'Visit Project'}</Button>
                </div>
                <div style={{height: '48px'}} />
            </Container>
        </div>
    )
}

export default ProjectPage