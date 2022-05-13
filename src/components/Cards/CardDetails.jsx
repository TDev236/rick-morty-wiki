import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'

const CardDetails = () => {
    const [fetchedData, updatedFetchedData] = useState([]);
    const {name, image, gender, location, status} = fetchedData;
    
    const {id} = useParams();
    const api = `https://rickandmortyapi.com/api/character/${id}`
    useEffect(() => {
        (async () => {
            const data = await fetch(api).then(res => res.json());
            updatedFetchedData(data);
            console.log(fetchedData)
        })()
    }, [api])
  return (
    <div className='container'>
        <div className="card" >
            <img src={image} className="rounded card-img-top img-fluid" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {
                    status === 'Alive' ? <span className='btn btn-success text-center'>{status}</span> : status === "Dead" ? <span className='btn btn-danger'>{status}</span> : <span className='btn btn-secondary'>{status}</span>
                }
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><span className='fw-bold'>Genero: </span>{gender}</li>
                <li className="list-group-item"><span className="fw-bold">Localizacion: </span>{location.name}</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    </div>
  )
}

export default CardDetails