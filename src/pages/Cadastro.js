import React from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';
import { useState } from 'react';

function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: ""
  });

   const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!form.nome || !form.email || !form.senha || !form.confirmarSenha) {
    alert("Preencha todos os campos!");
    return;
  }

  if (form.senha !== form.confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }
  alert("Cadastro realizado com sucesso!")

  console.log(form);
  };

  return (
    <main className="container auth-page">
      <section className="auth-box">
        <div className="auth-header">
          <h1>Criar Conta</h1>
          <p>Cadastre-se para começar a explorar o Brasil.</p>
        </div>
   
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Seu nome completo"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Seu e-mail"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={form.senha}
              onChange={handleChange}
              placeholder="Crie uma senha"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="confirmar-senha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmar-senha"
              name="confirmarSenha"
              value={form.confirmarSenha}
              onChange={handleChange}
              placeholder="Confirme sua senha"
            />
          </div>

          <button type="submit" className="btn-primary auth-button">
            Criar Conta
          </button>
        </form>

        <p className="auth-footer-text">
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>
      </section>
    </main>
  );
}

export default Cadastro;