import style from "./style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import fetcher from "@/utils/api/fetcher";
import useSWR, {SWRConfig, unstable_serialize} from "swr";
import React, {useEffect, useState} from "react";
import clientFetcher from "@/utils/api/clientFetcher";
import {useRouter} from "next/router";
import DropdownFilter from "@/components/Filters/DropdownFilter";
import ContentPagination from "@/components/Pagination/ContentPagination";
import {fetchNewsList} from "@/utils/api/fetchNews";
import NewsCard from "@/components/Cards/NewsCard";
import {profileFilterValues} from "@/utils/filterValues/profileFilterValues";

export const getServerSideProps = (async (context) => {
    const parameters = context.query;

    const page = 'page' in parameters ? parameters['page'] : undefined
    const profile = 'profile' in parameters ? parameters['profile'] : undefined

    const [url, params] = fetchNewsList(page, profile)
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


const NewsCards = ({page, profile, onPageSelect}) => {
    const { data } = useSWR(
        fetchNewsList(page, profile),
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
    const router = useRouter();
    const {page, profile} = router.query;

    const [profileFilter, setProfileFilter] = useState(profile ? profile : '')
    const [selectedPage, setSelectedPage] = useState('')

    useEffect(() => {
        setSelectedPage(profile ? 1 : '')
    }, [profile])

    useEffect(() => {
        setSelectedPage(page ? page : '')
    }, [page])

    useEffect(() => {
        const params = {}

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
    }, [profileFilter, selectedPage])

    return (
        <div className={style.Page}>
            <Container>
                <div style={{height: '48px'}}/>
                <Row>
                    <Col xs={12}>
                        <h1>News</h1>
                    </Col>
                </Row>
                <div style={{height: '48px'}}/>
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
                        </div>
                    </Col>
                </Row>
                <div style={{height: '48px'}}/>
                <SWRConfig value={{ fallback: initialData }}>
                    <NewsCards
                        page={selectedPage}
                        profile={profileFilter}
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