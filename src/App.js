import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

const Navbar = () => (
  <nav className="container navbar">
    <div className="logo">ROTA<br />BRASIL.</div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/explorar">Explorar</Link>
      <Link to="/login">Entrar</Link>
    </div>
    <button className="btn-primary">Planejar Viagem</button>
  </nav>
);

const Footer = () => (
  <footer className="container" style={{ padding: '4rem 0', borderTop: '1px solid #eee', marginTop: '4rem', textAlign: 'center' }}>
    <p>© 2026 RotaBrasil Monumental - Projeto Sistemas de Informação</p>
  </footer>
);

const Explorar = () => <div className="container"><h1>Página Explorar (Em breve)</h1></div>;
const Login = () => <div className="container"><h1>Página de Login (JWT em breve)</h1></div>;

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;