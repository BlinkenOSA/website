import {Pagination} from "react-bootstrap";
import style from './PDFPagination.module.scss'
import Button from "@/components/Button/Button";
import {IconGeneralLeft, IconGeneralRight} from "@/components/Icon/GeneralIcon";

const PDFPagination = ({page, pageCount, onClick}) => {
    return (
        <div className={style.Pagination}>
            <Button
                size="medium"
                color={'neutral'}
                disabled={page === 1}
                onClick={() => onClick(page-1)}
                isIcon={true}
            >
                <IconGeneralLeft/>
            </Button>
            <div>{page} of {pageCount}</div>
            <Button
                size="medium"
                color={'neutral'}
                disabled={page === pageCount}
                onClick={() => onClick(page+1)}
                isIcon={true}
            >
                <IconGeneralRight/>
            </Button>
        </div>
    );
}

export default PDFPagination;