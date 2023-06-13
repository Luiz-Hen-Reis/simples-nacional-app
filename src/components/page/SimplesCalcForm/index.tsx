"use client";

import { useForm } from "react-hook-form";

export default function SimplesCalcForm() {
  const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

  return (
    <form className="flex flex-col justify-center items-center gap-6" onSubmit={onSubmit}>
      <p className="text-xl">Ferramenta de Cálculo do Simples Nacional</p>

      <div>
        <label htmlFor="RBT12">
          <strong>Faturamento nos últimos 12 meses (RBT12)</strong>
        </label>
        <input
          type="number"
          className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
          {...register("RBT12")}
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <div>
          <label htmlFor="Anexo-I">Anexo I (Comércio)</label>
          <input
            type="number"
            className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
            {...register("Anexo-I")}
          />
        </div>
        <div>
          <label htmlFor="Anexo-II">Anexo II (Indústria)</label>
          <input
            type="number"
            className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
            {...register("Anexo-II")}
          />
        </div>
        <div>
          <label htmlFor="Anexo-III">Anexo III (Serviço)</label>
          <input
            type="number"
            className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
            {...register("Anexo-III")}
          />
        </div>
        <div>
          <label htmlFor="Anexo-IV">Anexo IV (Serviço)</label>
          <input
            type="number"
            className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
            {...register("Anexo-IV")}
          />
        </div>
        <div>
          <label htmlFor="Anexo-V">Anexo V (Serviço)</label>
          <input
            type="number"
            className="text-xl w-full py-2 px-3 lg:py-4 lg:px-5 rounded-lg shadow-lg outline-none text-slate-700"
            {...register("Anexo-V")}
          />
        </div>
      </div>

      <input type="submit" value="calcular" />
    </form>
  );
}
