"use client";

import { discoverRange } from "@/utils/discoverRange";
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
  const { register, handleSubmit } = useForm<FormData>();

  const calculateSimples = handleSubmit((data) => {
    discoverRange(data.RBT12);
  });

  return (
    <form
      className="flex flex-col justify-center items-center gap-6"
      onSubmit={calculateSimples}
    >
      <p className="text-xl">Ferramenta de Cálculo do Simples Nacional</p>

      <div>
        <label htmlFor="RBT12">
          <strong>Faturamento nos últimos 12 meses (RBT12)</strong>
        </label>
        <input
          type="number"
          className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
          {...register("RBT12")}
          placeholder="R$ 0,00"
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <div>
          <label htmlFor="Anexo-I">Anexo I (Comércio)</label>
          <input
            type="number"
            className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
            {...register("Anexo-I")}
            placeholder="R$ 0,00"
          />
        </div>
        <div>
          <label htmlFor="Anexo-II">Anexo II (Indústria)</label>
          <input
            type="number"
            className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
            {...register("Anexo-II")}
            placeholder="R$ 0,00"
          />
        </div>
        <div>
          <label htmlFor="Anexo-III">Anexo III (Serviço)</label>
          <input
            type="number"
            className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
            {...register("Anexo-III")}
            placeholder="R$ 0,00"
          />
        </div>
        <div>
          <label htmlFor="Anexo-IV">Anexo IV (Serviço)</label>
          <input
            type="number"
            className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
            {...register("Anexo-IV")}
            placeholder="R$ 0,00"
          />
        </div>
        <div>
          <label htmlFor="Anexo-V">Anexo V (Serviço)</label>
          <input
            type="number"
            className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
            {...register("Anexo-V")}
            placeholder="R$ 0,00"
          />
        </div>
      </div>

      <input type="submit" value="calcular" />
    </form>
  );
}
