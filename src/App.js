import './App.css';
import Home from './Page/Home/Home';
import Personajes from './Page/Personajes/Personajes';
import Planetas from './Page/Planetas/Planetas';
import { Routes, Route, Link } from "react-router-dom";
import NavScrollExample from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <NavScrollExample/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/planetas" element={<Planetas />} />
      </Routes>
    </div>
  )
}

export default App;
