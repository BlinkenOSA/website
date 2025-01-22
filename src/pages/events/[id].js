import {fetchEventDetail} from "@/utils/api/fetchEvents";
import style from "./style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Content from "@/components/Content/Content";
import getDateString from "@/utils/content/getDateString";
import EventTypeTag from "@/components/Tag/EventTypeTag";
import Button from "@/components/Button/Button";
import PageHeader from "@/components/PageHeader/PageHeader";
import getImageUrl from "@/utils/content/getImageUrl";
import Spacer from "@/components/Spacer/Spacer";
import useTranslation from "next-translate/useTranslation";
import getLocData from "@/utils/content/getLocData";
import Head from "next/head";
import TranslationChecker from "@/components/TranslationChecker/TranslationChecker";
import {getFullURL} from "@/utils/getFullURL";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
	const { t, lang } = useTranslation('page')

	const data = eventData['data']['attributes'];
	const startDate = data['StartDate']
	const endDate = data['EndDate']
	const location = data['Location']
	const language = data['Language'] && t(`filters:language__filter__${data['Language'].toLowerCase()}`)
	const hostingType = t(`filters:hostingType__filter__${data['HostingType'].toLowerCase()}`)
	const eventType = t(`filters:eventType__filter__${data['EventType'].toLowerCase().replace(' ', '_')}`)
	const profile = data['Profile']
	const image = getImageUrl(data['Image'])
	const zoomLink = data['ZoomLink']
	const registrationLink = data['RegistrationLink']

	const breadcrumbObject = [
		{ menu: 'public-programs', title: t('breadcrumb__public_programs')},
		{ menu: 'program-calendar', link: '/public-programs/program-calendar' , title: t('program_calendar__title')},
	]

	const title = getLocData(data, 'Title', lang)
	const description = getLocData(data, 'CardText', lang)

	return (
		<>
			<Head>
				<title>Blinken OSA Archivum | {title}</title>
				<meta property="og:site_name" content="Blinken OSA Archivum"/>
				<meta property="og:type" content="website"/>
				<meta property="og:title" content={title}/>
				<meta property="og:locale" content={lang}/>
				<meta property="og:description" content={description}/>
				<meta property="og:image" content={image}/>
				<meta property="og:url" content={getFullURL(lang)} />
				<meta name="twitter:site" content="@BlinkenOSA"/>
				<meta name="twitter:card" content="summary"/>
				<meta name="twitter:title" content={title}/>
				<meta name="twitter:description" content={description}/>
				<meta name="twitter:image" content={image}/>
			</Head>
			<div className={style.Page}>
				<PageHeader
					title={getLocData(data, 'Title', lang)}
					color={data['Profile']}
					image={image}
					breadcrumbObject={breadcrumbObject}
					scrollScale={0.5}
					isBlur={true}
				/>
				<Container>
					<Row>
						<Col xs={12}>
							<TranslationChecker data={data}/>
							<EventTypeTag label={t('event__eventType__label')} eventType={eventType} profile={profile}/>
							<div>
								<span className={'subtitle-small'}>{t('event__start__label')}: </span>
								<span>{getDateString(startDate, undefined, 'eventFull', lang)}</span>
							</div>
							{
								(endDate && endDate !== null) &&
								<div>
									<span className={'subtitle-small'}>{t('event__end__label')}: </span>
									<span>{getDateString(endDate, undefined, 'eventFull', lang)}</span>
								</div>
							}
							{
								(location && location !== null) &&
								<div>
									<span className={'subtitle-small'}>{t('event__venue__label')}: </span>
									<span>{location}</span>
								</div>
							}
							<div>
								<div>
									<span className={'subtitle-small'}>{t('event__hosting__label')}: </span>
									<span>{hostingType}</span>
								</div>
							</div>
							<div>
								<div>
									<span className={'subtitle-small'}>{t('event__language__label')}: </span>
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
											<Button link={registrationLink} type={'primary'} size={'medium'} color={'neutral'}>{t('event__register__label')}</Button>
										}
										{
											zoomLink && zoomLink !== null &&
											<Button link={zoomLink} type={'primary'} size={'medium'} color={'neutral'}>{t('event__zoom__label')}</Button>
										}
									</div>
								</>
							}
						</Col>
					</Row>
					<Spacer />
					<Content contentObject={getLocData(data, 'Content', lang)} profile={profile} />
					<Spacer />
				</Container>
			</div>
		</>
	)
}

export default EventPage;
