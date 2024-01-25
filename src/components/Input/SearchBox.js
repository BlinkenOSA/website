import style from "@/components/Input/SearchBox.module.scss";
import Form from "react-bootstrap/Form";
import {InputGroup} from "react-bootstrap";
import {IconGeneralSearch} from "@/components/Icon/Icon";

const SearchBox = ({disabled}) => {
	return (
		<InputGroup className={style.InputGroup}>
			<InputGroup.Text id={disabled ? 'search-icon-disabled' : 'search-icon'}>
				<IconGeneralSearch size={'small'} />
			</InputGroup.Text>
			<Form.Control
				type={"search"}
				id={"search-box"}
				disabled={disabled}
				placeholder={"Search for..."}
			/>
		</InputGroup>
	)
}

export default SearchBox;