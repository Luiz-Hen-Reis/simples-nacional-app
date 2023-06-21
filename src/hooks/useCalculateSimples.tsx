"use client";

import { anexoData } from "@/utils/anexoData";

export default function useCalculateSimples() {
  let total = 0;

  function getAnexoValue(
    anexo: string,
    value: number,
    RBT12: number,
    range: string
  ) {
    if (anexo === "anexo-I") {
      let effectiveAliquot =
        (RBT12 * anexoData[anexo][range].nominalAliquot -
          anexoData[anexo][range].deduction) /
        RBT12;

      let totalDebt = value * effectiveAliquot;

      total += totalDebt;
    }

    if (anexo === "anexo-II") {
      let effectiveAliquot =
        (RBT12 * anexoData[anexo][range].nominalAliquot -
          anexoData[anexo][range].deduction) /
        RBT12;

      let totalDebt = value * effectiveAliquot;

      total += totalDebt;
      console.log(total, effectiveAliquot);
      
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
