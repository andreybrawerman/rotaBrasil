import React from 'react';
import { Link } from 'react-router-dom';

const CardDestino = ({ destino }) => {
  return (
    <Link
      to={`/destino/${destino.id}`}
      className="group block overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white no-underline shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="overflow-hidden">
        <img
          src={destino.imagem}
          alt={destino.nome}
          className="h-60 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <span className="text-xs font-black uppercase tracking-wide text-[#549E9C]">
          {destino.estado} • {destino.bioma}
        </span>

        <h3 className="mt-2 text-2xl font-black text-[#485C11]">
          {destino.nome}
        </h3>

        <p className="mt-3 line-clamp-3 text-slate-500">
          {destino.descricao}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {destino.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-5 font-black text-[#549E9C]">
          Ver destino
        </p>
      </div>
    </Link>
  );
};

export default CardDestino;