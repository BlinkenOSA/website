import {Col, Container, Row} from "react-bootstrap";
import Hero from "@/components/Hero/Hero";
import HeroControl from "@/components/Hero/HeroControl";
import NewsCard from "@/components/Cards/NewsCard";
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

export const getServerSideProps = (async () => {
    const [heroRes, eventsRes, newsRes] = await Promise.all([
        fetchHero(),
        fetchEventsFrontPage(),
        fetchNewsFrontPage()
    ]);
    const [heroData, eventsData, newsData] = await Promise.all([
        heroRes.json(),
        eventsRes.json(),
        newsRes.json()
    ])
    return {
        props: {
            heroData,
            eventsData,
            newsData
        }
    }
})

const IndexPage = ({heroData, eventsData, newsData}) => {
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
                          key={`event_${event["id"]}`}
                          data={event['attributes']}
                      />
                  </Col>
              )
          })
      }

      return (
          <>
            <SectionDivider title={'Events'} buttonText={'View All Events'} subTitle={'* All our programs are free.'}/>
            <Row>
                {renderEventCard()}
            </Row>
          </>
      )
  }

  const renderEntryCards = (entryData, title) => {
      const renderNewsCard = () => {
          return entryData["data"].map(entry => {
              return (
                  <Col xs={4}>
                      <NewsCard
                          key={`${entry["id"]}`}
                          data={entry['attributes']}
                      />
                  </Col>
              )
          })
      }

      return (
          <>
              <SectionFlipper title={title} />
              <Row>
                    {renderNewsCard()}
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
              <CatalogPanel />
            </Container>
            <Container>
              <div style={{height: '48px'}}/>
                {renderEntryCards(newsData, 'News')}
              <div style={{height: '40px'}}/>

              <div style={{height: '40px'}}/>

              <div style={{height: '40px'}}/>
            </Container>
            <Container fluid={true}>
              <CredoPanel />
            </Container>
            <Container>
              <div style={{height: '40px'}}/>
                <SectionDivider title={'Collection Highlights'} buttonText={'View All Collection Highlights'} />
                <SectionPanel title={'Collection Highlights'}>
                  <Col xs={4}>
                      <CollectionCard
                          itemNumber={1285}
                          title={'1956 Digital Archive'}
                          author={'Darius Krolikowski'}
                          description={'The 1956 Digital Archive is a collection of English-language text documents, ' +
                              'photographs, and films on the 1956 Revolution in Hungary and its reception abroad.'}
                          image={'https://fortepan.download/file/fortepan-eu/480/fortepan_23685.jpg'}
                          types={['audio', 'movingImage', 'textual', 'stillImage']}
                      />
                  </Col>
                  <Col xs={4}>
                      <CollectionCard
                          itemNumber={120}
                          title={'1956 Hungarian Refugees in the United States'}
                          author={'Darius Krolikowski'}
                          description={'In 2016 with the generous support of the Blinken family, the archives extended ' +
                              'the scope of its research to other archives in the United States that also possess ' +
                              'relevant, still largely unexplored records on the 1956 Hungarian refugees.'}
                          image={'http://www.refugees1956.org/wp-content/uploads/2016/11/nara-refugees01.jpg'}
                          types={['textual', 'stillImage']}
                      />
                  </Col>
                  <Col xs={4}>
                      <CollectionCard
                          itemNumber={86}
                          title={'David Rohde Collection on Srebrenica'}
                          author={'Darius Krolikowski'}
                          description={'This research collection contains correspondence, eyewitness accounts, transcripts of phone ' +
                              'conversations and other intelligence material, reports of human rights NGO, interoffice memos'}
                          image={'https://osaarchivum.org/files/tmp/0039_rohde.jpg?1704815330'}
                          types={['textual']}
                      />
                  </Col>
              </SectionPanel>
              <div style={{height: '40px'}}/>
              <PartnersPanel />
              <div style={{height: '40px'}}/>
              <NewsletterPanel />
              <div style={{height: '40px'}}/>
            </Container>
      </div>
  )
}

export default IndexPage;
