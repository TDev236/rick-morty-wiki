import React, {useState, useEffect} from 'react'
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';


const Episodes = () => {
  const [id, setID] = useState(3)
  const [fetchedData, setFetchedData] = useState([]);
  const [results, setResults] = useState([])
  const {air_date, name} = fetchedData
  
  const api = `https://rickandmortyapi.com/api/episode/${id}`
  useEffect(() => {
    (async ()  => {
      const data = await fetch(api).then((res) => res.json());
      console.log(data);
      setFetchedData(data);

      const promesa = await Promise.all(
        data.characters.map((links) => {
          return fetch(links).then(res => res.json())
        })
      );
      setResults(promesa)
    })()
  } , [api])
  return(
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center mb-3">
            Episodio: { name === "" ? "Desconocido" : <span className='text-primary'>{name}</span>}
          </h1>
          <h5 className="text-center mb-4">
            Fecha Emision { air_date === "" ? "Desconocido" : air_date }
          </h5>
        </div>
        <div className="row">
          <div className="col-3">
            <h4 className="text-center mb-4">
              Escoge el Episodio
            </h4>
            <InputGroup setID={setID} total={51} name="Capitulo - "/>
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Episodes