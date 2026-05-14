import { useState } from 'react'
import { Link } from 'react-router-dom'
import Brazil from '@svg-maps/brazil'
import { destinos } from '../data/destinos'

const mapaStyles = `
  .estado-mapa {
    stroke: white;
    stroke-width: 1.3;
    cursor: pointer;
    transition: 0.2s ease;
    transform-box: fill-box;
    transform-origin: center;
  }
  .estado-mapa:hover {
    filter: brightness(0.9);
    transform: scale(1.015);
  }
  .estado-norte { fill: #DFECC6; }
  .estado-nordeste { fill: #CCE5F2; }
  .estado-centro-oeste { fill: #8E9C78; }
  .estado-sudeste { fill: #485C11; }
  .estado-sul { fill: #549E9C; }
  .estado-desativado { opacity: 0.18; }
  .estado-selecionado {
    opacity: 1;
    stroke: #0f172a;
    stroke-width: 2.5;
    filter: brightness(0.95);
  }
`

type Regiao = 'norte' | 'nordeste' | 'centro-oeste' | 'sudeste' | 'sul'

const regioesPorEstado: Record<string, Regiao> = {
  AC: 'norte', AP: 'norte', AM: 'norte', PA: 'norte', RO: 'norte', RR: 'norte', TO: 'norte',
  AL: 'nordeste', BA: 'nordeste', CE: 'nordeste', MA: 'nordeste', PB: 'nordeste',
  PE: 'nordeste', PI: 'nordeste', RN: 'nordeste', SE: 'nordeste',
  DF: 'centro-oeste', GO: 'centro-oeste', MT: 'centro-oeste', MS: 'centro-oeste',
  ES: 'sudeste', MG: 'sudeste', RJ: 'sudeste', SP: 'sudeste',
  PR: 'sul', RS: 'sul', SC: 'sul',
}

const nomesRegioes: Record<Regiao, string> = {
  norte: 'Norte',
  nordeste: 'Nordeste',
  'centro-oeste': 'Centro-Oeste',
  sudeste: 'Sudeste',
  sul: 'Sul',
}

const coresRegioes: Record<Regiao, string> = {
  norte: '#DFECC6',
  nordeste: '#CCE5F2',
  'centro-oeste': '#8E9C78',
  sudeste: '#485C11',
  sul: '#549E9C',
}

const nomesEstados: Record<string, string> = {
  AC: 'Acre', AL: 'Alagoas', AP: 'Amapá', AM: 'Amazonas', BA: 'Bahia',
  CE: 'Ceará', DF: 'Distrito Federal', ES: 'Espírito Santo', GO: 'Goiás',
  MA: 'Maranhão', MT: 'Mato Grosso', MS: 'Mato Grosso do Sul', MG: 'Minas Gerais',
  PA: 'Pará', PB: 'Paraíba', PR: 'Paraná', PE: 'Pernambuco', PI: 'Piauí',
  RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte', RS: 'Rio Grande do Sul',
  RO: 'Rondônia', RR: 'Roraima', SC: 'Santa Catarina', SP: 'São Paulo',
  SE: 'Sergipe', TO: 'Tocantins',
}

