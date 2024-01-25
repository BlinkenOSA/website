import style from "@/components/Layout/Footer.module.scss";
import Logo from "@/components/Logo/Logo";
import {Col, Row} from "react-bootstrap";

const Footer = () => {
	return (
		<div className={style.FooterWrapper}>
			<Row>
				<Col xs={3}>
					<Logo mode={'light'} height={30} />
				</Col>
				<Col xs={5}> </Col>
				<Col xs={4}> </Col>
			</Row>
		</div>
	)
}

export default Footer