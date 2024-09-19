import style from "./SiteSearchHitCard.module.scss"
import React from "react";
import {Col, Row} from "react-bootstrap";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageUrlSearch from "@/utils/content/getImageUrlSearch";
import getCreationDate from "@/utils/content/getCreationDate";
import getIconByType from "@/utils/content/getIconByType";
import Link from "next/link";

const dictionary = {
    annualReport: 'Annual Report',
    collection: 'Collection',
    entry: 'Blog / Podcast / Video',
    event: 'Event',
    fellow: 'Fellow',
    job: 'Job',
    news: 'News',
    page: 'Page',
    project: 'Project',
    staff: 'Staff'
}

const SiteSearchHitCard = ({hit}) => {
    console.log(hit)

    const getActivityType = () => {
        switch (hit.type) {
            case 'news':
                return <div className={style.ActivityType}>{getIconByType(hit.ActivityType, 'small')} {hit.ActivityType}</div>
            case 'event':
                return <div className={style.ActivityType}>{getIconByType(hit.EventType, 'small')} {hit.EventType}</div>
            case 'entry':
                return <div className={style.ActivityType}>{getIconByType(hit.EntryType, 'small')} {hit.EntryType}</div>
        }
    }

    const getLink = () => {
        const getSlug = () => {
            if (hit.locale !== 'en') {
                if (hit.localizations[0].hasOwnProperty('Slug')) {
                    return hit.localizations[0].Slug
                } else {
                    return hit.localizations[0].id
                }
            } else {
                if (hit.hasOwnProperty('Slug')) {
                    return hit.Slug
                } else {
                    return hit.id
                }
            }
        }

        const detectLanguage = () => {
            if (hit.locale === 'en') {
                return ''
            } else {
                return 'hu'
            }
        }

        switch (hit.type) {
            case 'news':
                return `${detectLanguage()}/news/${getSlug()}`
            case 'event':
                return `${detectLanguage()}/events/${getSlug()}`
            case 'collection':
                switch (hit.ContentTypes[0]) {
                    case 'Curated':
                        return `${detectLanguage()}/collections/curated-collections/${getSlug()}`
                    case 'Digital':
                    case 'Online':
                        return `${detectLanguage()}/collections/online-collections/${getSlug()}`
                    case 'AV':
                        return `${detectLanguage()}/collections/av-collections/${getSlug()}`
                }
                break;
            case 'entry':
                return `${detectLanguage()}/entries/${hit.EntryType.toLowerCase()}/${getSlug()}`
            case 'staff':
                return `${detectLanguage()}/about-us/staff/${getSlug()}`
            case 'project':
                switch (hit.Profiles[0]) {
                    case 'Archivum':
                    case 'Archival':
                    case 'Partner':
                        return `${detectLanguage()}/about-us/partner-projects/${getSlug()}`
                    case 'Collections':
                        return `${detectLanguage()}/collections/archival-projects/${getSlug()}`
                    case 'Public':
                        return `${detectLanguage()}/public-programs/public-history-projects/${getSlug()}`
                    default:
                        return ''
                }
            case 'fellow':
                return `${detectLanguage()}/academics/fellows/${getSlug()}`
            case 'job':
                return `${detectLanguage()}/about-us/jobs/${getSlug()}`
            default:
                return ''
        }
    }

    const title = hit.hasOwnProperty('Name') ? hit.Name : hit.Title;
    const image = getImageUrlSearch(hit.hasOwnProperty('Image') ? hit.Image : hit.CardImage, 'small')
    const position = hit.__position
    const cardText = hit.CardText
    const type = dictionary[hit.type]
    const createdAt = hit.createdAt
    const activityType = getActivityType()

    return (
        <div className={style.CardWrapper}>
            <Link href={getLink()}>
                <Row>
                    <Col xs={12} sm={4} md={4}>
                        <div className={style.Image}>
                            <MaskedImage src={image} type={"landscape"} />
                            <div className={`${style.Icon}`}>
                                {position}
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={8} md={8}>
                        <div className={style.CardInfoWrapper}>
                            <div className={'subtitle-large'}>{title}</div>
                            <div className={style.Description}>{cardText}</div>
                            <div className={style.Type}>{type} {activityType}</div>
                            <div className={style.Date}>Created at: {getCreationDate(null, createdAt)}</div>
                        </div>
                    </Col>
                </Row>
            </Link>
        </div>
    )
}

export default SiteSearchHitCard;