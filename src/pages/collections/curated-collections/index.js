import {fetchCollectionHighlightsList} from "@/utils/api/fetchCollectionHighlights";
import style from "../style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import CollectionCard from "@/components/Cards/CollectionCard";
import fetcher from "@/utils/api/fetcher";
import useSWR, {SWRConfig, unstable_serialize} from "swr";
import clientFetcher from "@/utils/api/clientFetcher";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import Spacer from "@/components/Spacer/Spacer";

export const getServerSideProps = (async () => {
    const [url, params] = fetchCollectionHighlightsList(100, 'Curated')
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
        fetchCollectionHighlightsList(undefined, 'Curated'),
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
                <SimplePageHeader title={'Curated Collections'} menu={'collections'} breadCrumb={'Collections'} />
                <Row>
                    <Col xs={12}>
                        <div className={style.Description}>
                            {
                                <p>
                                    Our curated collections bring together primary and secondary sources from the holdings of the Archivum and its cooperating partners, concerning a particular historical event or phenomenon.
                                    They include curatorial reflections and background studies by Archivum staff, highlight specific resources, and offer scholars alternative tools, content-related search and filtering options to explore these sources.
                                    <br/><br/>
                                    These collections are all available online, without registration.
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