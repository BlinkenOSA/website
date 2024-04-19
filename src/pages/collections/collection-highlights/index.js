import {fetchCollectionHighlightsList} from "@/utils/api/fetchCollectionHighlights";
import style from "../style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import CollectionCard from "@/components/Cards/CollectionCard";
import HorizontalFilters from "@/components/Filters/HorizontalFilters";
import fetcher from "@/utils/api/fetcher";
import useSWR, {SWRConfig, unstable_serialize} from "swr";
import {useState} from "react";
import clientFetcher from "@/utils/api/clientFetcher";

export const getServerSideProps = (async () => {
    const [url, params] = fetchCollectionHighlightsList()
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
        fetchCollectionHighlightsList(undefined, selectedFilter),
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
    const [selectedFilter, setSelectedFilter] = useState('All')

    const filterValues = [
        {value: 'All', label: 'All'},
        {value: 'Digital', label: 'Digital Collections'},
        {value: 'Curated', label: 'Curated Collections'}
    ]

    return (
        <div className={style.Page}>
            <Container>
                <div style={{height: '48px'}} />
                <Row>
                    <Col xs={12}>
                        <h1>Collection Highlights</h1>
                    </Col>
                </Row>
                <div style={{height: '48px'}} />
                <HorizontalFilters align={'left'} values={filterValues} selectedFilter={selectedFilter} onSelect={setSelectedFilter} />
                <div style={{height: '48px'}} />
                <Row>
                    <SWRConfig value={{ fallback: initialData }}>
                        <CollectionCards selectedFilter={selectedFilter} />
                    </SWRConfig>
                </Row>
                <div style={{height: '48px'}} />
            </Container>
        </div>
    )
}

export default CollectionHighlightsPage;