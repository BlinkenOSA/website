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
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";

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

    const breadCrumbObject = [
        {menu: 'about-us', title: 'About Us'},
        {menu: 'about-us/staff', link: '/about-us/staff', title: 'Staff'}
    ]

    return (
        <div className={style.Page}>
            <Container>
                <SimplePageHeader title={name} breadCrumbObject={breadCrumbObject} />
                <Row>
                    <Col xs={8}>
                        <div className={'subtitle-large'}>{position}</div>
                        <p>
                            {unit}<br/>
                            {email}
                        </p>
                        {bio && <BlocksRenderer content={bio} />}
                    </Col>
                    <Col xs={4}>
                        <div className={style.ImageWrapper}>
                            <MaskedImage src={image} type={'portrait'} />
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
                                        <Tab eventKey="appearences" title="Media outreach">
                                            {
                                                appearences.map(
                                                    (app, idx) => <Appearance key={`appearence_${idx}`} data={app['attributes']} />
                                                )
                                            }
                                        </Tab>
                                    }
                                    {
                                        courses.length > 0 &&
                                        <Tab eventKey="courses" title="Courses taught">
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