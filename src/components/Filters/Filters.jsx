import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status'

const Filters = ({setStatus, setPageNumber, setGender, setSpecies}) => {
  return (
    <div className="col-3">
      <div className="text-center fs-4 mb-2 fw-bold">Filtro</div>
      <div className="text-center text-primary text-decoration-underline mb-4" style={{cursor: "pointer"}}>Limpiar Filtro</div>
      
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies}/>
        <Gender setGender={setGender} setPageNumber={setPageNumber}/>
        
      </div>
    </div>
  )
}

export default Filters