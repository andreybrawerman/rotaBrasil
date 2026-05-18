import {
  getAtracoesProximas,
  type AtracaoProxima,
} from '../services/openTripMapService'
import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
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
  CloudSun,
  Thermometer,
  Droplets,
  Landmark,
} from 'lucide-react'
import { destinos } from '../data/destinos'
import { getClimaAtual } from '../services/weatherService'
import {
  getFeriadosNacionais,
  type FeriadoNacional,
} from '../services/brasilApiService'

interface Avaliacao {
  id: number;
  nome: string;
  comentario: string;
  data: string;
}

function DestinoDetalhe() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const destino = destinos.find((item) => item.id === id)

  const [clima, setClima] = useState<any>(null)
  const [carregandoClima, setCarregandoClima] = useState(true)
  const [erroClima, setErroClima] = useState('')

  const [feriados, setFeriados] = useState<FeriadoNacional[]>([])
  const [carregandoFeriados, setCarregandoFeriados] = useState(false)
  const [erroFeriados, setErroFeriados] = useState('')

  const [atracoes, setAtracoes] = useState<AtracaoProxima[]>([])
  const [carregandoAtracoes, setCarregandoAtracoes] = useState(false)
  const [erroAtracoes, setErroAtracoes] = useState('')

  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([
    {
      id: 1,
      nome: 'Maria Silva',
      comentario: 'Lugar incrível! Toda família e amigos podem se divertir aqui.',
      data: 'Há 2 dias'
    }
  ]);
  const [nomeInput, setNomeInput] = useState('');
  const [comentarioInput, setComentarioInput] = useState('');

  const handleAdicionarAvaliacao = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nomeInput.trim() || !comentarioInput.trim()) return;

    const novaAvaliacao: Avaliacao = {
      id: Date.now(),
      nome: nomeInput,
      comentario: comentarioInput,
      data: 'Agora mesmo'
    };

    setAvaliacoes([novaAvaliacao, ...avaliacoes]);
    setNomeInput('');
    setComentarioInput('');
  };

  useEffect(() => {
    async function carregarClima() {
      if (!destino?.localizacao) return

      try {
        setCarregandoClima(true)
        setErroClima('')

        const dados = await getClimaAtual(
          destino.localizacao.latitude,
          destino.localizacao.longitude
        )

        setClima(dados)
      } catch (error) {
        console.error(error)
        setErroClima('Não foi possível carregar o clima atual.')
      } finally {
        setCarregandoClima(false)
      }
    }

    carregarClima()
  }, [destino])

  useEffect(() => {
    async function carregarFeriados() {
      try {
        setCarregandoFeriados(true)
        setErroFeriados('')

        const anoAtual = new Date().getFullYear()

        const [feriadosAnoAtual, feriadosProximoAno] = await Promise.all([
          getFeriadosNacionais(anoAtual),
          getFeriadosNacionais(anoAtual + 1),
        ])

        setFeriados([...feriadosAnoAtual, ...feriadosProximoAno])
      } catch (error) {
        console.error(error)
        setErroFeriados('Não foi possível carregar os feriados nacionais.')
      } finally {
        setCarregandoFeriados(false)
      }
    }

    carregarFeriados()
  }, [])

  useEffect(() => {
  async function carregarAtracoes() {
    if (!destino?.localizacao) return

    try {
      setCarregandoAtracoes(true)
      setErroAtracoes('')

      const dados = await getAtracoesProximas(
        destino.localizacao.latitude,
        destino.localizacao.longitude
      )

      setAtracoes(dados)
    } catch (error) {
      console.error(error)
      setErroAtracoes('Não foi possível carregar atrações próximas.')
    } finally {
      setCarregandoAtracoes(false)
    }
  }

  carregarAtracoes()
}, [destino])

  if (!destino) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#DFECC6] px-5 py-3 font-black text-[#485C11] no-underline transition hover:bg-[#cfe4aa]"
        >
          <ArrowLeft size={18} /> Voltar para a Home
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
    )
  }

  const localizacaoTexto = destino.cidade
    ? `${destino.cidade}, ${destino.estado}`
    : `${destino.estado}, Brasil`

  const imagensGaleria =
    destino.galeria &&
    destino.galeria.length > 0 &&
    destino.galeria.some((foto) => foto.startsWith('http'))
      ? destino.galeria.filter((foto) => foto.startsWith('http'))
      : [destino.imagem, destino.imagem, destino.imagem, destino.imagem]

  const hoje = new Date()

  const proximosFeriados = feriados
    .filter((feriado) => {
      const dataFeriado = new Date(`${feriado.date}T00:00:00`)
      return dataFeriado >= hoje
    })
    .slice(0, 4)

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[560px] overflow-hidden">
        <img
          src={destino.imagem}
          alt={destino.nome}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl flex-col justify-end px-6 py-12">
          <button
            onClick={() => navigate(-1)}
            className="mb-8 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border-none bg-white/90 px-5 py-3 font-black text-[#485C11] no-underline backdrop-blur transition hover:bg-white"
          >
            <ArrowLeft size={18} /> Voltar
          </button>

          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#DFECC6] px-4 py-2 text-sm font-black uppercase text-[#485C11]">
              <MapPin size={16} /> {localizacaoTexto}
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

      {/* Conteúdo */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          {/* Sobre */}
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
              {destino.sobre ?? destino.descricao}
            </p>
          </div>

          {/* Como chegar */}
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

          {/* Destaques */}
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
                {destino.destaques.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-slate-50 p-5 font-bold leading-relaxed text-slate-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Galeria */}
          <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#CCE5F2] text-[#485C11]">
                <Camera size={24} />
              </div>
              <h2 className="text-3xl font-black text-[#485C11]">Galeria</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {imagensGaleria.map((foto, i) => (
                <img
                  key={i}
                  src={foto}
                  alt={`${destino.nome} ${i + 1}`}
                  className={`h-60 w-full rounded-3xl object-cover ${
                    i === 0 || i === 3 ? 'md:col-span-2' : ''
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Dicas */}
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
                {destino.dicas.map((dica, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-[#DFECC6] p-5 font-bold leading-relaxed text-[#485C11]"
                  >
                    {dica}
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Seção de Avaliações Funcional */}
          <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DFECC6] text-[#485C11]">
                <Users size={24} />
              </div>
              <h2 className="text-3xl font-black text-[#485C11]">
                Avaliações da Comunidade
              </h2>
            </div>
            
            <form className="mb-8 space-y-4" onSubmit={handleAdicionarAvaliacao}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-500">Seu nome</label>
                  <input 
                    type="text" 
                    value={nomeInput}
                    onChange={(e) => setNomeInput(e.target.value)}
                    placeholder="Ex: João"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 outline-none focus:border-[#549E9C] focus:ring-2 focus:ring-[#549E9C]/20 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-500">Sua experiência</label>
                <textarea 
                  rows={3}
                  value={comentarioInput}
                  onChange={(e) => setComentarioInput(e.target.value)}
                  placeholder="Compartilhe suas dicas sobre este destino..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-4 outline-none focus:border-[#549E9C] focus:ring-2 focus:ring-[#549E9C]/20 transition-all"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="rounded-full bg-[#485C11] px-8 py-3 font-bold text-white transition hover:scale-105 active:scale-95"
              >
                Publicar comentário
              </button>
            </form>

            {/* Lista Dinâmica de Comentários */}
            <div className="space-y-4 border-t border-slate-100 pt-6">
              {avaliacoes.map((item) => (
                <div key={item.id} className="rounded-2xl bg-slate-50 p-5 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-black text-[#485C11]">{item.nome}</h4>
                    <span className="text-xs font-bold text-slate-400 uppercase">{item.data}</span>
                  </div>
                  <p className="text-slate-600 italic">"{item.comentario}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="sticky top-6 space-y-8">
            {/* Clima atual */}
            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#CCE5F2] text-[#485C11]">
                  <CloudSun size={24} />
                </div>
                <h3 className="text-2xl font-black text-[#485C11]">
                  Clima atual
                </h3>
              </div>

              {carregandoClima && (
                <p className="text-slate-500">Carregando clima...</p>
              )}

              {erroClima && (
                <p className="rounded-2xl bg-red-50 p-4 font-bold text-red-600">
                  {erroClima}
                </p>
              )}

              {clima && (
                <div className="space-y-4">
                  {clima.fallback && (
                    <p className="rounded-2xl bg-yellow-50 p-4 text-sm font-bold text-yellow-700">
                      A API de clima não respondeu. Exibindo dados temporários.
                    </p>
                  )}
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <div className="flex items-center gap-3">
                      <Thermometer className="text-[#549E9C]" size={26} />
                      <div>
                        <h4 className="font-black text-[#485C11]">
                          Temperatura
                        </h4>
                        <p className="text-3xl font-black text-slate-700">
                          {Math.round(clima.main.temp)}°C
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <h4 className="font-black text-[#485C11]">Condição</h4>
                    <p className="capitalize text-slate-500">
                      {clima.weather[0].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <h4 className="text-sm font-black text-[#485C11]">
                        Sensação
                      </h4>
                      <p className="font-bold text-slate-500">
                        {Math.round(clima.main.feels_like)}°C
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="mb-1 flex items-center gap-2">
                        <Droplets className="text-[#549E9C]" size={18} />
                        <h4 className="text-sm font-black text-[#485C11]">
                          Umidade
                        </h4>
                      </div>
                      <p className="font-bold text-slate-500">
                        {clima.main.humidity}%
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Feriados */}
            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DFECC6] text-[#485C11]">
                  <CalendarDays size={24} />
                </div>
                <h3 className="text-2xl font-black text-[#485C11]">
                  Próximos feriados
                </h3>
              </div>

              {carregandoFeriados && (
                <p className="text-slate-500">Carregando feriados...</p>
              )}

              {erroFeriados && (
                <p className="rounded-2xl bg-red-50 p-4 font-bold text-red-600">
                  {erroFeriados}
                </p>
              )}

              {!carregandoFeriados &&
                !erroFeriados &&
                proximosFeriados.length === 0 && (
                  <p className="text-slate-500">
                    Nenhum feriado próximo encontrado para este ano.
                  </p>
                )}

              {proximosFeriados.length > 0 && (
                <div className="space-y-3">
                  {proximosFeriados.map((feriado) => (
                    <div
                      key={feriado.date}
                      className="rounded-2xl bg-slate-50 p-4"
                    >
                      <h4 className="font-black text-[#485C11]">
                        {feriado.name}
                      </h4>
                      <p className="text-sm font-bold text-slate-500">
                        {new Date(
                          `${feriado.date}T00:00:00`
                        ).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
              {/* Atrações próximas */}
          <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#CCE5F2] text-[#485C11]">
                <Landmark size={24} />
              </div>

              <h3 className="text-2xl font-black text-[#485C11]">
                Atrações próximas
              </h3>
            </div>

            {carregandoAtracoes && (
              <p className="text-slate-500">Carregando atrações...</p>
            )}

            {erroAtracoes && (
              <p className="rounded-2xl bg-red-50 p-4 font-bold text-red-600">
                {erroAtracoes}
              </p>
            )}

            {!carregandoAtracoes && !erroAtracoes && atracoes.length === 0 && (
              <p className="text-slate-500">
                Nenhuma atração próxima encontrada para este destino.
              </p>
            )}

            {atracoes.length > 0 && (
              <div className="space-y-3">
                {atracoes.map((atracao) => (
                  <div
                    key={atracao.xid}
                    className="rounded-2xl bg-slate-50 p-4"
                  >
                    <h4 className="font-black text-[#485C11]">
                      {atracao.name}
                    </h4>

                    {atracao.dist !== undefined && (
                      <p className="text-sm font-bold text-slate-500">
                        Aproximadamente {(atracao.dist / 1000).toFixed(1)} km de distância
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
            {/* Informações da viagem */}
            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-2xl font-black text-[#485C11]">
                Informações da viagem
              </h3>

              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <MapPin
                        className="shrink-0 text-[#549E9C]"
                        size={24}
                      />
                    ),
                    label: 'Localização',
                    value: localizacaoTexto,
                  },
                  {
                    icon: (
                      <Leaf className="shrink-0 text-[#549E9C]" size={24} />
                    ),
                    label: 'Bioma',
                    value: destino.bioma,
                  },
                  ...(destino.regiao
                    ? [
                        {
                          icon: (
                            <Route
                              className="shrink-0 text-[#549E9C]"
                              size={24}
                            />
                          ),
                          label: 'Região',
                          value: destino.regiao,
                        },
                      ]
                    : []),
                  {
                    icon: (
                      <CalendarDays
                        className="shrink-0 text-[#549E9C]"
                        size={24}
                      />
                    ),
                    label: 'Melhor época',
                    value:
                      destino.melhorEpoca ??
                      'Consulte o período ideal antes de viajar.',
                  },
                  ...(destino.duracaoRecomendada
                    ? [
                        {
                          icon: (
                            <Clock
                              className="shrink-0 text-[#549E9C]"
                              size={24}
                            />
                          ),
                          label: 'Duração recomendada',
                          value: destino.duracaoRecomendada,
                        },
                      ]
                    : []),
                  ...(destino.tipoViagem
                    ? [
                        {
                          icon: (
                            <Compass
                              className="shrink-0 text-[#549E9C]"
                              size={24}
                            />
                          ),
                          label: 'Tipo de viagem',
                          value: destino.tipoViagem,
                        },
                      ]
                    : []),
                  ...(destino.nivelAcesso
                    ? [
                        {
                          icon: (
                            <Compass
                              className="shrink-0 text-[#549E9C]"
                              size={24}
                            />
                          ),
                          label: 'Nível de acesso',
                          value: destino.nivelAcesso,
                        },
                      ]
                    : []),
                  ...(destino.publicoIdeal
                    ? [
                        {
                          icon: (
                            <Users
                              className="shrink-0 text-[#549E9C]"
                              size={24}
                            />
                          ),
                          label: 'Público ideal',
                          value: destino.publicoIdeal,
                        },
                      ]
                    : []),
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                    {icon}
                    <div>
                      <h4 className="font-black text-[#485C11]">{label}</h4>
                      <p className="text-slate-500">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Atividades */}
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

            {/* Localização */}
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
                    `${destino.cidade ?? destino.nome}, ${destino.estado}, Brasil`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#DFECC6] px-5 py-3 text-center font-black text-[#485C11] no-underline transition hover:bg-[#cfe4aa]"
                >
                  <MapPin size={18} /> Abrir no Google Maps
                </a>
              </div>
            )}

            {/* CTA */}
            <div className="rounded-[2rem] bg-[#485C11] p-8 text-white shadow-sm">
              <h3 className="mb-3 text-2xl font-black">Planeje sua visita</h3>

              <p className="mb-6 leading-relaxed text-white/80">
                Explore esse destino e descubra outros lugares incríveis pelo Brasil.
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
  )
}

export default DestinoDetalhe