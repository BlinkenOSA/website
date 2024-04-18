import {Col, Row} from "react-bootstrap";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import style from "./TextBox.module.scss"

const TextBox = ({content}) => {
	return (
		<Row>
			<Col xs={12}>
				<div className={style.TextBox}>
					<BlocksRenderer content={content['Text']} />
				</div>
			</Col>
		</Row>
	)
}

export default TextBox;