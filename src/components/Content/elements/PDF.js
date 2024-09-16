import style from "./PDF.module.scss"
import {Col, Row} from "react-bootstrap";
import {Document, Page} from 'react-pdf'
import { pdfjs } from 'react-pdf';
import {useState} from "react";

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import PDFPagination from "@/components/Pagination/PDFPagination";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDF = ({content}) => {
	const pdf = content['PDF']['data']['attributes']['url']
	const caption = content['Caption']

	const [numPages, setNumPages] = useState();
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	}

	const handleClick = () => {

	}

	return (
		<Row>
			<Col xs={12} style={{display: 'flex', justifyContent: 'center'}}>
				<div className={style.PDFWrapper}>
					<div className={style.Pagination}>
						<PDFPagination page={pageNumber} pageCount={numPages} onClick={setPageNumber} />
					</div>
					<Document file={`${process.env.NEXT_PUBLIC_STPAPI_DOMAIN}/${pdf}`}
							  onLoadSuccess={onDocumentLoadSuccess}
							  className={style.Document}>
						<Page pageNumber={pageNumber}/>
					</Document>
				</div>
			</Col>
		</Row>
	)
}

export default PDF