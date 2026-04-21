import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <main className="container auth-page">
      <section className="auth-box">
        <div className="auth-header">
          <h1>Entrar</h1>
          <p>Acesse sua conta para planejar suas viagens pelo Brasil.</p>
        </div>

        <form className="auth-form">
          <div className="auth-field">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
            />
          </div>

          <button type="submit" className="btn-primary auth-button">
            Entrar
          </button>
        </form>

        <p className="auth-footer-text">
          Ainda não tem conta? <Link to="/cadastro">Cadastrar-se</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;