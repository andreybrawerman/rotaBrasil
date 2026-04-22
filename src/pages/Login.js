import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [form, setForm] = useState({
      email: "",
      senha: ""
    });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validarEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validar = () => {
  const novosErros = {};

    if (!form.email) {
      novosErros.email = "Email é obrigatório";
    } else if (!validarEmail(form.email)) {
      novosErros.email = "Email inválido";
    }

    if (!form.senha) {
      novosErros.senha = "Senha é obrigatória";
    }

    return novosErros;
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const erros = validar();

    if (Object.keys(erros).length > 0) {
      setErrors(erros);
      return;
    }

    setErrors({});
    Swal.fire({
    title: "Sucesso!",
    text: "Login realizado com sucesso",
    icon: "success",
    confirmButtonText: "OK"
    });

    navigate("/");

    console.log(form);
  };


  return (
    <main className="container auth-page">
      <section className="auth-box">
        <div className="auth-header">
          <h1>Entrar</h1>
          <p>Acesse sua conta para planejar suas viagens pelo Brasil.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-field">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
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
              placeholder="Digite sua senha"
            />
            {errors.senha && <span className="erro">{errors.senha}</span>}
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