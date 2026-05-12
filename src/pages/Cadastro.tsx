import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

interface FormState {
  nome: string
  email: string
  senha: string
  confirmarSenha: string
}

interface FormErrors {
  nome?: string
  email?: string
  senha?: string[]
  confirmarSenha?: string
}

function Cadastro() {
  const [form, setForm] = useState<FormState>({ nome: '', email: '', senha: '', confirmarSenha: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const validarEmail = (email: string) => /\S+@\S+\.\S+/.test(email)

  const validarSenha = (senha: string): string[] => {
    const erros: string[] = []
    if (senha.length < 8) erros.push('Mínimo de 8 caracteres')
    if (!/[A-Z]/.test(senha)) erros.push('Uma letra maiúscula')
    if (!/[a-z]/.test(senha)) erros.push('Uma letra minúscula')
    if (!/[0-9]/.test(senha)) erros.push('Um número')
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) erros.push('Um caractere especial')
    return erros
  }

  const validar = (): FormErrors => {
    const novosErros: FormErrors = {}
    if (!form.nome) novosErros.nome = 'Nome é obrigatório'
    if (!form.email) novosErros.email = 'Email é obrigatório'
    else if (!validarEmail(form.email)) novosErros.email = 'Email inválido'
    const errosSenha = validarSenha(form.senha)
    if (errosSenha.length > 0) novosErros.senha = errosSenha
    if (form.confirmarSenha !== form.senha) novosErros.confirmarSenha = 'As senhas não coincidem'
    return novosErros
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const erros = validar()
    if (Object.keys(erros).length > 0) { setErrors(erros); return }
    setErrors({})
    Swal.fire({ title: 'Sucesso!', text: 'Cadastro realizado com sucesso', icon: 'success', confirmButtonText: 'OK' })
    navigate('/login')
  }

  const inputClass = "w-full px-[1rem] py-[0.95rem] border border-[#dbe2ea] rounded-[0.9rem] text-[1rem] outline-none focus:border-[color:var(--color-bm-teal)] focus:shadow-[0_0_0_3px_rgba(84,158,156,0.15)] font-[family-name:var(--font-sans)]"

  return (
    <main className="w-full max-w-[1200px] mx-auto px-8 min-h-[70vh] flex items-center justify-center py-[4rem]">
      
      <section className="w-full max-w-[480px] bg-white border border-[#e5e7eb] rounded-[2rem] p-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
        <div className="text-center mb-[2rem]">
          <h1 className="text-[2.2rem] text-[color:var(--color-bm-dark-green)] m-0">Criar Conta</h1>
          <p className="mt-[0.8rem] text-[#64748b]">Cadastre-se para começar a explorar o Brasil.</p>
        </div>

        <form className="flex flex-col gap-[1.2rem]" onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-[0.5rem]">
            <label htmlFor="nome" className="font-bold text-[color:var(--color-text-main)]">Nome</label>
            <input type="text" id="nome" name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome completo" className={inputClass} />
            {errors.nome && <span className="text-red-500 text-[0.9rem] mt-[5px]">{errors.nome}</span>}
          </div>

          <div className="flex flex-col gap-[0.5rem]">
            <label htmlFor="email" className="font-bold text-[color:var(--color-text-main)]">E-mail</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="Seu e-mail" className={inputClass} />
            {errors.email && <span className="text-red-500 text-[0.9rem] mt-[5px]">{errors.email}</span>}
          </div>

          <div className="flex flex-col gap-[0.5rem]">
            <label htmlFor="senha" className="font-bold text-[color:var(--color-text-main)]">Senha</label>
            <input type="password" id="senha" name="senha" value={form.senha} onChange={handleChange} placeholder="Crie uma senha" className={inputClass} />
            {errors.senha && (
              <ul className="text-red-500 text-[0.9rem] pl-4 mt-[5px]">
                {errors.senha.map((erro, i) => <li key={i}>{erro}</li>)}
              </ul>
            )}
          </div>

          <div className="flex flex-col gap-[0.5rem]">
            <label htmlFor="confirmar-senha" className="font-bold text-[color:var(--color-text-main)]">Confirmar Senha</label>
            <input type="password" id="confirmar-senha" name="confirmarSenha" value={form.confirmarSenha} onChange={handleChange} placeholder="Confirme sua senha" className={inputClass} />
            {errors.confirmarSenha && <span className="text-red-500 text-[0.9rem] mt-[5px]">{errors.confirmarSenha}</span>}
          </div>

          <button type="submit" className="w-full mt-[0.5rem] p-[1rem] bg-[color:var(--color-bm-dark-green)] text-white rounded-full font-bold hover:opacity-90 transition-opacity cursor-pointer border-none flex items-center justify-center">
            Criar Conta
          </button>
        </form>

        <p className="text-center mt-[1.5rem] text-[#475569]">
          Já tem conta?{' '}
          <Link to="/login" className="text-[color:var(--color-bm-teal)] font-bold no-underline">Entrar</Link>
        </p>
      </section>
    </main>
  )
}

export default Cadastro