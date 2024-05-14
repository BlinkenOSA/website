import style from "./VerticalFilters.module.scss";
import Checkbox from "@/components/Selectors/Checkbox";


const VerticalFilters = ({title, values, selectedFilters, onChange}) => {
    const renderFilters = () => {
        return values.map(value => {
            return (
                <div key={value['label']}>
                    <Checkbox
                        id={value['label']}
                        size={'small'}
                        text={value['label']}
                        checked={selectedFilters === value['label']}
                        onClick={() => onChange(value['label'])}/>
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