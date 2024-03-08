import {fetchEventDetail} from "@/utils/api/fetchEvents";
import style from "@/pages/pages.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Content from "@/components/Content/Content";
import getDateString from "@/utils/getDateString";
import getIconByEventType from "@/utils/getIconByType";
import getColor from "@/utils/getColor";
import EventTypeTag from "@/components/Tag/EventTypeTag";

export const getServerSideProps = (async (context) => {
	const { id } = context.query;

	const [eventRes] = await Promise.all([
		fetchEventDetail(id),
	]);

	const [eventData] = await Promise.all([
		eventRes.json()
	])

	if (eventData['data'] === null) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			eventData
		}
	}
})

const EventPage = ({eventData}) => {
	const data = eventData['data']['attributes'];
	const startDate = data['StartDate']
	const endDate = data['EndDate']
	const location = data['Location']
	const language = data['Language']
	const eventType = data['EventType']
	const hostingType = data['HostingType']
	const profile = data['Profile']
	const registrationLink = data['RegistrationLink']

	const breadcrumbObject = [
		{ key: 'events', title: 'Events'},
		// { key: eventData['id'], title: data['Title']},
	]

	return (
		<div className={style.Page}>
			<Container>
				<Breadcrumb breadcrumbObject={breadcrumbObject} />
				<Row>
					<Col xs={12}>
						<h1>{data['Title']}</h1>
					</Col>
				</Row>
				<div style={{height: '48px'}}/>
				<Row>
					<Col xs={12}>
						<EventTypeTag eventType={eventType} profile={profile} />
						<div>
							<span className={'subtitle-small'}>Start: </span>
							<span>{getDateString(startDate, 'YYYY-MM-DDTHH:MM:SS', 'eventFull')}</span>
						</div>
						{
							(endDate && endDate !== null) &&
							<div>
								<span className={'subtitle-small'}>End: </span>
								<span>{getDateString(endDate, 'YYYY-MM-DDTHH:MM:SS', 'eventFull')}</span>
							</div>
						}
						{
							(location && location !== null) &&
							<div>
								<span className={'subtitle-small'}>Venue: </span>
								<span>{location}</span>
							</div>
						}
						<div>
							<span className={'subtitle-small'}>{hostingType}, {language}</span>
						</div>
					</Col>
				</Row>
				<Content contentObject={data['Content']} />
			</Container>
		</div>
	)
}

export default EventPage;
