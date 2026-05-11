export interface Destino {
  id: string
  nome: string
  estado: string
  cidade?: string
  regiao?: string
  bioma: string
  descricao: string
  sobre?: string
  imagem: string
  galeria?: string[]
  tags: string[]
  melhorEpoca?: string
  duracaoRecomendada?: string
  tipoViagem?: string
  nivelAcesso?: string
  publicoIdeal?: string
  comoChegar?: string
  destaques?: string[]
  dicas?: string[]
  localizacao?: boolean
}

export const destinos: Destino[] = [
  {
    id: 'lencois',
    nome: 'Lençóis Maranhenses',
    estado: 'Maranhão',
    bioma: 'Litoral',
    descricao: 'Dunas de areia branca pontilhadas por lagoas de água doce cristalina.',
    imagem: 'https://d281e75zdqqlon.cloudfront.net/wp-content/uploads/2025/08/d801f0af-cf69-462c-8e33-0ecc5376bfb7.jpg-94.jpg',
    tags: ['Caminhada', 'Piscinas Naturais'],
  },
  {
    id: 'cataratas',
    nome: 'Cataratas do Iguaçu',
    estado: 'Paraná',
    bioma: 'Mata Atlântica',
    descricao: 'O maior conjunto de quedas de água do mundo, cercado por floresta tropical.',
    imagem: 'https://anvtravel.com.br/wp-content/uploads/2025/06/cataratas-do-iguacu-8.jpg.webp',
    tags: ['Trilha', 'Barco', 'Natureza'],
  },
  {
    id: 'chapada',
    nome: 'Chapada Diamantina',
    estado: 'Bahia',
    bioma: 'Caatinga',
    descricao: 'Montanhas imponentes, cavernas misteriosas e cachoeiras de tirar o fôlego.',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Parque_Nacional_Chapada_Diamantina_Rafael_Cristo_Watanabe_04.jpg',
    tags: ['Ecoturismo', 'Aventura'],
  },
  {
    id: 'noronha',
    nome: 'Fernando de Noronha',
    estado: 'Pernambuco',
    bioma: 'Litoral',
    descricao: 'Arquipélago vulcânico famoso por suas praias paradisíacas, águas cristalinas e vida marinha rica.',
    imagem: 'https://www.rodamundo.tur.br/blog/wp-content/uploads/2019/03/Ba%C3%ADa-dos-Porcos-em-Fernando-de-Noronha-rodamundo-1.jpg',
    tags: ['Mergulho', 'Natureza Preservada'],
  },
  {
    id: 'ilhadomel',
    nome: 'Ilha do Mel',
    estado: 'Paraná',
    bioma: 'Mata Atlântica',
    descricao: 'Um refúgio ecológico sem carros, com praias rústicas, trilhas e o histórico Farol das Conchas.',
    imagem: 'https://blog.123milhas.com/wp-content/uploads/2021/12/IMAGEM-01-COMO-CHEGAR-FAROL-TEM-QUE-IR-ILHA-DO-MEL-1024-X-650-123MILHAS.jpg',
    tags: ['Praia', 'Caminhada'],
  },
  {
    id: 'buracodopadre',
    nome: 'Buraco do Padre',
    estado: 'Paraná',
    bioma: 'Campos Gerais',
    descricao: 'Uma furna geológica impressionante com uma cachoeira de 30 metros desaguando em seu interior.',
    imagem: 'https://www.viagenspossiveis.com.br/wp-content/uploads/2019/01/Buraco-do-Padre-em-Ponta-Grossa-PR-1.jpg',
    tags: ['Cachoeira', 'Geoturismo'],
  },
]