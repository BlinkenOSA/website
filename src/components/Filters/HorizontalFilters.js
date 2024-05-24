import style from "./HorizontalFilters.module.scss";
import Button from "@/components/Button/Button";
import useTranslation from "next-translate/useTranslation";

const HorizontalFilters = ({values, selectedFilter, description = '', align='center', onSelect}) => {
    const { t, lang } = useTranslation('filters')

    const handleFilterSelect = (value) => {
        onSelect(value)
    }

    const renderFilters = () => {
        return values.map(value => {
            return (
                <div key={`horizontal-filter-${value['value']}`}>
                    <Button
                        type={'secondary'}
                        color={'color' in value ? value['color'] : 'neutral'}
                        size={'medium'}
                        isActive={selectedFilter === value['value']}
                        onClick={() => handleFilterSelect(value['value'])}>{t(value['translationKey'])}
                    </Button>
                </div>
            )
        })
    }

    return (
        <div className={style.FilterWrapper}>
            <div className={style.Filters} style={{justifyContent: align}}>
                {renderFilters()}
            </div>
            <div className={style.Description}>
                {description}
            </div>
        </div>
    )
}

export default HorizontalFilters;