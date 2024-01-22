import style from "./SearchBar.module.scss";
import {IconGeneralSearch} from "@/components/Icon/Icon";

const SearchBar = () => {
    return (
        <div className={style.SearchBar}>
            <div className={style.Button}>
                <IconGeneralSearch />
            </div>
            <input
                placeholder={'Search for...'}
                className={`${style.SearchInput} suisseIntlRegular`}
            />
        </div>
    )
}

export default SearchBar;