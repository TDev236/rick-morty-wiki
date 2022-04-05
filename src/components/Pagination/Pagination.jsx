import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({info, setPageNumber, pageNumber}) => {
  return (  
    <ReactPaginate 
        className='pagination justify-content-center gap-4 my-4' 
        pageCount={info?.pages} 
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel="Sig"
        previousLabel="Prev"
        nextClassName='btn btn-primary fs-5 next'
        previousClassName='btn btn-primary fs-5 prev'
        pageClassName='page-item'
        activeClassName='active'
        pageLinkClassName='page-link'
        onPageChange={(data) => {
            setPageNumber(data.selected + 1)
        }}
    />
  );
};

export default Pagination