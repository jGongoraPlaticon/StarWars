import './App.css';
import Home from './Page/Home/Home';
import Personajes from './Page/Personajes';
import Planetas from './Page/Planetas';
import { Routes, Route } from "react-router-dom";
import NavScrollExample from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import DetallePersonaje from './Page/DetallePersonaje';

function App() {
  return (
    <div className='App'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Personajes" element={<Personajes />} />
        <Route path="/Planetas" element={<Planetas />} />
        <Route path='/Personajes/:name' element={<DetallePersonaje />}/>
      </Routes>
    </div>
  )
}

export default App;
