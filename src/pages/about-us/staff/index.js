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
import useTranslation from "next-translate/useTranslation";
import {staffFilterValues} from "@/utils/filterValues/staffFilterValues";
import Head from "next/head";

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
	const { t, lang } = useTranslation('page')

	const [unitFilter, setUnitFilter] = useState('')

	const handleFilterChange = (id) => {
		if (unitFilter === id) {
			setUnitFilter('')
		} else {
			setUnitFilter(id)
		}
	}

	return (
		<>
			<Head>
				<title>Blinken OSA Archivum | {t('staff__title')}</title>
			</Head>
			<div className={style.Page}>
				<Container>
					<SimplePageHeader title={t('staff__title')} menu={'about-us'} breadCrumb={t('breadcrumb__about_us')} />
					<Row>
						<Col xs={12} sm={4} md={4}>
							<Media greaterThanOrEqual="sm">
								<VerticalFilters
									title={t('staff__filter__title')}
									values={staffFilterValues}
									selectedFilters={unitFilter}
									onChange={handleFilterChange}
								/>
							</Media>
							<Media lessThan="sm">
								<DropdownFilter
									label={t('staff__filter__dropdown_title')}
									values={staffFilterValues}
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
						<Spacer size={'medium'} />
					</Row>
				</Container>
			</div>
		</>
	)
}

export default StaffPage;