import { Link } from 'react-router-dom'
import { ArrowRight, TreePine, Waves, Mountain } from 'lucide-react'
import { destinos } from '../data/destinos'
import CardDestino from '../components/CardDestino'

function Home() {
  return (
    <>
      {/* Hero */}
      <main className="max-w-6xl mx-auto px-8 py-20 max-w-3xl">
        <h1 className="text-[5.5rem] font-black leading-[0.95] tracking-[-3px] text-[color:var(--color-bm-dark-green)] max-md:text-[3.5rem] max-md:tracking-[-1px]">
          A imensidão <br />
          <span className="text-[color:var(--color-bm-teal)]">que é nossa.</span>
        </h1>
        <p className="text-2xl text-slate-500 my-8 max-md:text-lg">
          Explore parques nacionais e tesouros escondidos do Brasil com uma experiência visual definitiva.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            to="/explorar"
            className="bg-[color:var(--color-bm-dark-green)] text-white no-underline px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Explorar Mapa
          </Link>
          <a
            href="#destinos"
            className="bg-[color:var(--color-bm-light-blue)] text-[color:var(--color-bm-dark-green)] no-underline px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Ver Destinos <ArrowRight size={20} />
          </a>
        </div>
      </main>

      {/* Bento Grid */}
      <section className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-3 gap-6 auto-rows-[280px] max-md:grid-cols-1 max-md:auto-rows-auto">
          <div className="bg-[color:var(--color-bm-light-green)] text-[color:var(--color-bm-dark-green)] col-span-2 rounded-[2rem] p-10 flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer max-md:col-span-1">
            <TreePine size={32} />
            <div><h3 className="text-xl font-bold">Amazônia</h3><p>O pulmão do mundo em sua forma selvagem.</p></div>
          </div>
          <div className="bg-[color:var(--color-bm-teal)] text-white rounded-[2rem] p-10 flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer">
            <Waves size={32} />
            <div><h3 className="text-xl font-bold">Litoral</h3><p>Paraísos de águas cristalinas.</p></div>
          </div>
          <div className="bg-[color:var(--color-bm-muted-green)] text-white rounded-[2rem] p-10 flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer">
            <Mountain size={32} />
            <div><h3 className="text-xl font-bold">Chapadas</h3><p>Cânions e mirantes de tirar o fôlego.</p></div>
          </div>
          <div className="bg-[color:var(--color-bm-light-blue)] text-[color:var(--color-bm-dark-green)] col-span-2 rounded-[2rem] p-10 flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer max-md:col-span-1">
            <span className="bg-white px-3 py-1 rounded-full text-xs font-bold w-fit">NOVO</span>
            <div><h3 className="text-xl font-bold">Pantanal</h3><p>A maior planície alagada do planeta.</p></div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="max-w-6xl mx-auto px-8 py-20 text-center">
        <h2 className="text-[2.2rem] font-bold mb-12 text-[color:var(--color-bm-dark-green)]">
          Por que viajar com a RotaBrasil?
        </h2>
        <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
          {[
            { titulo: 'Exploração completa', texto: 'Descubra destinos únicos em todo o Brasil, dos mais famosos aos escondidos.' },
            { titulo: 'Experiência visual', texto: 'Navegue por paisagens incríveis com uma interface moderna e intuitiva.' },
            { titulo: 'Descoberta inteligente', texto: 'Encontre lugares perfeitos com base em biomas, atividades e preferências.' },
          ].map((b) => (
            <div
              key={b.titulo}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform"
            >
              <h3 className="font-bold text-[color:var(--color-bm-teal)] mb-4">{b.titulo}</h3>
              <p className="text-slate-500">{b.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinos */}
      <section className="max-w-6xl mx-auto px-8 py-20" id="destinos">
        <h2 className="text-[2.5rem] font-bold mb-8">Explore os Destinos</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
          {destinos.map((dest) => (
            <CardDestino key={dest.id} destino={dest} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
