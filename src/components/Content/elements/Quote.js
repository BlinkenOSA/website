import {Col, Row} from "react-bootstrap";
import style from "./Quote.module.scss"
import getColor from "@/utils/content/getColor";

const Quote = ({content, profile}) => {
	const color = getColor(profile)

	return (
		<Row>
			<Col xs={12}>
				<div className={`${style.Quote} ${style[color]}`}>
					{content['Quote']}
				</div>
			</Col>
		</Row>
	)
}

export default Quote;