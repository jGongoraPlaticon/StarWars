import { useEffect } from "react";
import { UsePerson } from "../Hooks/UsePerson";
import { PersonajeApp } from "../components/PersonajesApp";
import NavScrollExample from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Personajes = () => {
  const { getAllPerson, dataPerson, Contador, disminuir, aumentar } = UsePerson();
  useEffect(() => {
    getAllPerson(Contador);
  }, [dataPerson]);
  return (
<div className="Black">
    <NavScrollExample/>
    <center>
        <h1 className="Tpersonajes">PERSONAJES</h1>
    </center>
      <div className='Gplanet'>
        {dataPerson.map((personajes) => (
        <PersonajeApp
            key={personajes.name}
            name={personajes.name}
            hair={personajes.hair_color}
            eyes={personajes.eye_color}
            skin={personajes.skin_color}
            gender={personajes.gender}
            height={personajes.height}
            weigth={personajes.mass}
            birthday={personajes.birth_year}
            url={personajes.url}
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

export default Personajes;