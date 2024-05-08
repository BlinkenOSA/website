import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {fetchPartnerProjectsDetail} from "@/utils/api/fetchProjects";
import Button from "@/components/Button/Button";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import Content from "@/components/Content/Content";
import Spacer from "@/components/Spacer/Spacer";
import BlockContent from "@/components/Content/BlockContent";

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
    const data = projectData['data'][0]['attributes'];

    const title = data['Title']
    const link = data['Link']
    const buttonText = data['ButtonText']
    const contentOld = data['ContentOld']
    const content = data['Content']

    const breadCrumbObject = [
        {menu: 'about-us', title: 'About Us'},
        {menu: 'about-us/partner-projects', link: '/about-us/partner-projects', title: 'Partner Projects'}
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
                            <BlockContent content={contentOld} profile={'Archives'}/>
                        </Col>
                    </Row>
                }
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