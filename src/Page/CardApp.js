import React from 'react'

const CardApp = (props) => {
  return (
    <div className="col mb-4">
      
        <img src={props.img}/>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <button>{props.boton}</button>
    </div>
  )
}

export default CardApp