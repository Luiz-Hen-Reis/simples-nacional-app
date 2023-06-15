enum Range {
  faixa1 = 180000,
  faixa2 = 360000,
  faixa3 = 720000,
  faixa4 = 1800000,
  faixa5 = 3600000,
  faixa6 = 4800000,
}

export function discoverRange(RBT12: number): string {
  if (RBT12 <= Range.faixa1) return "range-1";
  else if (RBT12 > Range.faixa1 && RBT12 <= Range.faixa2) return "range-2";
  else if (RBT12 > Range.faixa2 && RBT12 <= Range.faixa3) return "range-3";
  else if (RBT12 > Range.faixa3 && RBT12 <= Range.faixa4) return "range-4";
  else if (RBT12 > Range.faixa4 && RBT12 <= Range.faixa5) return "range-5";
  else if (RBT12 > Range.faixa5 && RBT12 <= Range.faixa6) return "range-6";
  else return "out-range";
}
