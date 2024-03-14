import {fetchPrograms} from "@/utils/api/fetchPrograms";
import style from "./style.module.scss";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {Col, Container, Row} from "react-bootstrap";
import HorizontalFilters from "@/components/Filters/HorizontalFilters";
import DropdownFilter from "@/components/Filters/DropdownFilter";

export const getServerSideProps = (async () => {
	const [programsRes] = await Promise.all([
		fetchPrograms()
	]);
	const [programsData] = await Promise.all([
		programsRes.json()
	])
	return {
		props: {
			programsData
		}
	}
})

const ProgramCalendarPage = ({programsData}) => {
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

	return (
		<div className={style.Page}>
			<Container>
				<Breadcrumb breadcrumbObject={breadcrumbObject} />
				<Row>
					<Col xs={12}>
						<h1>Program Calendar</h1>
					</Col>
				</Row>
				<div style={{height: '48px'}} />
				<div className={style.Filters}>
					<HorizontalFilters values={programTypeFilterValues} align={'left'} />
					<div className={style.DropdownFilters}>
						<DropdownFilter label={'Langauge'} values={languageFilterValues} />
					</div>
				</div>
			</Container>
		</div>
	)
}

export default ProgramCalendarPage;