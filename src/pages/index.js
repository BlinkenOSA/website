import {Col, Container, Row} from "react-bootstrap";
import Hero from "@/components/Hero/Hero";
import HeroControl from "@/components/Hero/HeroControl";
import NewsCard from "@/components/Cards/EntryCard";
import {IconDocument, IconExhibition, IconPrograms} from "@/components/Icon/Icon";
import SectionDivider from "@/components/IndexPage/SectionDivider";
import EventCard from "@/components/Cards/EventCard";
import CatalogPanel from "@/components/IndexPage/CatalogPanel";
import SectionPanel from "@/components/IndexPage/SectionPanel";
import CredoPanel from "@/components/IndexPage/CredoPanel";
import CollectionCard from "@/components/Cards/CollectionCard";
import PartnersPanel from "@/components/IndexPage/PartnersPanel";
import NewsletterPanel from "@/components/IndexPage/NewsletterPanel";
import SectionFlipper from "@/components/IndexPage/SectionFlipper";
import style from "@/pages/pages.module.scss";
import {fetchHero} from "@/utils/api/fetchHero";
import {fetchEventsFrontPage} from "@/utils/api/fetchEvents";
import {fetchNewsFrontPage} from "@/utils/api/fetchNews";
import {fetchCollectionHighlightsFrontPage} from "@/utils/api/fetchCollectionHighlights";
import {fetchEntriesFrontPage} from "@/utils/api/fetchEntries";
import EntryCard from "@/components/Cards/EntryCard";
import {fetchCredo} from "@/utils/api/fetchCredo";

export const getServerSideProps = (async () => {
	const [heroRes, eventsRes, newsRes, entriesRes, collectionsRes, credoRes] = await Promise.all([
		fetchHero(),
		fetchEventsFrontPage(),
		fetchNewsFrontPage(),
		fetchEntriesFrontPage(),
		fetchCollectionHighlightsFrontPage(),
		fetchCredo()
	]);
	const [heroData, eventsData, newsData, entriesData, collectionsData, credoData] = await Promise.all([
		heroRes.json(),
		eventsRes.json(),
		newsRes.json(),
		entriesRes.json(),
		collectionsRes.json(),
		credoRes.json()
	])
	return {
		props: {
			heroData,
			eventsData,
			newsData,
			entriesData,
			collectionsData,
			credoData
		}
	}
})

const IndexPage = ({heroData, eventsData, newsData, entriesData, collectionsData, credoData}) => {
	const renderHeroes = () => {
		const renderHero = () => {
			return heroData["data"].map(hero => {
				return <Hero
					key={`hero_${hero["id"]}`}
					data={hero['attributes']}
				/>
			})
		}

		return (
			<HeroControl>
				{renderHero()}
			</HeroControl>
		)
	}

	const renderEvents = () => {
		const renderEventCard = () => {
			return eventsData["data"].map(event => {
				return (
					<Col xs={4}>
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
				<SectionDivider title={'Events'} buttonText={'View All Events'}
								subTitle={'* All our programs are free.'}/>
				<Row>
					{renderEventCard()}
				</Row>
			</>
		)
	}

	const renderEntryCards = (entryData, title) => {
		const renderEntryCard = () => {
			return entryData["data"].map(entry => {
				return (
					<Col xs={4}>
						<EntryCard
							key={`${entry["id"]}`}
							data={entry['attributes']}
							type={title === 'News' ? 'news' : 'entry'}
						/>
					</Col>
				)
			})
		}

		return (
			<>
				<SectionFlipper title={title} border={true}/>
				<Row>
					{renderEntryCard()}
				</Row>
			</>
		)
	}

	const renderCollectionCards = () => {
		const renderCollectionCard = () => {
			return collectionsData["data"].map(collection => {
				return (
					<Col xs={4}>
						<CollectionCard
							key={`${collection["id"]}`}
							data={collection['attributes']}
						/>
					</Col>
				)
			})
		}

		return (
			<>
				<SectionDivider title={'Collection Highlights'} buttonText={'View All Collection Highlights'}/>
				<Row>
					{renderCollectionCard()}
				</Row>
			</>
		)
	}

	return (
		<div className={style.Page}>
			<Container>
				<Row>
					<Col xs={12}>
						{renderHeroes()}
					</Col>
				</Row>
				<div style={{height: '48px'}}/>
				{renderEvents()}
				<div style={{height: '24px'}}/>
			</Container>
			<Container fluid={true}>
				<CatalogPanel/>
			</Container>
			<Container>
				<div style={{height: '48px'}}/>
				{renderEntryCards(newsData, 'News')}
				<div style={{height: '40px'}}/>
				{renderEntryCards(entriesData, 'Blogs, Podcasts, Videos')}
				<div style={{height: '40px'}}/>
			</Container>
			<Container fluid={true}>
				<CredoPanel data={credoData}/>
			</Container>
			<Container>
				<div style={{height: '40px'}}/>
				{renderCollectionCards()}
				<div style={{height: '40px'}}/>
				<PartnersPanel/>
				<div style={{height: '40px'}}/>
				<NewsletterPanel/>
				<div style={{height: '40px'}}/>
			</Container>
		</div>
	)
}

export default IndexPage;
