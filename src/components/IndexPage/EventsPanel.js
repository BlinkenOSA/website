import {Col, Row} from "react-bootstrap";
import EventCard from "@/components/Cards/EventCard";
import SectionDivider from "@/components/IndexPage/SectionDivider";
import useTranslation from "next-translate/useTranslation";
import getLocalizedContent from "@/utils/content/getLocalizedContent";
import style from "./EventsPanel.module.scss";
import Button from "@/components/Button/Button";
import {Media} from "@/utils/media";
import Spacer from "@/components/Spacer/Spacer";

const EventsPanel = ({eventsData}) => {
    const { t, lang } = useTranslation('index')

    const renderEventCard = () => {
        return eventsData["data"].map((event, idx) => {
            return (
                <Col key={`event_${idx}`} xs={12} sm={6} md={4}>
                    <EventCard
                        id={event['id']}
                        key={`event_${event["id"]}`}
                        data={getLocalizedContent(event['attributes'], lang)}
                    />
                </Col>
            )
        })
    }

    if (eventsData) {
        return (
            <>
                <SectionDivider title={t('events')}
                                buttonText={t('events__button')}
                                buttonLink={'/public-programs/program-calendar'}
                                subTitle={t('events__free-text')}/>
                <Row className={style.Row}>
                    {renderEventCard()}
                </Row>
                <Media lessThan="sm">
                    <div style={{textAlign: "center"}}>
                        <Button
                            type={'primary'}
                            size={'large'}
                            color={'neutral'}
                            linkTarget={'_self'}
                            link={'/public-programs/program-calendar'}>
                            {t('events__button')}
                        </Button>
                    </div>
                    <Spacer />
                </Media>
            </>
        )
    } else {
        return ''
    }
}

export default EventsPanel;