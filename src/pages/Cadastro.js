import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';

function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validarEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validarSenha = (senha) => {
    const erros = [];

    if (senha.length < 8) {
      erros.push("Mínimo de 8 caracteres");
    }
    if (!/[A-Z]/.test(senha)) {
      erros.push("Uma letra maiúscula");
    }
    if (!/[a-z]/.test(senha)) {
      erros.push("Uma letra minúscula");
    }
    if (!/[0-9]/.test(senha)) {
      erros.push("Um número");
    }
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(senha)) {
      erros.push("Um caractere especial");
    }

    return erros;
  };

  const validar = () => {
    const novosErros = {};

    if (!form.nome) {
      novosErros.nome = "Nome é obrigatório";
    }

    if (!form.email) {
      novosErros.email = "Email é obrigatório";
    } else if (!validarEmail(form.email)) {
      novosErros.email = "Email inválido";
    }

    const errosSenha = validarSenha(form.senha);
    if (errosSenha.length > 0) {
      novosErros.senha = errosSenha;
    }

    if (form.confirmarSenha !== form.senha) {
      novosErros.confirmarSenha = "As senhas não coincidem";
    }

    return novosErros;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const erros = validar();

    if (Object.keys(erros).length > 0) {
      setErrors(erros);
      return;
    }

    setErrors({});
    alert("Cadastro realizado com sucesso!");

    console.log(form);
  };

  return (
    <main className="container auth-page">
      <section className="auth-box">
        <div className="auth-header">
          <h1>Criar Conta</h1>
          <p>Cadastre-se para começar a explorar o Brasil.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>

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
            {errors.nome && <span className="erro">{errors.nome}</span>}
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
            {errors.email && <span className="erro">{errors.email}</span>}
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
            {errors.senha && (
              <ul className="erro">
                {errors.senha.map((erro, i) => (
                  <li key={i}>{erro}</li>
                ))}
              </ul>
            )}
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
            {errors.confirmarSenha && (
              <span className="erro">{errors.confirmarSenha}</span>
            )}
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