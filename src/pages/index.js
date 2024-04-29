import {Col, Container, Row} from "react-bootstrap";
import Hero from "@/components/Hero/HeroV2";
import HeroControl from "@/components/Hero/HeroControl";
import CatalogPanel from "@/components/IndexPage/CatalogPanel";
import CredoPanel from "@/components/IndexPage/CredoPanel";
import PartnersPanel from "@/components/IndexPage/PartnersPanel";
import NewsletterPanel from "@/components/IndexPage/NewsletterPanel";
import style from "@/pages/pages.module.scss";
import {fetchHero} from "@/utils/api/fetchHero";
import {fetchEventsFrontPage} from "@/utils/api/fetchEvents";
import {fetchNewsFrontPage} from "@/utils/api/fetchNews";
import {fetchCollectionHighlightsFrontPage} from "@/utils/api/fetchCollectionHighlights";
import {fetchEntriesFrontPage} from "@/utils/api/fetchEntries";
import {fetchCredo} from "@/utils/api/fetchCredo";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useTranslation from "next-translate/useTranslation";
import EventsPanel from "@/components/IndexPage/EventsPanel";
import NewsPanel from "@/components/IndexPage/NewsPanel";
import EntriesPanel from "@/components/IndexPage/EntriesPanel";
import CollectionsPanel from "@/components/IndexPage/CollectionsPanel";

export const getServerSideProps = (async (context) => {
	const {locale} = context

	const [heroData, eventsData, newsData, entriesData, collectionsData, credoData] = await Promise.all([
		fetchHero(locale),
		fetchEventsFrontPage(locale),
		fetchNewsFrontPage(locale),
		fetchEntriesFrontPage(locale),
		fetchCollectionHighlightsFrontPage(locale),
		fetchCredo(locale),
	]);
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
	const { t, lang } = useTranslation('index')

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
			<Container fluid={true}>
				<HeroControl>
					{renderHero()}
				</HeroControl>
			</Container>
		)
	}

	return (
		<div className={style.Page}>
			{renderHeroes()}
			<Container>
				<div style={{height: '48px'}}/>
				<EventsPanel eventsData={eventsData} />
				<div style={{height: '24px'}}/>
			</Container>
			<Container fluid={true}>
				<CatalogPanel/>
			</Container>
			<Container>
				<div style={{height: '48px'}}/>
				<NewsPanel newsData={newsData} />
				<div style={{height: '40px'}}/>
				<EntriesPanel entriesData={entriesData} />
				<div style={{height: '40px'}}/>
			</Container>
			<Container fluid={true}>
				<CredoPanel credoData={credoData}/>
			</Container>
			<Container>
				<div style={{height: '40px'}}/>
				<CollectionsPanel collectionsData={collectionsData} />
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
