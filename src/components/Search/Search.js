import {IconGeneralSearch} from "@/components/Icon/GeneralIcon";
import style from "./Search.module.scss";
import {useState} from "react";

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
            {
                searchOpen &&
                <div className={style.SearchScreen}>

                </div>
            }
        </>
    )
}

export default Search;