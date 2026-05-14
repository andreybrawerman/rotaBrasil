# 🗺️ RotaBrasil

## 📌 Descrição do Projeto
O **RotaBrasil** é uma aplicação web moderna voltada para a exploração de destinos turísticos e parques nacionais brasileiros. O projeto propõe uma experiência visual imersiva e interativa, fugindo dos guias de turismo tradicionais.

## 🛠️ Tecnologias Utilizadas (Stack Atual)
* **Vite + React:** Ferramenta de build ultrarrápida combinada com a biblioteca principal para construção da interface.
* **TypeScript:** Adição de tipagem estática para garantir maior segurança, previsibilidade e autocompletar inteligente no código.
* **Tailwind CSS (v4):** Framework CSS utilitário focado em performance, utilizado para criar toda a estilização responsiva e o Bento Box UI sem a necessidade de arquivos CSS externos.
* **React Router DOM:** Gerenciamento de rotas e navegação declarativa entre páginas (Single Page Application).
* **Lucide React:** Biblioteca de iconografia vetorial moderna e leve.

## ⚙️ Funcionalidades Implementadas
1. **Arquitetura Baseada em Componentes:** Interface modular dividida em componentes reutilizáveis (`Navbar`, `CardDestino`, etc.), separando lógica e apresentação.
2. **Sistema de Roteamento:** Configuração estrutural de rotas protegidas e públicas (Home, Explorar, Login, Cadastro e Detalhes do Destino).
3. **Renderização Dinâmica e Tipada:** Consumo de dados locais estruturados rigorosamente através de Interfaces TypeScript (`DestinoType`), com um catálogo rico que abrange desde a Amazônia até destinos como Fernando de Noronha, Ilha do Mel e Buraco do Padre.
4. **Layout Fluido e Responsivo:** "Hero Section" e "Bento Grid" construídos com as classes utilitárias do Tailwind, garantindo adaptação perfeita do layout em celulares, tablets e desktops.

## 🚀 Próximos Passos
* Desenvolvimento dinâmico da página `DestinoDetalhe` consumindo os dados avançados (coordenadas, dicas, destaques).
* Consumo de APIs REST (Services) na página Explorar.
* Autenticação e proteção de rotas via JWT (Página de Login).
* Dashboard Administrativo com Upload de Imagens e Preview (FileReader API).
* Implementação do Mapa Interativo.

## 💻 Como rodar o projeto localmente

1. Clone o repositório:
```bash
git clone <URL_DO_SEU_REPOSITORIO>
```

2. Acesse a pasta do projeto:
```bash
cd rotaBrasil
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento do Vite:
```bash
npm run dev
```
