import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="container navbar">
      <div className="logo">
        ROTA<br />BRASIL.
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/explorar">Explorar</Link>
        <Link to="/login">Entrar</Link>
        <Link to="/cadastro">Cadastrar</Link>
      </div>

      <Link to="/explorar" className="btn-primary">Planejar Viagem</Link>
    </nav>
  );
};

export default Navbar;