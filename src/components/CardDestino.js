import React from 'react';

const CardDestino = ({ destino }) => {
  return (
    <div className="destino-card">
      <img src={destino.imagem} alt={destino.nome} className="destino-img" />
      <div className="destino-info">
        <span className="destino-estado">{destino.estado} • {destino.bioma}</span>
        <h3 className="destino-nome">{destino.nome}</h3>
        <p style={{ color: '#64748b', margin: '1rem 0' }}>{destino.descricao}</p>
        <div>
          {destino.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDestino;