import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Leaf,
  Camera,
  CalendarDays,
  Compass,
  Info,
  Clock,
  Users,
  Route,
  Sparkles,
  Lightbulb,
  Navigation,
} from 'lucide-react';

import { destinos } from '../data/destinos';

function DestinoDetalhe() {
  const { id } = useParams();

  const destino = destinos.find((item) => item.id === id);

  if (!destino) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#DFECC6] px-5 py-3 font-black text-[#485C11] no-underline transition hover:bg-[#cfe4aa]"
        >
          <ArrowLeft size={18} />
          Voltar para a Home
        </Link>

        <div className="rounded-[2rem] border border-slate-100 bg-white p-10 text-center shadow-sm">
          <h1 className="text-4xl font-black text-[#485C11]">
            Destino não encontrado
          </h1>

          <p className="mt-4 text-slate-500">
            Esse destino ainda não está cadastrado no sistema.
          </p>
        </div>
      </main>
    );
  }

  const localizacaoTexto = destino.cidade
    ? `${destino.cidade}, ${destino.estado}`
    : `${destino.estado}, Brasil`;

  const imagensGaleria =
    destino.galeria &&
    destino.galeria.length > 0 &&
    destino.galeria.some((foto) => foto.startsWith('http'))
      ? destino.galeria.filter((foto) => foto.startsWith('http'))
      : [
          destino.imagem,
          destino.imagem,
          destino.imagem,
          destino.imagem,
        ];

  return (
    <main>
      <section className="relative min-h-[560px] overflow-hidden">
        <img
          src={destino.imagem}
          alt={destino.nome}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10"></div>

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl flex-col justify-end px-6 py-12">
          <Link
            to="/"
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-5 py-3 font-black text-[#485C11] no-underline backdrop-blur transition hover:bg-white"
          >
            <ArrowLeft size={18} />
            Voltar
          </Link>

          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#DFECC6] px-4 py-2 text-sm font-black uppercase text-[#485C11]">
              <MapPin size={16} />
              {localizacaoTexto}
            </span>

            <h1 className="text-5xl font-black leading-none tracking-tight text-white md:text-7xl">
              {destino.nome}
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/90">
              {destino.descricao}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {destino.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/20 px-4 py-2 text-sm font-bold text-white backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DFECC6] text-[#485C11]">
                <Info size={24} />
              </div>

              <h2 className="text-3xl font-black text-[#485C11]">
                Sobre o destino
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-slate-600">
              {destino.sobre || destino.descricao}
            </p>
          </div>

          {destino.comoChegar && (
            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#CCE5F2] text-[#485C11]">
                  <Navigation size={24} />
                </div>

                <h2 className="text-3xl font-black text-[#485C11]">
                  Como chegar
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-slate-600">
                {destino.comoChegar}
              </p>
            </div>
          )}

          {destino.destaques && destino.destaques.length > 0 && (
            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DFECC6] text-[#485C11]">
                  <Sparkles size={24} />
                </div>

                <h2 className="text-3xl font-black text-[#485C11]">
                  Destaques
                </h2>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {destino.destaques.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-slate-50 p-5 font-bold leading-relaxed text-slate-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#CCE5F2] text-[#485C11]">
                <Camera size={24} />
              </div>

              <h2 className="text-3xl font-black text-[#485C11]">
                Galeria
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {imagensGaleria.map((foto, index) => (
                <img
                  key={index}
                  src={foto}
                  alt={`${destino.nome} ${index + 1}`}
                  className={`h-60 w-full rounded-3xl object-cover ${
                    index === 0 || index === 3 ? 'md:col-span-2' : ''
                  }`}
                />
              ))}
            </div>
          </div>

          {destino.dicas && destino.dicas.length > 0 && (
            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DFECC6] text-[#485C11]">
                  <Lightbulb size={24} />
                </div>

                <h2 className="text-3xl font-black text-[#485C11]">
                  Dicas para visitar
                </h2>
              </div>

              <div className="space-y-3">
                {destino.dicas.map((dica, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-[#DFECC6] p-5 font-bold leading-relaxed text-[#485C11]"
                  >
                    {dica}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-8">
          <div className="sticky top-6 space-y-8">
            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-2xl font-black text-[#485C11]">
                Informações da viagem
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                  <MapPin className="shrink-0 text-[#549E9C]" size={24} />

                  <div>
                    <h4 className="font-black text-[#485C11]">
                      Localização
                    </h4>
                    <p className="text-slate-500">{localizacaoTexto}</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                  <Leaf className="shrink-0 text-[#549E9C]" size={24} />

                  <div>
                    <h4 className="font-black text-[#485C11]">Bioma</h4>
                    <p className="text-slate-500">{destino.bioma}</p>
                  </div>
                </div>

                {destino.regiao && (
                  <div className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                    <Route className="shrink-0 text-[#549E9C]" size={24} />

                    <div>
                      <h4 className="font-black text-[#485C11]">Região</h4>
                      <p className="text-slate-500">{destino.regiao}</p>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                  <CalendarDays
                    className="shrink-0 text-[#549E9C]"
                    size={24}
                  />

                  <div>
                    <h4 className="font-black text-[#485C11]">
                      Melhor época
                    </h4>
                    <p className="text-slate-500">
                      {destino.melhorEpoca ||
                        'Consulte o período ideal antes de viajar.'}
                    </p>
                  </div>
                </div>

                {destino.duracaoRecomendada && (
                  <div className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                    <Clock className="shrink-0 text-[#549E9C]" size={24} />

                    <div>
                      <h4 className="font-black text-[#485C11]">
                        Duração recomendada
                      </h4>
                      <p className="text-slate-500">
                        {destino.duracaoRecomendada}
                      </p>
                    </div>
                  </div>
                )}

                {destino.tipoViagem && (
                  <div className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                    <Compass className="shrink-0 text-[#549E9C]" size={24} />

                    <div>
                      <h4 className="font-black text-[#485C11]">
                        Tipo de viagem
                      </h4>
                      <p className="text-slate-500">{destino.tipoViagem}</p>
                    </div>
                  </div>
                )}

                {destino.nivelAcesso && (
                  <div className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                    <Compass className="shrink-0 text-[#549E9C]" size={24} />

                    <div>
                      <h4 className="font-black text-[#485C11]">
                        Nível de acesso
                      </h4>
                      <p className="text-slate-500">{destino.nivelAcesso}</p>
                    </div>
                  </div>
                )}

                {destino.publicoIdeal && (
                  <div className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                    <Users className="shrink-0 text-[#549E9C]" size={24} />

                    <div>
                      <h4 className="font-black text-[#485C11]">
                        Público ideal
                      </h4>
                      <p className="text-slate-500">{destino.publicoIdeal}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-black text-[#485C11]">
                Atividades
              </h3>

              <div className="flex flex-wrap gap-3">
                {destino.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#DFECC6] px-4 py-2 text-sm font-black text-[#485C11]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {destino.localizacao && (
              <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-black text-[#485C11]">
                  Localização no mapa
                </h3>

                <p className="mb-5 leading-relaxed text-slate-500">
                  Veja a localização aproximada de {destino.nome} no Google Maps.
                </p>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${destino.cidade || destino.nome}, ${destino.estado}, Brasil`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#DFECC6] px-5 py-3 text-center font-black text-[#485C11] no-underline transition hover:bg-[#cfe4aa]"
                >
                  <MapPin size={18} />
                  Abrir no Google Maps
                </a>
              </div>
            )}

            <div className="rounded-[2rem] bg-[#485C11] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-black">
                Planeje sua visita
              </h3>

              <p className="mb-6 leading-relaxed text-white/80">
                Explore esse destino e descubra outros lugares incríveis pelo
                Brasil.
              </p>

              <Link
                to="/explorar"
                className="inline-flex rounded-full bg-white px-6 py-3 font-black text-[#485C11] no-underline transition hover:scale-105"
              >
                Ver outros destinos
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default DestinoDetalhe;

//lcsgirata@gmail.com