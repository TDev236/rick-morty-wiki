import React, {useState, useEffect} from 'react'
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';


const Location = () => {
  const [id, setID] = useState(3)
  const [fetchedData, setFetchedData] = useState([]);
  const [results, setResults] = useState([])
  const { type, name, dimension} = fetchedData
  
  const api = `https://rickandmortyapi.com/api/location/${id}`
  useEffect(() => {
    (async ()  => {
      const data = await fetch(api).then((res) => res.json());
      console.log(data);
      setFetchedData(data);

      const promesa = await Promise.all(
        data.residents.map((links) => {
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
            Lugar: { name === "" ? "Desconocido" : <span className='text-primary'>{name}</span>}
          </h1>
          <h4 className='text-center mb-4'>
            Dimension : {dimension === "" ? "Desconocida" :<span className='text-danger'>{dimension}</span>}
          </h4>
          <h5 className='text-center mb-4'>
            Tipo : {type === "" ? "Desconocida" : type}
          </h5>
        </div>
        <div className="row">
          <div className="col-3">
            <h4 className="text-center mb-4">
              Escoger Localizacion
            </h4>
            <InputGroup setID={setID} total={126} name="Lugar"/>
          </div>
          <div className="col-8">
            <div className="row">
              <Cards page="/location/" results={results}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Location