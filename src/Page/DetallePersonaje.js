import React, {useEffect, useState} from 'react';
import { unicoPerson } from '../Hooks/FuncPerson';
import { useParams } from 'react-router-dom';
import NavScrollExample from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export const DetallePersonaje = () => {

  const [ data, setData ] = useState([]);

  const idByParams = useParams();
  const personaje = unicoPerson(idByParams.name);

  useEffect(() => { personaje.then(res => setData(res)) }, []);

  return (
    <>
    <NavScrollExample />
      <div>
          <h3>Nombre: <span>{data.name}</span></h3>
          <h6>Altura: <span>{data.height}</span></h6>
          <h6>Masa: <span>{data.mass}</span></h6>
          <h6>Color de Pelo: <span>{data.hair_color}</span></h6>
          <h6>Color de Piel: <span>{data.skin_color}</span></h6>
          <h6>Color de Ojos: <span>{data.eye_color}</span></h6>
          <h6>Cumpleaños:  <span>{data.birth_year}</span></h6>
          <h6>Genero: <span>{data.gender}</span></h6>
      </div>
    <Footer />
    </>
    
  )
};

export default DetallePersonaje