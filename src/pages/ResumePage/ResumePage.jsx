import React from "react";
// import { useCallback, useState } from 'react';
// import { useResizeObserver } from '@wojtekmaj/react-hooks';
// import { pdfjs, Document, Page } from 'react-pdf';
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import 'react-pdf/dist/esm/Page/TextLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

// const options = {
//   cMapUrl: '/cmaps/',
//   standardFontDataUrl: '/standard_fonts/',
// };

// const resizeObserverOptions = {};

// const maxWidth = 800;

function ResumePage() {
  //   const [file, setFile] = useState('./sample.pdf');
  //   const [numPages, setNumPages] = useState();
  //   const [containerRef, setContainerRef] = useState(null);
  //   const [containerWidth, setContainerWidth] = useState();

  //   const onResize = useCallback((entries) => {
  //     const [entry] = entries;

  //     if (entry) {
  //       setContainerWidth(entry.contentRect.width);
  //     }
  //   }, []);

  //   // useResizeObserver(containerRef, resizeObserverOptions, onResize);

  //   function onFileChange(event) {
  //     const { files } = event.target;

  //     if (files && files[0]) {
  //       setFile(files[0] || null);
  //     }
  //   }

  //   function onDocumentLoadSuccess({ numPages: nextNumPages }) {
  //     setNumPages(nextNumPages);
  // }
  const pdfUrl = "Danny Silva 2024 Resume.pdf";

  return (
    <div>
      <h1>Resume</h1>
      {/* <Document file="./sample.pdf" options={options}></Document> */}
      <iframe
        src="Danny Silva 2024 Resume.pdf"
        embbeded='true'
        // style="width:100%; height:100%;"
        width="100%"
        height="1000px"

        // height="500px"
        // style={{ border: 'none' }}
      ></iframe>
    </div>
  );
}

export default ResumePage;
