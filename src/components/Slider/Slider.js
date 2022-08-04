import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../Img/img1.jpg';
import Img2 from '../Img/img2.jpg';
import Img3 from '../Img/img3.jpg';
import Img4 from '../Img/img4.jpg';

function UncontrolledExample() {
  return (
    <Carousel className='slider'>
      <Carousel.Item>
        <img
          className="d-block w-100 slider_img"
          src={Img1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;