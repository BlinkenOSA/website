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
import {profileFilterValues} from "@/utils/filterValues/profileFilterValues";
import {entryTypeFilterValues} from "@/utils/filterValues/entryTypeFilterValues";

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


const EntryCards = ({page, profile, entryType, onPageSelect}) => {
    const { data } = useSWR(
        fetchEntriesList(page, profile, entryType),
        ([url, params]) => clientFetcher(url, params)
    )

    const renderCards = () => {
        return data && data["data"].map(entry => {
            return (
                <Col xs={4}>
                    <EntryCard
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


const EntriesPage = ({initialData}) => {
    const router = useRouter();
    const {page, profile, entryType} = router.query;

    const [profileFilter, setProfileFilter] = useState(profile ? profile : '')
    const [entryTypeFilter, setEntryTypeFilter] = useState(entryType ? entryType : '')
    const [selectedPage, setSelectedPage] = useState(page ? page : '')

    useEffect(() => {
        setSelectedPage(profile ? 1 : '')
    }, [profile])

    useEffect(() => {
        setSelectedPage(entryType ? 1 : '')
    }, [entryType])

    useEffect(() => {
        setSelectedPage(page ? page : '')
    }, [page])

    useEffect(() => {
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
        }, undefined, { shallow: true })
    }, [profileFilter, entryTypeFilter, selectedPage])

    return (
        <div className={style.Page}>
            <Container>
                <div style={{height: '48px'}}/>
                <Row>
                    <Col xs={12}>
                        <h1>Blog - Podcast - Video</h1>
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
                            <div className={style.DropdownFilter}>
                                <DropdownFilter
                                    label={'Entry Type'}
                                    values={entryTypeFilterValues}
                                    selectedValue={entryTypeFilter}
                                    onSelect={setEntryTypeFilter}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
                <div style={{height: '48px'}}/>
                <SWRConfig value={{ fallback: initialData }}>
                    <EntryCards
                        page={selectedPage}
                        profile={profileFilter}
                        entryType={entryTypeFilter}
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

export default EntriesPage;