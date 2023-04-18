import { FC, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import workerSrc from '../../../pdf-worker'
import { PDFDocumentProxy } from 'pdfjs-dist'
import cx from 'classnames'

import {
    ArrowDownTrayIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import Spinner from '../ui/Spinner'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

type Props = {
    onClose: () => void
}

const PDFViewer: FC<Props> = (props) => {
    const [file] = useState('./cv.pdf')
    const [numPages, setNumPages] = useState<number | null>(null)
    const [pageNumber, setPageNumber] = useState(1)
    const [isError, setIsError] = useState(false)
    const onDocumentLoadSuccess = ({ numPages }: PDFDocumentProxy) => {
        setIsError(false)
        setNumPages(numPages)
        setPageNumber(1)
    }

    function previousPage() {
        setPageNumber((prevPageNumber) => prevPageNumber - 1)
    }

    function nextPage() {
        setPageNumber((prevPageNumber) => prevPageNumber + 1)
    }

    return (
        <div className="flex h-full flex-col items-center justify-center py-5">
            {!isError ? (
                <div className="overflow-auto scrollbar scrollbar-thin scrollbar-thumb-zinc-400">
                    <div className="relative flex min-h-[120px] items-center rounded-lg bg-zinc-900 p-2">
                        <Document
                            file={file}
                            loading={<Spinner className="h-3 fill-white" />}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={() => setIsError(true)}
                        >
                            <Page
                                height={1200}
                                loading={<Spinner className="h-3 fill-white" />}
                                pageNumber={pageNumber}
                                renderAnnotationLayer={false}
                                renderTextLayer={false}
                            />
                        </Document>
                        {numPages && (
                            <>
                                <div className="absolute inset-x-1/2 bottom-8 flex w-full max-w-max -translate-x-1/2 items-center rounded border border-zinc-100 bg-white shadow-xl shadow-zinc-400">
                                    <button
                                        className="flex h-10 w-10 items-center justify-center hover:bg-zinc-100"
                                        disabled={pageNumber <= 1}
                                        onClick={previousPage}
                                    >
                                        <ChevronLeftIcon className="h-5 w-5 text-zinc-900" />
                                    </button>

                                    <p className="px-3 text-sm text-zinc-900">
                                        {pageNumber} of {numPages}
                                    </p>

                                    <button
                                        className="flex h-10 w-10 items-center justify-center hover:bg-zinc-100"
                                        disabled={pageNumber >= numPages!}
                                        onClick={nextPage}
                                    >
                                        <ChevronRightIcon className="h-5 w-5 text-zinc-900" />
                                    </button>
                                </div>
                                <a
                                    href={'/cv.pdf'}
                                    download
                                    className="absolute top-10 left-16 flex h-10 items-center justify-center space-x-3 rounded bg-white px-3 text-zinc-900 shadow-lg shadow-zinc-900 hover:bg-zinc-200"
                                >
                                    <ArrowDownTrayIcon className="h-6 w-6" />
                                    <span className="text-sm font-bold">
                                        Download
                                    </span>
                                </a>
                            </>
                        )}

                        <button
                            onClick={props.onClose}
                            className={cx(
                                'absolute flex h-10 w-10 items-center justify-center rounded-bl bg-teal-700 hover:bg-teal-600',
                                numPages ? 'top-2 right-2' : 'top-0 right-0'
                            )}
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="relative w-full rounded bg-black p-10 text-center">
                    <h3 className="text-red-500">Failed to load PDF</h3>
                    <p className="mt-5">Please try again later...</p>
                    <button
                        onClick={props.onClose}
                        className="absolute top-0 right-0 flex h-10 w-10 items-center justify-center hover:text-teal-600"
                    >
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>
            )}
        </div>
    )
}

export default PDFViewer
