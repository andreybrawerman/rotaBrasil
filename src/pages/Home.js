import React from 'react';
import { Link } from 'react-router-dom';
import { Map, ArrowRight, TreePine, Waves, Mountain } from 'lucide-react';
import { destinos } from '../data/destinos';
import './Home.css';

import CardDestino from '../components/CardDestino';

function Home() {
  return (
    <>
      <main className="container hero">
        <h1>A imensidão <br /><span>que é nossa.</span></h1>
        <p>Explore parques nacionais e tesouros escondidos do Brasil com uma experiência visual definitiva.</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/explorar" className="btn-primary" style={{ padding: '1rem 2rem', textDecoration: 'none' }}>
            Explorar Mapa
          </Link>

          <a href="#destinos" className="btn-secondary" style={{ textDecoration: 'none' }}>
            Ver Destinos <ArrowRight size={20} />
          </a>
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

      <section className="container beneficios-section">
        <h2 className="beneficios-title">Por que viajar com a RotaBrasil?</h2>

        <div className="beneficios-grid">
          <div className="beneficio-card">
            <h3>Exploração completa</h3>
            <p>Descubra destinos únicos em todo o Brasil, dos mais famosos aos escondidos.</p>
          </div>

          <div className="beneficio-card">
            <h3>Experiência visual</h3>
            <p>Navegue por paisagens incríveis com uma interface moderna e intuitiva.</p>
          </div>

          <div className="beneficio-card">
            <h3>Descoberta inteligente</h3>
            <p>Encontre lugares perfeitos com base em biomas, atividades e preferências.</p>
          </div>
        </div>
      </section>

      <section className="container destinos-section" id="destinos">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Explore os Destinos</h2>
        <div className="destinos-grid">
          {destinos.map((dest) => (
            <CardDestino key={dest.id} destino={dest} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;