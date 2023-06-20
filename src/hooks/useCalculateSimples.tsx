"use client";

import { anexoData } from "@/utils/anexoData";

export default function useCalculateSimples() {
  function getAnexoValue(
    anexo: string,
    value: number,
    RBT12: number,
    range: string
  ) {
    if (anexo === "anexo-I") {
      console.log(anexoData[anexo][range].aliquot);
    }

    if (anexo === "anexo-II") {
    }

    if (anexo === "anexo-III") {
    }

    if (anexo === "anexo-IV") {
    }

    if (anexo === "anexo-V") {
    }
  }

  return { getAnexoValue };
}
