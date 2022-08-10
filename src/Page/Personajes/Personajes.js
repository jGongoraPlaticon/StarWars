import React, {useEffect} from 'react';
import NavScrollExample from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { usePeople } from '../../Hooks/UsePerson';
import GroupExample from './Card_p'



export const People = usePeople => {
    const{getAllPerson} = usePeople
    useEffect(() => {
        getAllPerson();
        console.log(getAllPerson());
    }, []);
}


function Personajes() {
  return (
    <div>
      <NavScrollExample />
      <h1>Personajes</h1>
      <Footer />
    </div>
  )
}

export default Personajes

