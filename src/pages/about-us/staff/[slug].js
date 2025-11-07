import {fetchStaffDetails} from "@/utils/api/fetchStaff";
import style from "@/pages/about-us/style.module.scss";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import getImageUrl from "@/utils/content/getImageUrl";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Publication from "@/components/StaffLists/Publication";
import Appearance from "@/components/StaffLists/Appearance";
import Course from "@/components/StaffLists/Course";
import Entry from "@/components/StaffLists/Entry";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import Spacer from "@/components/Spacer/Spacer";
import {useMedia} from "react-use";
import {Media} from "@/utils/media";

import * as PropTypes from "prop-types";
import BlockContent from "@/components/Content/BlockContent";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";
import getLocData from "@/utils/content/getLocData";
import {getFullURL} from "@/utils/getFullURL";
import {staffFilterValues} from "@/utils/filterValues/staffFilterValues";

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

Media.propTypes = {
    lessThan: PropTypes.string,
    children: PropTypes.node
};
const StaffPage = ({staffData}) => {
    const { t, lang } = useTranslation('page')
    const isMobile = useMedia('(max-width: 700px)', true);

    const data = staffData['data'][0]['attributes'];

    const firstName = data['FirstName']
    const lastName = data['LastName']
    const bio = getLocData(data, 'Bio', lang)
    // const unit = getLocData(data, 'Unit', lang)
    const position = getLocData(data, 'Position', lang)
    const email = data['Email']
    const image = getImageUrl(data['Image'])
    const appearences = data['Appearances']['data']
    const courses = data['Courses']['data']
    const entries = data['Entries']['data']
    const publications = data['Publications']['data']

    const displayName = lang === 'en' ? `${firstName} ${lastName}` : `${lastName} ${firstName}`

    const getUnit = (unit) => {
        const {t, lang} = useTranslation('filters')

        const filteredFilters = staffFilterValues.filter(filter => filter['value'] === unit)

        if (filteredFilters.length > 0) {
            return t(filteredFilters[0]['translationKey'])
        } else {
            return getLocData(data, 'Unit', lang)
        }
    }

    const unit = getUnit(data['Unit'])

    const detectTabsVisible = () => {
        return appearences.length > 0 || courses.length > 0 || entries.length > 0 || publications.length > 0
    }

    const breadCrumbObject = [
        {menu: 'about-us', title: t('breadcrumb__about_us')},
        {menu: 'about-us/staff', link: '/about-us/staff', title: t('staff__title')}
    ]

    return (
        <>
            <Head>
                <title>Blinken OSA Archivum
                    | {lang === 'en' ? `${firstName} ${lastName}` : `${lastName} ${firstName}`}</title>
                <meta property="og:site_name" content="Blinken OSA Archivum"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={displayName}/>
                <meta property="og:locale" content={lang}/>
                <meta property="og:description" content={position}/>
                <meta property="og:image" content={image}/>
                <meta property="og:url" content={getFullURL(lang)}/>
                <meta name="twitter:site" content="@BlinkenOSA"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content={displayName}/>
                <meta name="twitter:description" content={position}/>
                <meta name="twitter:image" content={image}/>
            </Head>
            <div className={style.Page}>
                <Container>
                    <SimplePageHeader title={lang === 'en' ? `${firstName} ${lastName}` : `${lastName} ${firstName}`}
                                      breadCrumbObject={breadCrumbObject}/>
                    <Row>
                        <Col xs={{order: 2, span: 12}} sm={{order: 1, span: 8}} md={{order: 1, span: 8}}>
                            <div className={'subtitle-large'}>{position}</div>
                            <p>
                                {unit}<br/>
                                {email}
                            </p>
                            {bio && <BlockContent content={bio} profile={'Archives'}/>}
                        </Col>
                        <Col xs={{order: 1, span: 12}} sm={{order: 2, span: 4}} md={{order: 2, span: 4}}>
                            <div className={style.ImageWrapper}>
                                <MaskedImage src={image} type={'portrait'} alt={`Photo of ${lang === 'en' ? `${firstName} ${lastName}` : `${lastName} ${firstName}`}`}/>
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
                                            courses.length > 0 &&
                                            <Tab eventKey="courses" title={isMobile ? t('staff__tab__courses') : t('staff__tab__mobile__courses')}>
                                                {
                                                    courses.map(
                                                        (course, idx) => <Course key={`course_${idx}`} data={course['attributes']} />
                                                    )
                                                }
                                            </Tab>
                                        }
                                        {
                                            publications.length > 0 &&
                                            <Tab eventKey="publications" title={t('staff__tab__publications')}>
                                                {
                                                    publications.map(
                                                        (pub, idx) => <Publication key={`publication_${idx}`} data={pub['attributes']} />
                                                    )
                                                }
                                            </Tab>
                                        }
                                        {
                                            entries.length > 0 &&
                                            <Tab eventKey="blogs" title={t('staff__tab__blogs')}>
                                                {
                                                    entries.map(
                                                        (entry, idx) => <Entry key={`entry_${idx}`} id={entry['id']} data={entry['attributes']} />
                                                    )
                                                }
                                            </Tab>
                                        }
                                        {
                                            appearences.length > 0 &&
                                            <Tab eventKey="appearences" title={isMobile ? t('staff__tab__appearances') : t('staff__tab__mobile__appearances')}>
                                                {
                                                    appearences.map(
                                                        (app, idx) => <Appearance key={`appearence_${idx}`} data={app['attributes']} />
                                                    )
                                                }
                                            </Tab>
                                        }
                                    </Tabs>
                                </Col>
                            </Row>
                        </>
                    }
                </Container>
                <Spacer />
            </div>
        </>
    )
}

export default StaffPage