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
import {useState} from "react";
import {jobTypeFilterValues} from "@/utils/filterValues/jobTypeFilterValues";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import getLocData from "@/utils/content/getLocData";

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
    const { t } = useTranslation('page')

    const { data } = useSWR(
        fetchJobs(selectedFilters),
        ([url, params]) => clientFetcher(url, params)
    )

    if (data && data["data"].length === 0) {
        return <div className={'subtitle-large'} style={{paddingTop: '48px'}}>{t('job__no_openings')}</div>
    }

    return data && data["data"].map(job => {
        return <JobCard
            key={job["id"]}
            data={job['attributes']}
        />
    })
}

const JobsPage = ({initialData}) => {
    const { t, lang } = useTranslation('page')

    const [jobTypeFilter, setJobTypeFilter] = useState('')

    const handleFilterChange = (id) => {
        if (jobTypeFilter === id) {
            setJobTypeFilter('')
        } else {
            setJobTypeFilter(id)
        }
    }

    return (
        <>
            <Head>
                <title>Blinken OSA Archivum - {t('job__title')}</title>
            </Head>
            <div className={style.Page}>
                <PageHeader
                    title={t('job__title')}
                    breadCrumb={t('breadcrumb__about_us')}
                    menu={'about-us'}
                    image={''} />
                <Container>
                    <Row>
                        <Col xs={4}>
                            <VerticalFilters
                                title={t('job__filter__title')}
                                values={jobTypeFilterValues}
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
        </>
    )
}

export default JobsPage;