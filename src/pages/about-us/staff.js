import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {fetchStaffList} from "@/utils/api/fetchStaff";
import StaffCard from "@/components/Cards/StaffCard";
import VerticalFilters from "@/components/Filters/VerticalFilters";
import {useList} from "react-use";
import useSWR, {SWRConfig, unstable_serialize} from "swr";
import fetcher from "@/utils/api/fetcher";
import {fetchCollectionHighlightsList} from "@/utils/api/fetchCollectionHighlights";
import clientFetcher from "@/utils/api/clientFetcher";

export const getServerSideProps = (async () => {
    const [url, params] = fetchStaffList()
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

const StaffCards = ({selectedFilters}) => {
    console.log(selectedFilters)

    const { data } = useSWR(
        fetchStaffList(selectedFilters),
        ([url, params]) => clientFetcher(url, params)
    )

    return data && data["data"].map(staff => {
        return (
            <Col xs={4}>
                <StaffCard
                    key={staff["id"]}
                    data={staff['attributes']}
                />
            </Col>
        )
    })
}

const StaffPage = ({initialData}) => {
    const [unitFilter, {clear, push, removeAt}] = useList([])

    const filterValues = [
        {label: 'Administration'},
        {label: 'Archival Programs'},
        {label: 'Audiovisual Unit'},
        {label: 'Chief Archivist'},
        {label: 'Director'},
        {label: 'Event & Exhibition'},
        {label: 'IT Office'},
        {label: 'Library'},
        {label: 'Public Awareness Unit'},
        {label: 'Records Management'},
        {label: 'Reference Services'},
        {label: 'Research'},
        {label: 'Verzio Filmfestival'}
    ]

    const breadcrumbObject = [
        { key: 'about-us', title: 'About Us'},
    ]

    const handleFilterChange = (id) => {
        if (id === '') {
            clear()
        } else {
            if (unitFilter.includes(id)) {
                removeAt(unitFilter.indexOf(id))
            } else {
                push(id)
            }
        }
    }

    return (
        <div className={style.Page}>
            <Container>
                <Breadcrumb breadcrumbObject={breadcrumbObject} />
                <Row>
                    <Col xs={12}>
                        <h1>Staff</h1>
                    </Col>
                </Row>
                <div style={{height: '48px'}} />
                <Row>
                    <Col xs={4}>
                        <VerticalFilters
                            title={'Filter by Department'}
                            values={filterValues}
                            selectedFilters={unitFilter}
                            onChange={handleFilterChange}
                        />
                    </Col>
                    <Col xs={8}>
                        <Row>
                            <SWRConfig value={{ fallback: initialData }}>
                                <StaffCards selectedFilters={unitFilter} />
                            </SWRConfig>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StaffPage;