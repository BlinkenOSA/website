import {fetchStaffDetails} from "@/utils/api/fetchStaff";
import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import getImageUrl from "@/utils/content/getImageUrl";
import {fetchJobDetail} from "@/utils/api/fetchJobs";
import LabeledData from "@/components/LabeledData/LabeledData";
import Content from "@/components/Content/Content";

export const getServerSideProps = (async (context) => {
    const { slug } = context.query;

    const [jobData] = await Promise.all([
        fetchJobDetail(slug)
    ])

    if (jobData['data'].length === 0) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            jobData
        }
    }
})

const JobPage = ({jobData}) => {
    const data = jobData['data'][0]['attributes'];

    const title = data['Title']
    const startingDate = data['StartingDate']
    const duration = data['Duration']
    const location = data['Location']
    const contractType = data['ContractType']
    const deadline = data['ApplicationDeadline']
    const salary = data['Salary']
    const content = data['Content']
    const jobType = data['JobType']
    const image = getImageUrl(data['Image'])


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
                        <LabeledData label={'Starting Date'} data={startingDate} marginBottom={false} />
                        <LabeledData label={'Location'} data={location} marginBottom={false} />
                        <LabeledData label={'Duration'} data={duration} marginBottom={false} />
                        <LabeledData label={'Salary'} data={salary} marginBottom={false} />
                        <LabeledData label={'Contract Type'} data={contractType} marginBottom={false} />
                        <LabeledData label={'Application Deadline'} data={deadline} marginBottom={false} />
                    </Col>
                </Row>
                <div style={{height: '48px'}} />
                <Row>
                    <Col xs={12}>
                        <BlocksRenderer content={content} />
                    </Col>
                </Row>
                <div style={{height: '48px'}} />
            </Container>
        </div>
    )
}

export default JobPage