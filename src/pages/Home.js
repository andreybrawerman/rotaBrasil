import React from 'react';
import { Map, ArrowRight, TreePine, Waves, Mountain } from 'lucide-react';
import { destinos } from '../data/destinos';

function Home() {
  return (
    <>
      <main className="container hero">
        <h1>A imensidão <br /><span>que é nossa.</span></h1>
        <p>Explore parques nacionais e tesouros escondidos do Brasil com uma experiência visual definitiva.</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-primary" style={{ padding: '1rem 2rem' }}>Explorar Mapa</button>
          <button className="btn-secondary">Ver Destinos <ArrowRight size={20} /></button>
        </div>
      </main>

      <section className="container">
        <div className="bento-grid">
          <div className="bento-card bg-light-green col-span-2">
            <TreePine size={32} />
            <div><h3>Amazônia</h3><p>O pulmão do mundo em sua forma selvagem.</p></div>
          </div>
          <div className="bento-card bg-teal">
            <Waves size={32} />
            <div><h3>Litoral</h3><p>Paraísos de águas cristalinas.</p></div>
          </div>
          <div className="bento-card bg-muted-green">
            <Mountain size={32} />
            <div><h3>Chapadas</h3><p>Cânions e mirantes de tirar o fôlego.</p></div>
          </div>
          <div className="bento-card bg-light-blue col-span-2">
            <div style={{ background: 'white', padding: '4px 12px', borderRadius: '20px', width: 'fit-content', fontWeight: 'bold', fontSize: '12px' }}>NOVO</div>
            <div><h3>Pantanal</h3><p>A maior planície alagada do planeta.</p></div>
          </div>
        </div>
      </section>

      <section className="container destinos-section" id="destinos">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Explore os Destinos</h2>
        <div className="destinos-grid">
          {destinos.map((dest) => (
            <div key={dest.id} className="destino-card">
              <img src={dest.imagem} alt={dest.nome} className="destino-img" />
              <div className="destino-info">
                <span className="destino-estado">{dest.estado} • {dest.bioma}</span>
                <h3 className="destino-nome">{dest.nome}</h3>
                <p style={{ color: '#64748b', margin: '1rem 0' }}>{dest.descricao}</p>
                <div>{dest.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;