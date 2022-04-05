import React from 'react'

const Pagination = ({setPageNumber, pageNumber}) => {
    const next = () => {
        setPageNumber((page) => page + 1);
    };
    const prev = () => {
        if(pageNumber === 1 ) {
            setPageNumber(1);
        } else {
        setPageNumber((page) => page - 1);
    }
    };
  return (
    <div className='container d-flex justify-content-center gap-5 my-5 '>
        <button onClick={prev} className="btn btn-primary">Prev</button>
        <button onClick={next} className="btn btn-primary">Sig</button>
    </div>
  )
}

export default Pagination