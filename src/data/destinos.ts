export interface DestinoType {
  id: string;
  nome: string;
  estado: string;
  cidade: string;
  regiao: string;
  bioma: string;
  descricao: string;
  sobre: string;
  imagem: string;
  galeria: string[];
  tags: string[];
  melhorEpoca: string;
  duracaoRecomendada: string;
  tipoViagem: string;
  nivelAcesso: string;
  publicoIdeal: string;
  comoChegar: string;
  destaques: string[];
  dicas: string[];
  localizacao: {
    latitude: number;
    longitude: number;
  };
}

export const destinos: DestinoType[] = [
  {
    "id": "parque-nacional-da-serra-do-divisor",
    "nome": "Parque Nacional da Serra do Divisor",
    "estado": "Acre",
    "cidade": "Cruzeiro do Sul",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Floresta amazônica, rios e montanhas em uma das áreas mais preservadas do Acre.",
    "sobre": "Parque Nacional da Serra do Divisor é um destino de destaque em Acre, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?parque,nacional,da,serra,do,divisor,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?parque,nacional,da,serra,do,divisor,paisagem",
      "https://source.unsplash.com/1200x800/?cruzeiro,do,sul,brasil",
      "https://source.unsplash.com/1200x800/?acre,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Ecoturismo",
      "Trilha",
      "Rio"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Cruzeiro do Sul, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Parque Nacional da Serra do Divisor",
      "Contato com a cultura e paisagens de Acre",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -7.45,
      "longitude": -73.67
    }
  },
  {
    "id": "rio-branco",
    "nome": "Rio Branco",
    "estado": "Acre",
    "cidade": "Rio Branco",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Capital acreana com passarelas, mercados, memória histórica e contato com a cultura amazônica.",
    "sobre": "Rio Branco é um destino de destaque em Acre, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?rio,branco,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?rio,branco,paisagem",
      "https://source.unsplash.com/1200x800/?rio,branco,brasil",
      "https://source.unsplash.com/1200x800/?acre,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cultura",
      "História",
      "Urbano"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Rio Branco, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Rio Branco",
      "Contato com a cultura e paisagens de Acre",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -9.97499,
      "longitude": -67.8243
    }
  },
  {
    "id": "xapuri",
    "nome": "Xapuri",
    "estado": "Acre",
    "cidade": "Xapuri",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Cidade ligada à história de Chico Mendes, seringais, comunidades tradicionais e turismo de base comunitária.",
    "sobre": "Xapuri é um destino de destaque em Acre, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?xapuri,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?xapuri,paisagem",
      "https://source.unsplash.com/1200x800/?xapuri,brasil",
      "https://source.unsplash.com/1200x800/?acre,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "História",
      "Cultura",
      "Natureza"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Xapuri, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Xapuri",
      "Contato com a cultura e paisagens de Acre",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -10.6516,
      "longitude": -68.5044
    }
  },
  {
    "id": "maragogi",
    "nome": "Maragogi",
    "estado": "Alagoas",
    "cidade": "Maragogi",
    "regiao": "Nordeste",
    "bioma": "Litoral",
    "descricao": "Praias de águas claras e piscinas naturais conhecidas como galés no litoral norte alagoano.",
    "sobre": "Maragogi é um destino de destaque em Alagoas, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?maragogi,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?maragogi,paisagem",
      "https://source.unsplash.com/1200x800/?maragogi,brasil",
      "https://source.unsplash.com/1200x800/?alagoas,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Piscinas Naturais",
      "Mergulho"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Maragogi, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Maragogi",
      "Contato com a cultura e paisagens de Alagoas",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -9.0122,
      "longitude": -35.2229
    }
  },
  {
    "id": "maceio",
    "nome": "Maceió",
    "estado": "Alagoas",
    "cidade": "Maceió",
    "regiao": "Nordeste",
    "bioma": "Litoral",
    "descricao": "Capital com orla urbana, jangadas, feirinhas, praias famosas e boa estrutura turística.",
    "sobre": "Maceió é um destino de destaque em Alagoas, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?maceio,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?maceio,paisagem",
      "https://source.unsplash.com/1200x800/?maceio,brasil",
      "https://source.unsplash.com/1200x800/?alagoas,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Gastronomia",
      "Urbano"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Maceió, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Maceió",
      "Contato com a cultura e paisagens de Alagoas",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -9.6498,
      "longitude": -35.7089
    }
  },
  {
    "id": "piranhas-e-canions-do-xingo",
    "nome": "Piranhas e Cânions do Xingó",
    "estado": "Alagoas",
    "cidade": "Piranhas",
    "regiao": "Nordeste",
    "bioma": "Litoral",
    "descricao": "Cidade histórica às margens do Rio São Francisco, próxima aos cânions navegáveis do Xingó.",
    "sobre": "Piranhas e Cânions do Xingó é um destino de destaque em Alagoas, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?piranhas,e,canions,do,xingo,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?piranhas,e,canions,do,xingo,paisagem",
      "https://source.unsplash.com/1200x800/?piranhas,brasil",
      "https://source.unsplash.com/1200x800/?alagoas,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Rio",
      "História",
      "Passeio de barco"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Piranhas, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Piranhas e Cânions do Xingó",
      "Contato com a cultura e paisagens de Alagoas",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -9.6245,
      "longitude": -37.7579
    }
  },
  {
    "id": "macapa-e-marco-zero",
    "nome": "Macapá e Marco Zero",
    "estado": "Amapá",
    "cidade": "Macapá",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Capital cortada pela Linha do Equador, com fortaleza histórica, orla e cultura amazônica.",
    "sobre": "Macapá e Marco Zero é um destino de destaque em Amapá, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?macapa,e,marco,zero,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?macapa,e,marco,zero,paisagem",
      "https://source.unsplash.com/1200x800/?macapa,brasil",
      "https://source.unsplash.com/1200x800/?amapa,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "História",
      "Cultura",
      "Urbano"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Macapá, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Macapá e Marco Zero",
      "Contato com a cultura e paisagens de Amapá",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": 0.0349,
      "longitude": -51.0694
    }
  },
  {
    "id": "oiapoque",
    "nome": "Oiapoque",
    "estado": "Amapá",
    "cidade": "Oiapoque",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Destino no extremo norte do Brasil, marcado por fronteira, rios amazônicos e diversidade cultural.",
    "sobre": "Oiapoque é um destino de destaque em Amapá, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?oiapoque,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?oiapoque,paisagem",
      "https://source.unsplash.com/1200x800/?oiapoque,brasil",
      "https://source.unsplash.com/1200x800/?amapa,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Fronteira",
      "Rio",
      "Cultura"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Oiapoque, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Oiapoque",
      "Contato com a cultura e paisagens de Amapá",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": 3.8407,
      "longitude": -51.8331
    }
  },
  {
    "id": "parque-nacional-montanhas-do-tumucumaque",
    "nome": "Parque Nacional Montanhas do Tumucumaque",
    "estado": "Amapá",
    "cidade": "Serra do Navio",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Uma das maiores áreas de floresta tropical protegida do mundo, com turismo de natureza e pesquisa.",
    "sobre": "Parque Nacional Montanhas do Tumucumaque é um destino de destaque em Amapá, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?parque,nacional,montanhas,do,tumucumaque,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?parque,nacional,montanhas,do,tumucumaque,paisagem",
      "https://source.unsplash.com/1200x800/?serra,do,navio,brasil",
      "https://source.unsplash.com/1200x800/?amapa,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Ecoturismo",
      "Floresta",
      "Aventura"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Serra do Navio, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Parque Nacional Montanhas do Tumucumaque",
      "Contato com a cultura e paisagens de Amapá",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": 0.8711,
      "longitude": -52.0016
    }
  },
  {
    "id": "manaus",
    "nome": "Manaus",
    "estado": "Amazonas",
    "cidade": "Manaus",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Capital amazônica com Teatro Amazonas, encontro das águas, mercados e passeios pela floresta.",
    "sobre": "Manaus é um destino de destaque em Amazonas, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?manaus,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?manaus,paisagem",
      "https://source.unsplash.com/1200x800/?manaus,brasil",
      "https://source.unsplash.com/1200x800/?amazonas,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cultura",
      "Floresta",
      "Rio"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Manaus, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Manaus",
      "Contato com a cultura e paisagens de Amazonas",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -3.119,
      "longitude": -60.0217
    }
  },
  {
    "id": "presidente-figueiredo",
    "nome": "Presidente Figueiredo",
    "estado": "Amazonas",
    "cidade": "Presidente Figueiredo",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Destino conhecido por cachoeiras, grutas, corredeiras e trilhas próximas de Manaus.",
    "sobre": "Presidente Figueiredo é um destino de destaque em Amazonas, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?presidente,figueiredo,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?presidente,figueiredo,paisagem",
      "https://source.unsplash.com/1200x800/?presidente,figueiredo,brasil",
      "https://source.unsplash.com/1200x800/?amazonas,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cachoeira",
      "Trilha",
      "Natureza"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Presidente Figueiredo, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Presidente Figueiredo",
      "Contato com a cultura e paisagens de Amazonas",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -2.0298,
      "longitude": -60.0234
    }
  },
  {
    "id": "anavilhanas",
    "nome": "Anavilhanas",
    "estado": "Amazonas",
    "cidade": "Novo Airão",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Arquipélago fluvial no Rio Negro, com ilhas, igapós, botos e experiências amazônicas.",
    "sobre": "Anavilhanas é um destino de destaque em Amazonas, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?anavilhanas,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?anavilhanas,paisagem",
      "https://source.unsplash.com/1200x800/?novo,airao,brasil",
      "https://source.unsplash.com/1200x800/?amazonas,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Rio",
      "Ecoturismo",
      "Fauna"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Novo Airão, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Anavilhanas",
      "Contato com a cultura e paisagens de Amazonas",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -2.6208,
      "longitude": -60.9436
    }
  },
  {
    "id": "chapada-diamantina",
    "nome": "Chapada Diamantina",
    "estado": "Bahia",
    "cidade": "Lençóis",
    "regiao": "Nordeste",
    "bioma": "Mata Atlântica e Caatinga",
    "descricao": "Região de cachoeiras, grutas, trilhas, poços cristalinos e montanhas no interior da Bahia.",
    "sobre": "Chapada Diamantina é um destino de destaque em Bahia, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?chapada,diamantina,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?chapada,diamantina,paisagem",
      "https://source.unsplash.com/1200x800/?lencois,brasil",
      "https://source.unsplash.com/1200x800/?bahia,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Trilha",
      "Cachoeira",
      "Ecoturismo"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Lençóis, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Chapada Diamantina",
      "Contato com a cultura e paisagens de Bahia",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -12.5614,
      "longitude": -41.3928
    }
  },
  {
    "id": "salvador",
    "nome": "Salvador",
    "estado": "Bahia",
    "cidade": "Salvador",
    "regiao": "Nordeste",
    "bioma": "Mata Atlântica e Caatinga",
    "descricao": "Capital histórica com Pelourinho, praias, música, culinária baiana e forte herança afro-brasileira.",
    "sobre": "Salvador é um destino de destaque em Bahia, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?salvador,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?salvador,paisagem",
      "https://source.unsplash.com/1200x800/?salvador,brasil",
      "https://source.unsplash.com/1200x800/?bahia,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "História",
      "Cultura",
      "Praia"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Salvador, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Salvador",
      "Contato com a cultura e paisagens de Bahia",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -12.9777,
      "longitude": -38.5016
    }
  },
  {
    "id": "porto-seguro-e-arraial-d-ajuda",
    "nome": "Porto Seguro e Arraial d'Ajuda",
    "estado": "Bahia",
    "cidade": "Porto Seguro",
    "regiao": "Nordeste",
    "bioma": "Mata Atlântica e Caatinga",
    "descricao": "Destino litorâneo com praias, falésias, centro histórico e vida noturna no sul da Bahia.",
    "sobre": "Porto Seguro e Arraial d'Ajuda é um destino de destaque em Bahia, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?porto,seguro,e,arraial,d,ajuda,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?porto,seguro,e,arraial,d,ajuda,paisagem",
      "https://source.unsplash.com/1200x800/?porto,seguro,brasil",
      "https://source.unsplash.com/1200x800/?bahia,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "História",
      "Lazer"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Porto Seguro, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Porto Seguro e Arraial d'Ajuda",
      "Contato com a cultura e paisagens de Bahia",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -16.4496,
      "longitude": -39.0647
    }
  },
  {
    "id": "jericoacoara",
    "nome": "Jericoacoara",
    "estado": "Ceará",
    "cidade": "Jijoca de Jericoacoara",
    "regiao": "Nordeste",
    "bioma": "Litoral e Caatinga",
    "descricao": "Vila cercada por dunas, lagoas, praias e pôr do sol famoso no litoral oeste do Ceará.",
    "sobre": "Jericoacoara é um destino de destaque em Ceará, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?jericoacoara,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?jericoacoara,paisagem",
      "https://source.unsplash.com/1200x800/?jijoca,de,jericoacoara,brasil",
      "https://source.unsplash.com/1200x800/?ceara,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Dunas",
      "Kitesurf"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Jijoca de Jericoacoara, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Jericoacoara",
      "Contato com a cultura e paisagens de Ceará",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -2.7956,
      "longitude": -40.5142
    }
  },
  {
    "id": "fortaleza",
    "nome": "Fortaleza",
    "estado": "Ceará",
    "cidade": "Fortaleza",
    "regiao": "Nordeste",
    "bioma": "Litoral e Caatinga",
    "descricao": "Capital com orla movimentada, praias urbanas, feiras, gastronomia e acesso a destinos próximos.",
    "sobre": "Fortaleza é um destino de destaque em Ceará, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?fortaleza,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?fortaleza,paisagem",
      "https://source.unsplash.com/1200x800/?fortaleza,brasil",
      "https://source.unsplash.com/1200x800/?ceara,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Gastronomia",
      "Urbano"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Fortaleza, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Fortaleza",
      "Contato com a cultura e paisagens de Ceará",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -3.7319,
      "longitude": -38.5267
    }
  },
  {
    "id": "canoa-quebrada",
    "nome": "Canoa Quebrada",
    "estado": "Ceará",
    "cidade": "Aracati",
    "regiao": "Nordeste",
    "bioma": "Litoral e Caatinga",
    "descricao": "Praia com falésias coloridas, jangadas, dunas e clima descontraído no litoral leste cearense.",
    "sobre": "Canoa Quebrada é um destino de destaque em Ceará, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?canoa,quebrada,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?canoa,quebrada,paisagem",
      "https://source.unsplash.com/1200x800/?aracati,brasil",
      "https://source.unsplash.com/1200x800/?ceara,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Falésias",
      "Passeio de buggy"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Aracati, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Canoa Quebrada",
      "Contato com a cultura e paisagens de Ceará",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -4.5252,
      "longitude": -37.7048
    }
  },
  {
    "id": "brasilia",
    "nome": "Brasília",
    "estado": "Distrito Federal",
    "cidade": "Brasília",
    "regiao": "Centro-Oeste",
    "bioma": "Cerrado",
    "descricao": "Capital planejada com arquitetura modernista, monumentos cívicos, museus e amplo patrimônio cultural.",
    "sobre": "Brasília é um destino de destaque em Distrito Federal, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Centro-Oeste.",
    "imagem": "https://source.unsplash.com/1200x800/?brasilia,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?brasilia,paisagem",
      "https://source.unsplash.com/1200x800/?brasilia,brasil",
      "https://source.unsplash.com/1200x800/?distrito,federal,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Arquitetura",
      "História",
      "Urbano"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Brasília, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Brasília",
      "Contato com a cultura e paisagens de Distrito Federal",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -15.7939,
      "longitude": -47.8828
    }
  },
  {
    "id": "parque-nacional-de-brasilia",
    "nome": "Parque Nacional de Brasília",
    "estado": "Distrito Federal",
    "cidade": "Brasília",
    "regiao": "Centro-Oeste",
    "bioma": "Cerrado",
    "descricao": "Área de cerrado preservado com piscinas naturais, trilhas e contato com fauna e flora locais.",
    "sobre": "Parque Nacional de Brasília é um destino de destaque em Distrito Federal, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Centro-Oeste.",
    "imagem": "https://source.unsplash.com/1200x800/?parque,nacional,de,brasilia,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?parque,nacional,de,brasilia,paisagem",
      "https://source.unsplash.com/1200x800/?brasilia,brasil",
      "https://source.unsplash.com/1200x800/?distrito,federal,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cerrado",
      "Trilha",
      "Natureza"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Brasília, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Parque Nacional de Brasília",
      "Contato com a cultura e paisagens de Distrito Federal",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -15.735,
      "longitude": -47.93
    }
  },
  {
    "id": "ermida-dom-bosco",
    "nome": "Ermida Dom Bosco",
    "estado": "Distrito Federal",
    "cidade": "Brasília",
    "regiao": "Centro-Oeste",
    "bioma": "Cerrado",
    "descricao": "Área às margens do Lago Paranoá com mirante, capela, pôr do sol e espaço ao ar livre.",
    "sobre": "Ermida Dom Bosco é um destino de destaque em Distrito Federal, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Centro-Oeste.",
    "imagem": "https://source.unsplash.com/1200x800/?ermida,dom,bosco,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?ermida,dom,bosco,paisagem",
      "https://source.unsplash.com/1200x800/?brasilia,brasil",
      "https://source.unsplash.com/1200x800/?distrito,federal,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Mirante",
      "Lago",
      "Pôr do sol"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Brasília, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Ermida Dom Bosco",
      "Contato com a cultura e paisagens de Distrito Federal",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -15.8117,
      "longitude": -47.8172
    }
  },
  {
    "id": "vitoria",
    "nome": "Vitória",
    "estado": "Espírito Santo",
    "cidade": "Vitória",
    "regiao": "Sudeste",
    "bioma": "Mata Atlântica e Litoral",
    "descricao": "Capital insular com praias, ilhas, parques, convento histórico e culinária capixaba.",
    "sobre": "Vitória é um destino de destaque em Espírito Santo, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sudeste.",
    "imagem": "https://source.unsplash.com/1200x800/?vitoria,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?vitoria,paisagem",
      "https://source.unsplash.com/1200x800/?vitoria,brasil",
      "https://source.unsplash.com/1200x800/?espirito,santo,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Cultura",
      "Gastronomia"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Vitória, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Vitória",
      "Contato com a cultura e paisagens de Espírito Santo",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -20.3155,
      "longitude": -40.3128
    }
  },
  {
    "id": "pedra-azul",
    "nome": "Pedra Azul",
    "estado": "Espírito Santo",
    "cidade": "Domingos Martins",
    "regiao": "Sudeste",
    "bioma": "Mata Atlântica e Litoral",
    "descricao": "Região serrana com formações rochosas, trilhas, clima ameno e turismo de montanha.",
    "sobre": "Pedra Azul é um destino de destaque em Espírito Santo, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sudeste.",
    "imagem": "https://source.unsplash.com/1200x800/?pedra,azul,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?pedra,azul,paisagem",
      "https://source.unsplash.com/1200x800/?domingos,martins,brasil",
      "https://source.unsplash.com/1200x800/?espirito,santo,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Montanha",
      "Trilha",
      "Natureza"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Domingos Martins, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Pedra Azul",
      "Contato com a cultura e paisagens de Espírito Santo",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -20.3933,
      "longitude": -41.0275
    }
  },
  {
    "id": "guarapari",
    "nome": "Guarapari",
    "estado": "Espírito Santo",
    "cidade": "Guarapari",
    "regiao": "Sudeste",
    "bioma": "Mata Atlântica e Litoral",
    "descricao": "Destino de praia famoso por enseadas, areia monazítica, mergulho e estrutura turística.",
    "sobre": "Guarapari é um destino de destaque em Espírito Santo, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sudeste.",
    "imagem": "https://source.unsplash.com/1200x800/?guarapari,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?guarapari,paisagem",
      "https://source.unsplash.com/1200x800/?guarapari,brasil",
      "https://source.unsplash.com/1200x800/?espirito,santo,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Mergulho",
      "Família"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes que buscam lazer",
    "comoChegar": "O acesso costuma ser feito pela cidade de Guarapari, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Guarapari",
      "Contato com a cultura e paisagens de Espírito Santo",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -20.6741,
      "longitude": -40.499
    }
  },
  {
    "id": "chapada-dos-veadeiros",
    "nome": "Chapada dos Veadeiros",
    "estado": "Goiás",
    "cidade": "Alto Paraíso de Goiás",
    "regiao": "Centro-Oeste",
    "bioma": "Cerrado",
    "descricao": "Parque e região com cachoeiras, cânions, trilhas e paisagens do cerrado rupestre.",
    "sobre": "Chapada dos Veadeiros é um destino de destaque em Goiás, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Centro-Oeste.",
    "imagem": "https://source.unsplash.com/1200x800/?chapada,dos,veadeiros,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?chapada,dos,veadeiros,paisagem",
      "https://source.unsplash.com/1200x800/?alto,paraiso,de,goias,brasil",
      "https://source.unsplash.com/1200x800/?goias,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cachoeira",
      "Trilha",
      "Cerrado"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Alto Paraíso de Goiás, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Chapada dos Veadeiros",
      "Contato com a cultura e paisagens de Goiás",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -14.1305,
      "longitude": -47.51
    }
  },
  {
    "id": "pirenopolis",
    "nome": "Pirenópolis",
    "estado": "Goiás",
    "cidade": "Pirenópolis",
    "regiao": "Centro-Oeste",
    "bioma": "Cerrado",
    "descricao": "Cidade histórica com casarões coloniais, cachoeiras, festas tradicionais e gastronomia regional.",
    "sobre": "Pirenópolis é um destino de destaque em Goiás, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Centro-Oeste.",
    "imagem": "https://source.unsplash.com/1200x800/?pirenopolis,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?pirenopolis,paisagem",
      "https://source.unsplash.com/1200x800/?pirenopolis,brasil",
      "https://source.unsplash.com/1200x800/?goias,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "História",
      "Cachoeira",
      "Cultura"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Pirenópolis, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Pirenópolis",
      "Contato com a cultura e paisagens de Goiás",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -15.8526,
      "longitude": -48.9592
    }
  },
  {
    "id": "caldas-novas",
    "nome": "Caldas Novas",
    "estado": "Goiás",
    "cidade": "Caldas Novas",
    "regiao": "Centro-Oeste",
    "bioma": "Cerrado",
    "descricao": "Destino conhecido pelas águas termais, parques aquáticos e lazer para famílias.",
    "sobre": "Caldas Novas é um destino de destaque em Goiás, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Centro-Oeste.",
    "imagem": "https://source.unsplash.com/1200x800/?caldas,novas,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?caldas,novas,paisagem",
      "https://source.unsplash.com/1200x800/?caldas,novas,brasil",
      "https://source.unsplash.com/1200x800/?goias,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Águas termais",
      "Família",
      "Lazer"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes que buscam lazer",
    "comoChegar": "O acesso costuma ser feito pela cidade de Caldas Novas, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Caldas Novas",
      "Contato com a cultura e paisagens de Goiás",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -17.7446,
      "longitude": -48.625
    }
  },
  {
    "id": "lencois-maranhenses",
    "nome": "Lençóis Maranhenses",
    "estado": "Maranhão",
    "cidade": "Barreirinhas",
    "regiao": "Nordeste",
    "bioma": "Litoral e Cerrado",
    "descricao": "Dunas de areia branca pontilhadas por lagoas de água doce cristalina.",
    "sobre": "Lençóis Maranhenses é um destino de destaque em Maranhão, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?lencois,maranhenses,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?lencois,maranhenses,paisagem",
      "https://source.unsplash.com/1200x800/?barreirinhas,brasil",
      "https://source.unsplash.com/1200x800/?maranhao,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Caminhada",
      "Piscinas Naturais",
      "Dunas"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Barreirinhas, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Lençóis Maranhenses",
      "Contato com a cultura e paisagens de Maranhão",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -2.4859,
      "longitude": -43.1286
    }
  },
  {
    "id": "sao-luis",
    "nome": "São Luís",
    "estado": "Maranhão",
    "cidade": "São Luís",
    "regiao": "Nordeste",
    "bioma": "Litoral e Cerrado",
    "descricao": "Capital com centro histórico colonial, azulejos portugueses, reggae, cultura popular e culinária regional.",
    "sobre": "São Luís é um destino de destaque em Maranhão, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?sao,luis,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?sao,luis,paisagem",
      "https://source.unsplash.com/1200x800/?sao,luis,brasil",
      "https://source.unsplash.com/1200x800/?maranhao,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "História",
      "Cultura",
      "Gastronomia"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de São Luís, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em São Luís",
      "Contato com a cultura e paisagens de Maranhão",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -2.5307,
      "longitude": -44.3068
    }
  },
  {
    "id": "alcantara",
    "nome": "Alcântara",
    "estado": "Maranhão",
    "cidade": "Alcântara",
    "regiao": "Nordeste",
    "bioma": "Litoral e Cerrado",
    "descricao": "Cidade histórica próxima a São Luís, com ruínas, casarões, festas tradicionais e vista para a baía.",
    "sobre": "Alcântara é um destino de destaque em Maranhão, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?alcantara,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?alcantara,paisagem",
      "https://source.unsplash.com/1200x800/?alcantara,brasil",
      "https://source.unsplash.com/1200x800/?maranhao,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "História",
      "Cultura",
      "Passeio de barco"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Alcântara, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Alcântara",
      "Contato com a cultura e paisagens de Maranhão",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -2.4044,
      "longitude": -44.4147
    }
  },
  {
    "id": "chapada-dos-guimaraes",
    "nome": "Chapada dos Guimarães",
    "estado": "Mato Grosso",
    "cidade": "Chapada dos Guimarães",
    "regiao": "Centro-Oeste",
    "bioma": "Pantanal, Cerrado e Amazônia",
    "descricao": "Destino de cerrado com cachoeiras, paredões, mirantes e trilhas perto de Cuiabá.",
    "sobre": "Chapada dos Guimarães é um destino de destaque em Mato Grosso, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Centro-Oeste.",
    "imagem": "https://source.unsplash.com/1200x800/?chapada,dos,guimaraes,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?chapada,dos,guimaraes,paisagem",
      "https://source.unsplash.com/1200x800/?chapada,dos,guimaraes,brasil",
      "https://source.unsplash.com/1200x800/?mato,grosso,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cachoeira",
      "Mirante",
      "Trilha"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Chapada dos Guimarães, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Chapada dos Guimarães",
      "Contato com a cultura e paisagens de Mato Grosso",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -15.4606,
      "longitude": -55.7496
    }
  },
  {
    "id": "pantanal-norte",
    "nome": "Pantanal Norte",
    "estado": "Mato Grosso",
    "cidade": "Poconé",
    "regiao": "Centro-Oeste",
    "bioma": "Pantanal, Cerrado e Amazônia",
    "descricao": "Região de planícies alagáveis, safáris fotográficos, observação de aves e fauna pantaneira.",
    "sobre": "Pantanal Norte é um destino de destaque em Mato Grosso, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Centro-Oeste.",
    "imagem": "https://source.unsplash.com/1200x800/?pantanal,norte,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?pantanal,norte,paisagem",
      "https://source.unsplash.com/1200x800/?pocone,brasil",
      "https://source.unsplash.com/1200x800/?mato,grosso,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Fauna",
      "Pantanal",
      "Ecoturismo"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Poconé, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Pantanal Norte",
      "Contato com a cultura e paisagens de Mato Grosso",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -16.2567,
      "longitude": -56.6228
    }
  },
  {
    "id": "nobres",
    "nome": "Nobres",
    "estado": "Mato Grosso",
    "cidade": "Nobres",
    "regiao": "Centro-Oeste",
    "bioma": "Pantanal, Cerrado e Amazônia",
    "descricao": "Destino de rios cristalinos, flutuação, cachoeiras e cavernas no interior mato-grossense.",
    "sobre": "Nobres é um destino de destaque em Mato Grosso, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Centro-Oeste.",
    "imagem": "https://source.unsplash.com/1200x800/?nobres,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?nobres,paisagem",
      "https://source.unsplash.com/1200x800/?nobres,brasil",
      "https://source.unsplash.com/1200x800/?mato,grosso,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Flutuação",
      "Rio",
      "Natureza"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Nobres, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Nobres",
      "Contato com a cultura e paisagens de Mato Grosso",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -14.7203,
      "longitude": -56.3284
    }
  },
  {
    "id": "bonito",
    "nome": "Bonito",
    "estado": "Mato Grosso do Sul",
    "cidade": "Bonito",
    "regiao": "Centro-Oeste",
    "bioma": "Pantanal e Cerrado",
    "descricao": "Destino de ecoturismo com rios transparentes, grutas, flutuação e atividades de aventura.",
    "sobre": "Bonito é um destino de destaque em Mato Grosso do Sul, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Centro-Oeste.",
    "imagem": "https://source.unsplash.com/1200x800/?bonito,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?bonito,paisagem",
      "https://source.unsplash.com/1200x800/?bonito,brasil",
      "https://source.unsplash.com/1200x800/?mato,grosso,do,sul,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Flutuação",
      "Ecoturismo",
      "Gruta"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Bonito, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Bonito",
      "Contato com a cultura e paisagens de Mato Grosso do Sul",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -21.1261,
      "longitude": -56.4836
    }
  },
  {
    "id": "pantanal-sul",
    "nome": "Pantanal Sul",
    "estado": "Mato Grosso do Sul",
    "cidade": "Corumbá",
    "regiao": "Centro-Oeste",
    "bioma": "Pantanal e Cerrado",
    "descricao": "Região de fazendas, rios, observação de animais e experiências tradicionais pantaneiras.",
    "sobre": "Pantanal Sul é um destino de destaque em Mato Grosso do Sul, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Centro-Oeste.",
    "imagem": "https://source.unsplash.com/1200x800/?pantanal,sul,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?pantanal,sul,paisagem",
      "https://source.unsplash.com/1200x800/?corumba,brasil",
      "https://source.unsplash.com/1200x800/?mato,grosso,do,sul,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Pantanal",
      "Fauna",
      "Rio"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Corumbá, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Pantanal Sul",
      "Contato com a cultura e paisagens de Mato Grosso do Sul",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -19.0082,
      "longitude": -57.6516
    }
  },
  {
    "id": "bodoquena",
    "nome": "Bodoquena",
    "estado": "Mato Grosso do Sul",
    "cidade": "Bodoquena",
    "regiao": "Centro-Oeste",
    "bioma": "Pantanal e Cerrado",
    "descricao": "Área de cachoeiras, trilhas e rios de águas claras na Serra da Bodoquena.",
    "sobre": "Bodoquena é um destino de destaque em Mato Grosso do Sul, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Centro-Oeste.",
    "imagem": "https://source.unsplash.com/1200x800/?bodoquena,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?bodoquena,paisagem",
      "https://source.unsplash.com/1200x800/?bodoquena,brasil",
      "https://source.unsplash.com/1200x800/?mato,grosso,do,sul,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cachoeira",
      "Trilha",
      "Natureza"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Bodoquena, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Bodoquena",
      "Contato com a cultura e paisagens de Mato Grosso do Sul",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -20.537,
      "longitude": -56.712
    }
  },
  {
    "id": "ouro-preto",
    "nome": "Ouro Preto",
    "estado": "Minas Gerais",
    "cidade": "Ouro Preto",
    "regiao": "Sudeste",
    "bioma": "Cerrado e Mata Atlântica",
    "descricao": "Cidade histórica com igrejas barrocas, ladeiras, museus e forte herança do ciclo do ouro.",
    "sobre": "Ouro Preto é um destino de destaque em Minas Gerais, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sudeste.",
    "imagem": "https://source.unsplash.com/1200x800/?ouro,preto,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?ouro,preto,paisagem",
      "https://source.unsplash.com/1200x800/?ouro,preto,brasil",
      "https://source.unsplash.com/1200x800/?minas,gerais,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "História",
      "Arquitetura",
      "Cultura"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Ouro Preto, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Ouro Preto",
      "Contato com a cultura e paisagens de Minas Gerais",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -20.3856,
      "longitude": -43.5035
    }
  },
  {
    "id": "capitolio",
    "nome": "Capitólio",
    "estado": "Minas Gerais",
    "cidade": "Capitólio",
    "regiao": "Sudeste",
    "bioma": "Cerrado e Mata Atlântica",
    "descricao": "Destino conhecido pelos cânions do Lago de Furnas, mirantes, cachoeiras e passeios de lancha.",
    "sobre": "Capitólio é um destino de destaque em Minas Gerais, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sudeste.",
    "imagem": "https://source.unsplash.com/1200x800/?capitolio,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?capitolio,paisagem",
      "https://source.unsplash.com/1200x800/?capitolio,brasil",
      "https://source.unsplash.com/1200x800/?minas,gerais,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cânions",
      "Lago",
      "Cachoeira"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Capitólio, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Capitólio",
      "Contato com a cultura e paisagens de Minas Gerais",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -20.6153,
      "longitude": -46.0493
    }
  },
  {
    "id": "serra-do-cipo",
    "nome": "Serra do Cipó",
    "estado": "Minas Gerais",
    "cidade": "Santana do Riacho",
    "regiao": "Sudeste",
    "bioma": "Cerrado e Mata Atlântica",
    "descricao": "Região de campos rupestres, cachoeiras, trilhas e biodiversidade na Serra do Espinhaço.",
    "sobre": "Serra do Cipó é um destino de destaque em Minas Gerais, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sudeste.",
    "imagem": "https://source.unsplash.com/1200x800/?serra,do,cipo,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?serra,do,cipo,paisagem",
      "https://source.unsplash.com/1200x800/?santana,do,riacho,brasil",
      "https://source.unsplash.com/1200x800/?minas,gerais,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Trilha",
      "Cachoeira",
      "Natureza"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Santana do Riacho, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Serra do Cipó",
      "Contato com a cultura e paisagens de Minas Gerais",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -19.3387,
      "longitude": -43.6186
    }
  },
  {
    "id": "belem",
    "nome": "Belém",
    "estado": "Pará",
    "cidade": "Belém",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Capital amazônica com mercado Ver-o-Peso, ilhas, culinária paraense e patrimônio histórico.",
    "sobre": "Belém é um destino de destaque em Pará, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?belem,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?belem,paisagem",
      "https://source.unsplash.com/1200x800/?belem,brasil",
      "https://source.unsplash.com/1200x800/?para,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cultura",
      "Gastronomia",
      "Rio"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Belém, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Belém",
      "Contato com a cultura e paisagens de Pará",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -1.4558,
      "longitude": -48.4902
    }
  },
  {
    "id": "alter-do-chao",
    "nome": "Alter do Chão",
    "estado": "Pará",
    "cidade": "Santarém",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Vila às margens do Tapajós conhecida por praias de água doce, floresta e passeios de barco.",
    "sobre": "Alter do Chão é um destino de destaque em Pará, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?alter,do,chao,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?alter,do,chao,paisagem",
      "https://source.unsplash.com/1200x800/?santarem,brasil",
      "https://source.unsplash.com/1200x800/?para,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia de rio",
      "Barco",
      "Natureza"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Santarém, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Alter do Chão",
      "Contato com a cultura e paisagens de Pará",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -2.5066,
      "longitude": -54.9511
    }
  },
  {
    "id": "ilha-do-marajo",
    "nome": "Ilha do Marajó",
    "estado": "Pará",
    "cidade": "Soure",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Maior ilha fluviomarinha do Brasil, com búfalos, praias, campos alagados e cultura marajoara.",
    "sobre": "Ilha do Marajó é um destino de destaque em Pará, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?ilha,do,marajo,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?ilha,do,marajo,paisagem",
      "https://source.unsplash.com/1200x800/?soure,brasil",
      "https://source.unsplash.com/1200x800/?para,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Ilha",
      "Cultura",
      "Fauna"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Soure, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Ilha do Marajó",
      "Contato com a cultura e paisagens de Pará",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -0.7167,
      "longitude": -48.5233
    }
  },
  {
    "id": "joao-pessoa",
    "nome": "João Pessoa",
    "estado": "Paraíba",
    "cidade": "João Pessoa",
    "regiao": "Nordeste",
    "bioma": "Litoral e Caatinga",
    "descricao": "Capital litorânea com praias urbanas, centro histórico, áreas verdes e pôr do sol no Jacaré.",
    "sobre": "João Pessoa é um destino de destaque em Paraíba, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?joao,pessoa,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?joao,pessoa,paisagem",
      "https://source.unsplash.com/1200x800/?joao,pessoa,brasil",
      "https://source.unsplash.com/1200x800/?paraiba,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "História",
      "Pôr do sol"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de João Pessoa, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em João Pessoa",
      "Contato com a cultura e paisagens de Paraíba",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -7.1195,
      "longitude": -34.845
    }
  },
  {
    "id": "praia-de-tambaba",
    "nome": "Praia de Tambaba",
    "estado": "Paraíba",
    "cidade": "Conde",
    "regiao": "Nordeste",
    "bioma": "Litoral e Caatinga",
    "descricao": "Praia cercada por falésias e vegetação, conhecida por natureza preservada e mar marcante.",
    "sobre": "Praia de Tambaba é um destino de destaque em Paraíba, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?praia,de,tambaba,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?praia,de,tambaba,paisagem",
      "https://source.unsplash.com/1200x800/?conde,brasil",
      "https://source.unsplash.com/1200x800/?paraiba,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Falésias",
      "Natureza"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Conde, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Praia de Tambaba",
      "Contato com a cultura e paisagens de Paraíba",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -7.3856,
      "longitude": -34.798
    }
  },
  {
    "id": "cabaceiras-e-lajedo-de-pai-mateus",
    "nome": "Cabaceiras e Lajedo de Pai Mateus",
    "estado": "Paraíba",
    "cidade": "Cabaceiras",
    "regiao": "Nordeste",
    "bioma": "Litoral e Caatinga",
    "descricao": "Região do Cariri paraibano com formações rochosas, paisagem semiárida e locações de cinema.",
    "sobre": "Cabaceiras e Lajedo de Pai Mateus é um destino de destaque em Paraíba, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?cabaceiras,e,lajedo,de,pai,mateus,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?cabaceiras,e,lajedo,de,pai,mateus,paisagem",
      "https://source.unsplash.com/1200x800/?cabaceiras,brasil",
      "https://source.unsplash.com/1200x800/?paraiba,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Geoturismo",
      "Cinema",
      "Caatinga"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Cabaceiras, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Cabaceiras e Lajedo de Pai Mateus",
      "Contato com a cultura e paisagens de Paraíba",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -7.4881,
      "longitude": -36.2869
    }
  },
  {
    "id": "cataratas-do-iguacu",
    "nome": "Cataratas do Iguaçu",
    "estado": "Paraná",
    "cidade": "Foz do Iguaçu",
    "regiao": "Sul",
    "bioma": "Mata Atlântica e Campos Gerais",
    "descricao": "Conjunto monumental de quedas d’água cercado por floresta tropical.",
    "sobre": "Cataratas do Iguaçu é um destino de destaque em Paraná, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sul.",
    "imagem": "https://source.unsplash.com/1200x800/?cataratas,do,iguacu,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?cataratas,do,iguacu,paisagem",
      "https://source.unsplash.com/1200x800/?foz,do,iguacu,brasil",
      "https://source.unsplash.com/1200x800/?parana,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Trilha",
      "Barco",
      "Natureza"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Foz do Iguaçu, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Cataratas do Iguaçu",
      "Contato com a cultura e paisagens de Paraná",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -25.6953,
      "longitude": -54.4367
    }
  },
  {
    "id": "ilha-do-mel",
    "nome": "Ilha do Mel",
    "estado": "Paraná",
    "cidade": "Paranaguá",
    "regiao": "Sul",
    "bioma": "Mata Atlântica e Campos Gerais",
    "descricao": "Refúgio ecológico sem carros, com praias rústicas, trilhas e o Farol das Conchas.",
    "sobre": "Ilha do Mel é um destino de destaque em Paraná, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sul.",
    "imagem": "https://source.unsplash.com/1200x800/?ilha,do,mel,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?ilha,do,mel,paisagem",
      "https://source.unsplash.com/1200x800/?paranagua,brasil",
      "https://source.unsplash.com/1200x800/?parana,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Caminhada",
      "Mata Atlântica"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Paranaguá, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Ilha do Mel",
      "Contato com a cultura e paisagens de Paraná",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -25.5422,
      "longitude": -48.3148
    }
  },
  {
    "id": "buraco-do-padre",
    "nome": "Buraco do Padre",
    "estado": "Paraná",
    "cidade": "Ponta Grossa",
    "regiao": "Sul",
    "bioma": "Mata Atlântica e Campos Gerais",
    "descricao": "Furna geológica com cachoeira em seu interior, trilhas e paisagens dos Campos Gerais.",
    "sobre": "Buraco do Padre é um destino de destaque em Paraná, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sul.",
    "imagem": "https://source.unsplash.com/1200x800/?buraco,do,padre,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?buraco,do,padre,paisagem",
      "https://source.unsplash.com/1200x800/?ponta,grossa,brasil",
      "https://source.unsplash.com/1200x800/?parana,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cachoeira",
      "Geoturismo",
      "Trilha"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Ponta Grossa, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Buraco do Padre",
      "Contato com a cultura e paisagens de Paraná",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -25.2116,
      "longitude": -50.0108
    }
  },
  {
    "id": "fernando-de-noronha",
    "nome": "Fernando de Noronha",
    "estado": "Pernambuco",
    "cidade": "Fernando de Noronha",
    "regiao": "Nordeste",
    "bioma": "Litoral e Caatinga",
    "descricao": "Arquipélago vulcânico com praias preservadas, águas cristalinas e rica vida marinha.",
    "sobre": "Fernando de Noronha é um destino de destaque em Pernambuco, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?fernando,de,noronha,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?fernando,de,noronha,paisagem",
      "https://source.unsplash.com/1200x800/?fernando,de,noronha,brasil",
      "https://source.unsplash.com/1200x800/?pernambuco,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Mergulho",
      "Natureza Preservada",
      "Praia"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Fernando de Noronha, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Fernando de Noronha",
      "Contato com a cultura e paisagens de Pernambuco",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -3.8547,
      "longitude": -32.4233
    }
  },
  {
    "id": "porto-de-galinhas",
    "nome": "Porto de Galinhas",
    "estado": "Pernambuco",
    "cidade": "Ipojuca",
    "regiao": "Nordeste",
    "bioma": "Litoral e Caatinga",
    "descricao": "Praia famosa por piscinas naturais, jangadas, arrecifes e estrutura turística no litoral sul.",
    "sobre": "Porto de Galinhas é um destino de destaque em Pernambuco, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?porto,de,galinhas,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?porto,de,galinhas,paisagem",
      "https://source.unsplash.com/1200x800/?ipojuca,brasil",
      "https://source.unsplash.com/1200x800/?pernambuco,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Piscinas Naturais",
      "Jangada"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Ipojuca, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Porto de Galinhas",
      "Contato com a cultura e paisagens de Pernambuco",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -8.5069,
      "longitude": -35.0006
    }
  },
  {
    "id": "recife-e-olinda",
    "nome": "Recife e Olinda",
    "estado": "Pernambuco",
    "cidade": "Recife",
    "regiao": "Nordeste",
    "bioma": "Litoral e Caatinga",
    "descricao": "Conjunto urbano-cultural com centro histórico, carnaval, pontes, museus, igrejas e praias próximas.",
    "sobre": "Recife e Olinda é um destino de destaque em Pernambuco, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?recife,e,olinda,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?recife,e,olinda,paisagem",
      "https://source.unsplash.com/1200x800/?recife,brasil",
      "https://source.unsplash.com/1200x800/?pernambuco,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "História",
      "Cultura",
      "Urbano"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Recife, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Recife e Olinda",
      "Contato com a cultura e paisagens de Pernambuco",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -8.0476,
      "longitude": -34.877
    }
  },
  {
    "id": "serra-da-capivara",
    "nome": "Serra da Capivara",
    "estado": "Piauí",
    "cidade": "São Raimundo Nonato",
    "regiao": "Nordeste",
    "bioma": "Caatinga e Litoral",
    "descricao": "Parque nacional com sítios arqueológicos, pinturas rupestres e paisagens do semiárido.",
    "sobre": "Serra da Capivara é um destino de destaque em Piauí, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?serra,da,capivara,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?serra,da,capivara,paisagem",
      "https://source.unsplash.com/1200x800/?sao,raimundo,nonato,brasil",
      "https://source.unsplash.com/1200x800/?piaui,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Arqueologia",
      "História",
      "Trilha"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de São Raimundo Nonato, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Serra da Capivara",
      "Contato com a cultura e paisagens de Piauí",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -8.8333,
      "longitude": -42.55
    }
  },
  {
    "id": "delta-do-parnaiba",
    "nome": "Delta do Parnaíba",
    "estado": "Piauí",
    "cidade": "Parnaíba",
    "regiao": "Nordeste",
    "bioma": "Caatinga e Litoral",
    "descricao": "Delta em mar aberto com ilhas, manguezais, dunas, revoada dos guarás e passeios de barco.",
    "sobre": "Delta do Parnaíba é um destino de destaque em Piauí, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?delta,do,parnaiba,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?delta,do,parnaiba,paisagem",
      "https://source.unsplash.com/1200x800/?parnaiba,brasil",
      "https://source.unsplash.com/1200x800/?piaui,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Delta",
      "Barco",
      "Fauna"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Parnaíba, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Delta do Parnaíba",
      "Contato com a cultura e paisagens de Piauí",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -2.9055,
      "longitude": -41.7754
    }
  },
  {
    "id": "teresina",
    "nome": "Teresina",
    "estado": "Piauí",
    "cidade": "Teresina",
    "regiao": "Nordeste",
    "bioma": "Caatinga e Litoral",
    "descricao": "Capital às margens dos rios Parnaíba e Poti, com parques, artesanato e gastronomia regional.",
    "sobre": "Teresina é um destino de destaque em Piauí, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?teresina,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?teresina,paisagem",
      "https://source.unsplash.com/1200x800/?teresina,brasil",
      "https://source.unsplash.com/1200x800/?piaui,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cultura",
      "Gastronomia",
      "Urbano"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Teresina, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Teresina",
      "Contato com a cultura e paisagens de Piauí",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -5.0892,
      "longitude": -42.8019
    }
  },
  {
    "id": "rio-de-janeiro",
    "nome": "Rio de Janeiro",
    "estado": "Rio de Janeiro",
    "cidade": "Rio de Janeiro",
    "regiao": "Sudeste",
    "bioma": "Mata Atlântica e Litoral",
    "descricao": "Cidade com praias icônicas, Cristo Redentor, Pão de Açúcar, trilhas e vida cultural intensa.",
    "sobre": "Rio de Janeiro é um destino de destaque em Rio de Janeiro, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sudeste.",
    "imagem": "https://source.unsplash.com/1200x800/?rio,de,janeiro,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?rio,de,janeiro,paisagem",
      "https://source.unsplash.com/1200x800/?rio,de,janeiro,brasil",
      "https://source.unsplash.com/1200x800/?rio,de,janeiro,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Mirante",
      "Cultura"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Rio de Janeiro, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Rio de Janeiro",
      "Contato com a cultura e paisagens de Rio de Janeiro",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -22.9068,
      "longitude": -43.1729
    }
  },
  {
    "id": "paraty",
    "nome": "Paraty",
    "estado": "Rio de Janeiro",
    "cidade": "Paraty",
    "regiao": "Sudeste",
    "bioma": "Mata Atlântica e Litoral",
    "descricao": "Cidade histórica colonial entre montanhas e mar, com ilhas, cachoeiras e centro preservado.",
    "sobre": "Paraty é um destino de destaque em Rio de Janeiro, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sudeste.",
    "imagem": "https://source.unsplash.com/1200x800/?paraty,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?paraty,paisagem",
      "https://source.unsplash.com/1200x800/?paraty,brasil",
      "https://source.unsplash.com/1200x800/?rio,de,janeiro,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "História",
      "Praia",
      "Cachoeira"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Paraty, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Paraty",
      "Contato com a cultura e paisagens de Rio de Janeiro",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -23.2178,
      "longitude": -44.7131
    }
  },
  {
    "id": "buzios",
    "nome": "Búzios",
    "estado": "Rio de Janeiro",
    "cidade": "Armação dos Búzios",
    "regiao": "Sudeste",
    "bioma": "Mata Atlântica e Litoral",
    "descricao": "Balneário com diversas praias, orla charmosa, passeios de barco e gastronomia.",
    "sobre": "Búzios é um destino de destaque em Rio de Janeiro, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sudeste.",
    "imagem": "https://source.unsplash.com/1200x800/?buzios,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?buzios,paisagem",
      "https://source.unsplash.com/1200x800/?armacao,dos,buzios,brasil",
      "https://source.unsplash.com/1200x800/?rio,de,janeiro,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Barco",
      "Gastronomia"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Armação dos Búzios, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Búzios",
      "Contato com a cultura e paisagens de Rio de Janeiro",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -22.7556,
      "longitude": -41.8875
    }
  },
  {
    "id": "natal",
    "nome": "Natal",
    "estado": "Rio Grande do Norte",
    "cidade": "Natal",
    "regiao": "Nordeste",
    "bioma": "Litoral e Dunas",
    "descricao": "Capital com dunas, praias urbanas, Forte dos Reis Magos e acesso a passeios pelo litoral.",
    "sobre": "Natal é um destino de destaque em Rio Grande do Norte, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?natal,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?natal,paisagem",
      "https://source.unsplash.com/1200x800/?natal,brasil",
      "https://source.unsplash.com/1200x800/?rio,grande,do,norte,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Dunas",
      "História"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Natal, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Natal",
      "Contato com a cultura e paisagens de Rio Grande do Norte",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -5.7793,
      "longitude": -35.2009
    }
  },
  {
    "id": "pipa",
    "nome": "Pipa",
    "estado": "Rio Grande do Norte",
    "cidade": "Tibau do Sul",
    "regiao": "Nordeste",
    "bioma": "Litoral e Dunas",
    "descricao": "Vila praiana com falésias, baías, golfinhos e vida noturna descontraída.",
    "sobre": "Pipa é um destino de destaque em Rio Grande do Norte, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?pipa,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?pipa,paisagem",
      "https://source.unsplash.com/1200x800/?tibau,do,sul,brasil",
      "https://source.unsplash.com/1200x800/?rio,grande,do,norte,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Falésias",
      "Golfinhos"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Tibau do Sul, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Pipa",
      "Contato com a cultura e paisagens de Rio Grande do Norte",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -6.2289,
      "longitude": -35.0496
    }
  },
  {
    "id": "genipabu",
    "nome": "Genipabu",
    "estado": "Rio Grande do Norte",
    "cidade": "Extremoz",
    "regiao": "Nordeste",
    "bioma": "Litoral e Dunas",
    "descricao": "Área de dunas, lagoas e passeios de buggy próxima a Natal.",
    "sobre": "Genipabu é um destino de destaque em Rio Grande do Norte, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?genipabu,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?genipabu,paisagem",
      "https://source.unsplash.com/1200x800/?extremoz,brasil",
      "https://source.unsplash.com/1200x800/?rio,grande,do,norte,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Dunas",
      "Buggy",
      "Lagoa"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Extremoz, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Genipabu",
      "Contato com a cultura e paisagens de Rio Grande do Norte",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -5.6962,
      "longitude": -35.2139
    }
  },
  {
    "id": "gramado-e-canela",
    "nome": "Gramado e Canela",
    "estado": "Rio Grande do Sul",
    "cidade": "Gramado",
    "regiao": "Sul",
    "bioma": "Pampa e Mata Atlântica",
    "descricao": "Região serrana com arquitetura europeia, parques temáticos, gastronomia e clima de montanha.",
    "sobre": "Gramado e Canela é um destino de destaque em Rio Grande do Sul, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sul.",
    "imagem": "https://source.unsplash.com/1200x800/?gramado,e,canela,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?gramado,e,canela,paisagem",
      "https://source.unsplash.com/1200x800/?gramado,brasil",
      "https://source.unsplash.com/1200x800/?rio,grande,do,sul,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Serra",
      "Gastronomia",
      "Família"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes que buscam lazer",
    "comoChegar": "O acesso costuma ser feito pela cidade de Gramado, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Gramado e Canela",
      "Contato com a cultura e paisagens de Rio Grande do Sul",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -29.3733,
      "longitude": -50.8764
    }
  },
  {
    "id": "porto-alegre",
    "nome": "Porto Alegre",
    "estado": "Rio Grande do Sul",
    "cidade": "Porto Alegre",
    "regiao": "Sul",
    "bioma": "Pampa e Mata Atlântica",
    "descricao": "Capital às margens do Guaíba, com centros culturais, parques, mercados e pôr do sol famoso.",
    "sobre": "Porto Alegre é um destino de destaque em Rio Grande do Sul, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sul.",
    "imagem": "https://source.unsplash.com/1200x800/?porto,alegre,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?porto,alegre,paisagem",
      "https://source.unsplash.com/1200x800/?porto,alegre,brasil",
      "https://source.unsplash.com/1200x800/?rio,grande,do,sul,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cultura",
      "Urbano",
      "Pôr do sol"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Porto Alegre, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Porto Alegre",
      "Contato com a cultura e paisagens de Rio Grande do Sul",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -30.0346,
      "longitude": -51.2177
    }
  },
  {
    "id": "cambara-do-sul",
    "nome": "Cambará do Sul",
    "estado": "Rio Grande do Sul",
    "cidade": "Cambará do Sul",
    "regiao": "Sul",
    "bioma": "Pampa e Mata Atlântica",
    "descricao": "Destino dos cânions Itaimbezinho e Fortaleza, com trilhas e paisagens da Serra Geral.",
    "sobre": "Cambará do Sul é um destino de destaque em Rio Grande do Sul, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sul.",
    "imagem": "https://source.unsplash.com/1200x800/?cambara,do,sul,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?cambara,do,sul,paisagem",
      "https://source.unsplash.com/1200x800/?cambara,do,sul,brasil",
      "https://source.unsplash.com/1200x800/?rio,grande,do,sul,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cânions",
      "Trilha",
      "Natureza"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Cambará do Sul, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Cambará do Sul",
      "Contato com a cultura e paisagens de Rio Grande do Sul",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -29.0475,
      "longitude": -50.1469
    }
  },
  {
    "id": "porto-velho",
    "nome": "Porto Velho",
    "estado": "Rondônia",
    "cidade": "Porto Velho",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Capital às margens do Rio Madeira, com história ferroviária, mercados e cultura amazônica.",
    "sobre": "Porto Velho é um destino de destaque em Rondônia, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?porto,velho,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?porto,velho,paisagem",
      "https://source.unsplash.com/1200x800/?porto,velho,brasil",
      "https://source.unsplash.com/1200x800/?rondonia,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "História",
      "Rio",
      "Cultura"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Porto Velho, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Porto Velho",
      "Contato com a cultura e paisagens de Rondônia",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -8.7619,
      "longitude": -63.9039
    }
  },
  {
    "id": "guajara-mirim",
    "nome": "Guajará-Mirim",
    "estado": "Rondônia",
    "cidade": "Guajará-Mirim",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Cidade fronteiriça com forte presença amazônica, rios, cultura regional e acesso a áreas naturais.",
    "sobre": "Guajará-Mirim é um destino de destaque em Rondônia, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?guajara,mirim,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?guajara,mirim,paisagem",
      "https://source.unsplash.com/1200x800/?guajara,mirim,brasil",
      "https://source.unsplash.com/1200x800/?rondonia,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Fronteira",
      "Rio",
      "Cultura"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Guajará-Mirim, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Guajará-Mirim",
      "Contato com a cultura e paisagens de Rondônia",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -10.7828,
      "longitude": -65.3394
    }
  },
  {
    "id": "ji-parana",
    "nome": "Ji-Paraná",
    "estado": "Rondônia",
    "cidade": "Ji-Paraná",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Cidade cortada pelo rio Machado, com parques, eventos regionais e conexão com o interior rondoniense.",
    "sobre": "Ji-Paraná é um destino de destaque em Rondônia, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?ji,parana,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?ji,parana,paisagem",
      "https://source.unsplash.com/1200x800/?ji,parana,brasil",
      "https://source.unsplash.com/1200x800/?rondonia,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Rio",
      "Cultura",
      "Interior"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Ji-Paraná, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Ji-Paraná",
      "Contato com a cultura e paisagens de Rondônia",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -10.8853,
      "longitude": -61.9517
    }
  },
  {
    "id": "monte-roraima",
    "nome": "Monte Roraima",
    "estado": "Roraima",
    "cidade": "Uiramutã",
    "regiao": "Norte",
    "bioma": "Amazônia e Lavrado",
    "descricao": "Tepui imponente na tríplice fronteira, procurado por trilhas longas e paisagens únicas.",
    "sobre": "Monte Roraima é um destino de destaque em Roraima, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?monte,roraima,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?monte,roraima,paisagem",
      "https://source.unsplash.com/1200x800/?uiramuta,brasil",
      "https://source.unsplash.com/1200x800/?roraima,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Trilha",
      "Montanha",
      "Aventura"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Uiramutã, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Monte Roraima",
      "Contato com a cultura e paisagens de Roraima",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": 5.1439,
      "longitude": -60.7619
    }
  },
  {
    "id": "boa-vista",
    "nome": "Boa Vista",
    "estado": "Roraima",
    "cidade": "Boa Vista",
    "regiao": "Norte",
    "bioma": "Amazônia e Lavrado",
    "descricao": "Capital planejada com praças, parques, orla do Rio Branco e cultura do lavrado.",
    "sobre": "Boa Vista é um destino de destaque em Roraima, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?boa,vista,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?boa,vista,paisagem",
      "https://source.unsplash.com/1200x800/?boa,vista,brasil",
      "https://source.unsplash.com/1200x800/?roraima,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Urbano",
      "Rio",
      "Cultura"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Boa Vista, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Boa Vista",
      "Contato com a cultura e paisagens de Roraima",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": 2.8235,
      "longitude": -60.6758
    }
  },
  {
    "id": "serra-do-tepequem",
    "nome": "Serra do Tepequém",
    "estado": "Roraima",
    "cidade": "Amajari",
    "regiao": "Norte",
    "bioma": "Amazônia e Lavrado",
    "descricao": "Região serrana com cachoeiras, mirantes, trilhas e clima mais ameno no norte do país.",
    "sobre": "Serra do Tepequém é um destino de destaque em Roraima, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?serra,do,tepequem,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?serra,do,tepequem,paisagem",
      "https://source.unsplash.com/1200x800/?amajari,brasil",
      "https://source.unsplash.com/1200x800/?roraima,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cachoeira",
      "Mirante",
      "Trilha"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Amajari, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Serra do Tepequém",
      "Contato com a cultura e paisagens de Roraima",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": 3.7509,
      "longitude": -61.7313
    }
  },
  {
    "id": "florianopolis",
    "nome": "Florianópolis",
    "estado": "Santa Catarina",
    "cidade": "Florianópolis",
    "regiao": "Sul",
    "bioma": "Mata Atlântica e Litoral",
    "descricao": "Capital insular com praias, lagoas, trilhas, dunas e forte cultura açoriana.",
    "sobre": "Florianópolis é um destino de destaque em Santa Catarina, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sul.",
    "imagem": "https://source.unsplash.com/1200x800/?florianopolis,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?florianopolis,paisagem",
      "https://source.unsplash.com/1200x800/?florianopolis,brasil",
      "https://source.unsplash.com/1200x800/?santa,catarina,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Trilha",
      "Cultura"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Florianópolis, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Florianópolis",
      "Contato com a cultura e paisagens de Santa Catarina",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -27.5949,
      "longitude": -48.5482
    }
  },
  {
    "id": "balneario-camboriu",
    "nome": "Balneário Camboriú",
    "estado": "Santa Catarina",
    "cidade": "Balneário Camboriú",
    "regiao": "Sul",
    "bioma": "Mata Atlântica e Litoral",
    "descricao": "Destino urbano de praia com arranha-céus, orla movimentada, parques e mirantes.",
    "sobre": "Balneário Camboriú é um destino de destaque em Santa Catarina, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sul.",
    "imagem": "https://source.unsplash.com/1200x800/?balneario,camboriu,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?balneario,camboriu,paisagem",
      "https://source.unsplash.com/1200x800/?balneario,camboriu,brasil",
      "https://source.unsplash.com/1200x800/?santa,catarina,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Urbano",
      "Mirante"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Balneário Camboriú, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Balneário Camboriú",
      "Contato com a cultura e paisagens de Santa Catarina",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -26.9921,
      "longitude": -48.6357
    }
  },
  {
    "id": "serra-do-rio-do-rastro",
    "nome": "Serra do Rio do Rastro",
    "estado": "Santa Catarina",
    "cidade": "Lauro Müller",
    "regiao": "Sul",
    "bioma": "Mata Atlântica e Litoral",
    "descricao": "Estrada cênica na serra catarinense, com curvas, mirantes e paisagens de altitude.",
    "sobre": "Serra do Rio do Rastro é um destino de destaque em Santa Catarina, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sul.",
    "imagem": "https://source.unsplash.com/1200x800/?serra,do,rio,do,rastro,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?serra,do,rio,do,rastro,paisagem",
      "https://source.unsplash.com/1200x800/?lauro,muller,brasil",
      "https://source.unsplash.com/1200x800/?santa,catarina,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Serra",
      "Mirante",
      "Estrada cênica"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Lauro Müller, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Serra do Rio do Rastro",
      "Contato com a cultura e paisagens de Santa Catarina",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -28.3917,
      "longitude": -49.5481
    }
  },
  {
    "id": "sao-paulo",
    "nome": "São Paulo",
    "estado": "São Paulo",
    "cidade": "São Paulo",
    "regiao": "Sudeste",
    "bioma": "Mata Atlântica, Serra e Litoral",
    "descricao": "Maior metrópole do país, com museus, parques, gastronomia, eventos e diversidade cultural.",
    "sobre": "São Paulo é um destino de destaque em São Paulo, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sudeste.",
    "imagem": "https://source.unsplash.com/1200x800/?sao,paulo,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?sao,paulo,paisagem",
      "https://source.unsplash.com/1200x800/?sao,paulo,brasil",
      "https://source.unsplash.com/1200x800/?sao,paulo,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cultura",
      "Gastronomia",
      "Urbano"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de São Paulo, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em São Paulo",
      "Contato com a cultura e paisagens de São Paulo",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -23.5505,
      "longitude": -46.6333
    }
  },
  {
    "id": "campos-do-jordao",
    "nome": "Campos do Jordão",
    "estado": "São Paulo",
    "cidade": "Campos do Jordão",
    "regiao": "Sudeste",
    "bioma": "Mata Atlântica, Serra e Litoral",
    "descricao": "Cidade serrana com clima frio, arquitetura europeia, parques, trilhas e gastronomia.",
    "sobre": "Campos do Jordão é um destino de destaque em São Paulo, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sudeste.",
    "imagem": "https://source.unsplash.com/1200x800/?campos,do,jordao,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?campos,do,jordao,paisagem",
      "https://source.unsplash.com/1200x800/?campos,do,jordao,brasil",
      "https://source.unsplash.com/1200x800/?sao,paulo,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Serra",
      "Gastronomia",
      "Frio"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Campos do Jordão, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Campos do Jordão",
      "Contato com a cultura e paisagens de São Paulo",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -22.7399,
      "longitude": -45.5914
    }
  },
  {
    "id": "ilhabela",
    "nome": "Ilhabela",
    "estado": "São Paulo",
    "cidade": "Ilhabela",
    "regiao": "Sudeste",
    "bioma": "Mata Atlântica, Serra e Litoral",
    "descricao": "Arquipélago com praias, trilhas, cachoeiras, vela e áreas preservadas de Mata Atlântica.",
    "sobre": "Ilhabela é um destino de destaque em São Paulo, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sudeste.",
    "imagem": "https://source.unsplash.com/1200x800/?ilhabela,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?ilhabela,paisagem",
      "https://source.unsplash.com/1200x800/?ilhabela,brasil",
      "https://source.unsplash.com/1200x800/?sao,paulo,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Trilha",
      "Cachoeira"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Ilhabela, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Ilhabela",
      "Contato com a cultura e paisagens de São Paulo",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -23.7785,
      "longitude": -45.3581
    }
  },
  {
    "id": "aracaju",
    "nome": "Aracaju",
    "estado": "Sergipe",
    "cidade": "Aracaju",
    "regiao": "Nordeste",
    "bioma": "Litoral e Caatinga",
    "descricao": "Capital com orla planejada, praias, mercados, passarelas e culinária sergipana.",
    "sobre": "Aracaju é um destino de destaque em Sergipe, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?aracaju,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?aracaju,paisagem",
      "https://source.unsplash.com/1200x800/?aracaju,brasil",
      "https://source.unsplash.com/1200x800/?sergipe,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Praia",
      "Gastronomia",
      "Urbano"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Praia e lazer",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Aracaju, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Aracaju",
      "Contato com a cultura e paisagens de Sergipe",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -10.9472,
      "longitude": -37.0731
    }
  },
  {
    "id": "canion-do-xingo",
    "nome": "Cânion do Xingó",
    "estado": "Sergipe",
    "cidade": "Canindé de São Francisco",
    "regiao": "Nordeste",
    "bioma": "Litoral e Caatinga",
    "descricao": "Cânion no Rio São Francisco com águas verdes, paredões e passeios de catamarã.",
    "sobre": "Cânion do Xingó é um destino de destaque em Sergipe, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?canion,do,xingo,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?canion,do,xingo,paisagem",
      "https://source.unsplash.com/1200x800/?caninde,de,sao,francisco,brasil",
      "https://source.unsplash.com/1200x800/?sergipe,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cânion",
      "Rio",
      "Barco"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Canindé de São Francisco, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Cânion do Xingó",
      "Contato com a cultura e paisagens de Sergipe",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -9.6626,
      "longitude": -37.7892
    }
  },
  {
    "id": "sao-cristovao",
    "nome": "São Cristóvão",
    "estado": "Sergipe",
    "cidade": "São Cristóvão",
    "regiao": "Nordeste",
    "bioma": "Litoral e Caatinga",
    "descricao": "Cidade histórica com praças, igrejas e patrimônio colonial próximo a Aracaju.",
    "sobre": "São Cristóvão é um destino de destaque em Sergipe, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://source.unsplash.com/1200x800/?sao,cristovao,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?sao,cristovao,paisagem",
      "https://source.unsplash.com/1200x800/?sao,cristovao,brasil",
      "https://source.unsplash.com/1200x800/?sergipe,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "História",
      "Cultura",
      "Arquitetura"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Cultura e história",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de São Cristóvão, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em São Cristóvão",
      "Contato com a cultura e paisagens de Sergipe",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -11.0147,
      "longitude": -37.2064
    }
  },
  {
    "id": "jalapao",
    "nome": "Jalapão",
    "estado": "Tocantins",
    "cidade": "Mateiros",
    "regiao": "Norte",
    "bioma": "Cerrado",
    "descricao": "Região de dunas douradas, fervedouros, cachoeiras, rios e paisagens do cerrado.",
    "sobre": "Jalapão é um destino de destaque em Tocantins, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?jalapao,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?jalapao,paisagem",
      "https://source.unsplash.com/1200x800/?mateiros,brasil",
      "https://source.unsplash.com/1200x800/?tocantins,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Dunas",
      "Fervedouro",
      "Cerrado"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Mateiros, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Jalapão",
      "Contato com a cultura e paisagens de Tocantins",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -10.5413,
      "longitude": -46.4168
    }
  },
  {
    "id": "palmas",
    "nome": "Palmas",
    "estado": "Tocantins",
    "cidade": "Palmas",
    "regiao": "Norte",
    "bioma": "Cerrado",
    "descricao": "Capital planejada às margens do Lago de Palmas, com praias de água doce e acesso ao cerrado.",
    "sobre": "Palmas é um destino de destaque em Tocantins, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?palmas,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?palmas,paisagem",
      "https://source.unsplash.com/1200x800/?palmas,brasil",
      "https://source.unsplash.com/1200x800/?tocantins,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Lago",
      "Urbano",
      "Cerrado"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e viajantes interessados em cultura e natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Palmas, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Palmas",
      "Contato com a cultura e paisagens de Tocantins",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -10.1849,
      "longitude": -48.3336
    }
  },
  {
    "id": "serras-gerais",
    "nome": "Serras Gerais",
    "estado": "Tocantins",
    "cidade": "Dianópolis",
    "regiao": "Norte",
    "bioma": "Cerrado",
    "descricao": "Região com cânions, rios, cachoeiras, mirantes e turismo de natureza no sudeste tocantinense.",
    "sobre": "Serras Gerais é um destino de destaque em Tocantins, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://source.unsplash.com/1200x800/?serras,gerais,brasil,turismo",
    "galeria": [
      "https://source.unsplash.com/1200x800/?serras,gerais,paisagem",
      "https://source.unsplash.com/1200x800/?dianopolis,brasil",
      "https://source.unsplash.com/1200x800/?tocantins,turismo",
      "https://source.unsplash.com/1200x800/?natureza,brasil"
    ],
    "tags": [
      "Cânion",
      "Cachoeira",
      "Trilha"
    ],
    "melhorEpoca": "Durante a estação seca ou fora dos períodos de chuva intensa",
    "duracaoRecomendada": "2 a 4 dias",
    "tipoViagem": "Natureza e aventura",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Aventureiros, casais e amantes de natureza",
    "comoChegar": "O acesso costuma ser feito pela cidade de Dianópolis, usando rodovias, aeroporto regional ou passeios locais conforme a estrutura do destino.",
    "destaques": [
      "Experiências marcantes em Serras Gerais",
      "Contato com a cultura e paisagens de Tocantins",
      "Boas opções para fotos, passeios e roteiros regionais"
    ],
    "dicas": [
      "Confira a previsão do tempo antes de montar o roteiro.",
      "Use roupas e calçados adequados ao tipo de passeio.",
      "Verifique ingressos, guias e regras de visitação com antecedência."
    ],
    "localizacao": {
      "latitude": -11.6246,
      "longitude": -46.8191
    }
  }
];
