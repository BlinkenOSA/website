import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/academics/style.module.scss";
import {useList} from "react-use";
import useSWR, {SWRConfig, unstable_serialize} from "swr";
import fetcher from "@/utils/api/fetcher";
import clientFetcher from "@/utils/api/clientFetcher";
import {fetchCurrentFellowsList} from "@/utils/api/fetchFellows";
import FellowCard from "@/components/Cards/FellowCard";

export const getServerSideProps = (async () => {
    const [url, params] = fetchCurrentFellowsList()
    const [staffData] = await Promise.all([
        fetcher(url, params)
    ])
    return {
        props: {
            initialData: {
                [unstable_serialize([url, params])]: staffData
            }
        }
    }
})

const FellowCards = ({selectedFilters}) => {
    const { data } = useSWR(
        fetchCurrentFellowsList(selectedFilters),
        ([url, params]) => clientFetcher(url, params)
    )

    return data && data["data"].map(staff => {
        return (
            <Col xs={3}>
                <FellowCard
                    key={staff["id"]}
                    data={staff['attributes']}
                />
            </Col>
        )
    })
}

const FellowsPage = ({initialData}) => {
    const [unitFilter, {clear, push, removeAt}] = useList([])

    return (
        <div className={style.Page}>
            <Container>
                <div style={{height: '48px'}} />
                <Row>
                    <Col xs={12}>
                        <h1>Current Fellows</h1>
                    </Col>
                </Row>
                <div style={{height: '48px'}} />
                <Row>
                    <Col xs={12}>
                        <Row>
                            <SWRConfig value={{ fallback: initialData }}>
                                <FellowCards selectedFilters={unitFilter} />
                            </SWRConfig>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FellowsPage;