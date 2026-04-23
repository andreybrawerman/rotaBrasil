import React from 'react';
import './Home.css';
import './Explorar.css';
import { destinos } from '../data/destinos';
import CardDestino from '../components/CardDestino';

function Explorar() {
  return (
    <main className="container" style={{ paddingTop: '2rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        Explore os Destinos
      </h1>

      <div className="explorar-grid">
        {destinos.map((dest) => (
          <CardDestino key={dest.id} destino={dest} />
        ))}
      </div>
    </main>
  );
}

export default Explorar;