import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Img5 from '../Img/img5.jpg';
import Img6 from '../Img/img6.jpg';
import Img7 from '../Img/img7.jpg';

function GroupExample() {
  return (
    <div class="container">
    <CardGroup className='tarjetas'>
      <Card>
        <Card.Img variant="top" src={Img5} />
        <Card.Body className='tj-body'>
          <Card.Title>La Amenaza Fantasma</Card.Title>
          <Card.Text>
          La República Galáctica está
          sumida en disturbios. Hay
          protestas contra la tributación
          de las rutas comerciales a
          sistemas estelares.
          </Card.Text>
          <Button className='btn-tarjeta' variant="warning">Ver episodio</Button>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src={Img6}/>
        <Card.Body className='tj-body'>
          <Card.Title>El Ataque de los Clones</Card.Title>
          <Card.Text>
          Hay inquietud en el Senado
          Galáctico. Varios miles de
          sistemas solares han declarado
          sus intenciones de abandonar 
          la República.
          </Card.Text>
          <Button className='btn-tarjeta' variant="warning">Ver episodio</Button>
        </Card.Body> 
      </Card>

      <Card>
        <Card.Img variant="top" src={Img7} />
        <Card.Body className='tj-body'>
          <Card.Title>La Venganza de los Sith</Card.Title>
          <Card.Text>
          ¡Guerra! La República se
          desmorona bajo los ataques del
          despiadado Conde Dooku, señor 
          de los Sith. Hay héroes en 
          ambos bandos. El mal está por 
          doquier. 
          </Card.Text>
          <Button className='btn-tarjeta' variant="warning">Ver episodio</Button>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  );
}

export default GroupExample;