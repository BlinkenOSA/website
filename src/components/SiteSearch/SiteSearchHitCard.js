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
        switch (hit.type) {
            case 'news':
                return `/news/${hit.id}`
            case 'event':
                return `/events/${hit.id}`
            case 'collection':
                switch (hit.ContentTypes[0]) {
                    case 'Curated':
                        return `/collections/curated-collections/${hit.Slug}`
                    case 'Digital':
                    case 'Online':
                        return `/collections/online-collections/${hit.Slug}`
                    case 'AV':
                        return `/collections/av-collections/${hit.Slug}`
                }
                break;
            case 'entry':
                return `/entries/${hit.EntryType.toLowerCase()}/${hit.id}`
            case 'staff':
                return `/about-us/staff/${hit.Slug}`
            case 'project':
                switch (hit.Profiles[0]) {
                    case 'Archivum':
                    case 'Archival':
                        return `/about-us/partner-projects/${hit.Slug}`
                    case 'Collections':
                        return `/collections/archival-projects/${hit.Slug}`
                    case 'Public':
                        return `/public-programs/public-history-projects/${hit.Slug}`
                    default:
                        return ''
                }
                break;
            case 'fellow':
                return `/academics/fellows/${hit.Slug}`
            case 'job':
                return `/about-us/jobs/${hit.Slug}`
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