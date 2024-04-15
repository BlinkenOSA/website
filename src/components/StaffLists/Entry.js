import style from "./lists.module.scss"
import getImageUrl from "@/utils/content/getImageUrl";
import {Col, Row} from "react-bootstrap";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getCreationDate from "@/utils/content/getCreationDate";
import getIconByType from "@/utils/content/getIconByType";
import Link from "next/link";

const Entry = ({id, data}) => {
    const title = data['Title']
    const cardText = data['CardText']
    const entryType = data['EntryType']
    const image = getImageUrl(data['Image'])
    const originalDate = data['OriginalCreationDate']
    const icon = getIconByType(data['EntryType'], 'small')
    const date = data['createdAt']

    const url = data['EntryType'].toLowerCase();

    return (
        <div className={`${style.ListWrapper} ${style.Entry}`}>
            <Link href={`/entries/${url}/${id}`}>
                <Row>
                    <Col xs={4}>
                        <MaskedImage src={image} type={"landscape"} />
                    </Col>
                    <Col xs={8}>
                        <div className={style.EntryInfoWrapper}>
                            <div className={'subtitle-large'}>{title}</div>
                            <div className={style.Description}>{cardText}</div>
                            <div className={style.Date}>{getCreationDate(originalDate, date)}</div>
                            <div className={style.Icon}>{icon} {entryType}</div>
                        </div>
                    </Col>
                </Row>
            </Link>
        </div>
    )
}

export default Entry;