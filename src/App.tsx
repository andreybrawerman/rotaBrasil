import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import Explorar from './pages/Explorar'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import DestinoDetalhe from './pages/DestinoDetalhe'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/destino/:id" element={<DestinoDetalhe />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App