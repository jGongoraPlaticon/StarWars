import React from "react";
import { useEffect } from "react";
import { UsePlanets } from "../Hooks/UsePlanets";
import {PlanetasApp} from '../components/PlanetasApp'
import NavScrollExample from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Planetas = () => {
    const { getAllPlanets, dataPlanets, Contador, disminuir, aumentar } =
      UsePlanets();
    useEffect(() => {
      getAllPlanets(Contador);
  
    }, [dataPlanets]);

    return (
      <div className="Black">
            <NavScrollExample/>
        <center>
            <h1 className="Tpersonajes">PLANETAS</h1>
        </center>
          <div className='Gplanet'>
            {dataPlanets.map((planetas) => (
            <PlanetasApp
                key={planetas.name}
                planet={planetas.name}
                clima={planetas.climate}
                terreno={planetas.terrain}
                age={planetas.created}
                poblacion={planetas.population}
                gravedad={planetas.gravity}
                diametro={planetas.diameter}
                url={planetas.url}
              />
            ))}
          </div>
          <div className="Paginacion">
            <button className="botonPag" onClick={disminuir}>
              Anterior
            </button>
            <h5 className="Ncontador">{Contador}</h5>
            <button className="botonPag" onClick={aumentar}>
              Siguiente
            </button>
          </div><br/>
          <Footer/>
        </div>
      );
    };
    
    export default Planetas;