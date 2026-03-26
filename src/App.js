import "./App.css";

const Equipe = (props) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <Sobre nome={props.nome} />
      <p>
        Cargo: {props.cargo} | Idade: {props.idade}
      </p>
      {/* 2. Corrigido: Social com "S" maiúsculo */}
      <Social link={props.linkedin} />
    </div>
  );
};

const Sobre = (props) => {
  return <h2>Olá, eu sou o {props.nome}</h2>;
};

const Social = (props) => {
  return (
    <div>
      <h4>Redes Sociais</h4>
      <a href={props.link} target="_blank" rel="noreferrer">
        Linkedin
      </a>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Conheça a nossa equipe:</h1>
      <Equipe
        nome="João"
        cargo="Desenvolvedor Front-end"
        idade="18"
        linkedin="https://linkedin.com/in/joao"
      />
      <Equipe nome="Andrey" cargo="Analista de mercado financeiro" idade="19" />
      <Equipe nome="Lucas" cargo="Desenvolvedor Back-end" idade="18" />
      <Equipe nome="Vinicius" cargo="Veterinário" idade="20" />
    </div>
  );
}
