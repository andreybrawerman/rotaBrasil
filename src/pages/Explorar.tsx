import { destinos } from '../data/destinos'
import CardDestino from '../components/CardDestino'

function Explorar() {
  return (
    <main className="max-w-6xl mx-auto px-8 pt-8">
      <h1 className="text-5xl font-black mb-8">Explore os Destinos</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {destinos.map((dest) => (
          <CardDestino key={dest.id} destino={dest} />
        ))}
      </div>
    </main>
  )
}

export default Explorar
