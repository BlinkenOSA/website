import style from "./AnnualReportCard.module.scss";
import Button from "@/components/Button/Button";
import {Col, Row} from "react-bootstrap";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import getImageData from "@/utils/content/getImageData";
import {Media} from "@/utils/media";
import Spacer from "@/components/Spacer/Spacer";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";

const AnnualReportCard = ({data}) => {
    const { t, lang } = useTranslation('cards')

    const description = getLocData(data, "Description", lang)
    const link = data['Link']
    const year = data['Year']
    const imageData = getImageData(data['Image'], 'small')

    return (
        <div className={style.AnnualReportWrapper}>
            <div className={style.HeaderRow}>
                <div className={style.Year}>{year}</div>
                <div className={style.Button}>
                    <Link href={link} target={'_blank'}>
                        <Button type={'primary'} color={'mustard'}>{t('annual_report__button')}</Button>
                    </Link>
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