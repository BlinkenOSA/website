import style from "./AnnualReportCard.module.scss";
import getImageUrl from "@/utils/content/getImageUrl";
import Button from "@/components/Button/Button";
import {Col, Row} from "react-bootstrap";
import MaskedImage from "@/components/MaskedImage/MaskedImage";

const AnnualReportCard = ({data}) => {
    const description = data['Description']
    const link = data['Link']
    const year = data['Year']
    const image = getImageUrl(data['Image'])

    return (
        <div className={style.AnnualReportWrapper}>
            <div className={style.HeaderRow}>
                <div className={style.Year}>{year}</div>
                <div className={style.Button}>
                    <a href={link} target={'_blank'}>
                        <Button type={'primary'} color={'mustard'}>Visit full report</Button>
                    </a>
                </div>
            </div>
            <Row>
                <Col xs={5}>
                    <MaskedImage type={'landscape'} src={image} />
                </Col>
                <Col xs={7}>
                    {description}
                </Col>
            </Row>
        </div>
    )
}

export default AnnualReportCard;