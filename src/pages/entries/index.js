import style from "./style.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import fetcher from "@/utils/api/fetcher";
import useSWR, {SWRConfig, unstable_serialize} from "swr";
import React, {useEffect, useState} from "react";
import clientFetcher from "@/utils/api/clientFetcher";
import {fetchEntriesList} from "@/utils/api/fetchEntries";
import {useRouter} from "next/router";
import EntryCard from "@/components/Cards/EntryCard";
import DropdownFilter from "@/components/Filters/DropdownFilter";
import ContentPagination from "@/components/Pagination/ContentPagination";
import {entryTypeFilterValues} from "@/utils/filterValues/entryTypeFilterValues";
import {useMedia, useUpdateEffect} from "react-use";
import Spacer from "@/components/Spacer/Spacer";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export const getServerSideProps = (async (context) => {
    const { entryType, ...parameters } = context.query;

    const page = 'page' in parameters ? parameters['page'] : undefined
    const profile = 'profile' in parameters ? parameters['profile'] : undefined

    const [url, params] = fetchEntriesList(page, profile, entryType)
    const [entriesData] = await Promise.all([
        fetcher(url, params)
    ])

    return {
        props: {
            initialData: {
                [unstable_serialize([url, params])]: entriesData
            }
        }
    }
})


const EntryCards = ({data}) => {
    const renderCards = () => {
        return data && data["data"].map(entry => {
            return (
                <Col xs={12} sm={6} md={4}>
                    <EntryCard
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

const EntriesContent = ({initialData}) => {
    const router = useRouter();
    const {page, profile, entryType} = router.query;

    const { t, lang } = useTranslation('filters')

    const [profileFilter, setProfileFilter] = useState(profile)
    const [entryTypeFilter, setEntryTypeFilter] = useState(entryType)
    const [selectedPage, setSelectedPage] = useState(page)

    const isMobile = useMedia('(max-width: 700px)', true);

    const { data } = useSWR(
        fetchEntriesList(selectedPage, profileFilter, entryTypeFilter),
        ([url, params]) => clientFetcher(url, params)
    )

    useUpdateEffect(() => {
        setProfileFilter(profile)
        setEntryTypeFilter(entryType)
        setSelectedPage(page)
    }, [profile, entryType, page])

    useUpdateEffect(() => {
        setSelectedPage(1)
    }, [profileFilter])

    useUpdateEffect(() => {
        setSelectedPage(1)
    }, [entryTypeFilter])


    useUpdateEffect(() => {
        const params = {}

        if (entryTypeFilter) {
            params['entryType'] = entryTypeFilter
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
        }, undefined, { shallow: true, scroll: false })
    }, [profileFilter, entryTypeFilter, selectedPage])

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
                                label={t('page:entryType__filter__dropdown_title')}
                                values={entryTypeFilterValues}
                                selectedValue={entryTypeFilter}
                                onSelect={setEntryTypeFilter}
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
            <EntryCards data={data}/>
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


const EntriesPage = ({initialData}) => {
    const { t, lang } = useTranslation('page')

    return (
        <>
            <Head>
                <title>Blinken OSA Archivum - {t('entries__title')}</title>
            </Head>
            <div className={style.Page}>
                <Container>
                    <Spacer />
                    <Row>
                        <Col xs={12}>
                            <h1>{t('entries__title')}</h1>
                        </Col>
                    </Row>
                    <Spacer />
                    <EntriesContent initialData={initialData}/>
                    <Spacer />
                </Container>
            </div>
        </>
    )
}

export default EntriesPage;