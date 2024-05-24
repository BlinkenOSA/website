import style from "./VerticalFilters.module.scss";
import Checkbox from "@/components/Selectors/Checkbox";
import useTranslation from "next-translate/useTranslation";


const VerticalFilters = ({title, values, selectedFilters, onChange}) => {
    const { t, lang } = useTranslation('filters')

    const renderFilters = () => {
        return values.map(value => {
            return (
                <div key={value['value']}>
                    <Checkbox
                        id={value['value']}
                        size={'small'}
                        text={t(value['translationKey'])}
                        checked={selectedFilters === value['value']}
                        onClick={() => onChange(value['value'])}/>
                </div>
            )
        })
    }

    return (
        <div className={style.FilterWrapper}>
            <div className={`${style.Title} subtitle-large`}>
                {title}
            </div>
            <div className={style.Filters}>
                {renderFilters()}
            </div>
        </div>
    )
}

export default VerticalFilters;