import style from "./SearchBar.module.scss";
import Image from "next/image";
import search from "../../../../../public/icons/search.svg";

const SearchBar = () => {
    return (
        <div className={style.SearchBar}>
            <div className={style.Button}>
                <Image
                    priority
                    src={search}
                    height={20}
                    alt="Blinken OSA Archivum"
                />
            </div>
            <input
                placeholder={'Search for...'}
                className={`${style.SearchInput} suisseIntlRegular`}
            />
        </div>
    )
}

export default SearchBar;