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
    "imagem": "https://amazoniareal.com.br/wp-content/uploads/2022/05/Serra-do-Divisor-possui-ecossistemas-raros-%C2%A9-Foto-Acre-ao-VivoDivulgac%CC%A7a%CC%80o.jpeg",
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
    "id": "maragogi",
    "nome": "Maragogi",
    "estado": "Alagoas",
    "cidade": "Maragogi",
    "regiao": "Nordeste",
    "bioma": "Litoral",
    "descricao": "Praias de águas claras e piscinas naturais conhecidas como galés no litoral norte alagoano.",
    "sobre": "Maragogi é um destino de destaque em Alagoas, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/04/maragogi-capa-03.jpg",
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
    "id": "piranhas-e-canions-do-xingo",
    "nome": "Piranhas e Cânions do Xingó",
    "estado": "Alagoas",
    "cidade": "Piranhas",
    "regiao": "Nordeste",
    "bioma": "Litoral",
    "descricao": "Cidade histórica às margens do Rio São Francisco, próxima aos cânions navegáveis do Xingó.",
    "sobre": "Piranhas e Cânions do Xingó é um destino de destaque em Alagoas, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://vidacigana.com/wp-content/uploads/2017/02/passeio-canion-do-xingo-1.jpg",
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
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/d/de/Marco_Zero_do_Equador%2C_Macap%C3%A1_AP_2.jpg",
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
    "id": "parque-nacional-montanhas-do-tumucumaque",
    "nome": "Parque Nacional Montanhas do Tumucumaque",
    "estado": "Amapá",
    "cidade": "Serra do Navio",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Uma das maiores áreas de floresta tropical protegida do mundo, com turismo de natureza e pesquisa.",
    "sobre": "Parque Nacional Montanhas do Tumucumaque é um destino de destaque em Amapá, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://s2-g1.glbimg.com/sglThqWp_QIXbPHDgvrw6Ru4lKU=/0x0:1960x1076/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/Q/t/A0C2cPR6iDdf5TpRMCBA/parna-tumucumaque-foto-acervo-icmbio.jpg",
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
    "id": "presidente-figueiredo",
    "nome": "Presidente Figueiredo",
    "estado": "Amazonas",
    "cidade": "Presidente Figueiredo",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Destino conhecido por cachoeiras, grutas, corredeiras e trilhas próximas de Manaus.",
    "sobre": "Presidente Figueiredo é um destino de destaque em Amazonas, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://imgmd.net/images/v1/guia/2663218/presidente-figueiredo.jpg",
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
    "imagem": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a8/6a/ab/vista-area-do-maior-arquipelag.jpg?w=1200&h=-1&s=1",
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
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/8/84/Parque_Nacional_Chapada_Diamantina_Rafael_Cristo_Watanabe_04.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
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
    "id": "pelourinho",
    "nome": "Pelourinho",
    "estado": "Bahia",
    "cidade": "Salvador",
    "regiao": "Nordeste",
    "bioma": "Mata Atlântica",
    "descricao": "Bairro histórico com ladeiras de paralelepípedos, igrejas barrocas, casarões coloniais coloridos e rica herança afro-brasileira.",
    "sobre": "O Pelourinho é um destino de destaque na Bahia, combinando paisagens arquitetônicas, experiências locais e atrativos culturais que representam o coração histórico e musical da região Nordeste.",
    "imagem": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/43/ac/8f/pelourinho.jpg?w=900&h=500&s=1",
    "tags": [
      "História",
      "Cultura",
      "Arquitetura"
    ],
    "melhorEpoca": "De setembro a março, especialmente durante o verão e Carnaval",
    "duracaoRecomendada": "1 a 2 dias",
    "tipoViagem": "Cultural e histórica",
    "nivelAcesso": "Moderado",
    "publicoIdeal": "Apaixonados por história, cultura, música e gastronomia",
    "comoChegar": "Acessível por transporte público, carro de aplicativo ou caminhando a partir do Elevador Lacerda no centro de Salvador.",
    "destaques": [
      "Visita à Igreja e Convento de São Francisco",
      "Ensaios de blocos afro como o Olodum",
      "Gastronomia típica baiana nos restaurantes locais"
    ],
    "dicas": [
      "Use calçados confortáveis para caminhar nas ladeiras de pedra.",
      "Evite usar objetos de valor muito chamativos.",
      "Aproveite as terças-feiras, conhecidas pela famosa 'Terça do Pelô'."
    ],
    "localizacao": {
      "latitude": -12.9718,
      "longitude": -38.5076
    }
  },
  {
    "id": "elevador-lacerda",
    "nome": "Elevador Lacerda",
    "estado": "Bahia",
    "cidade": "Salvador",
    "regiao": "Nordeste",
    "bioma": "Mata Atlântica",
    "descricao": "O primeiro elevador urbano do mundo, que liga a Cidade Baixa à Cidade Alta de Salvador com uma vista privilegiada da Baía de Todos-os-Santos.",
    "sobre": "O Elevador Lacerda é uma obra histórica em Salvador, servindo como mirante e transporte icônico que integra o charme e a história da região Nordeste.",
    "imagem": "https://imgmd.net/images/v1/guia/1700672/elevador-lacerda.jpg",
    "tags": [
      "Arquitetura",
      "Mirante",
      "Histórico"
    ],
    "melhorEpoca": "Ano todo",
    "duracaoRecomendada": "1 a 2 horas (incluindo o entorno)",
    "tipoViagem": "Cultural e urbana",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Turistas em geral, amantes de história",
    "comoChegar": "Localizado na Praça Tomé de Sousa (Cidade Alta) ou na Praça Cairu (Cidade Baixa), acessível por ônibus e carro.",
    "destaques": [
      "Vista espetacular da Baía de Todos-os-Santos",
      "Rápida transição entre as áreas históricas da cidade",
      "Proximidade do Mercado Modelo e do Pelourinho"
    ],
    "dicas": [
      "Prepare moedas para a tarifa de uso do elevador, que custa centavos.",
      "Tire fotos na praça em frente à saída da Cidade Alta, onde a vista é livre.",
      "Experimente o sorvete tradicional na sorveteria A Cubana logo na saída superior."
    ],
    "localizacao": {
      "latitude": -12.973,
      "longitude": -38.513
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
    "imagem": "https://www.dicasdeviagem.com/wp-content/uploads/2019/04/arraial-dajuda-aerea.jpg",
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
    "imagem": "https://prefiroviajar.com.br/wp-content/uploads/2016/12/jeriquaquara-jericoacoara.jpg",
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
    "id": "beach-park",
    "nome": "Beach Park",
    "estado": "Ceará",
    "cidade": "Aquiraz",
    "regiao": "Nordeste",
    "bioma": "Costeiro / Vegetação de Dunas",
    "descricao": "Enorme complexo turístico e parque aquático localizado à beira-mar, famoso por tobogãs extremos e atrações para a família toda.",
    "sobre": "O Beach Park é um complexo imperdível no Ceará, combinando diversão aquática de alta qualidade, resorts e a bela paisagem litorânea do Nordeste.",
    "imagem": "https://www.melhoresdestinos.com.br/wp-content/uploads/2025/10/Guia-Beach-Park-2026-imagem-aerea-geral-do-parque.jpg",
    "tags": [
      "Parque Aquático",
      "Diversão",
      "Praia"
    ],
    "melhorEpoca": "Ano todo, pois a região tem sol constante, de preferência fora dos meses de chuva (fevereiro a maio)",
    "duracaoRecomendada": "1 a 2 dias",
    "tipoViagem": "Diversão e família",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, crianças, jovens e buscadores de adrenalina",
    "comoChegar": "Localizado em Aquiraz, a cerca de 40 minutos de carro ou transfer de Fortaleza.",
    "destaques": [
      "Tobogã Insano, um dos mais altos e rápidos do mundo",
      "Piscina de ondas Maremoto e Rio Lento",
      "Estrutura na beira da Praia do Porto das Dunas"
    ],
    "dicas": [
      "Alugue um armário para guardar seus pertences com segurança enquanto brinca.",
      "Passe bastante protetor solar à prova d'água.",
      "Confira a possibilidade de pacotes de mais de um dia se estiver hospedado na região."
    ],
    "localizacao": {
      "latitude": -3.8447,
      "longitude": -38.3886
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
    "imagem": "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/ab/43/3d/praia-de-canoa-quebrada.jpg",
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
    "id": "parque-nacional-de-brasilia",
    "nome": "Parque Nacional de Brasília",
    "estado": "Distrito Federal",
    "cidade": "Brasília",
    "regiao": "Centro-Oeste",
    "bioma": "Cerrado",
    "descricao": "Área de cerrado preservado com piscinas naturais, trilhas e contato com fauna e flora locais.",
    "sobre": "Parque Nacional de Brasília é um destino de destaque em Distrito Federal, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Centro-Oeste.",
    "imagem": "https://viagemeturismo.abril.com.br/wp-content/uploads/2024/09/parque-nacional-brasilia-parna.jpeg?quality=70&strip=info&resize=1080,565&crop=1",
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
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/7/71/Ermida_Dom_Bosco_%2814544731885%29.jpg",
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
    "id": "pedra-azul",
    "nome": "Pedra Azul",
    "estado": "Espírito Santo",
    "cidade": "Domingos Martins",
    "regiao": "Sudeste",
    "bioma": "Mata Atlântica e Litoral",
    "descricao": "Região serrana com formações rochosas, trilhas, clima ameno e turismo de montanha.",
    "sobre": "Pedra Azul é um destino de destaque em Espírito Santo, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sudeste.",
    "imagem": "https://www.viagenscinematograficas.com.br/wp-content/uploads/2018/07/Pedra-Azul-Rota-do-Lagarto-ES-shutterstock_1119002801.jpg",
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
    "imagem": "https://www.zapimoveis.com.br/blog/wp-content/uploads/2025/09/melhores-praias-de-guarapari-capa.jpg",
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
    "imagem": "https://aem-all.accor.com/content/dam/all/hubs/americas/latam/generic-images/all-magazine/chapada-dos-veadeiros-guia-de-viagem-2024-1.jpg",
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
    "id": "caldas-novas",
    "nome": "Caldas Novas",
    "estado": "Goiás",
    "cidade": "Caldas Novas",
    "regiao": "Centro-Oeste",
    "bioma": "Cerrado",
    "descricao": "Destino conhecido pelas águas termais, parques aquáticos e lazer para famílias.",
    "sobre": "Caldas Novas é um destino de destaque em Goiás, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Centro-Oeste.",
    "imagem": "https://blog.buson.com.br/wp-content/uploads/2024/12/caldas-novas-quando-ir-o-que-fazer-1024x636.jpg",
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
    "imagem": "https://d281e75zdqqlon.cloudfront.net/wp-content/uploads/2025/08/d801f0af-cf69-462c-8e33-0ecc5376bfb7.jpg-94.jpg",
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
    "id": "chapada-dos-guimaraes",
    "nome": "Chapada dos Guimarães",
    "estado": "Mato Grosso",
    "cidade": "Chapada dos Guimarães",
    "regiao": "Centro-Oeste",
    "bioma": "Pantanal, Cerrado e Amazônia",
    "descricao": "Destino de cerrado com cachoeiras, paredões, mirantes e trilhas perto de Cuiabá.",
    "sobre": "Chapada dos Guimarães é um destino de destaque em Mato Grosso, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Centro-Oeste.",
    "imagem": "https://desviantes.blob.core.windows.net/desviantes/media/adventures/items/d97633e0e43971ac2cefbf1c04a6d267.jpg",
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
    "imagem": "https://www.carpemundi.com.br/wp-content/uploads/2017/08/pantanal-muito-quando-ir.jpg",
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
    "imagem": "https://lalarebelo.com/wp-content/uploads/2019/08/IMG_1252-baixa.jpg",
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
    "imagem": "https://www.umviajante.com.br/wp-content/uploads/2018/04/gruta-lago-azul-bonito-ms-012.jpg",
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
    "imagem": "https://turismo.uai.com.br/wp-content/uploads/2024/04/MS-Pantanal-Corumba-Serra-Amolar-.jpeg",
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
    "imagem": "https://cdn6.campograndenews.com.br/uploads/noticias/2021/09/01/083ef87dd3f08c4d3d93d56e26b379a3807933f9.jpeg",
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
    "id": "capitolio",
    "nome": "Capitólio",
    "estado": "Minas Gerais",
    "cidade": "Capitólio",
    "regiao": "Sudeste",
    "bioma": "Cerrado e Mata Atlântica",
    "descricao": "Destino conhecido pelos cânions do Lago de Furnas, mirantes, cachoeiras e passeios de lancha.",
    "sobre": "Capitólio é um destino de destaque em Minas Gerais, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sudeste.",
    "imagem": "https://irp.cdn-website.com/b4aad4f5/dms3rep/multi/lago-de-furnas-capitolio-minas-gerais.jpg",
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
    "imagem": "https://blog.maxmilhas.com.br/wp-content/uploads/2020/02/shutterstock_1474581683-1024x687.jpg",
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
    "id": "alter-do-chao",
    "nome": "Alter do Chão",
    "estado": "Pará",
    "cidade": "Santarém",
    "regiao": "Norte",
    "bioma": "Amazônia",
    "descricao": "Vila às margens do Tapajós conhecida por praias de água doce, floresta e passeios de barco.",
    "sobre": "Alter do Chão é um destino de destaque em Pará, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://www.carpemundi.com.br/wp-content/uploads/2022/09/alter-dochao.jpg",
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
    "imagem": "https://ogimg.infoglobo.com.br/in/18160691-848-46e/FT1086A/760/2015-864114368-266.jpg_20151105.jpg",
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
    "id": "praia-de-tambaba",
    "nome": "Praia de Tambaba",
    "estado": "Paraíba",
    "cidade": "Conde",
    "regiao": "Nordeste",
    "bioma": "Litoral e Caatinga",
    "descricao": "Praia cercada por falésias e vegetação, conhecida por natureza preservada e mar marcante.",
    "sobre": "Praia de Tambaba é um destino de destaque em Paraíba, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://s2-g1.glbimg.com/0G5hLjDhdp-NdGKOMddr9rqEfxo=/0x0:1080x719/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/l/g/18Fr3YSjux6BWVe7fCgg/tambaba.jpg",
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
    "imagem": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/11/61/19/g0891823-1492904502061.jpg?w=900&h=-1&s=1",
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
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Iguazu_Cataratas2.jpg",
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
    "imagem": "https://blog.123milhas.com/wp-content/uploads/2021/12/IMAGEM-01-COMO-CHEGAR-FAROL-TEM-QUE-IR-ILHA-DO-MEL-1024-X-650-123MILHAS.jpg",
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
    "id": "jardim-botanico-curitiba",
    "nome": "Jardim Botânico de Curitiba",
    "estado": "Paraná",
    "cidade": "Curitiba",
    "regiao": "Sul",
    "bioma": "Mata Atlântica",
    "descricao": "Famoso cartão-postal de Curitiba, com sua icônica estufa de vidro em estilo art nouveau inspirada no Palácio de Cristal de Londres e belos jardins geométricos franceses.",
    "sobre": "O Jardim Botânico é o principal símbolo de Curitiba, combinando paisagismo impecável, preservação da flora nativa e um ambiente de tranquilidade que reflete o planejamento urbano e o foco verde da região Sul do país.",
    "imagem": "https://www.quintoandar.com.br/guias/wp-content/uploads/2023/08/jardim-botanico-de-curitiba.jpeg",
    "tags": [
      "Cartão-postal",
      "Natureza",
      "Arquitetura"
    ],
    "melhorEpoca": "Ano todo, mas a primavera garante os jardins mais vivos e floridos",
    "duracaoRecomendada": "2 a 3 horas",
    "tipoViagem": "Urbana e contemplação",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais, fotógrafos e viajantes em geral",
    "comoChegar": "Acesso fácil pela Linha Turismo de Curitiba, ônibus convencionais, aplicativos de transporte ou carro, localizado no bairro de mesmo nome.",
    "destaques": [
      "A estufa principal com sua coleção de plantas",
      "Caminhada vendada pelo Jardim das Sensações",
      "Trilhas de bosque com Araucárias, árvores símbolo do estado"
    ],
    "dicas": [
      "A entrada para o parque e para a estufa é gratuita.",
      "O pôr do sol atrás da estufa rende fotografias maravilhosas.",
      "Leve uma canga para fazer um piquenique nos gramados ao redor."
    ],
    "localizacao": {
      "latitude": -25.4428,
      "longitude": -49.2384
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
    "imagem": "https://www.viagenspossiveis.com.br/wp-content/uploads/2019/01/Buraco-do-Padre-em-Ponta-Grossa-PR-1.jpg",
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
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/9/91/EDUARDO_MURUCI_-_BAIA_DOS_PORCOS-%28recorte%29.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
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
    "imagem": "https://ipojuca.pe.gov.br/wp-content/uploads/2025/03/porto-de-galinhas.jpg",
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
    "id": "serra-da-capivara",
    "nome": "Serra da Capivara",
    "estado": "Piauí",
    "cidade": "São Raimundo Nonato",
    "regiao": "Nordeste",
    "bioma": "Caatinga e Litoral",
    "descricao": "Parque nacional com sítios arqueológicos, pinturas rupestres e paisagens do semiárido.",
    "sobre": "Serra da Capivara é um destino de destaque em Piauí, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Pedra_Furada_-_Serra_da_Capivara_I.jpg",
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
    "imagem": "https://www.gov.br/turismo/pt-br/assuntos/noticias/terceiro-maior-delta-do-planeta-e-palco-de-paisagens-unicas-e-esta-no-nordeste-brasileiro/whatsapp-image-2025-08-01-at-10-27-13.jpeg",
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
    "id": "cristo-redentor",
    "nome": "Cristo Redentor",
    "estado": "Rio de Janeiro",
    "cidade": "Rio de Janeiro",
    "regiao": "Sudeste",
    "bioma": "Mata Atlântica",
    "descricao": "Monumental estátua art déco de Jesus Cristo no topo do Morro do Corcovado, oferecendo vista panorâmica da cidade.",
    "sobre": "O Cristo Redentor é um destino de destaque no Rio de Janeiro, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sudeste e do Brasil no mundo.",
    "imagem": "https://grupocataratas.com/wp-content/uploads/2023/04/Copia-de-Copia-de-DJI_0031-scaled.jpg",
    "tags": [
      "Monumento",
      "Mirante",
      "Cartão-postal"
    ],
    "melhorEpoca": "Durante o ano todo, preferencialmente em dias de céu limpo",
    "duracaoRecomendada": "1 dia",
    "tipoViagem": "Cultural e turística",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais, turistas internacionais e grupos",
    "comoChegar": "O acesso costuma ser feito pelo Trem do Corcovado ou por vans autorizadas que partem de pontos específicos da cidade do Rio de Janeiro.",
    "destaques": [
      "Vista panorâmica estonteante da Baía de Guanabara e zona sul",
      "Contato com o principal símbolo turístico do Brasil",
      "Passeio histórico de trem pela Floresta da Tijuca"
    ],
    "dicas": [
      "Compre ingressos com antecedência pela internet.",
      "Vá nas primeiras horas da manhã para evitar superlotação.",
      "Leve protetor solar e óculos escuros."
    ],
    "localizacao": {
      "latitude": -22.9519,
      "longitude": -43.2104
    }
  },
  {
    "id": "pao-de-acucar",
    "nome": "Pão de Açúcar",
    "estado": "Rio de Janeiro",
    "cidade": "Rio de Janeiro",
    "regiao": "Sudeste",
    "bioma": "Mata Atlântica",
    "descricao": "Complexo de morros acessado por um famoso teleférico (bondinho), oferecendo vistas espetaculares do Rio de Janeiro.",
    "sobre": "O Pão de Açúcar é um atrativo icônico do Rio de Janeiro, combinando vistas inesquecíveis, passeios de teleférico e a essência visual da região Sudeste.",
    "imagem": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/d7/5c/0d/vista-do-morro-da-urca.jpg?w=900&h=500&s=1",
    "tags": [
      "Mirante",
      "Natureza",
      "Cartão-postal"
    ],
    "melhorEpoca": "Dias ensolarados do ano todo, especialmente no fim de tarde",
    "duracaoRecomendada": "Meio dia",
    "tipoViagem": "Paisagem e contemplação",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, casais e fotógrafos",
    "comoChegar": "Localizado no bairro da Urca, o acesso à estação do bondinho pode ser feito de carro, táxi ou ônibus interligado com o metrô.",
    "destaques": [
      "Passeio panorâmico no clássico Bondinho",
      "Vista do pôr do sol sobre a Baía de Guanabara e Cristo Redentor",
      "Estrutura com lojas, restaurantes e anfiteatro no Morro da Urca"
    ],
    "dicas": [
      "Ir no final da tarde garante a vista tanto de dia quanto durante o pôr do sol e noite.",
      "Compre ingressos online para evitar a fila da bilheteria.",
      "Leve um casaco, pois pode ventar bastante no topo."
    ],
    "localizacao": {
      "latitude": -22.9492,
      "longitude": -43.1555
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
    "imagem": "https://www.correiobraziliense.com.br/cbradar/wp-content/uploads/2026/02/aaa-2026-02-11T014221.138.png",
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
    "imagem": "https://cdn.sanity.io/images/nxpteyfv/goguides/eaad4b7b87410c710448027b5898f1871ee726ae-1600x1066.jpg",
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
    "id": "parque-lage",
    "nome": "Parque Lage",
    "estado": "Rio de Janeiro",
    "cidade": "Rio de Janeiro",
    "regiao": "Sudeste",
    "bioma": "Mata Atlântica",
    "descricao": "Parque público exuberante aos pés do Corcovado, famoso por seu casarão histórico de bela arquitetura que abriga uma escola de artes.",
    "sobre": "O Parque Lage é um cenário de cinema no Rio de Janeiro, mesclando natureza da Floresta da Tijuca, arte e arquitetura deslumbrante na região Sudeste.",
    "imagem": "https://panoramadeviagem.com.br/wp-content/uploads/2020/07/parque-lage-rio.jpg",
    "tags": [
      "Natureza",
      "Arquitetura",
      "Fotografia"
    ],
    "melhorEpoca": "Ano todo",
    "duracaoRecomendada": "2 a 3 horas",
    "tipoViagem": "Passeio cultural e ecológico",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Casais, jovens, fotógrafos e famílias",
    "comoChegar": "Acesso de ônibus, táxi ou caminhando desde o Jardim Botânico (são muito próximos).",
    "destaques": [
      "Café da manhã no pátio interno do casarão ao lado da piscina",
      "Trilhas na natureza (incluindo o começo da trilha para o Corcovado)",
      "Exposições e atividades da Escola de Artes Visuais (EAV)"
    ],
    "dicas": [
      "Chegue bem cedo se quiser tomar café, pois o local costuma ter filas enormes.",
      "Explore as cavernas artificiais e o aquário embutido nas pedras.",
      "Ótimo lugar para ensaios fotográficos de luz natural."
    ],
    "localizacao": {
      "latitude": -22.9592,
      "longitude": -43.212
    }
  },
  {
    "id": "copacabana",
    "nome": "Praia de Copacabana",
    "estado": "Rio de Janeiro",
    "cidade": "Rio de Janeiro",
    "regiao": "Sudeste",
    "bioma": "Mata Atlântica / Costeiro",
    "descricao": "Uma das praias mais famosas do mundo, conhecida por seu icônico calçadão de ondas de pedras portuguesas e faixa de areia vibrante.",
    "sobre": "Copacabana é a praia vitrine do Brasil no Rio de Janeiro, unindo praia, quiosques, hotéis de luxo e uma atmosfera vibrante e inconfundível na região Sudeste.",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/6/62/Praia_de_Copacabana_-_Rio_de_Janeiro%2C_Brasil.jpg",
    "tags": [
      "Praia",
      "Lazer",
      "Urbano"
    ],
    "melhorEpoca": "Primavera e Verão para praia; ano todo para turismo geral",
    "duracaoRecomendada": "Meio dia a 1 dia",
    "tipoViagem": "Praia e vida noturna",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Turistas de todos os estilos, amantes de sol e atividades ao ar livre",
    "comoChegar": "Acessível por dezenas de linhas de ônibus e 3 estações de metrô (Cardeal Arcoverde, Siqueira Campos, Cantagalo).",
    "destaques": [
      "Caminhada ou pedalada no calçadão icônico",
      "Visita ao Forte de Copacabana e sua famosa confeitaria Colombo",
      "Esportes de areia e banho de mar"
    ],
    "dicas": [
      "Tome cuidado com seus pertences e não deixe nada sozinho na areia.",
      "Aproveite as manhãs de domingo quando as pistas de carro são fechadas para lazer.",
      "Experimente petiscar em um dos modernos quiosques ao longo da orla."
    ],
    "localizacao": {
      "latitude": -22.9711,
      "longitude": -43.1822
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
    "imagem": "https://passagenspromo.com.br/blog/wp-content/uploads/2020/10/praia-de-genipabu-capa.jpg",
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
    "imagem": "https://cdn-clubecandeias.s3.sa-east-1.amazonaws.com/uploads/featured_images/imagem_destaque_7425.jpeg",
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
    "id": "cambara-do-sul",
    "nome": "Cambará do Sul",
    "estado": "Rio Grande do Sul",
    "cidade": "Cambará do Sul",
    "regiao": "Sul",
    "bioma": "Pampa e Mata Atlântica",
    "descricao": "Destino dos cânions Itaimbezinho e Fortaleza, com trilhas e paisagens da Serra Geral.",
    "sobre": "Cambará do Sul é um destino de destaque em Rio Grande do Sul, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Sul.",
    "imagem": "https://www.penaestrada.blog.br/wp-content/uploads/2025/05/cambara-do-sul-16.jpg",
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
    "imagem": "https://thumbs.dreamstime.com/b/estrutura-bem-vinda-na-entrada-da-cidade-da-sagacidade-de-porto-velho-96262839.jpg",
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
    "id": "monte-roraima",
    "nome": "Monte Roraima",
    "estado": "Roraima",
    "cidade": "Uiramutã",
    "regiao": "Norte",
    "bioma": "Amazônia e Lavrado",
    "descricao": "Tepui imponente na tríplice fronteira, procurado por trilhas longas e paisagens únicas.",
    "sobre": "Monte Roraima é um destino de destaque em Roraima, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://www.infoescola.com/wp-content/uploads/2012/12/monte-roraima_747945205-1000x667.jpg",
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
    "id": "serra-do-tepequem",
    "nome": "Serra do Tepequém",
    "estado": "Roraima",
    "cidade": "Amajari",
    "regiao": "Norte",
    "bioma": "Amazônia e Lavrado",
    "descricao": "Região serrana com cachoeiras, mirantes, trilhas e clima mais ameno no norte do país.",
    "sobre": "Serra do Tepequém é um destino de destaque em Roraima, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://www.viagensecaminhos.com/wp-content/uploads/2022/10/serra-do-tepequem-mirante-mao-de-deus.jpg",
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
    "id": "beto-carrero-world",
    "nome": "Beto Carrero World",
    "estado": "Santa Catarina",
    "cidade": "Penha",
    "regiao": "Sul",
    "bioma": "Mata Atlântica",
    "descricao": "O maior parque temático da América Latina, com dezenas de montanhas-russas, shows ao vivo e áreas temáticas variadas.",
    "sobre": "Beto Carrero World é um destino de entretenimento gigantesco em Santa Catarina, combinando adrenalina, shows e atrações para todas as idades na região Sul.",
    "imagem": "https://www.farejaviagens.com.br/wp-content/uploads/2024/08/Beto-Carrero-World-Foto-Divulgac%CC%A7a%CC%83o.jpg",
    "tags": [
      "Parque Temático",
      "Diversão",
      "Família"
    ],
    "melhorEpoca": "Fora de alta temporada (março a novembro) para evitar filas longas",
    "duracaoRecomendada": "1 a 2 dias",
    "tipoViagem": "Diversão e família",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias com crianças, adolescentes e grupos de amigos",
    "comoChegar": "Acesso fácil de carro pela BR-101 ou pelo aeroporto de Navegantes, que fica a poucos quilômetros do parque.",
    "destaques": [
      "Montanha-russa FireWhip e Big Tower",
      "Show épico de carros e motos Hot Wheels Epic Show",
      "Área temática de Madagascar"
    ],
    "dicas": [
      "Compre o passaporte online com antecedência para pagar mais barato.",
      "Considere comprar o 'Fast Pass' se for em dias de feriado ou férias.",
      "Chegue cedo para aproveitar ao máximo antes das filas crescerem."
    ],
    "localizacao": {
      "latitude": -26.8016,
      "longitude": -48.6146
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
    "imagem": "https://cdn.sanity.io/images/nxpteyfv/goguides/c38188757aef659645da32f372af96ce1a2c5215-1600x1066.jpg",
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
    "imagem": "https://www.viagensecaminhos.com/wp-content/uploads/2010/09/serra-do-rio-do-rastro-mirante-rodovia.jpg",
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
    "id": "parque-ibirapuera",
    "nome": "Parque Ibirapuera",
    "estado": "São Paulo",
    "cidade": "São Paulo",
    "regiao": "Sudeste",
    "bioma": "Mata Atlântica",
    "descricao": "O principal parque urbano de São Paulo, que abriga lagos, ciclovias, áreas de lazer e museus com arquitetura de Oscar Niemeyer.",
    "sobre": "O Parque Ibirapuera é o pulmão verde da capital paulista, combinando paisagens urbanas, esportes e atrativos culturais que representam a diversidade turística da região Sudeste.",
    "imagem": "https://s3.sa-east-1.amazonaws.com/site-canopus/blog_canopus_o_que_fazer_no_parque_ibirapuera_9b9817c486.jpg",
    "tags": [
      "Parque Urbano",
      "Lazer",
      "Cultura"
    ],
    "melhorEpoca": "Ano todo",
    "duracaoRecomendada": "Meio dia a 1 dia",
    "tipoViagem": "Urbana, cultural e relaxamento",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Famílias, esportistas, amantes da arte e do design",
    "comoChegar": "Localizado na Vila Mariana, é acessível por várias linhas de ônibus, bicicleta e aplicativos de transporte a partir de metrôs próximos.",
    "destaques": [
      "Museu de Arte Moderna (MAM) e Museu Afro Brasil",
      "O icônico Auditório Ibirapuera e a Oca",
      "Aluguel de bicicletas para contornar o lago"
    ],
    "dicas": [
      "Aos finais de semana o parque é bastante cheio, ideal para piqueniques.",
      "Visite o pavilhão da Bienal se houver exposição acontecendo.",
      "Leve água e roupas leves se for praticar exercícios."
    ],
    "localizacao": {
      "latitude": -23.5874,
      "longitude": -46.6576
    }
  },
  {
    "id": "avenida-paulista",
    "nome": "Avenida Paulista",
    "estado": "São Paulo",
    "cidade": "São Paulo",
    "regiao": "Sudeste",
    "bioma": "Mata Atlântica",
    "descricao": "O coração financeiro e cultural de São Paulo, repleto de arranha-céus, centros culturais, shoppings, bares e vasta vida urbana.",
    "sobre": "A Avenida Paulista é o símbolo da agitação de São Paulo, combinando arquitetura vibrante, experiências multiculturais e centros de arte na região Sudeste.",
    "imagem": "https://niss.com.br/wp-content/uploads/2024/01/roteiro-na-avenida-paulista-um-dia-de-turista-em-sao-paulo-1.jpeg",
    "tags": [
      "Metrópole",
      "Cultura",
      "Urbano"
    ],
    "melhorEpoca": "Ano todo",
    "duracaoRecomendada": "1 a 2 dias",
    "tipoViagem": "Cultural, urbana e gastronômica",
    "nivelAcesso": "Fácil",
    "publicoIdeal": "Jovens, casais, turistas de negócios e amantes de metrópoles",
    "comoChegar": "Acessível por várias estações de metrô da Linha 2-Verde (como Consolação, Trianon-Masp e Brigadeiro).",
    "destaques": [
      "Museu de Arte de São Paulo (MASP)",
      "Centro Cultural FIESP e Japan House",
      "Avenida fechada para pedestres aos domingos"
    ],
    "dicas": [
      "Passeie no domingo quando a via é fechada para carros e há muita arte de rua.",
      "Explore as galerias e mirantes como o Sesc Avenida Paulista.",
      "Fique atento aos seus pertences pessoais ao caminhar na multidão."
    ],
    "localizacao": {
      "latitude": -23.5615,
      "longitude": -46.6559
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
    "imagem": "https://i0.wp.com/alemaobeachilhabela.com.br/wp-content/uploads/2023/01/g.jpeg?fit=1024%2C682&ssl=1",
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
    "id": "canion-do-xingo",
    "nome": "Cânion do Xingó",
    "estado": "Sergipe",
    "cidade": "Canindé de São Francisco",
    "regiao": "Nordeste",
    "bioma": "Litoral e Caatinga",
    "descricao": "Cânion no Rio São Francisco com águas verdes, paredões e passeios de catamarã.",
    "sobre": "Cânion do Xingó é um destino de destaque em Sergipe, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Nordeste.",
    "imagem": "https://www.voltologo.net/wp-content/uploads/2023/07/canions-do-xingo-o-que-fazer.jpg",
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
    "id": "jalapao",
    "nome": "Jalapão",
    "estado": "Tocantins",
    "cidade": "Mateiros",
    "regiao": "Norte",
    "bioma": "Cerrado",
    "descricao": "Região de dunas douradas, fervedouros, cachoeiras, rios e paisagens do cerrado.",
    "sobre": "Jalapão é um destino de destaque em Tocantins, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://www.seuprodutonaweb.com.br/fotos/20250915_151531_parque-estadual-do-jalapao.jpg",
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
    "id": "serras-gerais",
    "nome": "Serras Gerais",
    "estado": "Tocantins",
    "cidade": "Dianópolis",
    "regiao": "Norte",
    "bioma": "Cerrado",
    "descricao": "Região com cânions, rios, cachoeiras, mirantes e turismo de natureza no sudeste tocantinense.",
    "sobre": "Serras Gerais é um destino de destaque em Tocantins, combinando paisagens, experiências locais e atrativos que ajudam a representar a diversidade turística da região Norte.",
    "imagem": "https://www.viagensecaminhos.com/wp-content/uploads/2023/05/serras-gerais-tocantins-lagoa-da-serra.jpg",
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
