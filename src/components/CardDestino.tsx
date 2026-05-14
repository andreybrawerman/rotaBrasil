import { Link } from 'react-router-dom'
import { Destino } from '../data/destinos'

interface Props {
  destino: Destino
}

const CardDestino = ({ destino }: Props) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <img
        src={destino.imagem}
        alt={destino.nome}
        className="w-full h-60 object-cover"
      />
      <div className="p-6">
        <span className="text-[color:var(--color-bm-teal)] font-bold text-xs uppercase tracking-wide">
          {destino.estado} • {destino.bioma}
        </span>
        <h3 className="text-2xl font-extrabold mt-1 mb-3 text-[#485C11]">{destino.nome}</h3>
        <p className="text-slate-500 text-sm mb-4">{destino.descricao}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {destino.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[color:var(--color-bg)] text-xs font-bold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/destino/${destino.id}`}
          className="font-black text-[#549E9C] no-underline hover:underline"
        >
          Ver destino
        </Link>
      </div>
    </div>
  )
}

export default CardDestino