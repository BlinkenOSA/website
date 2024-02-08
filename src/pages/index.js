import style from "./pages.module.scss";
import { LoremIpsum } from 'react-lorem-ipsum';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import Hero from "@/components/Hero/Hero";
import HeroControl from "@/components/Hero/HeroControl";
import NewsCard from "@/components/Cards/NewsCard";
import {IconDocument, IconExhibition, IconPrograms} from "@/components/Icon/Icon";
import EventsDivider from "@/components/IndexPage/EventsDivider";
import EventCard from "@/components/Cards/EventCard";
import CatalogPanel from "@/components/IndexPage/CatalogPanel";
import SectionPanel from "@/components/IndexPage/SectionPanel";
import CredoPanel from "@/components/IndexPage/CredoPanel";
import CollectionCard from "@/components/Cards/CollectionCard";
import PartnersPanel from "@/components/IndexPage/PartnersPanel";
import NewsletterPanel from "@/components/IndexPage/NewsletterPanel";

const IndexPage = () => {
  return (
      <>
        <Container>
          <Row>
              <Col xs={12}>
                  <HeroControl>
                      <Hero image={'https://osaarchivum.org/files/images/announcements/2024/website-with-logos.png'} />
                      <Hero image={'https://osaarchivum.org/files/images/announcements/2024/img0551gray2.jpg'} />
                  </HeroControl>
              </Col>
          </Row>
          <div style={{height: '48px'}}/>
          <EventsDivider/>
          <Row>
              <Col xs={4}>
                  <EventCard
                      date={'29th January 2024'}
                      title={'Media Art Exhibition: Darling, Let Me Hold You!'}
                      description={'The Finnish Institute in Budapest FinnAgora and Blinken OSA Archivum present an ' +
                          'audiovisual art exhibition: Darling, Let Me Hold You! The exhibition is organized as part ' +
                          'of the Finnish Film Days, Finn Filmnapok, and presents audiovisual art by six Finnish artists. ' +
                          'The theme of the exhibition is human connection.'}
                      image={'https://osaarchivum.org/files/images/announcements/2024/website-with-logos.png'}
                      icon={<IconExhibition size={'small'}/>}
                  />
              </Col>
              <Col xs={4}>
                  <EventCard
                      date={'3rd January 2024'}
                      title={'1944–2024 - Book launch and the presentation of András Böröcz’s kinetic sculpture the Noisemaker at the CEU Nádor Street building'}
                      description={'On the 80th anniversary of the Hungarian Shoah, two related events will take place at the CEU Nádor Street building (entrance: 1051 Budapest, Nádor utca 15) on Wednesday, January 10, 2024. At 4 p.m., the working group of historians of the CEU Democracy Institute will present Viktor Karády and István Kemény’s book Zsidóság a magyar nemzetépítésben a numerus clausus előtt és azután [Jewishness in Hungarian nation-building before and after the Numerus Clausus]. At 6 p.m., András Böröcz’s kinetic sculpture Noisemaker, commissioned and supported by the Polgár Foundation, will be presented by art historian András Rényi in the presence of the artist. (A regular exhibitor in Budapest, András Böröcz has been living in Brooklyn since 1984.'}
                      image={'https://osaarchivum.org/files/images/announcements/2024/img0551gray2.jpg'}
                      icon={<IconPrograms size={'small'}/>}
                  />
              </Col>
              <Col xs={4}>
                  <EventCard
                      date={'18th August 2023'}
                      title={'János Kornai Correspondence Donated to the Archivum'}
                      description={'János Kornai was an internationally acclaimed expert of Socialist economies and post-Communist tranistions.'}
                      image={'https://www.osaarchivum.org/files/images/announcements/2023/20230630kornai.jpg'}
                      icon={<IconDocument size={'small'}/>}
                  />
              </Col>
          </Row>
          <div style={{height: '24px'}}/>
          <Row>
              <Col xs={4}>
                  <EventCard
                      date={'18th August 2023'}
                      title={'János Kornai Correspondence Donated to the Archivum'}
                      description={'János Kornai was an internationally acclaimed expert of Socialist economies and post-Communist tranistions.'}
                      image={'https://www.osaarchivum.org/files/images/announcements/2023/20230630kornai.jpg'}
                      icon={<IconDocument size={'small'}/>}
                  />
              </Col>
              <Col xs={4}>
                  <EventCard
                      date={'29th January 2024'}
                      title={'Media Art Exhibition: Darling, Let Me Hold You!'}
                      description={'The Finnish Institute in Budapest FinnAgora and Blinken OSA Archivum present an ' +
                          'audiovisual art exhibition: Darling, Let Me Hold You! The exhibition is organized as part ' +
                          'of the Finnish Film Days, Finn Filmnapok, and presents audiovisual art by six Finnish artists. ' +
                          'The theme of the exhibition is human connection.'}
                      image={'https://osaarchivum.org/files/images/announcements/2024/website-with-logos.png'}
                      icon={<IconExhibition size={'small'}/>}
                  />
              </Col>
              <Col xs={4}>
                  <EventCard
                      date={'3rd January 2024'}
                      title={'1944–2024 - Book launch and the presentation of András Böröcz’s kinetic sculpture the Noisemaker at the CEU Nádor Street building'}
                      description={'On the 80th anniversary of the Hungarian Shoah, two related events will take place at the CEU Nádor Street building (entrance: 1051 Budapest, Nádor utca 15) on Wednesday, January 10, 2024. At 4 p.m., the working group of historians of the CEU Democracy Institute will present Viktor Karády and István Kemény’s book Zsidóság a magyar nemzetépítésben a numerus clausus előtt és azután [Jewishness in Hungarian nation-building before and after the Numerus Clausus]. At 6 p.m., András Böröcz’s kinetic sculpture Noisemaker, commissioned and supported by the Polgár Foundation, will be presented by art historian András Rényi in the presence of the artist. (A regular exhibitor in Budapest, András Böröcz has been living in Brooklyn since 1984.'}
                      image={'https://osaarchivum.org/files/images/announcements/2024/img0551gray2.jpg'}
                      icon={<IconPrograms size={'small'}/>}
                  />
              </Col>
          </Row>
          <div style={{height: '24px'}}/>
        </Container>
        <Container fluid={true}>
          <CatalogPanel />
        </Container>
        <Container>
          <div style={{height: '48px'}}/>
          <SectionPanel title={'News'}>
              <Col xs={4}>
                  <NewsCard
                      date={'16.10.2023.'}
                      title={'“I believe I’m next” – A Polish Political Assassination’s Echoes in Eastern Europe'}
                      description={'In October 1984, the Radio Free Europe/Radio Liberty Research Institute, in Munich, ' +
                          'received ominous news from Socialist Poland. The 37'}
                      image={'https://osaarchivum.org/files/blog/8073/20231019_popieluszko-rfe_01.jpg'}
                      icon={<IconDocument size={'small'}/>}
                  />
              </Col>
              <Col xs={4}>
                  <NewsCard
                      date={'03.01.2024.'}
                      title={'1944–2024 - Book launch and the presentation of András Böröcz’s kinetic sculpture the Noisemaker at the CEU Nádor Street building'}
                      description={'On the 80th anniversary of the Hungarian Shoah, two related events will take place at the CEU Nádor Street building (entrance: 1051 Budapest, Nádor utca 15) on Wednesday, January 10, 2024. At 4 p.m., the working group of historians of the CEU Democracy Institute will present Viktor Karády and István Kemény’s book Zsidóság a magyar nemzetépítésben a numerus clausus előtt és azután [Jewishness in Hungarian nation-building before and after the Numerus Clausus]. At 6 p.m., András Böröcz’s kinetic sculpture Noisemaker, commissioned and supported by the Polgár Foundation, will be presented by art historian András Rényi in the presence of the artist. (A regular exhibitor in Budapest, András Böröcz has been living in Brooklyn since 1984.'}
                      image={'https://osaarchivum.org/files/images/announcements/2024/img0551gray2.jpg'}
                      icon={<IconPrograms size={'small'}/>}
                  />
              </Col>
              <Col xs={4}>
                  <NewsCard
                      date={'18.08.2023.'}
                      title={'János Kornai Correspondence Donated to the Archivum'}
                      description={'János Kornai was an internationally acclaimed expert of Socialist economies and post-Communist tranistions.'}
                      image={'https://www.osaarchivum.org/files/images/announcements/2023/20230630kornai.jpg'}
                      icon={<IconDocument size={'small'}/>}
                  />
              </Col>
              <Col xs={4}>
                  <NewsCard
                      date={'16.10.2023.'}
                      title={'“I believe I’m next” – A Polish Political Assassination’s Echoes in Eastern Europe'}
                      description={'In October 1984, the Radio Free Europe/Radio Liberty Research Institute, in Munich, ' +
                          'received ominous news from Socialist Poland. The 37'}
                      image={'https://osaarchivum.org/files/blog/8073/20231019_popieluszko-rfe_01.jpg'}
                      icon={<IconDocument size={'small'}/>}
                  />
              </Col>
              <Col xs={4}>
                  <NewsCard
                      date={'03.01.2024.'}
                      title={'1944–2024 - Book launch and the presentation of András Böröcz’s kinetic sculpture the Noisemaker at the CEU Nádor Street building'}
                      description={'On the 80th anniversary of the Hungarian Shoah, two related events will take place at the CEU Nádor Street building (entrance: 1051 Budapest, Nádor utca 15) on Wednesday, January 10, 2024. At 4 p.m., the working group of historians of the CEU Democracy Institute will present Viktor Karády and István Kemény’s book Zsidóság a magyar nemzetépítésben a numerus clausus előtt és azután [Jewishness in Hungarian nation-building before and after the Numerus Clausus]. At 6 p.m., András Böröcz’s kinetic sculpture Noisemaker, commissioned and supported by the Polgár Foundation, will be presented by art historian András Rényi in the presence of the artist. (A regular exhibitor in Budapest, András Böröcz has been living in Brooklyn since 1984.'}
                      image={'https://osaarchivum.org/files/images/announcements/2024/img0551gray2.jpg'}
                      icon={<IconPrograms size={'small'}/>}
                  />
              </Col>
              <Col xs={4}>
                  <NewsCard
                      date={'18.08.2023.'}
                      title={'János Kornai Correspondence Donated to the Archivum'}
                      description={'János Kornai was an internationally acclaimed expert of Socialist economies and post-Communist tranistions.'}
                      image={'https://www.osaarchivum.org/files/images/announcements/2023/20230630kornai.jpg'}
                      icon={<IconDocument size={'small'}/>}
                  />
              </Col>
          </SectionPanel>
          <div style={{height: '40px'}}/>
          <SectionPanel title={'Blogs'}>
              <Col xs={4}>
                  <NewsCard
                      date={'16.10.2023.'}
                      title={'“I believe I’m next” – A Polish Political Assassination’s Echoes in Eastern Europe'}
                      description={'In October 1984, the Radio Free Europe/Radio Liberty Research Institute, in Munich, ' +
                          'received ominous news from Socialist Poland. The 37'}
                      image={'https://osaarchivum.org/files/blog/8073/20231019_popieluszko-rfe_01.jpg'}
                      icon={<IconDocument size={'small'}/>}
                  />
              </Col>
              <Col xs={4}>
                  <NewsCard
                      date={'03.01.2024.'}
                      title={'1944–2024 - Book launch and the presentation of András Böröcz’s kinetic sculpture the Noisemaker at the CEU Nádor Street building'}
                      description={'On the 80th anniversary of the Hungarian Shoah, two related events will take place at the CEU Nádor Street building (entrance: 1051 Budapest, Nádor utca 15) on Wednesday, January 10, 2024. At 4 p.m., the working group of historians of the CEU Democracy Institute will present Viktor Karády and István Kemény’s book Zsidóság a magyar nemzetépítésben a numerus clausus előtt és azután [Jewishness in Hungarian nation-building before and after the Numerus Clausus]. At 6 p.m., András Böröcz’s kinetic sculpture Noisemaker, commissioned and supported by the Polgár Foundation, will be presented by art historian András Rényi in the presence of the artist. (A regular exhibitor in Budapest, András Böröcz has been living in Brooklyn since 1984.'}
                      image={'https://osaarchivum.org/files/images/announcements/2024/img0551gray2.jpg'}
                      icon={<IconPrograms size={'small'}/>}
                  />
              </Col>
              <Col xs={4}>
                  <NewsCard
                      date={'18.08.2023.'}
                      title={'János Kornai Correspondence Donated to the Archivum'}
                      description={'János Kornai was an internationally acclaimed expert of Socialist economies and post-Communist tranistions.'}
                      image={'https://www.osaarchivum.org/files/images/announcements/2023/20230630kornai.jpg'}
                      icon={<IconDocument size={'small'}/>}
                  />
              </Col>
          </SectionPanel>
          <div style={{height: '40px'}}/>
          <SectionPanel title={'Podcasts'}>
              <Col xs={4}>
                  <NewsCard
                      date={'16.10.2023.'}
                      title={'“I believe I’m next” – A Polish Political Assassination’s Echoes in Eastern Europe'}
                      description={'In October 1984, the Radio Free Europe/Radio Liberty Research Institute, in Munich, ' +
                          'received ominous news from Socialist Poland. The 37'}
                      image={'https://osaarchivum.org/files/blog/8073/20231019_popieluszko-rfe_01.jpg'}
                      icon={<IconDocument size={'small'}/>}
                  />
              </Col>
              <Col xs={4}>
                  <NewsCard
                      date={'03.01.2024.'}
                      title={'1944–2024 - Book launch and the presentation of András Böröcz’s kinetic sculpture the Noisemaker at the CEU Nádor Street building'}
                      description={'On the 80th anniversary of the Hungarian Shoah, two related events will take place at the CEU Nádor Street building (entrance: 1051 Budapest, Nádor utca 15) on Wednesday, January 10, 2024. At 4 p.m., the working group of historians of the CEU Democracy Institute will present Viktor Karády and István Kemény’s book Zsidóság a magyar nemzetépítésben a numerus clausus előtt és azután [Jewishness in Hungarian nation-building before and after the Numerus Clausus]. At 6 p.m., András Böröcz’s kinetic sculpture Noisemaker, commissioned and supported by the Polgár Foundation, will be presented by art historian András Rényi in the presence of the artist. (A regular exhibitor in Budapest, András Böröcz has been living in Brooklyn since 1984.'}
                      image={'https://osaarchivum.org/files/images/announcements/2024/img0551gray2.jpg'}
                      icon={<IconPrograms size={'small'}/>}
                  />
              </Col>
              <Col xs={4}>
                  <NewsCard
                      date={'18.08.2023.'}
                      title={'János Kornai Correspondence Donated to the Archivum'}
                      description={'János Kornai was an internationally acclaimed expert of Socialist economies and post-Communist tranistions.'}
                      image={'https://www.osaarchivum.org/files/images/announcements/2023/20230630kornai.jpg'}
                      icon={<IconDocument size={'small'}/>}
                  />
              </Col>
              <Col xs={4}>
                  <NewsCard
                      date={'16.10.2023.'}
                      title={'“I believe I’m next” – A Polish Political Assassination’s Echoes in Eastern Europe'}
                      description={'In October 1984, the Radio Free Europe/Radio Liberty Research Institute, in Munich, ' +
                          'received ominous news from Socialist Poland. The 37'}
                      image={'https://osaarchivum.org/files/blog/8073/20231019_popieluszko-rfe_01.jpg'}
                      icon={<IconDocument size={'small'}/>}
                  />
              </Col>
              <Col xs={4}>
                  <NewsCard
                      date={'03.01.2024.'}
                      title={'1944–2024 - Book launch and the presentation of András Böröcz’s kinetic sculpture the Noisemaker at the CEU Nádor Street building'}
                      description={'On the 80th anniversary of the Hungarian Shoah, two related events will take place at the CEU Nádor Street building (entrance: 1051 Budapest, Nádor utca 15) on Wednesday, January 10, 2024. At 4 p.m., the working group of historians of the CEU Democracy Institute will present Viktor Karády and István Kemény’s book Zsidóság a magyar nemzetépítésben a numerus clausus előtt és azután [Jewishness in Hungarian nation-building before and after the Numerus Clausus]. At 6 p.m., András Böröcz’s kinetic sculpture Noisemaker, commissioned and supported by the Polgár Foundation, will be presented by art historian András Rényi in the presence of the artist. (A regular exhibitor in Budapest, András Böröcz has been living in Brooklyn since 1984.'}
                      image={'https://osaarchivum.org/files/images/announcements/2024/img0551gray2.jpg'}
                      icon={<IconPrograms size={'small'}/>}
                  />
              </Col>
              <Col xs={4}>
                  <NewsCard
                      date={'18.08.2023.'}
                      title={'János Kornai Correspondence Donated to the Archivum'}
                      description={'János Kornai was an internationally acclaimed expert of Socialist economies and post-Communist tranistions.'}
                      image={'https://www.osaarchivum.org/files/images/announcements/2023/20230630kornai.jpg'}
                      icon={<IconDocument size={'small'}/>}
                  />
              </Col>
          </SectionPanel>
          <div style={{height: '40px'}}/>
        </Container>
        <Container fluid={true}>
          <CredoPanel />
        </Container>
        <Container>
          <div style={{height: '40px'}}/>
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
      </>
  )
}

export default IndexPage;
