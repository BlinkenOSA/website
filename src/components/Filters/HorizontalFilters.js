import style from "./HorizontalFilters.module.scss";
import Button from "@/components/Button/Button";
import {useState} from "react";

const HorizontalFilters = ({values, description = ''}) => {
    const [selectedFilter, setSelectedFilter] = useState('all')

    const renderFilters = () => {
        return values.map(value => {
            return (
                <div>
                    <Button
                        type={'secondary'}
                        color={'neutral'}
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
            <div className={style.Filters}>
                {renderFilters()}
            </div>
            <div className={style.Description}>
                {description}
            </div>
        </div>
    )
}

export default HorizontalFilters;