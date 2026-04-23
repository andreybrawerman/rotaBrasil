import React from 'react';
import './Home.css'; // reaproveitando seu CSS

function Explorar() {
  const destino = {
    nome: "Cataratas do Iguaçu",
    estado: "Paraná",
    bioma: "Mata Atlântica",
    descricao:
      "As Cataratas do Iguaçu formam o maior conjunto de quedas de água do mundo, proporcionando uma experiência única em meio à natureza exuberante.",
    imagem:
      "https://anvtravel.com.br/wp-content/uploads/2025/06/cataratas-do-iguacu-8.jpg.webp",
    atividades: ["Trilhas", "Passeio de barco", "Observação da natureza"]
  };

  return (
    <main className="container" style={{ paddingTop: '5rem', minHeight: '80vh' }}>
      
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        Destino em Destaque
      </h1>

      <div className="destino-card" style={{ maxWidth: '700px', margin: '0 auto' }}>
        
        <img
          src={destino.imagem}
          alt={destino.nome}
          className="destino-img"
        />

        <div className="destino-info">
          <span className="destino-estado">
            {destino.estado} • {destino.bioma}
          </span>

          <h2 className="destino-nome">{destino.nome}</h2>

          <p style={{ color: '#64748b', margin: '1rem 0' }}>
            {destino.descricao}
          </p>

          <div style={{ marginBottom: '1rem' }}>
            {destino.atividades.map((atividade, index) => (
              <span key={index} className="tag">
                {atividade}
              </span>
            ))}
          </div>

          <button className="btn-primary">
            Planejar Viagem
          </button>
        </div>
      </div>
    </main>
  );
}

export default Explorar;