"use client";

import { anexoData } from "@/utils/anexoData";
export default function useCalculateSimples() {

  function getAnexoValue(
    anexo: string,
    value: number,
    RBT12: number,
    range: string
  ) {

    let effectiveAliquot =
      (RBT12 * anexoData[anexo][range].nominalAliquot -
        anexoData[anexo][range].deduction) /
      RBT12;

    let totalDebt = value * effectiveAliquot;

    return totalDebt

  }

  return { getAnexoValue };
}
