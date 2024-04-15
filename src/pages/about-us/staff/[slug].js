import {fetchStaffDetails} from "@/utils/api/fetchStaff";
import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import getImageUrl from "@/utils/content/getImageUrl";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Publication from "@/components/StaffLists/Publication";
import Appearance from "@/components/StaffLists/Appearance";
import Course from "@/components/StaffLists/Course";
import Entry from "@/components/StaffLists/Entry";

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
    const position = data['Position']
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
                        <div className={'subtitle-large'}>{position}</div>
                        <p>
                            {unit}<br/>
                            {email}
                        </p>
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
                                                    (app, idx) => <Appearance key={`appearence_${idx}`} data={app['attributes']} />
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
                                                    (entry, idx) => <Entry key={`entry_${idx}`} id={entry['id']} data={entry['attributes']} />
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