function normalizarTexto(texto: string): string {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

function MapaBrasilInterativo() {
  const [regiaoSelecionada, setRegiaoSelecionada] = useState<Regiao | null>(null)
  const [estadoSelecionado, setEstadoSelecionado] = useState<string | null>(null)

  function selecionarEstado(sigla: string) {
    setEstadoSelecionado(sigla)
    setRegiaoSelecionada(regioesPorEstado[sigla])
  }

  function selecionarRegiao(regiao: Regiao) {
    setRegiaoSelecionada(regiao)
    setEstadoSelecionado(null)
  }

  function limparSelecao() {
    setRegiaoSelecionada(null)
    setEstadoSelecionado(null)
  }

  const nomeEstadoSelecionado = estadoSelecionado ? nomesEstados[estadoSelecionado] : null

  const destinosFiltrados = nomeEstadoSelecionado
    ? destinos.filter((d) => normalizarTexto(d.estado) === normalizarTexto(nomeEstadoSelecionado))
    : []

  const estadosDaRegiao = Object.entries(regioesPorEstado)
    .filter(([, regiao]) => regiao === regiaoSelecionada)
    .map(([sigla]) => sigla)

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <style>{mapaStyles}</style>
      <div className="mb-10 max-w-3xl">
        <span className="mb-4 inline-block rounded-full bg-[#DFECC6] px-4 py-2 text-xs font-black uppercase text-[#485C11]">
          Mapa interativo
        </span>
        <h2 className="text-4xl font-black leading-none tracking-tight text-[#485C11] md:text-5xl">
          Explore o Brasil por região
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-500">
          Clique em uma região ou em um estado do mapa para visualizar os pontos turísticos disponíveis.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Mapa SVG */}
        <div className="flex h-[620px] items-center justify-center rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
          <svg viewBox={Brazil.viewBox} className="block w-full max-w-[620px]" role="img" aria-label="Mapa do Brasil">
            {Brazil.locations.map((location) => {
              const sigla = location.id.toUpperCase()
              const regiao = regioesPorEstado[sigla]
              let classe = `estado-mapa estado-${regiao}`
              if (regiaoSelecionada && regiao !== regiaoSelecionada) classe += ' estado-desativado'
              if (estadoSelecionado === sigla) classe += ' estado-selecionado'
              return (
                <path
                  key={location.id}
                  id={location.id}
                  d={location.path}
                  className={classe}
                  onClick={() => selecionarEstado(sigla)}
                >
                  <title>{nomesEstados[sigla]}</title>
                </path>
              )
            })}
          </svg>
        </div>

        {/* Painel lateral */}
        <aside className="flex h-[620px] flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
          <h3 className="mb-4 text-3xl font-black text-[#485C11]">
            {estadoSelecionado ? nomeEstadoSelecionado
              : regiaoSelecionada ? nomesRegioes[regiaoSelecionada]
              : 'Escolha uma região'}
          </h3>

          {/* Estado inicial */}
          {!regiaoSelecionada && !estadoSelecionado && (
            <>
              <p className="mb-6 text-lg leading-relaxed text-slate-500">
                Você pode clicar diretamente em um estado do mapa ou selecionar uma região pelos botões abaixo.
              </p>
              <div className="flex flex-col gap-4">
                {(Object.entries(nomesRegioes) as [Regiao, string][]).map(([id, nome]) => (
                  <button key={id} onClick={() => selecionarRegiao(id)}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-left font-black text-[#485C11] transition hover:translate-x-1 hover:bg-[#DFECC6]"
                  >
                    <span className="h-5 w-5 rounded-full border border-black/10" style={{ backgroundColor: coresRegioes[id] }} />
                    {nome}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Região selecionada, sem estado */}
          {regiaoSelecionada && !estadoSelecionado && (
            <div className="flex min-h-0 flex-1 flex-col">
              <button onClick={limparSelecao} className="mb-6 w-fit rounded-full bg-[#DFECC6] px-4 py-3 font-black text-[#485C11] transition hover:bg-[#cfe4aa]">
                ← Voltar para regiões
              </button>
              <p className="mb-5 text-lg leading-relaxed text-slate-500">
                Agora escolha um estado da região <strong className="text-[#485C11]">{nomesRegioes[regiaoSelecionada]}</strong>.
              </p>
              <div className="min-h-0 flex-1 overflow-y-auto pr-2">
                <div className="grid grid-cols-2 gap-3">
                  {estadosDaRegiao.map((sigla) => (
                    <button key={sigla} onClick={() => selecionarEstado(sigla)}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left font-bold text-[#485C11] transition hover:-translate-y-1 hover:bg-[#DFECC6]"
                    >
                      <strong className="mb-1 block text-xl text-[#549E9C]">{sigla}</strong>
                      {nomesEstados[sigla]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Estado selecionado */}
          {estadoSelecionado && (
            <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto pr-2">
              <button onClick={limparSelecao} className="w-fit shrink-0 rounded-full bg-[#DFECC6] px-4 py-3 font-black text-[#485C11] transition hover:bg-[#cfe4aa]">
                Voltar para o mapa completo
              </button>
              <p className="shrink-0 leading-relaxed text-slate-500">
                Destinos encontrados em <strong className="text-[#485C11]">{nomeEstadoSelecionado}</strong>:
              </p>
              {destinosFiltrados.length > 0 ? (
                destinosFiltrados.map((destino) => (
                  <div key={destino.id} className="shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                    <img src={destino.imagem} alt={destino.nome} className="h-[150px] w-full object-cover" />
                    <div className="p-4">
                      <h4 className="mb-2 font-black text-[#485C11]">{destino.nome}</h4>
                      <p className="mb-3 text-sm leading-relaxed text-slate-500">{destino.descricao}</p>
                      <Link to={`/destino/${destino.id}`} className="font-black text-[#549E9C] no-underline hover:underline">
                        Ver destino
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
                  <p className="m-0 text-slate-500">Ainda não existem pontos turísticos cadastrados para esse estado.</p>
                </div>
              )}
            </div>
          )}
        </aside>
      </div>
    </section>
  )
}

export default MapaBrasilInterativo