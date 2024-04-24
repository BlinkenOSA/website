import {fetchCollectionHighlightsList} from "@/utils/api/fetchCollectionHighlights";
import style from "../style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import CollectionCard from "@/components/Cards/CollectionCard";
import HorizontalFilters from "@/components/Filters/HorizontalFilters";
import fetcher from "@/utils/api/fetcher";
import useSWR, {SWRConfig, unstable_serialize} from "swr";
import {useState} from "react";
import clientFetcher from "@/utils/api/clientFetcher";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";

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
                <SimplePageHeader title={'Collection Highlights'} menu={'collections'} breadCrumb={'Collections'} />
                <HorizontalFilters align={'left'} values={filterValues} selectedFilter={selectedFilter} onSelect={setSelectedFilter} />
                <div style={{height: '48px'}} />
                <Row>
                    <Col xs={12}>
                        <div className={style.Description}>
                            {
                                selectedFilter === 'Curated' &&
                                <p>
                                    Our curated collections bring together primary and secondary sources -- both digital
                                    and analog -- from the holdings of the Archivum and its cooperating partners,
                                    concerning a particular historical event or phenomenon. They include curatorial
                                    reflections and background studies by Archivum staff, highlight specific resources,
                                    and offer scholars alternative tools, content-related search and filtering options to
                                    explore these sources. They are not necessarily available online.
                                </p>
                            }
                            {
                                selectedFilter === 'Digital' &&
                                <p>
                                    Digital collections are selected collections that have been digitized and are,
                                    therefore, available for online browsing.
                                </p>
                            }
                        </div>
                    </Col>
                </Row>
                {selectedFilter !== 'All' && <div style={{height: '48px'}} />}
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