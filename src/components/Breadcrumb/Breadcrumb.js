import style from "./Breadcrumb.module.scss";
import {Col, Row} from "react-bootstrap";
import {IconGeneralRight} from "@/components/Icon/GeneralIcon";
import React from 'react';

const Breadcrumb = ({breadcrumbObject}) => {
	const renderBreadcrumbs = () => {
		return breadcrumbObject.map((bco, idx) => {
			return (
				<React.Fragment key={idx}>
					<div className={'breadcrumb'}>{bco['title']}</div>
					<IconGeneralRight />
				</React.Fragment>
			)
		})
	}

	return (
		<>
			<Row>
				<Col xs={12}>
					<div className={style.BreadcrumbWrapper}>
						{renderBreadcrumbs()}
					</div>
				</Col>
			</Row>
		</>
	)
}

export default Breadcrumb;