import {fetchCollectionHighlightsList} from "@/utils/api/fetchCollectionHighlights";
import style from "@/pages/pages.module.scss";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
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
            collectionsInitialData: {
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


const CollectionHighlightsPage = ({collectionsInitialData}) => {
    const [selectedFilter, setSelectedFilter] = useState('All')

    const breadcrumbObject = [
        { key: 'collections', title: 'Collections'},
    ]

    const filterValues = [
        {value: 'All', label: 'All'},
        {value: 'Digital', label: 'Digital Collections'},
        {value: 'Curated', label: 'Curated Collections'}
    ]

    return (
        <SWRConfig value={{ fallback: collectionsInitialData }}>
            <div className={style.Page}>
                <Container>
                    <Breadcrumb breadcrumbObject={breadcrumbObject} />
                    <Row>
                        <Col xs={12}>
                            <h1>Collection Highlights</h1>
                        </Col>
                    </Row>
                    <div style={{height: '48px'}} />
                    <HorizontalFilters values={filterValues} onSelect={setSelectedFilter} />
                    <div style={{height: '48px'}} />
                    <Row>
                        <CollectionCards selectedFilter={selectedFilter} />
                    </Row>
                </Container>
            </div>
        </SWRConfig>
    )
}

export default CollectionHighlightsPage;