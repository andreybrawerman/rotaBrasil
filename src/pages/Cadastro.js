import React from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';

function Cadastro() {
  return (
    <main className="container auth-page">
      <section className="auth-box">
        <div className="auth-header">
          <h1>Criar Conta</h1>
          <p>Cadastre-se para começar a explorar o Brasil.</p>
        </div>

        <form className="auth-form">
          <div className="auth-field">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome completo"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu e-mail"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Crie uma senha"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="confirmar-senha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmar-senha"
              name="confirmar-senha"
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