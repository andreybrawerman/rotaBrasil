import { Link } from 'react-router-dom'
import { ArrowRight, TreePine, Waves, Mountain } from 'lucide-react'
import { destinos } from '../data/destinos'
import CardDestino from '../components/CardDestino'
import MapaBrasilInterativo from '../components/MapaBrasilInterativo'

function Home() {
  return (
    <>
      {/* Hero */}
      <main className="w-full max-w-[1200px] mx-auto px-8 py-20 text-left">
        <div className="max-w-[800px]">
          <h1 className="text-[5.5rem] font-black leading-[0.95] tracking-[-3px] text-[#485C11] max-md:text-[3.5rem]">
            A imensidão <br />
            <span className="text-[#549E9C]">que é nossa.</span>
          </h1>
          <p className="my-8 text-[1.5rem] text-[#475569]">
            Explore parques nacionais e tesouros escondidos do Brasil <br />
            com uma experiência visual definitiva.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/explorar" className="inline-flex items-center justify-center rounded-full bg-[#485C11] px-8 py-4 font-bold text-white no-underline transition-opacity hover:opacity-90">
              Explorar Mapa
            </Link>
            <a href="#destinos" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-bold text-[#485C11] no-underline transition hover:bg-slate-50">
              Ver Destinos <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </main>

      {/* Bento Grid */}
      <section className="w-full max-w-[1200px] mx-auto px-8">
        <div className="grid w-full auto-rows-[280px] grid-cols-3 gap-6 max-lg:auto-rows-auto max-lg:grid-cols-1">
          
          <div className="col-span-2 flex cursor-pointer flex-col justify-between rounded-[2rem] bg-[#DFECC6] p-10 text-[#485C11] transition hover:scale-[1.02] max-lg:col-span-1">
            <TreePine size={32} />
            <div>
              <h3 className="text-2xl font-black">Amazônia</h3>
              <p className="mt-2">O pulmão do mundo em sua forma selvagem.</p>
            </div>
          </div>

          <div className="flex cursor-pointer flex-col justify-between rounded-[2rem] bg-[#549E9C] p-10 text-white transition hover:scale-[1.02]">
            <Waves size={32} />
            <div>
              <h3 className="text-2xl font-black">Litoral</h3>
              <p className="mt-2">Paraísos de águas cristalinas.</p>
            </div>
          </div>

          <div className="flex cursor-pointer flex-col justify-between rounded-[2rem] bg-[#8E9C78] p-10 text-white transition hover:scale-[1.02]">
            <Mountain size={32} />
            <div>
              <h3 className="text-2xl font-black">Chapadas</h3>
              <p className="mt-2">Cânions e mirantes de tirar o fôlego.</p>
            </div>
          </div>

          <div className="col-span-2 flex cursor-pointer flex-col justify-between rounded-[2rem] bg-[#CCE5F2] p-10 text-[#485C11] transition hover:scale-[1.02] max-lg:col-span-1">
            <div className="w-fit rounded-full bg-white px-4 py-1 text-xs font-black">NOVO</div>
            <div>
              <h3 className="text-2xl font-black">Pantanal</h3>
              <p className="mt-2">A maior planície alagada do planeta.</p>
            </div>
          </div>

        </div>
      </section>

      <MapaBrasilInterativo />

      {/* Benefícios */}
      <section className="w-full max-w-[1200px] mx-auto px-8 py-20 text-center">
        <h2 className="mb-12 text-[2.2rem] font-black text-[#485C11]">Por que viajar com a RotaBrasil?</h2>
        
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { titulo: 'Exploração completa', texto: 'Descubra destinos únicos em todo o Brasil, dos mais famosos aos escondidos.' },
            { titulo: 'Experiência visual', texto: 'Navegue por paisagens incríveis com uma interface moderna e intuitiva.' },
            { titulo: 'Descoberta inteligente', texto: 'Encontre lugares perfeitos com base em biomas, atividades e preferências.' },
          ].map((b) => (
            <div key={b.titulo} className="w-full rounded-[1.5rem] border border-[#edf2f7] bg-white p-8 shadow-sm transition hover:-translate-y-1">
              <h3 className="mb-4 font-black text-[#549E9C]">{b.titulo}</h3>
              <p className="text-[#64748b]">{b.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinos */}
      <section id="destinos" className="w-full max-w-[1200px] mx-auto px-8 py-20 text-left">
        <h2 className="mb-10 text-[2.5rem] font-black text-[#485C11]">Explore os Destinos</h2>
        
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinos.slice(0, 6).map((destino) => (
            <CardDestino key={destino.id} destino={destino} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/explorar"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#485C11] bg-transparent px-8 py-4 font-bold text-[#485C11] transition-all hover:bg-[#485C11] hover:text-white"
          >
            Explorar todos os destinos <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home