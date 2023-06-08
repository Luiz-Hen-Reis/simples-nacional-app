"use client";

import { ContentLayout, Loading, PageTitle } from "@/components";
import { getCnaeInfo } from "@/server-actions";
import { CnaeData } from "@/types/cnaeList";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Cnae() {
  const params = useParams();
  const router = useRouter();
  const { cnae } = params;

  const [cnaeInfo, setCnaeInfo] = useState<CnaeData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCnaeData() {
      setLoading(true);
      setCnaeInfo(await getCnaeInfo(cnae));
      setLoading(false);
    }

    getCnaeData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <PageTitle>
          {cnae} - {loading && "CARREGANDO..."}{" "}
          {!loading && cnaeInfo?.descricao}
        </PageTitle>
        <button
          onClick={() => router.back()}
          className="text-xl bg-blue-700 py-2 px-4 text-white rounded-lg shadow-lg hover:bg-blue-700/75 transition-colors"
        >
          Voltar
        </button>
      </div>
      <ContentLayout>
        {loading && <Loading />}
        {!loading && (
          <div className="flex flex-col">
            <strong className="mb-4">DIVISÃO: {cnaeInfo?.grupo.divisao.descricao}</strong>
            <strong className="mb-4">SEÇÃO: {cnaeInfo?.grupo.divisao.secao.descricao}</strong>
            <div>
              <strong>OBSERVAÇÕES:</strong>
            {cnaeInfo?.observacoes.map((obs) => (
              <p key={obs} className="text-slate-400 mb-4">&#187; {obs}</p>
            ))}
            </div>
          </div>
        )}
      </ContentLayout>
    </>
  );
}
