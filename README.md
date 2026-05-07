# 🗺️ RotaBrasil

## 📌 Descrição do Projeto
O **RotaBrasil** é uma aplicação web moderna voltada para a exploração de destinos turísticos e parques nacionais brasileiros. O projeto propõe uma experiência visual imersiva e interativa, fugindo dos guias de turismo tradicionais.

## 🛠️ Tecnologias Utilizadas (Até o momento)
* **React:** Biblioteca principal para construção da interface.
* **React Router DOM:** Gerenciamento de rotas e navegação declarativa entre páginas (Single Page Application).
* **CSS3 (Custom):** Estilização da aplicação baseada na arquitetura CSS Grid e Bento Box UI, sem dependência de frameworks visuais pesados.
* **Lucide React:** Biblioteca de iconografia vetorial.

## ⚙️ Funcionalidades Implementadas
1. **Arquitetura Baseada em Componentes:** Interface dividida em componentes reutilizáveis (`Navbar`, `Footer`, `CardDestino`), separando lógica e apresentação.
2. **Sistema de Roteamento:** Configuração inicial de rotas para Home, Explorar e Login.
3. **Renderização Dinâmica:** Consumo de dados estruturados locais (mock de banco de dados) mapeados dinamicamente na interface através da função `.map()`.
4. **Layout Responsivo:** "Hero Section" e "Bento Grid" implementados para garantir usabilidade em diferentes resoluções.

## 🚀 Próximos Passos
* Consumo de APIs REST (Services) na página Explorar.
* Autenticação e proteção de rotas via JWT (Página de Login).
* Dashboard Administrativo com Upload de Imagens e Preview (FileReader API).
* Implementação de mapa interativo (Canvas).
