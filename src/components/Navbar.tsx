import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full mx-auto max-w-[1200px] px-8 max-[600px]:px-4 py-6 flex flex-col min-[900px]:flex-row justify-between items-center gap-4 min-[900px]:gap-0">
      
      {/* Logo */}
      <div className="text-[#485C11] font-black text-[1.25rem] leading-[1.1] max-[900px]:text-center">
        ROTA<br />BRASIL.
      </div>

      {/* Nav Links */}
      <div className="flex gap-8 flex-wrap justify-center">
        <Link to="/" className="no-underline text-[#0f172a] font-medium hover:text-[#549E9C] transition-colors">Home</Link>
        <Link to="/explorar" className="no-underline text-[#0f172a] font-medium hover:text-[#549E9C] transition-colors">Explorar</Link>
        <Link to="/login" className="no-underline text-[#0f172a] font-medium hover:text-[#549E9C] transition-colors">Entrar</Link>
        <Link to="/cadastro" className="no-underline text-[#0f172a] font-medium hover:text-[#549E9C] transition-colors">Cadastrar</Link>
      </div>

      {/* Botão Planejar Viagem */}
      <Link to="/explorar" className="bg-[#485C11] text-white no-underline px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity inline-flex items-center justify-center">
        Planejar Viagem
      </Link>
      
    </nav>
  )
}

export default Navbar