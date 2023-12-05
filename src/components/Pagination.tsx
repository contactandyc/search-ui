// components/Pagination.tsx

import { FC } from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    maxPageNumbers: number; // The maximum number of page numbers to display (N)
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, maxPageNumbers = 5 }) => {
    // Calculate the range of pages to display
    const startPage = Math.floor((currentPage - 1) / maxPageNumbers) * maxPageNumbers + 1;
    let endPage = startPage + maxPageNumbers - 1;
    if (endPage > totalPages) {
        endPage = totalPages;
    }

    // Generate the page numbers for the range
    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, idx) => startPage + idx);

    return (
        <div className="flex justify-center items-center space-x-2 mt-4">
            {currentPage > 1 && (
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Previous
                </button>
            )}

            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`px-4 py-2 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded hover:bg-blue-600 hover:text-white`}
                >
                    {number}
                </button>
            ))}

            {currentPage < totalPages && (
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default Pagination;
