import {Col, Container, Row} from "react-bootstrap";
import Hero from "@/components/Hero/Hero";
import HeroControl from "@/components/Hero/HeroControl";
import SectionDivider from "@/components/IndexPage/SectionDivider";
import EventCard from "@/components/Cards/EventCard";
import CatalogPanel from "@/components/IndexPage/CatalogPanel";
import CredoPanel from "@/components/IndexPage/CredoPanel";
import CollectionCard from "@/components/Cards/CollectionCard";
import PartnersPanel from "@/components/IndexPage/PartnersPanel";
import NewsletterPanel from "@/components/IndexPage/NewsletterPanel";
import SectionFlipper from "@/components/IndexPage/SectionFlipper";
import style from "@/pages/pages.module.scss";
import {fetchHero} from "@/utils/api/fetchHero";
import {fetchEventsFrontPage} from "@/utils/api/fetchEvents";
import {fetchNewsFrontPage} from "@/utils/api/fetchNews";
import {fetchCollectionHighlightsList} from "@/utils/api/fetchCollectionHighlights";
import {fetchEntriesFrontPage} from "@/utils/api/fetchEntries";
import EntryCard from "@/components/Cards/EntryCard";
import {fetchCredo} from "@/utils/api/fetchCredo";
import NewsCard from "@/components/Cards/NewsCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useRef} from "react";

export const getServerSideProps = (async () => {
	const [heroRes, eventsRes, newsRes, entriesRes, collectionsRes, credoRes] = await Promise.all([
		fetchHero(),
		fetchEventsFrontPage(),
		fetchNewsFrontPage(),
		fetchEntriesFrontPage(),
		fetchCollectionHighlightsList(6),
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
	const sliderSettings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
	};

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

	const renderEntryCards = (entryData) => {
		let sliderRef = useRef(null);

		const renderEntryCard = () => {
			return entryData["data"].map(entry => {
				return (
					<div className={style.SliderCard}>
						<EntryCard
							id={`${entry["id"]}`}
							key={`${entry["id"]}`}
							data={entry['attributes']}
							type={entry['EntryType']}
						/>
					</div>
				)
			})
		}

		const onNextClick = () => {
			sliderRef.slickNext();
		};
		const onPreviousClick = () => {
			sliderRef.slickPrev();
		};

		return (
			<>
				<SectionFlipper title={'Blogs, Podcasts, Videos'} border={true}  onNextClick={onNextClick} onPreviousClick={onPreviousClick}/>
				<Slider
					ref={slider => {
						sliderRef = slider;
					}}
					{...sliderSettings}>
					{renderEntryCard()}
				</Slider>
			</>
		)
	}

	const renderNewsCards = (newsData) => {
		let sliderRef = useRef(null);

		const renderNewsCard = () => {
			return newsData["data"].map(entry => {
				return (
					<div className={style.SliderCard}>
						<NewsCard
							id={`${entry["id"]}`}
							key={`${entry["id"]}`}
							data={entry['attributes']}
						/>
					</div>
				)
			})
		}

		const onNextClick = () => {
			sliderRef.slickNext();
		};
		const onPreviousClick = () => {
			sliderRef.slickPrev();
		};

		return (
			<>
				<SectionFlipper title={'News'} border={true} onNextClick={onNextClick} onPreviousClick={onPreviousClick}/>
				<Slider
					ref={slider => {
						sliderRef = slider;
					}}
					{...sliderSettings}>
					{renderNewsCard()}
				</Slider>
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

				{renderNewsCards(newsData)}
				<div style={{height: '40px'}}/>
				{renderEntryCards(entriesData)}
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
