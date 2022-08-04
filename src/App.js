import './App.css';
import Home from './Home';
import { Routes, Route, Link } from "react-router-dom";
import { Games } from './components/Games';
import NavScrollExample from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <NavScrollExample/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </div>
  )
}

export default App;
