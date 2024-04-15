import style from "@/components/Input/SearchBox.module.scss";
import Form from "react-bootstrap/Form";
import {InputGroup} from "react-bootstrap";
import {IconGeneralSearch} from "@/components/Icon/GeneralIcon";
import useTranslation from "next-translate/useTranslation";
import {useState} from "react";

const SearchBox = ({disabled, placeholder, bordered=false, onPressEnter, isMobile=false}) => {
	const [value, setValue] = useState('')
	const { t } = useTranslation('header')

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			onPressEnter && onPressEnter(value)
		}
	}

	return (
		<InputGroup className={bordered ? `${style.InputGroup} ${style.Bordered}` : style.InputGroup}>
			<InputGroup.Text id={disabled ? 'search-icon-disabled' : 'search-icon'}>
				<IconGeneralSearch size={'small'} />
			</InputGroup.Text>
			{
				!isMobile &&
				<Form.Control
					type={"search"}
					id={"search-box"}
					disabled={disabled}
					onKeyDown={handleKeyDown}
					onChange={(e) => setValue(e.target.value) }
					placeholder={placeholder ? `${placeholder}...` : t('search')}
				/>
			}
		</InputGroup>
	)
}

export default SearchBox;