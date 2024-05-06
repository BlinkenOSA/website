import {fetchCollectionHighlightsList} from "@/utils/api/fetchCollectionHighlights";
import style from "../style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import CollectionCard from "@/components/Cards/CollectionCard";
import fetcher from "@/utils/api/fetcher";
import useSWR, {SWRConfig, unstable_serialize} from "swr";
import clientFetcher from "@/utils/api/clientFetcher";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import Spacer from "@/components/Spacer/Spacer";
import Link from "next/link";

export const getServerSideProps = (async () => {
    const [url, params] = fetchCollectionHighlightsList(100, 'AV')
    const [collectionsData] = await Promise.all([
        fetcher(url, params)
    ])
    return {
        props: {
            initialData: {
                [unstable_serialize([url, params])]: collectionsData
            }
        }
    }
})


const CollectionCards = ({selectedFilter}) => {
    const { data } = useSWR(
        fetchCollectionHighlightsList(undefined, 'AV'),
        ([url, params]) => clientFetcher(url, params)
    )

    return data && data["data"].map(collection => {
        return (
            <Col xs={12} sm={6} md={4}>
                <CollectionCard
                    key={collection["id"]}
                    data={collection['attributes']}
                />
            </Col>
        )
    })
}


const CollectionHighlightsPage = ({initialData}) => {
    return (
        <div className={style.Page}>
            <Container>
                <SimplePageHeader title={'Audio-visual Collections'} menu={'collections'} breadCrumb={'Collections'} />
                <Row>
                    <Col xs={12}>
                        <div className={style.Description}>
                            {
                                <p>
                                    Archivum owns over 10.000 hours of video and sound, plus a growing number of photo
                                    collections, which come from various sources in 5 continents. Our donors include
                                    individual authors and artists, media groups, human rights organizations, civil society members,
                                    UN courtrooms and research communities as well.<br/><br/>
                                    This is an alternative, media-specific entry point to 60+ of the Archivum’s media
                                    collections, accompanied by individual curatorial introductions. By creating it,
                                    we hoped to supplement the Catalog and assist you in locating and exploring our
                                    unique collections.<br/><br/>
                                    Some of the collections are online, while others are digitized and available in a
                                    private research cloud following <Link href={'https://catalog.osaarchivum.org/registration'} target={'_blank'}>registration</Link>.
                                </p>
                            }
                        </div>
                    </Col>
                </Row>
                <Spacer />
                <Row>
                    <SWRConfig value={{ fallback: initialData }}>
                        <CollectionCards />
                    </SWRConfig>
                </Row>
                <Spacer />
            </Container>
        </div>
    )
}

export default CollectionHighlightsPage;