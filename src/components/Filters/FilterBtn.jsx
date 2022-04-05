import React from 'react'

const FilterBtn = ({name, index, items, task, setPageNumber}) => {
  return (
    <>
        <style jsx>
            {
                `
                .input-x:checked + label{
                    background-color: #0b5;
                    color: white;
                }
                    input[type='radio'] {
                        display: none;
                    }
                `
            }
        </style>
        <div className="form-check">
            <input 
                onClick={() => {
                    setPageNumber(1);
                    task(items);
                }}
                className="form-check-input input-x" 
                type="radio" 
                name={name} 
                id={`${name} - ${index}`}
            />
            <label 
                class="btn btn-outline-primary" 
                for={`${name} - ${index}`}>{items}
            </label>
        </div>
    </>
  )
}

export default FilterBtn