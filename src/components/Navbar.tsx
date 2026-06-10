import { Link, useNavigate } from 'react-router-dom'
import { User, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const navigate = useNavigate()

  const usuario = JSON.parse(
    localStorage.getItem('usuario') || 'null'
  )

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('usuario')
    navigate('/')
    window.location.reload()
  }

  const [mostrarPopup, setMostrarPopup] = useState(false)
  const [fotoPerfil, setFotoPerfil] = useState(
    localStorage.getItem('fotoPerfil')
  )
  const [menuAberto, setMenuAberto] = useState(false)

  const trocarFoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const arquivo = e.target.files?.[0]
    if (!arquivo) return
    const leitor = new FileReader()
    leitor.onloadend = () => {
      localStorage.setItem('fotoPerfil', leitor.result as string)
      setFotoPerfil(leitor.result as string)
    }
    leitor.readAsDataURL(arquivo)
  }

  return (
    <>
      <nav className="w-full mx-auto max-w-[1200px] px-8 max-[600px]:px-4 py-6 flex justify-between items-center">

        {/* Logo */}
        <div className="text-[#485C11] font-black text-[1.25rem] leading-[1.1]">
          ROTA<br />BRASIL.
        </div>

        {/* Links — desktop */}
        <div className="hidden min-[900px]:flex items-center gap-8">
          <Link to="/" className="no-underline text-[#0f172a] font-medium hover:text-[#549E9C] transition-colors">
            Home
          </Link>
          <Link to="/explorar" className="no-underline text-[#0f172a] font-medium hover:text-[#549E9C] transition-colors">
            Explorar
          </Link>

          {usuario ? (
            <>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden border cursor-pointer" onClick={() => setMostrarPopup(true)}>
                  {fotoPerfil ? (
                    <img src={fotoPerfil} alt="Perfil" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                      <User size={20} />
                    </div>
                  )}
                </div>
                <span className="text-[#549E9C] font-medium">Olá, {usuario.nome}</span>
              </div>
              <button onClick={logout} className="bg-transparent border-none cursor-pointer text-[#0f172a] font-medium hover:text-[#549E9C]">
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="no-underline text-[#0f172a] font-medium hover:text-[#549E9C] transition-colors">
                Entrar
              </Link>
              <Link to="/cadastro" className="no-underline text-[#0f172a] font-medium hover:text-[#549E9C] transition-colors">
                Cadastrar
              </Link>
            </>
          )}
        </div>

        {/* Botão Planejar — desktop */}
        <Link
          to="/explorar"
          className="hidden min-[900px]:inline-flex bg-[#485C11] text-white no-underline px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity items-center justify-center"
        >
          Planejar Viagem
        </Link>

        {/* Botão hambúrguer — mobile */}
        <button
          className="min-[900px]:hidden flex items-center justify-center p-2 rounded-lg text-[#485C11] hover:bg-slate-100 transition"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Menu"
        >
          {menuAberto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="min-[900px]:hidden bg-white border-t border-slate-100 shadow-md px-8 py-6 flex flex-col gap-5">
          <Link to="/" onClick={() => setMenuAberto(false)} className="no-underline text-[#0f172a] font-medium hover:text-[#549E9C] transition-colors">
            Home
          </Link>
          <Link to="/explorar" onClick={() => setMenuAberto(false)} className="no-underline text-[#0f172a] font-medium hover:text-[#549E9C] transition-colors">
            Explorar
          </Link>

          {usuario ? (
            <>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden border cursor-pointer" onClick={() => { setMostrarPopup(true); setMenuAberto(false) }}>
                  {fotoPerfil ? (
                    <img src={fotoPerfil} alt="Perfil" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                      <User size={20} />
                    </div>
                  )}
                </div>
                <span className="text-[#549E9C] font-medium">Olá, {usuario.nome}</span>
              </div>
              <button onClick={() => { logout(); setMenuAberto(false) }} className="text-left bg-transparent border-none cursor-pointer text-[#0f172a] font-medium hover:text-[#549E9C]">
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuAberto(false)} className="no-underline text-[#0f172a] font-medium hover:text-[#549E9C] transition-colors">
                Entrar
              </Link>
              <Link to="/cadastro" onClick={() => setMenuAberto(false)} className="no-underline text-[#0f172a] font-medium hover:text-[#549E9C] transition-colors">
                Cadastrar
              </Link>
            </>
          )}

          <Link
            to="/explorar"
            onClick={() => setMenuAberto(false)}
            className="inline-flex bg-[#485C11] text-white no-underline px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity items-center justify-center text-center"
          >
            Planejar Viagem
          </Link>
        </div>
      )}

      {/* Popup foto de perfil */}
      {mostrarPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="font-bold mb-4">Alterar foto de perfil</h2>
            <input type="file" accept="image/*" onChange={trocarFoto} />
            <button onClick={() => setMostrarPopup(false)} className="mt-4 px-4 py-2 bg-slate-200 rounded">
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
