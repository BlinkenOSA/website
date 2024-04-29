import {IconGeneralSearch} from "@/components/Icon/GeneralIcon";
import style from "./Search.module.scss";
import SearchPage from "@/components/Search/SearchPage";
import {AnimatePresence} from "framer-motion";
import {useContext} from "react";
import {SearchContext, SearchDispatchContext} from "@/utils/context/SearchContext";

const Search = () => {
    const searchOpen = useContext(SearchContext);
    const dispatch = useContext(SearchDispatchContext);

    const handleClick = () => {
        if (searchOpen) {
            dispatch({
                type: 'close'
            });
        } else {
            dispatch({
                type: 'open'
            });
        }

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