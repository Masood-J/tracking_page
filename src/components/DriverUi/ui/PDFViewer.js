"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

export default function PDFViewer({ file }) {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function goToPrevPage() {
        setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
    }

    function goToNextPage() {
        setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));
    }

    return (
        <div className={`text-black`}>
            <Document file={file}  onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} width={200} height={200}/>
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <div className={`flex flex-row gap-2`}>
                <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
                    Previous
                </button>
                <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
                    Next
                </button>
            </div>
        </div>
    );
}
