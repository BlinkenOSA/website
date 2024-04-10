import style from "./HeroV2.module.scss";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import Button from "@/components/Button/Button";
import getImageUrl from "@/utils/content/getImageUrl";
import {Col, Container, Row} from "react-bootstrap";

const HeroV2 = ({data}) => {

    // Populate fields
    const date = data['Date']
    const time = data['Time']
    const location = data['Location']
    const title_1 = data['Title1stRow']
    const title_2 = data['Title2ndRow']
    const subtitle_1 = data['Subtitle1stRow']
    const subtitle_2 = data['Subtitle2ndRow']
    const buttonText = data['ButtonText']
    const buttonLink = data['ButtonLink']
    const image = getImageUrl(data['Image'])

    const generateButton = () => {
        if (buttonText !== null) {
            if (buttonLink) {
                return (
                    <a href={buttonLink}>
                        <div className={style.ButtonWrapper}>
                            <div className={style.Button}>
                                <Button size={'large'} type={'hero-primary'} color={'neutral'}>{buttonText}</Button>
                            </div>
                        </div>
                    </a>
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
            <Container style={{position: 'relative'}}>
                <Row>
                    <Col xs={6}>
                        <div className={style.TextWrapper}>
                            <div className={`${style.TopRow} hero-top-row`}>
                                <div className={style.Date}>
                                    <span>{date}</span>
                                    {generateTime()}
                                </div>
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
            <div className={style.PosterWrapper}>
                <MaskedImage src={image} type={'hero'}/>
            </div>
            <div className={style.Background}/>
        </div>
    )
}

export default HeroV2;