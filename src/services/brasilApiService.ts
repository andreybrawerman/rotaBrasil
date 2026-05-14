export interface FeriadoNacional {
  date: string;
  name: string;
  type: string;
}

export async function getFeriadosNacionais(ano: number): Promise<FeriadoNacional[]> {
  const response = await fetch(
    `https://brasilapi.com.br/api/feriados/v1/${ano}`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar feriados nacionais");
  }

  return response.json();
}