import {Col, Container, Row} from "react-bootstrap";
import style from "@/pages/pages.module.scss";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {fetchStaffList} from "@/utils/api/fetchStaff";
import StaffCard from "@/components/Cards/StaffCard";
import VerticalFilters from "@/components/Filters/VerticalFilters";

export const getServerSideProps = (async () => {
    const [staffData] = await Promise.all([
        fetchStaffList()
    ])
    return {
        props: {
            staffData
        }
    }
})

const StaffPage = ({staffData}) => {
    const renderStaff = () => {
        return staffData["data"].map(staff => {
            return (
                <Col xs={4}>
                    <StaffCard
                        key={staff["id"]}
                        data={staff['attributes']}
                    />
                </Col>
            )
        })
    }

    const filterValues = [
        {label: 'Administration'},
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

    const breadcrumbObject = [
        { key: 'about-us', title: 'About Us'},
    ]

    return (
        <div className={style.Page}>
            <Container>
                <Breadcrumb breadcrumbObject={breadcrumbObject} />
                <Row>
                    <Col xs={12}>
                        <h1>Staff</h1>
                    </Col>
                </Row>
                <div style={{height: '48px'}} />
                <Row>
                    <Col xs={4}>
                        <VerticalFilters title={'Filter by Department'} values={filterValues} />
                    </Col>
                    <Col xs={8}>
                        <Row>
                            {renderStaff()}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StaffPage;