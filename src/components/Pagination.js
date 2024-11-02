// src/components/Pagination.js
import React from 'react';

function Pagination({ page, totalPages, setPage, fetchResults }) {
  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
      fetchResults('', page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
      fetchResults('', page + 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={handlePrevious} disabled={page === 0}>Previous</button>
      <span> Page {page + 1} of {totalPages} </span>
      <button onClick={handleNext} disabled={page === totalPages - 1}>Next</button>
    </div>
  );
}

export default Pagination;