import style from "@/pages/pages.module.scss";
import { renderToString } from 'react-dom/server';
import searchStyle from "./search.module.scss";
import {InstantSearch, InstantSearchSSRProvider, Hits, RefinementList, Configure, getServerState} from 'react-instantsearch';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import {Container, Col, Row} from "react-bootstrap";
import SiteSearchBox from "@/components/SiteSearch/SiteSearchBox";
import React, {useState} from "react";
import SiteSearchPagination from "@/components/SiteSearch/SiteSearchPagination";
import Spacer from "@/components/Spacer/Spacer";
import SiteSearchHitCard from "@/components/SiteSearch/SiteSearchHitCard";
import singletonRouter from 'next/router';
import { createInstantSearchRouterNext } from 'react-instantsearch-router-nextjs';
import PageHeader from "@/components/PageHeader/PageHeader";
import {Media} from "@/utils/media";
import Button from "@/components/Button/Button";
import {Collapse} from 'react-collapse';

const server = process.env.NEXT_PUBLIC_MEILISEARCH_URL
const key = process.env.NEXT_PUBLIC_MEILISEARCH_API_KEY

const { searchClient } = instantMeiliSearch(server, key);

export async function getServerSideProps({ req }) {
	const protocol = req.headers.referer?.split('://')[0] || 'https';
	const serverUrl = `${protocol}://${req.headers.host}${req.url}`;
	const serverState = await getServerState(
		<SearchPage serverUrl={serverUrl} />,
		{ renderToString }
	);

	return {
		props: {
			serverState,
			serverUrl,
		},
	};
}

const SearchPage = ({ serverState, serverUrl }) => {
	const [filterShown, setFilterShown] = useState(false)

	const transformTypeFilter = (items) => {
		const dictionary = {
			annualReport: 'Annual Report',
			collection: 'Collection',
			entry: 'Blog / Podcast / Video',
			event: 'Event',
			fellow: 'Fellow',
			job: 'Job',
			news: 'News',
			page: 'Page',
			project: 'Project',
			staff: 'Staff'
		}

		return items.map((item) => {
			const {count, ...rest} = item

			return ({
				...rest,
				label: <div>{dictionary[item.label]} ({count})</div>
			})
		});
	};

	const createURL = ({qsModule, location, routeState}) => {

	}

	return (
		<div className={style.Page}>
			<PageHeader title={'Search'} image={'/images/search.jpg'} isBlur={true} />
			<Container>
				<InstantSearchSSRProvider {...serverState}>
					<InstantSearch
						indexName="website"
						searchClient={searchClient}
						routing={{
							router: createInstantSearchRouterNext({ singletonRouter, serverUrl,
								routerOptions: {
									cleanUrlOnDispose: false,
								},
							}),
						}}
						future={{
							preserveSharedStateOnUnmount: true,
						}}
					>
						<div className={searchStyle.Wrapper}>
							<Row>
								<Col xs={12} sm={3} md={3}>
									<Media greaterThanOrEqual={'sm'}>
										<div className={searchStyle.FiltersWrapper}>
											<div className="subtitle-large">Filter by Type</div>
											<RefinementList attribute="type" operator="and" />
										</div>
									</Media>
									<Media lessThan={'sm'}>
										<Button type={'primary'} color={'neutral'} size={'medium'} onClick={() => setFilterShown(!filterShown)}>
											{filterShown ? `Close Filter` : `Open Filter`}
										</Button>
										<Spacer/>
										<Collapse isOpened={filterShown}>
											<div className={searchStyle.FiltersWrapper}>
												<div className="subtitle-large">Filter by Type</div>
												<RefinementList attribute="type" operator="and" />
												<Spacer/>
											</div>
										</Collapse>
									</Media>
								</Col>
								<Col xs={12} sm={9} md={9}>
									<SiteSearchBox />
									<Spacer size={'small'}/>
									<SiteSearchPagination
										showFirst={false}
										showLast={false}
									/>
									<Hits hitComponent={SiteSearchHitCard} />
									<SiteSearchPagination
										showFirst={false}
										showLast={false}
									/>
									<Spacer />
								</Col>
							</Row>
						</div>
					</InstantSearch>
				</InstantSearchSSRProvider>
			</Container>
		</div>
	)
}

export default SearchPage;
