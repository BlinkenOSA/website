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
import {getFullURL} from "@/utils/getFullURL";
import {fetchInternDetails} from "@/utils/api/fetchInterns";
import Spacer from "@/components/Spacer/Spacer";


export const getServerSideProps = (async (context) => {
    const { slug } = context.query;

    const [internData] = await Promise.all([
        fetchInternDetails(slug)
    ])

    if (internData['data'].length === 0) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            internData
        }
    }
})

const InternPage = ({internData}) => {
    const { t, lang } = useTranslation('page')

    const data = internData['data'][0]['attributes'];

    const name = data['Name']
    const bio = data['Bio']
    const project = data['Project']
    const startDate = getDateString(data['StartDate'], 'YYYY-MM-DD', 'fellow')
    const endDate = getDateString(data['EndDate'], 'YYYY-MM-DD', 'fellow')
    const image = getImageUrl(data['Image'])

    const detectPastInterns = () => {
        const now = dayjs()
        let intern = 'current'

        if (data['EndDate']) {
            if (dayjs(data['EndDate']) < now) {
                intern = 'past'
            }
        }

        return intern
    }

    const breadCrumbObject = [
        {menu: 'academics', title: t('breadcrumb__academics')},
        {menu: `academics/${detectPastInterns()}-interns`, link: `/academics/${detectPastInterns()}-interns`, title: t(`${detectPastInterns()}_interns__title`)}
    ]

    return (
        <>
            <Head>
                <title>Blinken OSA Archivum | {name}</title>
                <meta property="og:site_name" content="Blinken OSA Archivum"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={name}/>
                <meta property="og:locale" content={lang}/>
                <meta property="og:description" content={project}/>
                <meta property="og:image" content={image}/>
                <meta property="og:url" content={getFullURL(lang)}/>
                <meta name="twitter:site" content="@BlinkenOSA"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content={name}/>
                <meta name="twitter:description" content={project}/>
                <meta name="twitter:image" content={image}/>
            </Head>
            <div className={style.Page}>
                <Container>
                    <SimplePageHeader title={name} breadCrumbObject={breadCrumbObject}/>
                    <Row>
                        <Col xs={{order: 2, span: 12}} sm={{order: 1, span: 8}} md={{order: 1, span: 8}}>
                            <div className={'subtitle-small'}>Archives Intern</div>
                            <div>
                                <span className={'subtitle-small'}>Project: </span>
                                {project}
                            </div>
                            <div>
                                <span className={'subtitle-small'}>Duration: </span>
                                {startDate} - {endDate}
                            </div>
                            <Spacer size={'medium'}/>
                            <BlockContent content={bio} profile={'Academics'} />
                        </Col>
                        <Col xs={{order: 1, span: 12}} sm={{order: 2, span: 4}} md={{order: 2, span: 4}}>
                            <div className={style.ImageWrapper}>
                                <MaskedImage src={image} type={'portrait'} alt={`Photo of ${name}`}/>
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

export default InternPage