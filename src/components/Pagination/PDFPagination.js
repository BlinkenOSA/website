import style from './PDFPagination.module.scss'
import Button from "@/components/Button/Button";
import {IconGeneralLeft, IconGeneralRight} from "@/components/Icon/GeneralIcon";
import useTranslation from "next-translate/useTranslation";

const PDFPagination = ({page, pageCount, onClick}) => {
    const { t, lang } = useTranslation('content');

    return (
        <div className={style.Pagination}>
            <Button
                size="medium"
                color={'neutral'}
                type={'secondary'}
                disabled={page === 1}
                onClick={() => onClick(page-1)}
                isIcon={true}
            >
                <IconGeneralLeft/>
            </Button>
            <div className={style.PageInfo}>{t('page')}: {page} {t('page_of')} {pageCount}</div>
            <Button
                size="medium"
                color={'neutral'}
                type={'secondary'}
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