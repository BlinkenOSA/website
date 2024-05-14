import { SearchBox } from 'react-instantsearch';
import useTranslation from "next-translate/useTranslation";
import style from "./SiteSearchBox.module.scss";
import {IconGeneralClose, IconGeneralSearch} from "@/components/Icon/GeneralIcon";

const SiteSearchBox = () => {
	const {t, lng} = useTranslation('index')

	return (
		<div className={style.SiteSearchWrapper}>
			<SearchBox
				placeholder={t('website__search')}
				searchAsYouType={false}
				classNames={{
					root: style.SearchBox,
					submit: style.Button,
					reset: style.Button
				}}
				submitIconComponent={({ classNames }) => (
					<IconGeneralSearch size={'small'} />
				)}
				resetIconComponent={({ classNames }) => (
					<IconGeneralClose size={'small'} />
				)}
			/>
		</div>
	)
}

export default SiteSearchBox;