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
import {getFullURL} from "@/utils/getFullURL";

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

    const contractTypes = {
        'Full-Time': t('job__full_time'),
        'Part-Time': t('job__part_time'),
    }

    const title = getLocData(data, "Title", lang)
    const description = getLocData(data, 'ContentHighlight', lang)
    const startingDate = getLocData(data, 'StartingDate', lang)
    const duration = getLocData(data, 'Duration', lang)
    const location = getLocData(data, 'Location', lang)
    const contractType = data['ContractType'] ? contractTypes[data['ContractType']] : ''
    const deadline = getLocData(data, 'ApplicationDeadline', lang)
    const salary = getLocData(data, 'Salary', lang)
    const content = getLocData(data, 'Content', lang)
    const image = getImageUrl(data['Image'])

    const breadCrumbObject = [
        {menu: 'about-us', title: t('breadcrumb__about_us')},
        {menu: 'about-us/jobs', link: '/about-us/jobs', title: t('job__title')}
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
                <meta property="og:url" content={getFullURL(lang)}/>
                <meta name="twitter:site" content="@BlinkenOSA"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:image" content={image}/>
            </Head>
            <div className={style.Page}>
                <Container>
                    <SimplePageHeader title={title} breadCrumbObject={breadCrumbObject}/>
                    <Row>
                        <Col xs={12}>
                            <LabeledData label={t('job__starting_date')} data={startingDate} marginBottom={false} />
                            <LabeledData label={t('job__location')} data={location} marginBottom={false} />
                            <LabeledData label={t('job__duration')} data={duration} marginBottom={false} />
                            <LabeledData label={t('job__salary')} data={salary} marginBottom={false} />
                            <LabeledData label={t('job__contract_type')} data={contractType} marginBottom={false} />
                            <LabeledData label={t('job__application_deadline')} data={deadline} marginBottom={false} />
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