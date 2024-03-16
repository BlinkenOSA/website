import style from "./HorizontalFilters.module.scss";
import Button from "@/components/Button/Button";
import {useState} from "react";

const HorizontalFilters = ({values, description = '', align='center'}) => {
    const [selectedFilter, setSelectedFilter] = useState('all')

    const renderFilters = () => {
        return values.map(value => {
            return (
                <div key={`horizontal-filter-${value['value']}`}>
                    <Button
                        type={'secondary'}
                        color={'color' in value ? value['color'] : 'neutral'}
                        size={'medium'}
                        isActive={selectedFilter === value['value']}
                        onClick={() => setSelectedFilter(value['value'])}>{value['label']}
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