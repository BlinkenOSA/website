import style from "@/components/Input/SearchBox.module.scss";
import Form from "react-bootstrap/Form";
import {InputGroup} from "react-bootstrap";
import {IconGeneralSearch} from "@/components/Icon/GeneralIcon";
import useTranslation from "next-translate/useTranslation";
import {useId, useState} from "react";
import Button from "@/components/Button/Button";

const SearchBox = ({disabled, placeholder, bordered=false, onPressEnter, isMobile=false}) => {
	const [value, setValue] = useState('')
	const inputId = useId()
	const { t } = useTranslation('header')

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			onPressEnter && onPressEnter(value)
		}
	}

		return (
		<InputGroup className={bordered ? `${style.InputGroup} ${style.Bordered}` : style.InputGroup}>
			<Form.Label htmlFor={inputId} className={style.Label}>{t('search')}</Form.Label>
			<Form.Control
				type={"search"}
				id={inputId}
				disabled={disabled}
				onKeyDown={handleKeyDown}
				onChange={(e) => setValue(e.target.value) }
				placeholder={placeholder ? `${placeholder}...` : t('search')}
			/>
			<Button isIcon={true} color={'neutral'} onClick={() => onPressEnter(value)} ariaLabel={t('search')}>
				<IconGeneralSearch size={'small'} />
			</Button>
		</InputGroup>
	)
}

export default SearchBox;
