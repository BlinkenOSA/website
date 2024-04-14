import {fetchEventDetail} from "@/utils/api/fetchEvents";
import style from "./style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Content from "@/components/Content/Content";
import getDateString from "@/utils/content/getDateString";
import EventTypeTag from "@/components/Tag/EventTypeTag";
import Button from "@/components/Button/Button";
import PageHeader from "@/components/PageHeader/PageHeader";
import getImageUrl from "@/utils/content/getImageUrl";

export const getServerSideProps = (async (context) => {
	const { id } = context.query;

	const [eventData] = await Promise.all([
		fetchEventDetail(id)
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
	const image = getImageUrl(data['Image'])
	const zoomLink = data['ZoomLink']
	const registrationLink = data['RegistrationLink']

	const breadcrumbObject = [
		{ key: 'events', title: 'Events'},
		// { key: eventData['id'], title: data['Title']},
	]

	return (
		<>
			<div className={style.Page}>
				<PageHeader
					title={data['Title']}
					color={data['Profile']}
					image={image}
					breadcrumbObject={breadcrumbObject}
				/>
				<Container>
					<Row>
						<Col xs={12}>
							<EventTypeTag label={'Event Type'} eventType={eventType} profile={profile} />
							<div>
								<span className={'subtitle-small'}>Start: </span>
								<span>{getDateString(startDate, undefined, 'eventFull')}</span>
							</div>
							{
								(endDate && endDate !== null) &&
								<div>
									<span className={'subtitle-small'}>End: </span>
									<span>{getDateString(endDate, undefined, 'eventFull')}</span>
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
								<div>
									<span className={'subtitle-small'}>Hosting: </span>
									<span>{hostingType}</span>
								</div>
							</div>
							<div>
								<div>
									<span className={'subtitle-small'}>Language: </span>
									<span>{language}</span>
								</div>
							</div>
							{
								(registrationLink && registrationLink !== null || zoomLink && zoomLink !== null) &&
								<>
									<div style={{height: '24px'}}/>
									<div className={style.Buttons}>
										{
											registrationLink && registrationLink !== null &&
											<Button link={registrationLink} type={'primary'} size={'medium'} color={'neutral'}>Register</Button>
										}
										{
											zoomLink && zoomLink !== null &&
											<Button link={registrationLink} type={'primary'} size={'medium'} color={'neutral'}>Join on Zoom</Button>
										}
									</div>
								</>
							}
						</Col>
					</Row>
					<Content contentObject={data['Content']} profile={profile} />
				</Container>
			</div>
		</>
	)
}

export default EventPage;
