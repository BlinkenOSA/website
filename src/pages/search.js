import style from "@/pages/pages.module.scss";
import searchStyle from "./search.module.scss";
import {InstantSearch, Pagination, Hits, RefinementList, Configure} from 'react-instantsearch';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import {Container, Col, Row} from "react-bootstrap";
import SiteSearchBox from "@/components/SiteSearch/SiteSearchBox";
import React from "react";
import SiteSearchPagination from "@/components/SiteSearch/SiteSearchPagination";
import Spacer from "@/components/Spacer/Spacer";
import SiteSearchHitCard from "@/components/SiteSearch/SiteSearchHitCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import {useRouter} from "next/router";

const server = process.env.NEXT_PUBLIC_MEILISEARCH_URL
const key = process.env.NEXT_PUBLIC_MEILISEARCH_API_KEY

const { searchClient } = instantMeiliSearch(server, key);

const SearchPage = () => {
	const router = useRouter();
	const {query, page, type} = router.query;

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

	return (
		<div className={style.Page}>
			<PageHeader title={'Search'} image={'/images/search.jpg'} isBlur={true} />
			<Container>
				<InstantSearch
					indexName="website"
					searchClient={searchClient}
				>
					<div className={searchStyle.Wrapper}>
						<Row>
							<Col md={3}>
								<div className={searchStyle.FiltersWrapper}>
									<div className="subtitle-large">Filter by Type</div>
									<RefinementList attribute="type" operator="and" transformItems={transformTypeFilter} />
								</div>
							</Col>
							<Col md={9}>
								<Configure query={query} page={page > 0 ? page-1 : undefined} />
								<SiteSearchBox />
								<Spacer size={'medium'}/>
								<SiteSearchPagination
									showFirst={false}
									showLast={false}
								/>
								<Spacer size={'small'}/>
								<Hits hitComponent={SiteSearchHitCard} />
								<Spacer size={'medium'}/>
								<SiteSearchPagination
									showFirst={false}
									showLast={false}
								/>
							</Col>
						</Row>
					</div>
				</InstantSearch>
			</Container>
		</div>
	)
}

export default SearchPage;
