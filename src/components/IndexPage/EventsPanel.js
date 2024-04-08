import {Col, Row} from "react-bootstrap";
import EventCard from "@/components/Cards/EventCard";
import SectionDivider from "@/components/IndexPage/SectionDivider";
import useTranslation from "next-translate/useTranslation";

const EventsPanel = ({eventsData, }) => {
    const { t } = useTranslation('index')

    const renderEventCard = () => {
        return eventsData["data"].map((event, idx) => {
            return (
                <Col key={`event_${idx}`} sm={6} md={6} lg={4}>
                    <EventCard
                        id={event['id']}
                        key={`event_${event["id"]}`}
                        data={event['attributes']}
                    />
                </Col>
            )
        })
    }

    return (
        <>
            <SectionDivider title={t('events')}
                            buttonText={t('events__button')}
                            buttonLink={'/public-programs/program-calendar'}
                            subTitle={t('events__free-text')}/>
            <Row>
                {renderEventCard()}
            </Row>
        </>
    )
}

export default EventsPanel;