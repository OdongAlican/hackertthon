/* eslint-disable  react/prop-types */
/* eslint-disable  camelcase */

import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({ pageCount = 0, goToPage }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  const elements_per_page = 10;
  const pageIndexTotal = parseInt(pageCount, 10) / elements_per_page;

  const determineStartEnd = () => {
    if (Math.ceil(pageIndexTotal) > 4) {
      if (Math.ceil(pageIndexTotal) - 4 <= currentPage) {
        setEnd(currentPage + 1); setStart(currentPage - 3);
      } else { setEnd(currentPage + 4); setStart(currentPage); }
    } else { setEnd(Math.ceil(pageIndexTotal) + 1); setStart(0); }
  };

  useEffect(() => {
    goToPage(currentPage + 1); determineStartEnd();
  }, [currentPage]);

  return (
    <div className="pagination-display d-flex w-100 justify-content-between bg-white p-2 pb-0">
      <Pagination style={{ cursor: 'pointer' }}>
        <Pagination.First
          disabled={currentPage === 0}
          onClick={() => setCurrentPage(0)}
        />
        <Pagination.Prev
          disabled={currentPage === 0}
          onClick={() => setCurrentPage(currentPage - 1)}
        />
        {[...Array(Math.ceil(pageIndexTotal)).keys()].slice(start, end).map(
          pageIndex => <Pagination.Item key={pageIndex} activeLabel="" active={currentPage === pageIndex} onClick={() => setCurrentPage(pageIndex)}>{pageIndex + 1}</Pagination.Item>,
        )}
        <Pagination.Next
          disabled={currentPage === Math.ceil(pageIndexTotal - 1)}
          onClick={() => setCurrentPage(currentPage + 1)}
        />
        <Pagination.Last
          disabled={currentPage === Math.ceil(pageIndexTotal - 1)}
          onClick={() => setCurrentPage(Math.ceil(pageIndexTotal) - 1)}
        />
      </Pagination>
      <div className="d-flex">
        <div
          className="p-2 d-flex align-items-center justify-content-center fw-bold text-nowrap mx-2"
          style={{
            height: '35px', background: '#f9fafe', lineHeight: '28px', fontSize: '14px', fontWeight: 'bold', color: '#6c757d',
          }}
        >
          {(Math.ceil(pageIndexTotal)) > 4 ? `${start + 1} - ${end} ` : `${currentPage + 1} `}
          of
          {' '}
          {(Math.ceil(pageIndexTotal)).toLocaleString()}
          {' '}
          pages
        </div>
        <div
          className="p-2 d-flex align-items-center justify-content-center fw-bold ml-2 text-nowrap"
          style={{
            height: '35px', background: '#f9fafe', lineHeight: '28px', fontSize: '14px', fontWeight: 'bold', color: '#6c757d',
          }}
        >
          {parseInt(pageCount, 10).toLocaleString()}
          {' '}
          records available
        </div>
      </div>
    </div>
  );
};

export default PaginationComponent;
