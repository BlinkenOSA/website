import style from "@/pages/academics/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import getImageUrl from "@/utils/content/getImageUrl";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import {fetchFellowDetails} from "@/utils/api/fetchFellows";
import getDateString from "@/utils/content/getDateString";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import dayjs from "dayjs";
import {toCapitalize} from "@/utils/toCapitalize";
import BlockContent from "@/components/Content/BlockContent";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";


export const getServerSideProps = (async (context) => {
    const { slug } = context.query;

    const [fellowData] = await Promise.all([
        fetchFellowDetails(slug)
    ])

    if (fellowData['data'].length === 0) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            fellowData
        }
    }
})

const FellowPage = ({fellowData}) => {
    const { t, lang } = useTranslation('page')

    const data = fellowData['data'][0]['attributes'];

    const name = data['Name']
    const bio = data['Bio']
    const fellowshipProgram = data['FellowshipProgram']
    const researchTopic = data['ResearchTopic']
    const affiliation = data['Affiliation']
    const startDate = getDateString(data['StartDate'], 'YYYY-MM-DD', 'fellow')
    const endDate = getDateString(data['EndDate'], 'YYYY-MM-DD', 'fellow')
    const image = getImageUrl(data['Image'])

    const detectPastFellows = () => {
        const now = dayjs()
        let fellow = 'current'

        if (data['EndDate']) {
            if (dayjs(data['EndDate']) < now) {
                fellow = 'past'
            }
        }

        return fellow
    }

    const breadCrumbObject = [
        {menu: 'academics', title: t('breadcrumb__academics')},
        {menu: `academics/${detectPastFellows()}-fellows`, link: `/academics/${detectPastFellows()}-fellows`, title: t(`${detectPastFellows()}_fellows__title`)}
    ]

    return (
        <>
            <Head>
                <title>Blinken OSA Archivum - {name}</title>
            </Head>
            <div className={style.Page}>
                <Container>
                    <SimplePageHeader title={name} breadCrumbObject={breadCrumbObject} />
                    <Row>
                        <Col xs={{order: 2, span: 12}} sm={{order: 1, span: 8}} md={{order: 1, span: 8}}>
                            <div className={'subtitle-small'}>{affiliation}</div>
                            <div>
                                <span className={'subtitle-small'}>Research topic: </span>
                                {researchTopic}
                            </div>
                            <div>
                                <span className={'subtitle-small'}>Fellowship program: </span>
                                {fellowshipProgram}
                            </div>
                            <div>
                                <span className={'subtitle-small'}>Duration: </span>
                                {startDate} - {endDate}
                            </div>
                            <BlockContent content={bio} profile={'Academics'} />
                        </Col>
                        <Col xs={{order: 1, span: 12}} sm={{order: 2, span: 4}} md={{order: 2, span: 4}}>
                            <div className={style.ImageWrapper}>
                                <MaskedImage src={image} type={'portrait'} />
                                <div className={style.Caption}>
                                    {name}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div style={{height: '36px'}} />
                </Container>
            </div>
        </>
    )
}

export default FellowPage