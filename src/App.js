import React , { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  console.log(pageNumber)
  const [fetchedData, updateFetchedData] = useState([]);
  const {info, results} = fetchedData;
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then(res => res.json())
      updateFetchedData(data);
    })()
  },[api])
  
  return (
    <>
      <div>
        <h1 className='text-center my-4'>
          Rick & Morty - <span className='text-primary'>Wiki</span> 
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Filters/>
            </div>
            <div className="col-8">
              <div className="row">
                <Cards results={results}/>
              </div>
            </div>
          </div>
        </div>
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      </div>
    </>
  );
}

export default App;
