import {Pagination} from "react-bootstrap";
import style from './ContentPagination.module.scss'
import {arrayRange} from "@/utils/arrayRange";

const ContentPagination = ({page, pageCount, onClick}) => {
    const renderButtons = (from, to) => {
        return arrayRange(from, to, 1).map((p, idx) => {
            const isActive = page === p
            return <Pagination.Item onClick={isActive ? undefined : () => onClick(p)} active={isActive}>{p}</Pagination.Item>
        })
    }

    const renderPagination = () => {
        if (pageCount > 5) {
            if (page < 4) {
                return (
                    <>
                        {renderButtons(1, 3)}
                        <Pagination.Ellipsis className={style.Ellipsis} />
                        <Pagination.Item onClick={() => onClick(pageCount)} active={page === pageCount}>{pageCount}</Pagination.Item>
                    </>
                )
            }

            if (page >= 4 && page <= pageCount-3) {
                return (
                    <>
                        <Pagination.Item onClick={page === 1 ? undefined : () => onClick(1)} active={page === 1}>{1}</Pagination.Item>
                        <Pagination.Ellipsis className={style.Ellipsis} />
                        {renderButtons(page-1, page+1, 1)}
                        <Pagination.Ellipsis className={style.Ellipsis} />
                        <Pagination.Item onClick={page === pageCount ? undefined : () => onClick(pageCount)} active={page === pageCount}>{pageCount}</Pagination.Item>
                    </>
                )
            }

            if (page >= pageCount-3) {
                const isActive = page === 1;
                return (
                    <>
                        <Pagination.Item onClick={isActive ? undefined : () => onClick(1)} active={isActive}>{1}</Pagination.Item>
                        <Pagination.Ellipsis className={style.Ellipsis} />
                        {renderButtons(pageCount-2, pageCount, 1)}
                    </>
                )
            }

        } else {
            return renderButtons(1, pageCount)
        }
    }

    return (
        <Pagination className={style.Pagination}>
            <Pagination.Prev disabled={page === 1} onClick={() => onClick(page-1)} />
            {renderPagination()}
            <Pagination.Next disabled={page === pageCount} onClick={() => onClick(page+1)} />
        </Pagination>
    );
}

export default ContentPagination;