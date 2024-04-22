import {fetchPrograms} from "@/utils/api/fetchPrograms";
import style from "./style.module.scss";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {Col, Container, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import HorizontalFilters from "@/components/Filters/HorizontalFilters";
import DropdownFilter from "@/components/Filters/DropdownFilter";
import getIconByType from "@/utils/content/getIconByType";
import getDateString from "@/utils/content/getDateString";
import getColor from "@/utils/content/getColor";
import {Collapse} from 'react-collapse';
import React, {useEffect, useState} from "react";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import {useList, useUpdateEffect} from "react-use";
import Button from "@/components/Button/Button";
import fetcher from "@/utils/api/fetcher";
import useSWR, {SWRConfig, unstable_serialize} from "swr";
import clientFetcher from "@/utils/api/clientFetcher";
import {useRouter} from "next/router";
import dayjs from "dayjs";
import getImageData from "@/utils/content/getImageData";

export const getServerSideProps = (async (context) => {
	const parameters = context.query;
	const programType = 'programType' in parameters ? parameters['programType'] : undefined

	const [url, params] = fetchPrograms(programType)
	const [programsData] = await Promise.all([
		fetcher(url, params)
	])
	return {
		props: {
			initialData: {
				[unstable_serialize([url, params])]: programsData
			}
		}
	}
})

const ProgramCalendarHeader = () => {
	return (
		<>
			<Row className={style.ProgramHeaderRow}>
				<Col xs={3} className={style.Date}>
					<span className={'subtitle-small'}>Date</span>
				</Col>
				<Col xs={1} className={style.Icon}>
					<span className={'subtitle-small'}>Type</span>
				</Col>
				<Col xs={6}>
					<span className={'subtitle-small'}>Title</span>
				</Col>
				<Col xs={2}>
					<span className={'subtitle-small'}>Format / Language</span>
				</Col>
			</Row>
		</>
	)
}

const ToolTipStuff = ({ id, children, title }) => (
	<OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
		<div>{children}</div>
	</OverlayTrigger>
);

const ProgramDataRow = ({id, index, data, onTitleClick}) => {
	const color = getColor(data['Profile'])
	const icon = getIconByType(data['EventType'], 'normal', color)
	const title = data['Title']
	const language = data['Language']
	const hostingType = data['HostingType']
	const date = getDateString(data['StartDate'], undefined, 'eventFull')


	return (
		<>
			<Row className={index === 0 ? `${style.ProgramRow} ${style.First}` : style.ProgramRow} onClick={() => onTitleClick(id)}>
				<Col xs={3} className={style.Date}>
					<div className={'subtitle-small'}>{date}</div>
				</Col>
				<Col xs={1} className={style.Icon}>
					<ToolTipStuff id={id} title={data['EventType']}>
						{icon}
					</ToolTipStuff>
				</Col>
				<Col xs={6}>
					<div className={`${style.Title} subtitle-small`}>{title}</div>
				</Col>
				<Col xs={2}>
					{hostingType} {language !== null ? `/ ${language}` : ''}
				</Col>
			</Row>
		</>
	)
}

const ProgramDetail = ({id, data, isOpened}) => {
	const imageData = getImageData(data['Image'], "medium")
	const description = data['CardText']
	const shortDescription = data['DescriptionShort']
	const color = getColor(data['Profile'])
	const registrationLink = data['RegistrationLink']

	return (
		<Collapse isOpened={isOpened}>
			<Row style={{padding: '24px 0'}}>
				<Col xs={4}>
					<MaskedImage src={imageData['url']} type={'landscape'} />
				</Col>
				<Col xs={8}>
					{shortDescription ? shortDescription : description}
					<div className={style.ProgramDetailButtons}>
						<Button
							type={'secondary'}
							size={'medium'}
							color={color}
							linkTarget={'_self'}
							link={`/events/${id}`}>More Info</Button>
						{
							registrationLink &&
							<Button
								type={'primary'}
								size={'medium'}
								color={color}
								link={registrationLink}>
								Registration Link
							</Button>
						}
					</div>
				</Col>
			</Row>
		</Collapse>
	)
}


const ProgramRows = ({programTypeFilter, languageFilter, hostingTypeFilter}) => {
	const [openedPrograms, {push, removeAt}] = useList([])

	const onTitleClick = (id) => {
		if (openedPrograms.includes(id)) {
			removeAt(openedPrograms.indexOf(id))
		} else {
			push(id)
		}
	}

	const { data } = useSWR(
		fetchPrograms(programTypeFilter, languageFilter, hostingTypeFilter),
		([url, params]) => clientFetcher(url, params)
	)

	const detectPastProgram = (index) => {
		const startDate = dayjs(data['data'][index]['attributes']['StartDate'])
		const now = dayjs()

		if (index === 0) {
			if (startDate < now) {
				return true
			}
		} else {
			const previousStartDate = dayjs(data['data'][index-1]['attributes']['StartDate'])
			if (startDate < now && previousStartDate >= now) {
				return true
			}
		}
	}

	return data && data['data'].map((program, idx) => {
		return (
			<React.Fragment key={`program_${program['id']}`}>
				{
					detectPastProgram(idx) &&
					<Row className={style.TimeInfoRow}>
						<Col xs={12}>
							<div className={style.TimeInfoElements}>
								<span className={'subtitle-small'}>Past Programs</span>
							</div>
						</Col>
					</Row>
				}
				<ProgramDataRow id={program['id']} data={program['attributes']} index={idx} onTitleClick={onTitleClick} />
				<ProgramDetail id={program['id']} data={program['attributes']} isOpened={openedPrograms.includes(program['id'])} />
			</React.Fragment>
		)
	})
}

const ProgramCalendarPage = ({initialData}) => {
	const router = useRouter();
	const {programType} = router.query;

	const [programTypeFilter, setProgramTypeFilter] = useState(programType ? programType : 'All')
	const [languageFilter, setLanguageFilter] = useState('')
	const [hostingTypeFilter, setHostingTypeFilter] = useState('')


	useUpdateEffect(() => {
		const params = {}

		if (programTypeFilter) {
			params['programType'] = programTypeFilter
		}

		router.push({
			path: '/program-calendar',
			query: params,
		}, undefined, { shallow: true })
	}, [programTypeFilter])

	const programTypeFilterValues = [
		{value: 'All', label: 'All', color: 'neutral'},
		{value: 'Academic', label: 'Academic Programs', color: 'aqua'},
		{value: 'Public', label: 'Public Programs', color: 'sage'}
	]

	const languageFilterValues = [
		{value: 'English', label: 'English'},
		{value: 'Hungarian', label: 'Hungarian'},
		{value: 'Bi-Lingual', label: 'Bi-Lingual'},
	]

	const hostingTypeFilterValues = [
		{value: 'In-Person', label: 'In-Person'},
		{value: 'Hybrid', label: 'Hybrid'},
		{value: 'Online', label: 'Online'},
	]

	return (
		<Col className={style.Page}>
			<Container>
				<div style={{height: '48px'}} />
				<Row>
					<Col xs={12}>
						<h1>Program Calendar</h1>
					</Col>
				</Row>
				<div style={{height: '48px'}} />
				<Row>
					<Col md={12} lg={6}>
						<HorizontalFilters
							values={programTypeFilterValues}
							selectedFilter={programTypeFilter}
							align={'left'}
							onSelect={setProgramTypeFilter}/>
					</Col>
					<Col md={12} lg={6}>
						<div className={style.DropdownFiltersWrapper}>
							<div>Filter By</div>
							<div className={style.DropdownFilter}>
								<DropdownFilter
									label={'Langauge'}
									values={languageFilterValues}
									selectedValue={languageFilter}
									onSelect={setLanguageFilter}
								/>
							</div>
							<div className={style.DropdownFilter}>
								<DropdownFilter
									label={'Format'}
									values={hostingTypeFilterValues}
									selectedValue={hostingTypeFilter}
									onSelect={setHostingTypeFilter}
								/>
							</div>
						</div>
					</Col>
				</Row>
				<div style={{height: '48px'}}/>
				<SWRConfig value={{ fallback: initialData }}>
					<ProgramCalendarHeader/>
					<ProgramRows
						programTypeFilter={programTypeFilter}
						languageFilter={languageFilter}
						hostingTypeFilter={hostingTypeFilter}
					/>
				</SWRConfig>
			</Container>
		</Col>
	)
}

export default ProgramCalendarPage;