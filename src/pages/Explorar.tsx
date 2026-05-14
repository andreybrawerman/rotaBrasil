import { useEffect, useMemo, useState } from 'react'
import {
  getEstados,
  getRegioes,
  type EstadoIBGE,
  type RegiaoIBGE,
} from '../services/ibgeService'
import { destinos } from '../data/destinos'
import CardDestino from '../components/CardDestino'

function Explorar() {
  const [regioes, setRegioes] = useState<RegiaoIBGE[]>([])
  const [estados, setEstados] = useState<EstadoIBGE[]>([])

  const [regiaoSelecionada, setRegiaoSelecionada] = useState('')
  const [estadoSelecionado, setEstadoSelecionado] = useState('')
  const [cidadeSelecionada, setCidadeSelecionada] = useState('')

  const [carregandoIBGE, setCarregandoIBGE] = useState(false)
  const [erroIBGE, setErroIBGE] = useState('')

  useEffect(() => {
    async function carregarDadosIBGE() {
      try {
        setCarregandoIBGE(true)
        setErroIBGE('')

        const [dadosRegioes, dadosEstados] = await Promise.all([
          getRegioes(),
          getEstados(),
        ])

        setRegioes(dadosRegioes)
        setEstados(dadosEstados)
      } catch (error) {
        console.error(error)
        setErroIBGE('Não foi possível carregar os dados do IBGE.')
      } finally {
        setCarregandoIBGE(false)
      }
    }

    carregarDadosIBGE()
  }, [])

  const estadosFiltrados = useMemo(() => {
    if (!regiaoSelecionada) return estados

    return estados.filter(
      (estado) => estado.regiao.nome === regiaoSelecionada
    )
  }, [estados, regiaoSelecionada])

  const cidadesDisponiveis = useMemo(() => {
    return destinos
      .filter((destino) => {
        const filtroRegiao =
          !regiaoSelecionada || destino.regiao === regiaoSelecionada

        const filtroEstado =
          !estadoSelecionado || destino.estado === estadoSelecionado

        return filtroRegiao && filtroEstado
      })
      .map((destino) => destino.cidade)
      .filter(Boolean)
      .filter((cidade, index, array) => array.indexOf(cidade) === index)
      .sort()
  }, [regiaoSelecionada, estadoSelecionado])

  const destinosFiltrados = useMemo(() => {
    return destinos.filter((destino) => {
      const filtroRegiao =
        !regiaoSelecionada || destino.regiao === regiaoSelecionada

      const filtroEstado =
        !estadoSelecionado || destino.estado === estadoSelecionado

      const filtroCidade =
        !cidadeSelecionada || destino.cidade === cidadeSelecionada

      return filtroRegiao && filtroEstado && filtroCidade
    })
  }, [regiaoSelecionada, estadoSelecionado, cidadeSelecionada])

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <section className="mb-10">


        <h1 className="text-5xl font-black tracking-tight text-[#485C11] md:text-6xl">
          Explore os Destinos
        </h1>

    
      </section>

      <section className="mb-10 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-3xl font-black text-[#485C11]">
            Filtrar destinos
          </h2>

          <p className="mt-2 text-slate-500">
            Use os filtros abaixo para refinar sua busca.
          </p>
        </div>

        {carregandoIBGE && (
          <p className="mb-4 text-slate-500">
            Carregando dados do IBGE...
          </p>
        )}

        {erroIBGE && (
          <p className="mb-4 rounded-2xl bg-red-50 p-4 font-bold text-red-600">
            {erroIBGE}
          </p>
        )}

        <div className="grid gap-4 md:grid-cols-3">
          <label className="block">
            <span className="mb-2 block font-black text-[#485C11]">
              Região
            </span>

            <select
              value={regiaoSelecionada}
              onChange={(e) => {
                setRegiaoSelecionada(e.target.value)
                setEstadoSelecionado('')
                setCidadeSelecionada('')
              }}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-bold text-slate-600 outline-none transition focus:border-[#549E9C]"
            >
              <option value="">Todas as regiões</option>

              {regioes.map((regiao) => (
                <option key={regiao.id} value={regiao.nome}>
                  {regiao.nome}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block font-black text-[#485C11]">
              Estado
            </span>

            <select
              value={estadoSelecionado}
              onChange={(e) => {
                setEstadoSelecionado(e.target.value)
                setCidadeSelecionada('')
              }}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-bold text-slate-600 outline-none transition focus:border-[#549E9C]"
            >
              <option value="">Todos os estados</option>

              {estadosFiltrados.map((estado) => (
                <option key={estado.id} value={estado.nome}>
                  {estado.nome}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block font-black text-[#485C11]">
              Cidade
            </span>

            <select
              value={cidadeSelecionada}
              onChange={(e) => setCidadeSelecionada(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-bold text-slate-600 outline-none transition focus:border-[#549E9C]"
            >
              <option value="">Todas as cidades</option>

              {cidadesDisponiveis.map((cidade) => (
                <option key={cidade} value={cidade}>
                  {cidade}
                </option>
              ))}
            </select>
          </label>
        </div>

        {(regiaoSelecionada || estadoSelecionado || cidadeSelecionada) && (
          <button
            type="button"
            onClick={() => {
              setRegiaoSelecionada('')
              setEstadoSelecionado('')
              setCidadeSelecionada('')
            }}
            className="mt-5 rounded-full bg-[#DFECC6] px-5 py-3 font-black text-[#485C11] transition hover:bg-[#cfe4aa]"
          >
            Limpar filtros
          </button>
        )}
      </section>

      <section>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-black text-[#485C11]">
            {destinosFiltrados.length === 1
              ? '1 destino encontrado'
              : `${destinosFiltrados.length} destinos encontrados`}
          </h2>
        </div>

        {destinosFiltrados.length === 0 ? (
          <div className="rounded-[2rem] border border-slate-100 bg-white p-10 text-center shadow-sm">
            <h3 className="text-2xl font-black text-[#485C11]">
              Nenhum destino encontrado
            </h3>

            <p className="mt-3 text-slate-500">
              Tente limpar os filtros ou escolher outra combinação.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {destinosFiltrados.map((destino) => (
              <CardDestino key={destino.id} destino={destino} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Explorar