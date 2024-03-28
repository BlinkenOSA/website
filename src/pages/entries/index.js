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

export const getServerSideProps = (async (context) => {
    const { entryType, ...parameters } = context.query;

    const profile = 'profile' in parameters ? parameters['profile'] : undefined

    const [url, params] = fetchEntriesList(undefined, profile)
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


const EntryCards = ({profile, entryType}) => {
    const { data } = useSWR(
        fetchEntriesList(undefined, profile, entryType),
        ([url, params]) => clientFetcher(url, params)
    )

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


const EntriesPage = ({initialData}) => {
    const [profileFilter, setProfileFilter] = useState('')
    const [entryTypeFilter, setEntryTypeFilter] = useState('')

    const router = useRouter();
    const {profile, entryType} = router.query;

    useEffect(() => {
        setProfileFilter(profile ? profile : '')
    }, [profile])

    useEffect(() => {
        setEntryTypeFilter(entryType ? entryType : '')
    }, [entryType])

    useEffect(() => {
        const params = {}

        if (entryTypeFilter) {
            params['entryType'] = entryTypeFilter
        }

        if (profileFilter) {
            params['profile'] = profileFilter
        }

        router.push({
            path: '/entries',
            query: params,
        }, undefined, { shallow: true })
    }, [profileFilter, entryTypeFilter])

    const breadcrumbObject = [
        { key: 'collections', title: 'Collections'},
    ]

    const profileFilterValues = [
        {value: 'Archivum', label: 'Archivum'},
        {value: 'Collections', label: 'Collections'},
        {value: 'Academics', label: 'Academics'},
        {value: 'Public', label: 'Public Programs'},
    ]

    const entryTypeValues = [
        {value: 'Blog', label: 'Blog'},
        {value: 'Podcast', label: 'Podcast'},
        {value: 'Video', label: 'Video'},
    ]

    return (
        <div className={style.Page}>
            <PageHeader
                title={`Blogs, Podcasts, Videos`}
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
                                    label={'Entry Type'}
                                    values={entryTypeValues}
                                    selectedValue={entryTypeFilter}
                                    onSelect={setEntryTypeFilter}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
                <div style={{height: '48px'}}/>
                <Row>
                    <SWRConfig value={{ fallback: initialData }}>
                        <EntryCards profile={profileFilter} entryType={entryTypeFilter} />
                    </SWRConfig>
                </Row>
                <div style={{height: '48px'}}/>
            </Container>
        </div>
    )
}

export default EntriesPage;