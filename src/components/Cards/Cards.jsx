import React from 'react';
import {Link } from 'react-router-dom';
import styles from './Cards.module.scss'

const Cards = ({ results, page }) => {
  let display;
  if(results){
    display = results.map((personaje) => {
      const {name, id, status, image, location} = personaje;
      console.log(id);
      return(
        <Link
          style={{textDecoration: "none"}} 
          to={`${page}${id}`} 
          key={id} 
          className="col-4 mb-4 position-relative text-dark"
          >
          <div className={`${styles.cards}`}>
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div className={`${styles.content} content`}>
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Ultima Localizacion</div>
                <div className="fs-5 fw-bold">{location.name}</div>
              </div> 
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return(
                <div className={`${styles.badge} position-absolute badge bg-danger`}>Muerto</div>
              )
            } else if(status === "Alive") {
              return(
                <div className={`${styles.badge} position-absolute badge bg-success`}>Vivo</div>
              )
            } else{
              return(
                <div className={`${styles.badge} position-absolute badge bg-secondary`}>Desconocido</div>
              )
            }
          })()}
        </Link>
      )
    })
  } else {
    display = 'Ningun Personaje Encontrado :(';
  }
  return (
    <>{display}</>
  )
}

export default Cards