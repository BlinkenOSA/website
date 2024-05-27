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
import {useMedia, useUpdateEffect} from "react-use";
import Spacer from "@/components/Spacer/Spacer";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

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


const NewsCards = ({data}) => {
    const renderCards = () => {
        return data && data["data"].map(entry => {
            return (
                <Col xs={12} sm={6} md={4}>
                    <NewsCard
                        key={entry["id"]}
                        id={entry["id"]}
                        data={entry['attributes']}
                    />
                </Col>
            )
        })
    }

    return (
        <Row>
            {renderCards()}
        </Row>
    )
}

const NewsContent = ({initialData}) => {
    const router = useRouter();
    const {page, profile, entryType} = router.query;

    const { t, lang } = useTranslation('filters')

    const [profileFilter, setProfileFilter] = useState(profile)
    const [selectedPage, setSelectedPage] = useState(page)

    const isMobile = useMedia('(max-width: 700px)', true);

    const { data } = useSWR(
        fetchNewsList(page, profile),
        ([url, params]) => clientFetcher(url, params)
    )

    useUpdateEffect(() => {
        setProfileFilter(profile)
        setSelectedPage(page)
    }, [profile, entryType, page])

    useUpdateEffect(() => {
        setSelectedPage(1)
    }, [profileFilter])

    useUpdateEffect(() => {
        const params = {}

        if (profileFilter) {
            params['profile'] = profileFilter
        }

        if (selectedPage) {
            params['page'] = selectedPage
        }

        router.push({
            path: '/news',
            query: params,
        }, undefined, { shallow: true, scroll: false })
    }, [profileFilter, selectedPage])

    const handleClick = (page) => {
        setSelectedPage(page)
    }

    return (
        <SWRConfig value={{ fallback: initialData }}>
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <div className={style.DropdownFiltersWrapper}>
                        <div>{t('dropdown__filter__title')}</div>
                        <div className={style.DropdownFilter}>
                            <DropdownFilter
                                label={t('page:profile__filter__dropdown_title')}
                                values={profileFilterValues}
                                selectedValue={profileFilter}
                                onSelect={setProfileFilter}
                            />
                        </div>
                    </div>
                </Col>
                {
                    !isMobile &&
                    <Col xs={12} sm={6} md={8}>
                        {
                            data &&
                            <ContentPagination
                                onClick={handleClick}
                                page={data["meta"]["pagination"]["page"]}
                                pageCount={data["meta"]["pagination"]["pageCount"]}
                            />
                        }
                    </Col>
                }
            </Row>
            <Spacer />
            <NewsCards data={data}/>
            <Spacer />
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
        </SWRConfig>
    )
}


const NewsPage = ({initialData}) => {
    const { t, lang } = useTranslation('page')

    return (
        <>
            <Head>
               <title>{t('news__title')}</title>
            </Head>
            <div className={style.Page}>
                <Container>
                    <Spacer />
                    <Row>
                        <Col xs={12}>
                            <h1>{t('news__title')}</h1>
                        </Col>
                    </Row>
                    <Spacer />
                    <NewsContent initialData={initialData} />
                    <Spacer />
                </Container>
            </div>
        </>
    )
}

export default NewsPage;