"use client";

import { CnaeData } from "@/types/cnaeList";
import Link from "next/link";
import { useState } from "react";

type Props = {
  cnae: CnaeData;
};

export default function GridItem({ cnae }: Props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <li className="min-h-min flex flex-col border border-slate-200 p-4 rounded-sm shadow-lg">
      <Link
        href={`/search-cnae/${cnae.id}`}
        title="Mais informações"
        className="text-xl text-blue-700 font-bold mb-4"
      >
        &#187; Classe - {cnae.id}
      </Link>
      <strong>{cnae.descricao}</strong>
      <p className="text-slate-400 text-sm">
        {showMore ? cnae.observacoes[0] : cnae.observacoes[0].substring(0, 250)}
        <span
          onClick={() => setShowMore(!showMore)}
          className="text-blue-700 font-bold cursor-pointer"
        >
          {cnae.observacoes[0].length >= 250
            ? showMore
              ? " Ver menos"
              : "...Ver mais"
            : ""}
        </span>
      </p>
    </li>
  );
}
