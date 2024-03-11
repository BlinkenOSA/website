import style from "./VerticalFilters.module.scss";
import Checkbox from "@/components/Selectors/Checkbox";
import Button from "@/components/Button/Button";

const VerticalFilters = ({title, values}) => {
    const renderFilters = () => {
        return values.map(value => {
            return (
                <div>
                    <Checkbox id={value['label']} size={'small'} text={value['label']} />
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
            <div className={style.ClearButton}>
                <Button type={'secondary'} color={'neutral'} size={'medium'}>Clear Selection</Button>
            </div>
        </div>
    )
}

export default VerticalFilters;