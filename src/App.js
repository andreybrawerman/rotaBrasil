import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';

const Explorar = () => <div className="container" style={{ minHeight: '60vh', paddingTop: '5rem' }}><h1>Página Explorar (Em breve)</h1></div>;
const Login = () => <div className="container" style={{ minHeight: '60vh', paddingTop: '5rem' }}><h1>Página de Login (Em breve)</h1></div>;

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