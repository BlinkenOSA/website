import style from "@/components/Input/SearchBox.module.scss";
import Form from "react-bootstrap/Form";
import {InputGroup} from "react-bootstrap";
import {IconGeneralSearch} from "@/components/Icon/GeneralIcon";
import useTranslation from "next-translate/useTranslation";

const SearchBox = ({disabled, isMobile=false}) => {
	const { t } = useTranslation('header')

	return (
		<InputGroup className={style.InputGroup}>
			<InputGroup.Text id={disabled ? 'search-icon-disabled' : 'search-icon'}>
				<IconGeneralSearch size={'small'} />
			</InputGroup.Text>
			{
				!isMobile &&
				<Form.Control
					type={"search"}
					id={"search-box"}
					disabled={disabled}
					placeholder={t('search')}
				/>
			}
		</InputGroup>
	)
}

export default SearchBox;