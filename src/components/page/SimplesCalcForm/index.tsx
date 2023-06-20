"use client";

import useCalculateSimples from "@/hooks/useCalculateSimples";
import {
  discoverRange,
  formatToCurrency,
} from "@/utils/simplesNacionalFuctions";
import { FocusEvent, useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  RBT12: number;
  "Anexo-I": number;
  "Anexo-II": number;
  "Anexo-III": number;
  "Anexo-IV": number;
  "Anexo-V": number;
};

export default function SimplesCalcForm() {
  const [range, setRange] = useState("range-1");
  const { register, handleSubmit } = useForm<FormData>();
  const { getAnexoValue } = useCalculateSimples();

  function handleSetRBT12Range(e: FocusEvent<HTMLInputElement>) {
    setRange(discoverRange(Number(e.target.value)));

    e.target.value = formatToCurrency(e.target.value);
  }

  const handleCalculate = handleSubmit((data) => {
    if (data["Anexo-I"]) {
      getAnexoValue("anexo-I", data["Anexo-I"], data.RBT12, range);
    }
  });

  return (
    <form
      className="flex flex-col justify-center items-center gap-6"
      onSubmit={handleCalculate}
    >
      <p className="text-xl">Ferramenta de Cálculo do Simples Nacional</p>

      <div>
        <label htmlFor="RBT12">
          <strong>Faturamento nos últimos 12 meses (RBT12)</strong>
        </label>
        <div className="flex justify-center items-center">
          <span className="text-lg gap-2">R$</span>
          <input
            type="number"
            className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
            {...register("RBT12")}
            placeholder="0,00"
            onBlur={handleSetRBT12Range}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <div>
          <label htmlFor="Anexo-I">Anexo I (Comércio)</label>
          <div className="flex justify-center items-center">
            <span className="text-lg gap-2">R$</span>
            <input
              type="number"
              className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
              {...register("Anexo-I")}
              placeholder="0,00"
            />
          </div>
        </div>
        <div>
          <label htmlFor="Anexo-II">Anexo II (Indústria)</label>
          <div className="flex justify-center items-center">
            <span className="text-lg gap-2">R$</span>
            <input
              type="number"
              className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
              {...register("Anexo-II")}
              placeholder="0,00"
            />
          </div>
        </div>
        <div>
          <label htmlFor="Anexo-III">Anexo III (Serviço)</label>
          <div className="flex justify-center items-center">
            <span className="text-lg gap-2">R$</span>
            <input
              type="number"
              className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
              {...register("Anexo-III")}
              placeholder="0,00"
            />
          </div>
        </div>
        <div>
          <label htmlFor="Anexo-IV">Anexo IV (Serviço)</label>
          <div className="flex justify-center items-center">
            <span className="text-lg gap-2">R$</span>
            <input
              type="number"
              className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
              {...register("Anexo-IV")}
              placeholder="0,00"
            />
          </div>
        </div>
        <div>
          <label htmlFor="Anexo-V">Anexo V (Serviço)</label>
          <div className="flex justify-center items-center">
            <span className="text-lg gap-2">R$</span>
            <input
              type="number"
              className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
              {...register("Anexo-V")}
              placeholder="0,00"
            />
          </div>
        </div>
      </div>

      <input type="submit" value="calcular" />
    </form>
  );
}
