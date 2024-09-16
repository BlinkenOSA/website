import style from "./PDF.module.scss"
import {Col, Row} from "react-bootstrap";
import {Document, Page} from 'react-pdf'
import { pdfjs } from 'react-pdf';
import {useState} from "react";

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import PDFPagination from "@/components/Pagination/PDFPagination";
import {useMedia} from "react-use";
import Button from "@/components/Button/Button";
import useTranslation from "next-translate/useTranslation";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDF = ({content}) => {
	const pdf = content['PDF']['data']['attributes']['url']
	const size = content['PDF']['data']['attributes']['size']
	const caption = content['Caption']

	const [numPages, setNumPages] = useState();
	const [pageNumber, setPageNumber] = useState(1);

	const { t, lang } = useTranslation('content');

	const isMobile = useMedia('(max-width: 700px)', true);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	}

	const getSize = () => {
		if (size < 1024) {
			return `${size} KB`
		} else if (size < 1024 * 1024) {
			return `${(size / 1024).toFixed(2)} MB`
		}
	}

	return (
		<Row>
			<Col xs={12} style={{display: 'flex', justifyContent: 'center'}}>
				{
					isMobile ?
						<div className={style.PaginationMobile}>
							<Button
								type={'secondary'}
								color={'neutral'}
								link={`${process.env.NEXT_PUBLIC_STPAPI_DOMAIN}${pdf}`}
								size={'medium'}>{t('downloadPDF')} ({getSize()})</Button>
						</div>

						:

						<div className={style.PDFWrapper}>
							<div className={style.Pagination}>
								<Button
									type={'secondary'}
									color={'neutral'}
									link={`${process.env.NEXT_PUBLIC_STPAPI_DOMAIN}${pdf}`}
									size={'medium'}>{t('downloadPDF')} ({getSize()})</Button>
								<PDFPagination page={pageNumber} pageCount={numPages} onClick={setPageNumber} />
							</div>
							<Document file={`${process.env.NEXT_PUBLIC_STPAPI_DOMAIN}${pdf}`}
									  onLoadSuccess={onDocumentLoadSuccess}
									  className={style.Document}>
								<Page pageNumber={pageNumber}/>
							</Document>
							<div className={style.Caption}>
								{caption}
							</div>
						</div>
				}
			</Col>
		</Row>
	)
}

export default PDF