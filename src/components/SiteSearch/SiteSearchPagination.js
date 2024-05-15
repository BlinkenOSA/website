import {usePagination} from "react-instantsearch";
import ContentPagination from "@/components/Pagination/ContentPagination";
import Spacer from "@/components/Spacer/Spacer";
import {useRouter} from "next/router";

const SiteSearchPagination = (props) => {
    const router = useRouter();
    const {query, page, type} = router.query;

    const {
        nbHits,
        currentRefinement,
        refine,
    } = usePagination(props);

    const handleClick = (number) => {
        refine(number-1)
        router.push({
            query: {...query, ...type, page: number},
        }, undefined, { shallow: false, scroll: false })
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