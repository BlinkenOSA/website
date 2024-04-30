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
    const [url, params] = fetchCollectionHighlightsList(100, 'Library')
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
        fetchCollectionHighlightsList(undefined, 'Library'),
        ([url, params]) => clientFetcher(url, params)
    )

    return data && data["data"].map(collection => {
        return (
            <Col xs={4}>
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
                <SimplePageHeader title={'Library Collections'} menu={'collections'} breadCrumb={'Collections'} />
                <Row>
                    <Col xs={12}>
                        <div className={style.Description}>
                            {
                                <p>
                                    Text comes here...
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