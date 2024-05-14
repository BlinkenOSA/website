import style from "@/pages/pages.module.scss";
import { InstantSearch, Pagination, Hits, RefinementList } from 'react-instantsearch';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import {Container, Col, Row} from "react-bootstrap";
import SiteSearchBox from "@/components/SiteSearch/SiteSearchBox";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import React from "react";

const server = process.env.NEXT_PUBLIC_MEILISEARCH_URL
const key = process.env.NEXT_PUBLIC_MEILISEARCH_API_KEY

const { searchClient } = instantMeiliSearch(server, key);

function Hit({ hit }) {
	return <div>{hit.hasOwnProperty('Name') ? hit.Name : hit.Title}</div>;
}



const SearchPage = () => {
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

		return items.map((item) => ({
			...item,
			label: dictionary[item.label],
		}));
	};

	return (
		<div className={style.Page}>
			<Container>
				<SimplePageHeader title={'Search'} />
				<InstantSearch
					indexName="website"
					searchClient={searchClient}
				>
					<Row>
						<Col md={4}>
							<div class="subtitle-large">Filter by Type</div>
							<RefinementList attribute="type" operator="and" transformItems={transformTypeFilter} />
						</Col>
						<Col md={8}>
							<SiteSearchBox />
							<Hits hitComponent={Hit} />
							<Pagination showLast={true} />
						</Col>
					</Row>
				</InstantSearch>
			</Container>
		</div>
	)
}

export default SearchPage;
