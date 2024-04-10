import {fetchStaffDetails} from "@/utils/api/fetchStaff";
import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import getImageUrl from "@/utils/content/getImageUrl";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Publication from "@/components/Lists/Publication";
import Appearence from "@/components/Lists/Appearence";
import Course from "@/components/Lists/Course";
import Entry from "@/components/Lists/Entry";

export const getServerSideProps = (async (context) => {
    const { slug } = context.query;

    const [staffData] = await Promise.all([
        fetchStaffDetails(slug)
    ])

    if (staffData['data'].length === 0) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            staffData
        }
    }
})

const StaffPage = ({staffData}) => {
    const data = staffData['data'][0]['attributes'];

    const name = data['Name']
    const bio = data['Bio']
    const unit = data['Unit']
    const email = data['Email']
    const image = getImageUrl(data['Image'])
    const appearences = data['Appearances']['data']
    const courses = data['Courses']['data']
    const entries = data['Entries']['data']
    const publications = data['Publications']['data']

    const detectTabsVisible = () => {
        return appearences.length > 0 || courses.length > 0 || entries.length > 0 || publications.length > 0
    }

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
                        <div className={'subtitle-large'}>{unit}</div>
                        <div className={'subtitle-small'}>{email}</div>
                        <div style={{height: '48px'}} />
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
                {
                    detectTabsVisible() &&
                    <>
                        <div style={{height: '24px'}} />
                        <Row className={style.Tabs}>
                            <Col xs={12}>
                                <Tabs className="mb-3">
                                    {
                                        appearences.length > 0 &&
                                        <Tab eventKey="appearences" title="Appearences">
                                            {
                                                appearences.map(
                                                    (app, idx) => <Appearence key={`appearence_${idx}`} data={app['attributes']} />
                                                )
                                            }
                                        </Tab>
                                    }
                                    {
                                        courses.length > 0 &&
                                        <Tab eventKey="courses" title="Courses">
                                            {
                                                courses.map(
                                                    (course, idx) => <Course key={`course_${idx}`} data={course['attributes']} />
                                                )
                                            }
                                        </Tab>
                                    }
                                    {
                                        publications.length > 0 &&
                                        <Tab eventKey="publications" title="Publications">
                                            {
                                                publications.map(
                                                    (pub, idx) => <Publication key={`publication_${idx}`} data={pub['attributes']} />
                                                )
                                            }
                                        </Tab>
                                    }
                                    {
                                        entries.length > 0 &&
                                        <Tab eventKey="blogs" title="Blogs">
                                            {
                                                entries.map(
                                                    (entry, idx) => <Entry key={`entry_${idx}`} data={entry['attributes']} />
                                                )
                                            }
                                        </Tab>
                                    }
                                </Tabs>
                            </Col>
                        </Row>
                        <div style={{height: '48px'}} />
                    </>
                }
            </Container>
        </div>
    )
}

export default StaffPage