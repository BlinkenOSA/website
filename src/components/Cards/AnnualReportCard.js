import style from "./AnnualReportCard.module.scss";
import Button from "@/components/Button/Button";
import {Col, Row} from "react-bootstrap";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageData from "@/utils/content/getImageData";
import {Media} from "@/utils/media";
import Spacer from "@/components/Spacer/Spacer";

const AnnualReportCard = ({data}) => {
    const description = data['Description']
    const link = data['Link']
    const year = data['Year']
    const imageData = getImageData(data['Image'], 'medium')

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
                <Col xs={12} sm={5} md={5}>
                    <MaskedImage
                        type={'landscape'}
                        src={imageData['url']}
                        aspectRatio={imageData['width']/imageData['height']}
                    />
                </Col>
                <Media at="xs">
                    <Spacer />
                </Media>
                <Col xs={12} sm={7} md={7}>
                    {description}
                </Col>
            </Row>
        </div>
    )
}

export default AnnualReportCard;