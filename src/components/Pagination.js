import React from 'react';

const Pagination = ({ currentPage, totalResults, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalResults / pageSize);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-2 py-1 border rounded ${currentPage === i ? 'bg-blue-500 text-white' : ''}`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex flex-wrap text-blue-50 pb-10 justify-center mt-4">
      {renderPageNumbers()}
    </div>
  );
};

export default Pagination;
