export interface RegiaoIBGE {
  id: number
  sigla: string
  nome: string
}

export interface EstadoIBGE {
  id: number
  sigla: string
  nome: string
  regiao: RegiaoIBGE
}

export interface MunicipioIBGE {
  id: number
  nome: string
}

const IBGE_BASE_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades'

export async function getRegioes(): Promise<RegiaoIBGE[]> {
  const response = await fetch(`${IBGE_BASE_URL}/regioes`)

  if (!response.ok) {
    throw new Error('Erro ao buscar regiões do IBGE')
  }

  return response.json()
}

export async function getEstados(): Promise<EstadoIBGE[]> {
  const response = await fetch(`${IBGE_BASE_URL}/estados?orderBy=nome`)

  if (!response.ok) {
    throw new Error('Erro ao buscar estados do IBGE')
  }

  return response.json()
}

export async function getMunicipiosPorEstado(
  uf: string
): Promise<MunicipioIBGE[]> {
  const response = await fetch(
    `${IBGE_BASE_URL}/estados/${uf}/municipios?orderBy=nome`
  )

  if (!response.ok) {
    throw new Error('Erro ao buscar municípios do IBGE')
  }

  return response.json()
}