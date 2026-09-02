import {Col, Row} from "react-bootstrap";
import BlocksContentRenderer from "@/components/Content/BlocksContentRenderer";
import style from "./TextBox.module.scss"

const TextBox = ({content}) => {
	return (
		<Row>
			<Col xs={12}>
				<div className={style.TextBox}>
					<BlocksContentRenderer content={content['Text']} />
				</div>
			</Col>
		</Row>
	)
}

export default TextBox;
