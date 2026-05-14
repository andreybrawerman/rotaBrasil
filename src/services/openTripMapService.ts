const OPENTRIPMAP_KEY = import.meta.env.VITE_OPENTRIPMAP_KEY

export interface AtracaoProxima {
  xid: string
  name: string
  kinds?: string
  dist?: number
  point?: {
    lat: number
    lon: number
  }
}

export async function getAtracoesProximas(
  latitude: number,
  longitude: number
): Promise<AtracaoProxima[]> {
  if (!OPENTRIPMAP_KEY) {
    throw new Error('Chave da OpenTripMap não encontrada no .env')
  }

  const url =
    `https://api.opentripmap.com/0.1/en/places/radius` +
    `?radius=15000` +
    `&lon=${longitude}` +
    `&lat=${latitude}` +
    `&rate=2` +
    `&limit=8` +
    `&format=json` +
    `&apikey=${OPENTRIPMAP_KEY}`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Erro ao buscar atrações próximas')
  }

  const data = await response.json()

  return data.filter((atracao: AtracaoProxima) => atracao.name)
}