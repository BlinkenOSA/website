import style from "./DropdownFilter.module.scss";
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownFilter = ({label, values, onValueClick}) => {
	const renderValues = () => {
		return (
			values.map(value => {
				return <Dropdown.Item key={value['value']} onClick={() => onValueClick(value['value'])}>{value['label']}</Dropdown.Item>
			})
		)
	}

	return (
		<Dropdown className={style.Dropdown}>
			<Dropdown.Toggle className={style.DropdownButton}> {label} </Dropdown.Toggle>

			<Dropdown.Menu>
				{renderValues()}
			</Dropdown.Menu>
		</Dropdown>
	)
}

export default DropdownFilter;