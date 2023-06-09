"use client";

import { ContentLayout, CustomInput, Grid, Loading, PageTitle } from "@/components";
import { getCnaeInfo, getCnaeSubclassesInfo } from "@/utils/fetchData";
import { CnaeData } from "@/types/cnaeList";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Cnae() {
  const params = useParams();
  const router = useRouter();
  const { cnae } = params;

  const [cnaeInfo, setCnaeInfo] = useState<CnaeData>();
  const [cnaeSubclasses, setCnaeSubclasses] = useState<CnaeData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCnaeData() {
      setLoading(true);
      setCnaeInfo(await getCnaeInfo(cnae));
      setCnaeSubclasses(await getCnaeSubclassesInfo(cnae));
      setLoading(false);
    }

    getCnaeData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <PageTitle>
          {`CLASSE - ${cnae}`} - {loading && "CARREGANDO..."}{" "}
          {!loading &&  cnaeInfo?.descricao}
        </PageTitle>
        <CustomInput
          inputType="button"
          inputValue="Voltar"
          handleClick={() => router.back()}
        />
      </div>
      <ContentLayout>
        {loading && <Loading />}
        {!loading && (
          <>
            <div className="flex flex-col">
            <strong className="mb-4">
              SEÇÃO: {cnaeInfo?.grupo.divisao.secao.id} - <span>{cnaeInfo?.grupo.divisao.secao.descricao}</span>
            </strong>
            <strong className="mb-4">
              DIVISÃO: {cnaeInfo?.grupo.divisao.id} - <span>{cnaeInfo?.grupo.divisao.descricao}</span>
            </strong>
            <div>
              <strong>OBSERVAÇÕES:</strong>
              {cnaeInfo?.observacoes.map((obs) => (
                <p key={obs} className="text-slate-400 mb-4">
                  &#187; {obs}
                </p>
              ))}
            </div>
          </div>
          <Grid cnaeList={cnaeSubclasses} subclasses />
          </>
        )}
      </ContentLayout>
    </>
  );
}
