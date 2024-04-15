import {IconGeneralSearch} from "@/components/Icon/GeneralIcon";
import style from "./Search.module.scss";
import {useState} from "react";
import SearchPage from "@/components/Search/SearchPage";
import {AnimatePresence} from "framer-motion";

const Search = () => {
    const [searchOpen, setSearchOpen] = useState(false)

    const handleClick = () => {
        setSearchOpen(!searchOpen)
    }

    return (
        <>
            <div className={style.Search} onClick={handleClick}>
                <IconGeneralSearch size={'small'} />
            </div>
            <AnimatePresence>
                {
                    searchOpen &&
                    <div className={style.SearchScreen}>
                            <SearchPage searchOpen={searchOpen} onClose={handleClick} />
                    </div>
                }
            </AnimatePresence>
        </>
    )
}

export default Search;