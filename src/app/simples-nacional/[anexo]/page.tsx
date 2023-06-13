"use client";

import { Button, ContentLayout, PageTitle } from "@/components";
import { useParams, useRouter } from "next/navigation";
import ITable from "@/libs/rc-table";

export default function Anexo() {
  const router = useRouter();
  const { anexo } = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <PageTitle>{anexo.replace("-", " ").toUpperCase()}</PageTitle>
        <Button inputValue="&larr; Voltar" handleClick={() => router.back()} />
      </div>
      <ContentLayout>
        <div className="flex items-center justify-center">
          <div className="border border-black p-4 rounded-lg">
            <h3 className="text-xl font-bold text-center mb-4">TABELA SIMPLES NACIONAL - {anexo.replace("-", " ").toUpperCase()}</h3>
          <ITable anexo={`${anexo}`}  />
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
