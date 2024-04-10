import {fetchStaffDetails} from "@/utils/api/fetchStaff";
import style from "@/pages/academics/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import getImageUrl from "@/utils/content/getImageUrl";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import {fetchFellowDetails} from "@/utils/api/fetchFellows";
import getDateString from "@/utils/content/getDateString";


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
    const data = fellowData['data'][0]['attributes'];

    const name = data['Name']
    const bio = data['Bio']
    const fellowshipProgram = data['FellowshipProgram']
    const researchTopic = data['ResearchTopic']
    const affiliation = data['Affiliation']
    const startDate = getDateString(data['StartDate'], 'YYYY-MM-DD', 'fellow')
    const endDate = getDateString(data['EndDate'], 'YYYY-MM-DD', 'fellow')
    const image = getImageUrl(data['Image'])

    return (
        <div className={style.Page}>
            <Container>
                <div style={{height: '48px'}} />
                <Row>
                    <Col xs={12}>
                        <h1>{name}</h1>
                    </Col>
                </Row>
                <div style={{height: '48px'}} />
                <Row>
                    <Col xs={8}>
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
                        <div style={{height: '36px'}} />
                        <BlocksRenderer content={bio} />
                    </Col>
                    <Col xs={4}>
                        <div className={style.ImageWrapper}>
                            <MaskedImage src={image} type={'portrait'} />
                            <div className={style.Caption}>
                                {name}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FellowPage