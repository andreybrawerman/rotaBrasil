import { Link } from 'react-router-dom'
import { Destino } from '../data/destinos'

interface Props {
  destino: Destino
}

const CardDestino = ({ destino }: Props) => {
  return (
    // Adicione w-full junto com o h-full e o flex-col
    <div className="flex flex-col h-full w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-200 text-left">
      
      <img
        src={destino.imagem}
        alt={destino.nome}
        className="w-full h-[240px] object-cover"
      />
      
      {/* flex-1 permite que esta área cresça e ocupe o espaço restante do card */}
      <div className="flex flex-col flex-1 p-8">
        
        <span className="text-[#549E9C] font-black text-xs uppercase tracking-wider mb-2">
          {destino.estado} • {destino.bioma}
        </span>
        
        {/* Cor verde escura adicionada para igualar à foto original */}
        <h3 className="text-[1.5rem] text-[#485C11] font-black mt-1 mb-3">
          {destino.nome}
        </h3>
        
        <p className="text-[#64748b] mb-6">
          {destino.descricao}
        </p>
        
        {/* content-start e flex-1 empurram as tags para cima e deixam o link preso embaixo */}
        <div className="flex flex-wrap content-start gap-2 mb-6 flex-1">
          {destino.tags.map((tag) => (
            <span
              key={tag}
              className="bg-slate-100 text-slate-600 text-[0.75rem] font-bold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* mt-auto é o truque mágico: ele empurra o link "Ver destino" para o rodapé exato do card */}
        <Link
          to={`/destino/${destino.id}`}
          className="mt-auto font-black text-[#549E9C] no-underline hover:opacity-80 transition-opacity"
        >
          Ver destino
        </Link>
        
      </div>
    </div>
  )
}

export default CardDestino