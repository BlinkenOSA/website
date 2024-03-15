import style from "./DropdownFilter.module.scss";
import Dropdown from 'react-bootstrap/Dropdown';
import {IconGeneralDown} from "@/components/Icon/Icon";
import {useState} from "react";

const DropdownFilter = ({label, values, onValueClick}) => {
	const [selectedValue, setSelectedValue] = useState('')

	const handleSelect = (value) => {
		setSelectedValue(value)
	}

	const renderValues = () => {
		return (
			values.map(value => {
				return <Dropdown.Item className={style.DropdownItem} key={value['value']} onClick={() => handleSelect(value['value'])}>{value['label']}</Dropdown.Item>
			})
		)
	}

	return (
		<Dropdown className={style.Dropdown}>
			<Dropdown.Toggle className={style.DropdownButton}> {selectedValue === '' ? label : selectedValue} <IconGeneralDown size={'small'} /> </Dropdown.Toggle>

			<Dropdown.Menu className={style.DropdownMenu}>
				{renderValues()}
			</Dropdown.Menu>
		</Dropdown>
	)
}

export default DropdownFilter;