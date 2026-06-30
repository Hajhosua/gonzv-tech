import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import Pines from './pages/Pines';
import PisaCorbatas from './pages/PisaCorbatas';

import logo from './imagenes/logo/pinn.png';
import './App.css';

function App() {
  return (
    <div className="container">

      <header className="header">
        <img
          src={logo}
          alt="Gentleman Pins Logo"
          className="logo"
        />

        <div className="header-texto">
          <h1 className="titulo">Tienda de Tecnología Online</h1>
        </div>
      </header>

      <nav className="nav">
        <NavLink to="/pines" className="nav-btn">
          Auriculares
        </NavLink>

        <NavLink to="/pisacorbat" className="nav-btn">
          Auriculares Para Casco
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/pines" replace />} />
        <Route path="/pines" element={<Pines />} />
        <Route path="/pisacorbat" element={<PisaCorbatas />} />
      </Routes>

    </div>
  );
}

export default App;