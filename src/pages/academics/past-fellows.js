import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/academics/style.module.scss";
import {useList} from "react-use";
import useSWR, {SWRConfig, unstable_serialize} from "swr";
import fetcher from "@/utils/api/fetcher";
import clientFetcher from "@/utils/api/clientFetcher";
import {fetchCurrentFellowsList, fetchPastFellowsList} from "@/utils/api/fetchFellows";
import FellowCard from "@/components/Cards/FellowCard";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import ContentPagination from "@/components/Pagination/ContentPagination";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";

export const getServerSideProps = (async (context) => {
    const parameters = context.query;
    const page = 'page' in parameters ? parameters['page'] : undefined

    const [url, params] = fetchPastFellowsList(page)
    const [fellowData] = await Promise.all([
        fetcher(url, params)
    ])
    return {
        props: {
            initialData: {
                [unstable_serialize([url, params])]: fellowData
            }
        }
    }
})

const FellowCards = ({page, onPageSelect}) => {
    const { data } = useSWR(
        fetchPastFellowsList(page),
        ([url, params]) => clientFetcher(url, params)
    )

    const renderCards = () => {
        return data && data["data"].map(staff => {
            return (
                <Col xs={12} sm={6} md={3}>
                    <FellowCard
                        key={staff["id"]}
                        data={staff['attributes']}
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

const FellowsPage = ({initialData}) => {
    const router = useRouter();
    const {page} = router.query;

    const [selectedPage, setSelectedPage] = useState(page ? page : '')

    useEffect(() => {
        const params = {}

        if (selectedPage) {
            params['page'] = selectedPage
        }

        router.push({
            path: '/academics/past-fellows',
            query: params,
        }, undefined, { shallow: true, scroll: false })
    }, [selectedPage])

    return (
        <div className={style.Page}>
            <Container>
                <SimplePageHeader title={'Past Fellows'} menu={'academics'} breadCrumb={'Academics'} />
                <Row>
                    <Col xs={12}>
                        <Row>
                            <SWRConfig value={{ fallback: initialData }}>
                                <FellowCards
                                    page={selectedPage}
                                    onPageSelect={setSelectedPage}
                                />
                            </SWRConfig>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FellowsPage;