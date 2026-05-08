import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="max-w-6xl mx-auto px-8 flex justify-between items-center py-6 flex-wrap gap-4">
      <div className="text-[color:var(--color-bm-dark-green)] font-black text-xl leading-tight">
        ROTA<br />BRASIL.
      </div>

      <div className="flex gap-8 flex-wrap justify-center">
        <Link to="/" className="no-underline text-[color:var(--color-text-main)] font-medium hover:text-[color:var(--color-bm-teal)] transition-colors">
          Home
        </Link>
        <Link to="/explorar" className="no-underline text-[color:var(--color-text-main)] font-medium hover:text-[color:var(--color-bm-teal)] transition-colors">
          Explorar
        </Link>
        <Link to="/login" className="no-underline text-[color:var(--color-text-main)] font-medium hover:text-[color:var(--color-bm-teal)] transition-colors">
          Entrar
        </Link>
        <Link to="/cadastro" className="no-underline text-[color:var(--color-text-main)] font-medium hover:text-[color:var(--color-bm-teal)] transition-colors">
          Cadastrar
        </Link>
      </div>

      <Link
        to="/explorar"
        className="bg-[color:var(--color-bm-dark-green)] text-white no-underline px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
      >
        Planejar Viagem
      </Link>
    </nav>
  )
}

export default Navbar
