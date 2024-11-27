import {Container} from "react-bootstrap";
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
import Spacer from "@/components/Spacer/Spacer";
import {Media} from "@/utils/media";
import ResearchRoomPanel from "@/components/IndexPage/ResearchRoomPanel";
import Head from "next/head";

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
			return heroData["data"].map((hero, index) => {
				return <Hero
					index={index}
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
		<>
			<Head>
				<title>Blinken OSA Archivum | Facts for real</title>
				<meta
					name="description"
					content="Blinken OSA Archvium - A complex archival institution, a repository of important
					collections, historical documents, primarily related to the history and afterlives of the
					Cold War, grave international human rights violations and marginalized communities including
					the Roma, LGBTQI+ people, and people living with disabilities."
				/>
				<meta property="og:locale" content={lang} />
				<meta property="og:description" content="Blinken OSA Archvium - A complex archival institution,
					a repository of important collections, historical documents, primarily related to the history and afterlives of the
					Cold War, grave international human rights violations and marginalized communities including
					the Roma, LGBTQI+ people, and people living with disabilities." />
			</Head>
			<div className={style.Page}>
				{renderHeroes()}
				<Container>
					<Spacer size={'medium'} />
					<Media at="xs">
						<NewsPanel newsData={newsData} slidesToShow={1} />
					</Media>
					<Media at="sm">
						<NewsPanel newsData={newsData} slidesToShow={2} />
					</Media>
					<Media greaterThanOrEqual="md">
						<NewsPanel newsData={newsData} slidesToShow={3} />
					</Media>
				</Container>
				<Container fluid={true}>
					<CatalogPanel/>
				</Container>
				<Container>
					<Spacer size={'medium'} />
					<EventsPanel eventsData={eventsData} />
				</Container>
				<Container fluid={true}>
					<ResearchRoomPanel />
				</Container>
				<Container>
					<Spacer size={'medium'} />
					<Media at="xs">
						<EntriesPanel entriesData={entriesData} slidesToShow={1} />
					</Media>
					<Media at="sm">
						<EntriesPanel entriesData={entriesData} slidesToShow={2} />
					</Media>
					<Media greaterThanOrEqual="md">
						<EntriesPanel entriesData={entriesData} slidesToShow={3} />
					</Media>
					<Spacer size={'small'} />
				</Container>
				<Container fluid={true}>
					<CredoPanel credoData={credoData}/>
				</Container>
				<Container>
					<Spacer size={'medium'} />
					<Media at="xs">
						<CollectionsPanel collectionsData={collectionsData} slidesToShow={1} />
					</Media>
					<Media at="sm">
						<CollectionsPanel collectionsData={collectionsData} slidesToShow={2} />
					</Media>
					<Media greaterThanOrEqual="md">
						<CollectionsPanel collectionsData={collectionsData} slidesToShow={3} />
					</Media>
					<Spacer />
					<PartnersPanel/>
					<Spacer />
					<NewsletterPanel/>
					<Spacer />
				</Container>
			</div>
		</>
	)
}

export default IndexPage;
