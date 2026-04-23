import React from 'react';
import './Home.css';
import './Explorar.css';
import { destinos } from '../data/destinos'; // IMPORTANTE

function Explorar() {
  return (
    <main className="container" style={{ paddingTop: '2rem'}}>
      
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        Explore os Destinos
      </h1>

      <div className="explorar-grid">
        {destinos.map((dest) => (
          <div key={dest.id} className="destino-card">
            
            <img
              src={dest.imagem}
              alt={dest.nome}
              className="destino-img"
            />

            <div className="destino-info">
              <span className="destino-estado">
                {dest.estado} • {dest.bioma}
              </span>

              <h2 className="destino-nome">{dest.nome}</h2>

              <p style={{ color: '#64748b', margin: '1rem 0' }}>
                {dest.descricao}
              </p>

              <div>
                {dest.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="btn-primary" style={{ marginTop: '1rem' }}>
                Planejar Viagem
              </button>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}

export default Explorar;