import React, {useEffect, useState} from 'react';
import { unicoPlanet } from '../Hooks/FuncPlanets';
import { useParams } from 'react-router-dom';
import NavScrollExample from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export const DetallePlaneta = () => {

    const [dato, setDato] = useState([]);

    const idParams = useParams();
    const planeta = unicoPlanet(idParams.name);

    useEffect(() => { planeta.then(res => setDato(res)) }, []);

  return (
    <>
    <NavScrollExample />
      <div>
        <h3>Nombre: {dato.name} </h3>
        <h6>Periodo de Rotacion: {dato.rotation_period} </h6>
        <h6>Peridoo Orbital: {dato.orbital_period} </h6>
        <h6>Diametro: {dato.diameter} </h6>
        <h6>Clima: {dato.climate} </h6>
        <h6>Gravedad: {dato.gravity} </h6>
        <h6>Terreno: {dato.terrain} </h6>
        <h6>Superficie del Agua: {dato.surface_water} </h6>
        <h6>Poblacion: {dato.population} </h6>
      </div>
    <Footer />
    </>
    
  )
};

export default DetallePlaneta