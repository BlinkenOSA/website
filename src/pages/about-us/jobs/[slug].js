import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import getImageUrl from "@/utils/content/getImageUrl";
import {fetchJobDetail} from "@/utils/api/fetchJobs";
import LabeledData from "@/components/LabeledData/LabeledData";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import Spacer from "@/components/Spacer/Spacer";
import BlockContent from "@/components/Content/BlockContent";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";
import Head from "next/head";

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
    const { t, lang } = useTranslation('page')
    const data = jobData['data'][0]['attributes'];

    const title = getLocData(data, "Title", lang)
    const startingDate = data['StartingDate']
    const duration = data['Duration']
    const location = data['Location']
    const contractType = data['ContractType']
    const deadline = data['ApplicationDeadline']
    const salary = data['Salary']
    const content = getLocData(data, 'Content', lang)
    const jobType = data['JobType']
    const image = getImageUrl(data['Image'])

    const breadCrumbObject = [
        {menu: 'about-us', title: t('breadcrumb__about_us')},
        {menu: 'about-us/jobs', link: '/about-us/jobs', title: t('job__title')}
    ]

    return (
        <>
            <Head>
                <title>Blinken OSA Archivum - {title}</title>
            </Head>
            <div className={style.Page}>
                <Container>
                    <SimplePageHeader title={title} breadCrumbObject={breadCrumbObject} />
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
                    <Spacer />
                    <Row>
                        <Col xs={12}>
                            <BlockContent content={content} profile={'Archives'} />
                        </Col>
                    </Row>
                    <Spacer />
                </Container>
            </div>
        </>
    )
}

export default JobPage