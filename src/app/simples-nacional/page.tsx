"use client";

import { Button, ContentLayout, CustomInput, PageTitle, SimplesCalcForm } from "@/components";
import { useRouter } from "next/navigation";

export default function Simples() {
  const router = useRouter();

  return (
    <>
      <PageTitle>CÁLCULO SIMPLES NACIONAL</PageTitle>
      <ContentLayout>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl mb-4">O que é o Simples Nacional?</h3>
          <blockquote
            cite="https://www.contabilizei.com.br/contabilidade-online/simples-nacional/"
            className="bg-slate-100 p-4 border-l-4 border-blue-700 font-bold text-blue-950 mb-4 lg:w-4/5"
          >
            <p>
              O Simples Nacional é um regime tributário criado em 2006 pela Lei
              Complementar 123, voltado para as micro e pequenas empresas —
              incluindo os microempreendedores individuais (MEIs). Ele surgiu
              com o objetivo de reduzir a burocracia e os custos de pequenos
              empresários, criando um sistema unificado de recolhimento de
              tributos, simplificando declarações, entre outras facilidades.
            </p>
          </blockquote>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 mb-4">
          <p className="text-xl">Selecione um anexo para conferir a tabela:</p>
          <div className="flex flex-wrap gap-4">
            <Button
              handleClick={() => router.push("/simples-nacional/anexo-I")}
              inputValue="Anexo I"
            />
            <Button
              handleClick={() => router.push("/simples-nacional/anexo-II")}
              inputValue="Anexo II"
            />
            <Button
              handleClick={() => router.push("/simples-nacional/anexo-III")}
              inputValue="Anexo III"
            />
            <Button
              handleClick={() => router.push("/simples-nacional/anexo-IV")}
              inputValue="Anexo IV"
            />
            <Button
              handleClick={() => router.push("/simples-nacional/anexo-V")}
              inputValue="Anexo V"
            />
          </div>
        </div>

        <SimplesCalcForm />
      </ContentLayout>
    </>
  );
}
