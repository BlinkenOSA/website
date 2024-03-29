import style from "./style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import fetcher from "@/utils/api/fetcher";
import useSWR, {SWRConfig, unstable_serialize} from "swr";
import React, {useEffect, useState} from "react";
import clientFetcher from "@/utils/api/clientFetcher";
import {fetchEntriesList} from "@/utils/api/fetchEntries";
import PageHeader from "@/components/PageHeader/PageHeader";
import {useRouter} from "next/router";
import EntryCard from "@/components/Cards/EntryCard";
import DropdownFilter from "@/components/Filters/DropdownFilter";
import ContentPagination from "@/components/Pagination/ContentPagination";
import {fetchNewsList} from "@/utils/api/fetchNews";
import NewsCard from "@/components/Cards/NewsCard";
import {profileFilterValues} from "@/utils/filterValues/profileFilterValues";
import {activityTypeFilterValues} from "@/utils/filterValues/activityTypeFilterValues";

export const getServerSideProps = (async (context) => {
    const { activityType, ...parameters } = context.query;

    const page = 'page' in parameters ? parameters['page'] : undefined
    const profile = 'profile' in parameters ? parameters['profile'] : undefined

    const [url, params] = fetchNewsList(page, profile, activityType)
    const [newsData] = await Promise.all([
        fetcher(url, params)
    ])

    return {
        props: {
            initialData: {
                [unstable_serialize([url, params])]: newsData
            }
        }
    }
})


const NewsCards = ({page, profile, activityType, onPageSelect}) => {
    const { data } = useSWR(
        fetchNewsList(page, profile, activityType),
        ([url, params]) => clientFetcher(url, params)
    )

    const renderCards = () => {
        return data && data["data"].map(entry => {
            return (
                <Col xs={4}>
                    <NewsCard
                        key={entry["id"]}
                        id={entry["id"]}
                        data={entry['attributes']}
                    />
                </Col>
            )
        })
    }

    const handleClick = (page) => {
        onPageSelect(page)
    }

    return (
        <>
            <Row>
                {renderCards()}
            </Row>
            <Row>
                <Col xs={12}>
                    {
                        data &&
                        <ContentPagination
                            onClick={handleClick}
                            page={data["meta"]["pagination"]["page"]}
                            pageCount={data["meta"]["pagination"]["pageCount"]}
                        />
                    }
                </Col>
            </Row>
        </>
    )
}


const NewsPage = ({initialData}) => {
    const [profileFilter, setProfileFilter] = useState('')
    const [activityTypeFilter, setActivityTypeFilter] = useState('')
    const [selectedPage, setSelectedPage] = useState('')

    const router = useRouter();
    const {page, profile, activityType} = router.query;

    useEffect(() => {
        setSelectedPage(profile ? 1 : '')
        setProfileFilter(profile ? profile : '')
    }, [profile])

    useEffect(() => {
        setSelectedPage(activityType ? 1 : '')
        setActivityTypeFilter(activityType ? activityType : '')
    }, [activityType])

    useEffect(() => {
        setSelectedPage(page ? page : '')
    }, [page])

    useEffect(() => {
        const params = {}

        if (activityTypeFilter) {
            params['activityType'] = activityTypeFilter
        }

        if (profileFilter) {
            params['profile'] = profileFilter
        }

        if (selectedPage) {
            params['page'] = selectedPage
        }

        router.push({
            path: '/entries',
            query: params,
        }, undefined, { shallow: true })
    }, [profileFilter, activityTypeFilter, selectedPage])

    const breadcrumbObject = [
        { key: 'collections', title: 'Collections'},
    ]

    return (
        <div className={style.Page}>
            <PageHeader
                title={`News`}
                image={undefined}
                breadcrumbObject={breadcrumbObject}
                scrollScale={5}
            />
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div className={style.DropdownFiltersWrapper}>
                            <div>Filter By</div>
                            <div className={style.DropdownFilter}>
                                <DropdownFilter
                                    label={'Profile'}
                                    values={profileFilterValues}
                                    selectedValue={profileFilter}
                                    onSelect={setProfileFilter}
                                />
                            </div>
                            <div className={style.DropdownFilter}>
                                <DropdownFilter
                                    label={'Activity Type'}
                                    values={activityTypeFilterValues}
                                    selectedValue={activityTypeFilter}
                                    onSelect={setActivityTypeFilter}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
                <div style={{height: '48px'}}/>
                <SWRConfig value={{ fallback: initialData }}>
                    <NewsCards
                        page={selectedPage}
                        profile={profileFilter}
                        activityType={activityTypeFilter}
                        onPageSelect={setSelectedPage}
                    />
                </SWRConfig>
                <Row>
                    <div style={{height: '48px'}}/>
                </Row>
            </Container>
        </div>
    )
}

export default NewsPage;