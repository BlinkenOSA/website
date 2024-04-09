import {fetchAnnualReports} from "@/utils/api/fetchAnnualReports";
import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {fetchJobs} from "@/utils/api/fetchJobs";
import VerticalFilters from "@/components/Filters/VerticalFilters";
import JobCard from "@/components/Cards/JobCard";
import {useList} from "react-use";
import fetcher from "@/utils/api/fetcher";
import useSWR, {SWRConfig, unstable_serialize} from "swr";
import clientFetcher from "@/utils/api/clientFetcher";
import PageHeader from "@/components/PageHeader/PageHeader";

export const getServerSideProps = (async () => {
    const [url, params] = fetchJobs()
    const [jobsData] = await Promise.all([
        fetcher(url, params)
    ])
    return {
        props: {
            initialData: {
                [unstable_serialize([url, params])]: jobsData
            }
        }
    }
})

const JobCards = ({selectedFilters}) => {
    const { data } = useSWR(
        fetchJobs(selectedFilters),
        ([url, params]) => clientFetcher(url, params)
    )

    return data && data["data"].map(job => {
        return <JobCard
            key={job["id"]}
            data={job['attributes']}
        />
    })
}

const JobsPage = ({initialData}) => {
    const [jobTypeFilter, {clear, push, removeAt}] = useList([])

    const filterValues = [
        {value: 'Jobs', label: 'Job'},
        {value: 'Archivum Internships', label: 'Archivum Internship'},
        {value: 'Volunteering', label: 'Volunteering'}
    ]

    const handleFilterChange = (id) => {
        if (id === '') {
            clear()
        } else {
            if (jobTypeFilter.includes(id)) {
                removeAt(jobTypeFilter.indexOf(id))
            } else {
                push(id)
            }
        }
    }

    return (
        <div className={style.Page}>
            <PageHeader title={'Join Us'} image={''} />
            <Container>
                <Row>
                    <Col xs={4}>
                        <VerticalFilters
                            title={'Job Type'}
                            values={filterValues}
                            selectedFilters={jobTypeFilter}
                            onChange={handleFilterChange}
                        />
                    </Col>
                    <Col xs={8}>
                        <Row>
                            <SWRConfig value={{ fallback: initialData }}>
                                <JobCards selectedFilters={jobTypeFilter} />
                            </SWRConfig>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default JobsPage;