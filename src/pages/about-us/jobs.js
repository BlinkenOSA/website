import {fetchAnnualReports} from "@/utils/api/fetchAnnualReports";
import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import AnnualReportCard from "@/components/Cards/AnnualReportCard";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {fetchJobs} from "@/utils/api/fetchJobs";
import VerticalFilters from "@/components/Filters/VerticalFilters";
import JobCard from "@/components/Cards/JobCard";
import {useList} from "react-use";

export const getServerSideProps = (async () => {
    const [jobsData] = await Promise.all([
        fetchJobs()
    ])
    return {
        props: {
            jobsData
        }
    }
})

const JobsPage = ({jobsData}) => {
    const [jobTypeFilter, {push, removeAt}] = useList([])

    const renderJobs = () => {
        return jobsData["data"].map(job => {
            return <JobCard
                key={job["id"]}
                data={job['attributes']}
            />
        })
    }

    const breadcrumbObject = [
        { key: 'about-us', title: 'About Us'},
    ]

    const filterValues = [
        {value: 'Jobs', label: 'Jobs'},
        {value: 'Archivum Internships', label: 'Archivum Internships'},
        {value: 'Volunteering', label: 'Volunteering'}
    ]

    const handleFilterChange = (id) => {
        if (jobTypeFilter.includes(id)) {
            removeAt(jobTypeFilter.indexOf(id))
        } else {
            push(id)
        }
    }

    return (
        <div className={style.Page}>
            <Container>
                <Breadcrumb breadcrumbObject={breadcrumbObject} />
                <Row>
                    <Col xs={12}>
                        <h1>Jobs</h1>
                    </Col>
                </Row>
                <div style={{height: '48px'}} />
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
                            {renderJobs()}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default JobsPage;