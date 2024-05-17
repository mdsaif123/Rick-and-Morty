import React from 'react';

const Pagination = ({ setPageNumber, pageNumber }) => {

  let next = () => {
    setPageNumber((x) => x + 1);
  };

  let prev = () => {
    if (pageNumber === 1) {
      return;
    }
    setPageNumber((x) => x - 1);
  };

  return (
    <div>
      <div className="container my-5 d-flex justify-content-center">
        <button className="btn btn-primary mx-3" onClick={prev} disabled={pageNumber === 1}> &larr;Prev</button>
        <button className="btn btn-primary mx-3" onClick={next}>Next &rarr;</button>
      </div>
    </div>
  );
};

export default Pagination;
