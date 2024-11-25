import style from "./HeroV2.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Button from "@/components/Button/Button";
import getImageUrl from "@/utils/content/getImageUrl";
import {Col, Container, Row} from "react-bootstrap";
import getColor from "@/utils/content/getColor";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";
import {useWindowSize} from "react-use";
import {Media} from "@/utils/media";

const HeroV2 = ({data, index}) => {
    const { t, lang } = useTranslation('cards')

    const {width, height} = useWindowSize();

    const getImageSize = (w) => {
        if (w > 1200) {
            return 'full'
        }

        if (w > 800) {
            return 'large'
        }

        if (w > 600) {
            return 'medium'
        }

        return 'small'
    }

    // Populate fields
    const date = data['Date']
    const time = data['Time']
    const location = data['Location']
    const title_1 = getLocData(data ,'Title1stRow', lang)
    const title_2 = getLocData(data, 'Title2ndRow', lang)
    const subtitle_1 = getLocData(data, 'Subtitle1stRow', lang)
    const subtitle_2 = getLocData(data, 'Subtitle2ndRow', lang)
    const buttonText = getLocData(data, 'ButtonText', lang)
    const buttonLink = getLocData(data, 'ButtonLink', lang)
    const profile = data['Profile']
    const color = getColor(profile)

    const generateButton = () => {
        if (buttonText !== null) {
            if (buttonLink) {
                return (
                    <Link href={buttonLink}>
                        <div className={style.ButtonWrapper}>
                            <div className={style.Button}>
                                <Button size={'large'} type={'hero-primary'} color={'neutral'}>{buttonText}</Button>
                            </div>
                        </div>
                    </Link>
                )
            } else {
                return (
                    <div className={style.ButtonWrapper}>
                        <div className={style.Button}>
                            <Button size={'large'} type={'hero-primary'} color={'neutral'}>{buttonText}</Button>
                        </div>
                    </div>
                )
            }
        } else {
            return ''
        }
    }

    const generateTime = () => {
        if (time !== null) {
            const separator = time.indexOf(':');
            return <span style={{marginLeft: '10px'}}>{time.slice(0, separator+3)}</span>
        } else {
            return ''
        }

    }

    return (
        <div className={`${style.HeroWrapper}`}>
            <Container>
                <Row>
                    <Col xs={12} sm={8} md={6} style={{position: 'relative'}}>
                        <div className={style.TextWrapper}>
                            <div className={`${style.TopRow} hero-top-row`}>
                                {
                                    date &&
                                    <div className={style.Date}>
                                        <span>{date}</span>
                                        {generateTime()}
                                    </div>
                                }
                                <div className={style.Location}>
                                    {location}
                                </div>
                            </div>
                            <div className={`${style.Title} hero-title`}>
                                <div>{title_1}</div>
                                {
                                    title_2 !== null &&
                                    <div className={style.SecondTitleRow}>{title_2}</div>
                                }
                            </div>
                            <div className={style.BottomRow}>
                                {
                                    subtitle_1 !== null &&
                                    <div className={`${style.Subtitle} hero-subtitle`}>
                                        {subtitle_1}
                                        {
                                            subtitle_2 !== null &&
                                            <><br/>{subtitle_2}</>
                                        }
                                    </div>
                                }
                                {
                                    generateButton()
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Media at="xs">
                <div className={style.PosterWrapper}>
                    <MaskedImage src={getImageUrl(data['Image'], 'small')} priority={index === 0} type={'hero'} quality={90}/>
                </div>
            </Media>
            <Media at="sm">
                <div className={style.PosterWrapper}>
                    <MaskedImage src={getImageUrl(data['Image'], 'medium')} priority={index === 0} type={'hero'}/>
                </div>
            </Media>
            <Media greaterThanOrEqual="md">
                <div className={style.PosterWrapper}>
                    <MaskedImage src={getImageUrl(data['Image'], 'full')} priority={index === 0} type={'hero'}/>
                </div>
            </Media>
            <div className={`${style.Background} ${style[color]}`}/>
        </div>
    )
}

export default HeroV2;