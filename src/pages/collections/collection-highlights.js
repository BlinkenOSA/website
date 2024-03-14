import {fetchCollectionHighlightsList} from "@/utils/api/fetchCollectionHighlights";
import style from "@/pages/pages.module.scss";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {Col, Container, Row} from "react-bootstrap";
import CollectionCard from "@/components/Cards/CollectionCard";
import HorizontalFilters from "@/components/Filters/HorizontalFilters";

export const getServerSideProps = (async () => {
    const [collectionsRes] = await Promise.all([
        fetchCollectionHighlightsList()
    ]);
    const [collectionsData] = await Promise.all([
        collectionsRes.json()
    ])
    return {
        props: {
            collectionsData
        }
    }
})


const CollectionHighlightsPage = ({collectionsData}) => {
    const breadcrumbObject = [
        { key: 'collections', title: 'Collections'},
    ]

    const renderHighlights = () => {
        return collectionsData["data"].map(collection => {
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

    const filterValues = [
        {value: 'all', label: 'All'},
        {value: 'digital', label: 'Digital Collections'},
        {value: 'curated', label: 'Curated Collections'}
    ]

    return (
        <div className={style.Page}>
            <Container>
                <Breadcrumb breadcrumbObject={breadcrumbObject} />
                <Row>
                    <Col xs={12}>
                        <h1>Collection Highlights</h1>
                    </Col>
                </Row>
                <div style={{height: '48px'}} />
                <HorizontalFilters values={filterValues} />
                <Row>
                    {renderHighlights()}
                </Row>
            </Container>
        </div>
    )
}

export default CollectionHighlightsPage;