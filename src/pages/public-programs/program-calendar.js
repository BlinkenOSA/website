import {fetchPrograms} from "@/utils/api/fetchPrograms";
import style from "./style.module.scss";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {Col, Container, Row} from "react-bootstrap";
import HorizontalFilters from "@/components/Filters/HorizontalFilters";
import DropdownFilter from "@/components/Filters/DropdownFilter";
import getIconByType from "@/utils/content/getIconByType";
import getDateString from "@/utils/content/getDateString";
import getColor from "@/utils/content/getColor";
import {Collapse} from 'react-collapse';
import React from "react";
import getImageUrl from "@/utils/content/getImageUrl";
import MaskedImage from "@/components/MaskedImage/MaskedImage";
import {useList} from "react-use";
import Button from "@/components/Button/Button";

export const getServerSideProps = (async () => {
	const [programsData] = await Promise.all([
		fetchPrograms()
	])
	return {
		props: {
			programsData
		}
	}
})

const ProgramDataRow = ({id, data, onTitleClick}) => {
	const color = getColor(data['Profile'])
	const icon = getIconByType(data['EventType'], 'medium', color)
	const title = data['Title']
	const language = data['Language']
	const hostingType = data['HostingType']
	const date = getDateString(data['StartDate'], 'YYYY-MM-DDTHH:MM:SS', 'eventFull')

	return (
		<Row className={style.ProgramRow}>
			<Col xs={1} className={style.Icon}>
				{icon}
			</Col>
			<Col xs={6}>
				<div className={`${style.Title} subtitle-small`} onClick={() => onTitleClick(id)}>{title}</div>
			</Col>
			<Col xs={2}>
				{id} {hostingType} {language !== null ? `/ ${language}` : ''}
			</Col>
			<Col xs={3} className={style.Date}>
				<div className={'subtitle-small'}>{date}</div>
			</Col>
		</Row>
	)
}

const ProgramDetail = ({id, data, isOpened}) => {
	const image = getImageUrl(data['Image'])
	const description = data['CardText']
	const color = getColor(data['Profile'])
	const registrationLink = data['RegistrationLink']

	return (
		<Collapse isOpened={isOpened}>
			<Row style={{padding: '24px 0'}}>
				<Col xs={4}>
					<MaskedImage src={image} type={'landscape'} />
				</Col>
				<Col xs={8}>
					{description}
					<div className={style.ProgramDetailButtons}>
						<Button
							type={'secondary'}
							size={'medium'}
							color={color}
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

const ProgramCalendarPage = ({programsData}) => {
	const [openedPrograms, {push, removeAt}] = useList([])

	const onTitleClick = (id) => {
		if (openedPrograms.includes(id)) {
			removeAt(openedPrograms.indexOf(id))
		} else {
			push(id)
		}
	}

	const displayEvents = () => {
		return programsData['data'].map(program => {
			return (
				<React.Fragment key={`program_${program['id']}`}>
					<ProgramDataRow id={program['id']} data={program['attributes']} onTitleClick={onTitleClick} />
					<ProgramDetail id={program['id']} data={program['attributes']} isOpened={openedPrograms.includes(program['id'])} />
				</React.Fragment>
			)
		})
	}

	const breadcrumbObject = [
		{ key: 'public-programs', title: 'Public Programs'},
	]

	const programTypeFilterValues = [
		{value: 'all', label: 'All', color: 'neutral'},
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
				<Breadcrumb breadcrumbObject={breadcrumbObject} />
				<Row>
					<Col xs={12}>
						<h1>Program Calendar</h1>
					</Col>
				</Row>
				<div style={{height: '48px'}} />
				<Row>
					<Col md={12} lg={6}>
						<HorizontalFilters values={programTypeFilterValues} align={'left'} onSelect={() => {}}/>
					</Col>
					<Col md={12} lg={6}>
						<div className={style.DropdownFiltersWrapper}>
							<div>Filter By</div>
							<div className={style.DropdownFilter}>
								<DropdownFilter label={'Langauge'} values={languageFilterValues} />
							</div>
							<div className={style.DropdownFilter}>
								<DropdownFilter label={'Hosting Type'} values={hostingTypeFilterValues} />
							</div>
						</div>
					</Col>
				</Row>
				<div style={{height: '48px'}}/>
				{displayEvents()}
			</Container>
		</Col>
	)
}

export default ProgramCalendarPage;