import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TreePine, Waves, Mountain } from 'lucide-react';

import { destinos } from '../data/destinos';
import CardDestino from '../components/CardDestino';
import MapaBrasilInterativo from '../components/MapaBrasilInterativo';

function Home() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-black leading-none tracking-[-3px] text-[#485C11] md:text-8xl">
            A imensidão <br />
            <span className="text-[#549E9C]">que é nossa.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-600 md:text-2xl">
            Explore parques nacionais e tesouros escondidos do Brasil com uma
            experiência visual definitiva.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/explorar"
              className="rounded-full bg-[#485C11] px-8 py-4 font-bold text-white no-underline transition hover:scale-105 hover:bg-[#3a4a0e]"
            >
              Explorar Mapa
            </Link>

            <a
              href="#destinos"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-bold text-[#485C11] no-underline transition hover:scale-105 hover:bg-slate-50"
            >
              Ver Destinos
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </main>

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid auto-rows-[280px] grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex cursor-pointer flex-col justify-between rounded-[2rem] bg-[#DFECC6] p-10 text-[#485C11] transition hover:scale-[1.02] lg:col-span-2">
            <TreePine size={32} />

            <div>
              <h3 className="text-2xl font-black">Amazônia</h3>
              <p className="mt-2 text-lg">
                O pulmão do mundo em sua forma selvagem.
              </p>
            </div>
          </div>

          <div className="flex cursor-pointer flex-col justify-between rounded-[2rem] bg-[#549E9C] p-10 text-white transition hover:scale-[1.02]">
            <Waves size={32} />

            <div>
              <h3 className="text-2xl font-black">Litoral</h3>
              <p className="mt-2 text-lg">
                Paraísos de águas cristalinas.
              </p>
            </div>
          </div>

          <div className="flex cursor-pointer flex-col justify-between rounded-[2rem] bg-[#8E9C78] p-10 text-white transition hover:scale-[1.02]">
            <Mountain size={32} />

            <div>
              <h3 className="text-2xl font-black">Chapadas</h3>
              <p className="mt-2 text-lg">
                Cânions e mirantes de tirar o fôlego.
              </p>
            </div>
          </div>

          <div className="flex cursor-pointer flex-col justify-between rounded-[2rem] bg-[#CCE5F2] p-10 text-[#485C11] transition hover:scale-[1.02] lg:col-span-2">
            <div className="w-fit rounded-full bg-white px-4 py-1 text-xs font-black">
              NOVO
            </div>

            <div>
              <h3 className="text-2xl font-black">Pantanal</h3>
              <p className="mt-2 text-lg">
                A maior planície alagada do planeta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MapaBrasilInterativo />

      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="mb-12 text-4xl font-black text-[#485C11]">
          Por que viajar com a RotaBrasil?
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1">
            <h3 className="mb-4 text-xl font-black text-[#549E9C]">
              Exploração completa
            </h3>

            <p className="text-slate-500">
              Descubra destinos únicos em todo o Brasil, dos mais famosos aos
              escondidos.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1">
            <h3 className="mb-4 text-xl font-black text-[#549E9C]">
              Experiência visual
            </h3>

            <p className="text-slate-500">
              Navegue por paisagens incríveis com uma interface moderna e
              intuitiva.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1">
            <h3 className="mb-4 text-xl font-black text-[#549E9C]">
              Descoberta inteligente
            </h3>

            <p className="text-slate-500">
              Encontre lugares perfeitos com base em biomas, atividades e
              preferências.
            </p>
          </div>
        </div>
      </section>

      <section
        id="destinos"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <h2 className="mb-8 text-4xl font-black text-[#485C11]">
          Explore os Destinos
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {destinos.map((destino) => (
            <CardDestino key={destino.id} destino={destino} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;