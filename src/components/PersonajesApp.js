import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

export const PersonajeApp = ({
    name,
    hair,
    eyes,
    skin,
    gender,
    height,
    weigth,
    url,
    birthday
  }) => {

    
    return (
      <div className='tarjetas-planets'>
        <CardGroup className='' style={{ width:"300px"}}>

          <Card>
            <Card.Img class="card-img-top"  src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/test/5cbeea135cafe88451149213/sw1.jpg"
            />
            <Card.Body className='tj-body'>
              <Card.Title >{name}</Card.Title>
              <Card.Text style={{height: "230px"}}>
                <p><strong className='fuerte'>Altura: </strong>{height}</p>
                <p><strong className='fuerte'>Masa: </strong>{weigth}</p>
                <p><strong className='fuerte'>Color de cabello: </strong>{hair}</p>
                <p><strong className='fuerte'>Color de piel: </strong>{skin}</p>
                <p><strong className='fuerte'>Color de ojos: </strong>{eyes}</p>
                <p><strong className='fuerte'>Fecha de nacimiento: </strong>{birthday}</p>
                <p><strong className='fuerte'>Genero: </strong>{gender}</p>
              </Card.Text>
              <Button key={PersonajeApp.name} variant="outline-light">
                  <a href={`/Personajes/${url.split("/")[5]}`}>Detalles</a>
              </Button>
            </Card.Body>
          </Card>
              

        </CardGroup>
      </div>
    )
  }

export default PersonajeApp;
