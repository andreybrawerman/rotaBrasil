import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

interface FormState {
  email: string
  senha: string
}

interface FormErrors {
  email?: string
  senha?: string
}

function Login() {
  const [form, setForm] = useState<FormState>({ email: '', senha: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const validarEmail = (email: string) => /\S+@\S+\.\S+/.test(email)

  const validar = (): FormErrors => {
    const novosErros: FormErrors = {}
    if (!form.email) novosErros.email = 'Email é obrigatório'
    else if (!validarEmail(form.email)) novosErros.email = 'Email inválido'
    if (!form.senha) novosErros.senha = 'Senha é obrigatória'
    return novosErros
  }

  const handleSubmit = async (e: React.FormEvent) => {

  e.preventDefault()

  const erros = validar()

  if (Object.keys(erros).length > 0) {
    setErrors(erros)
    return
  }

  try {

    const resposta = await fetch(
      'http://localhost:5000/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: form.email,
          senha: form.senha
        })
      }
    )

    const dados = await resposta.json()

    if (!resposta.ok) {

      Swal.fire({
        title: 'Erro',
        text: dados.erro,
        icon: 'error'
      })

      return
    }

    localStorage.setItem(
      'usuario',
      JSON.stringify(dados.usuario)
    )

    localStorage.setItem(
      'token',
      dados.token
    )

    Swal.fire({
      title: 'Sucesso!',
      text: 'Login realizado com sucesso',
      icon: 'success'
    })

    navigate('/')

  } catch {

    Swal.fire({
      title: 'Erro',
      text: 'Servidor indisponível',
      icon: 'error'
    })

  }
}

  const inputClass = "w-full px-4 py-[0.95rem] border border-[#dbe2ea] rounded-[0.9rem] text-base outline-none focus:border-[color:var(--color-bm-teal)] focus:shadow-[0_0_0_3px_rgba(84,158,156,0.15)] font-[family-name:var(--font-sans)]"

  return (
    <main className="max-w-6xl mx-auto px-8 min-h-[70vh] flex items-center justify-center py-16">
      <section className="w-full max-w-[480px] bg-white border border-gray-200 rounded-[2rem] p-10 shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-[2.2rem] text-[color:var(--color-bm-dark-green)] m-0">Entrar</h1>
          <p className="mt-3 text-[#3b434d]">Acesse sua conta para planejar suas viagens pelo Brasil.</p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold">E-mail</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="Digite seu e-mail" className={inputClass} />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="senha" className="font-bold">Senha</label>
            <input type="password" id="senha" name="senha" value={form.senha} onChange={handleChange} placeholder="Digite sua senha" className={inputClass} />
            {errors.senha && <span className="text-red-500 text-sm">{errors.senha}</span>}
          </div>

          <button type="submit" className="w-full mt-2 py-4 bg-[color:var(--color-bm-dark-green)] text-white rounded-full font-bold hover:opacity-90 transition-opacity cursor-pointer border-none">
            Entrar
          </button>
        </form>

        <p className="text-center mt-6 text-slate-500">
          Ainda não tem conta?{' '}
          <Link to="/cadastro" className="text-[color:var(--color-bm-teal)] font-bold no-underline">Cadastrar-se</Link>
        </p>
      </section>
    </main>
  )
}

export default Login
