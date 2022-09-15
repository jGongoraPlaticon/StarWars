import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

export const PlanetasApp =  ({
    planet,
    clima,
    terreno,
    age,
    poblacion,
    gravedad,
    diametro,
    url
   }) => {
    
  return (
    
    <div className='tarjetas-planets'>
      <CardGroup className='' style={{ width:"300px"}}>

        <Card>
          <Card.Img class="card-img-top"  src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/test/5cbeea135cafe88451149213/sw1.jpg"
          />
          <Card.Body className='tj-body'>
            <Card.Title >{planet}</Card.Title>
            <Card.Text style={{height: "230px"}}>
              <p><strong className='fuerte'>Clima: </strong>{clima}</p>
              <p><strong className='fuerte'>Terreno: </strong>{terreno}</p>
              <p><strong className='fuerte'>Edad: </strong>{age}</p>
              <p><strong className='fuerte'>Poblacion: </strong>{poblacion}</p>
              <p><strong className='fuerte'>Gravedad: </strong>{gravedad}</p>
              <p><strong className='fuerte'>Diametro: </strong>{diametro}</p>
            </Card.Text>
            <Button className="btn btn-warning" value={url}><a href='DetallePersonaje'>Ver detalle</a></Button>
          </Card.Body>
        </Card>
            

      </CardGroup>
    </div>
  )
}