import React , { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [fetchedData, updateFetchedData] = useState([]);
  const {info, results} = fetchedData;
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then(res => res.json())
      updateFetchedData(data);
    })()
  },[api]);
  return (
    <>
      <div>
        <h1 className='text-center my-4'>
          Rick & Morty - <span className='text-primary'>Wiki</span> 
        </h1>
        <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
        <div className="container">
          <div className="row">
              <Filters 
                setStatus={setStatus} 
                setPageNumber={setPageNumber} 
                setGender={setGender}
                setSpecies={setSpecies}  
              />
                
            <div className="col-8">
              <div className="row">
                <Cards results={results}/>
              </div>
            </div>
          </div>
        </div>
        <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      </div>
    </>
  );
}

export default App;
