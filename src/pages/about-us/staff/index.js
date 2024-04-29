import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import {fetchStaffList} from "@/utils/api/fetchStaff";
import StaffCard from "@/components/Cards/StaffCard";
import VerticalFilters from "@/components/Filters/VerticalFilters";
import {useList} from "react-use";
import useSWR, {SWRConfig, unstable_serialize} from "swr";
import fetcher from "@/utils/api/fetcher";
import clientFetcher from "@/utils/api/clientFetcher";
import SimplePageHeader from "@/components/PageHeader/SimplePageHeader";
import React, {useState} from "react";
import {Media} from "@/utils/media";
import DropdownFilter from "@/components/Filters/DropdownFilter";
import Spacer from "@/components/Spacer/Spacer";

export const getServerSideProps = (async () => {
	const [url, params] = fetchStaffList()
	const [staffData] = await Promise.all([
		fetcher(url, params)
	])
	return {
		props: {
			initialData: {
				[unstable_serialize([url, params])]: staffData
			}
		}
	}
})

const StaffCards = ({selectedFilters}) => {
	const { data } = useSWR(
		fetchStaffList(selectedFilters),
		([url, params]) => clientFetcher(url, params)
	)

	return data && data["data"].map(staff => {
		return (
			<Col xs={12} sm={6} md={4}>
				<StaffCard
					key={staff["id"]}
					data={staff['attributes']}
				/>
			</Col>
		)
	})
}

const StaffPage = ({initialData}) => {
	const [unitFilter, setUnitFilter] = useState('')

	const filterValues = [
		{label: 'Administration', value: 'Administration'},
		{label: 'Archival Programs'},
		{label: 'Audiovisual Unit'},
		{label: 'Chief Archivist'},
		{label: 'Director'},
		{label: 'Event & Exhibition'},
		{label: 'IT Office'},
		{label: 'Library'},
		{label: 'Public Awareness Unit'},
		{label: 'Records Management'},
		{label: 'Reference Services'},
		{label: 'Research'},
		{label: 'Verzio Filmfestival'}
	]

	const handleFilterChange = (id) => {
		if (unitFilter === id) {
			setUnitFilter('')
		} else {
			setUnitFilter(id)
		}
	}

	return (
		<div className={style.Page}>
			<Container>
				<SimplePageHeader title={'Our Staff'} menu={'about-us'} breadCrumb={'About Us'} />
				<Row>
					<Col xs={12} sm={4} md={4}>
						<Media greaterThanOrEqual="sm">
							<VerticalFilters
								title={'Filter by Department'}
								values={filterValues}
								selectedFilters={unitFilter}
								onChange={handleFilterChange}
							/>
						</Media>
						<Media lessThan="sm">
							<DropdownFilter
								label={'Department'}
								values={filterValues}
								selectedValue={unitFilter}
								onSelect={handleFilterChange}
							/>
						</Media>
					</Col>
					<Media lessThan="sm">
						<Spacer />
					</Media>
					<Col xs={12} sm={8} md={8}>
						<Row>
							<SWRConfig value={{ fallback: initialData }}>
								<StaffCards selectedFilters={unitFilter} />
							</SWRConfig>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default StaffPage;