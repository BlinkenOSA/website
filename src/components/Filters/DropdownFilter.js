import style from "./DropdownFilter.module.scss";
import Dropdown from 'react-bootstrap/Dropdown';
import {IconGeneralDown} from "@/components/Icon/GeneralIcon";
import useTranslation from "next-translate/useTranslation";

const DropdownFilter = ({label, values, selectedValue, onSelect}) => {
	const { t, lang } = useTranslation('filters')

	const renderValues = () => {
		return (
			values.map(value => {
				return value['value'] !== '' && <Dropdown.Item className={style.DropdownItem} key={value['value']} onClick={() => onSelect(value['value'])}>{t(value['translationKey'])}</Dropdown.Item>
			})
		)
	}

	const getLabel = () => {
		const selectedTranslationKey = values.filter(v => v['value'] === selectedValue)[0]['translationKey']
		return t(selectedTranslationKey)
	}

	return (
		<>
			<Dropdown className={style.Dropdown}>
				<Dropdown.Toggle className={style.DropdownButton}> {!selectedValue ? label : getLabel()} <IconGeneralDown size={'small'} /> </Dropdown.Toggle>

				<Dropdown.Menu className={style.DropdownMenu}>
					{renderValues()}
				</Dropdown.Menu>
			</Dropdown>
			{
				selectedValue && <span className={style.Reset} onClick={() => onSelect('')}>{t('dropdown__filter__reset')}</span>
			}
		</>
	)
}

export default DropdownFilter;