import {usePagination} from "react-instantsearch";
import ContentPagination from "@/components/Pagination/ContentPagination";

const SiteSearchPagination = (props) => {
    const {
        nbHits,
        currentRefinement,
        refine,
    } = usePagination(props);

    const handleClick = (number) => {
        refine(number-1)
    }

    return (
        <>
            <div style={{margin: '8px 0'}}>
                <ContentPagination page={currentRefinement + 1} pageCount={Math.floor(nbHits / 20) + 1} onClick={handleClick} />
            </div>
        </>
    )
}

export default SiteSearchPagination;