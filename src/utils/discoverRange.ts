enum Faixa {
  faixa1 = 180000,
  faixa2 = 360000,
  faixa3 = 720000,
  faixa4 = 1800000,
  faixa5 = 3600000,
  faixa6 = 4800000,
}

export function discoverRange(RBT12: number) {
  if (RBT12 <= Faixa.faixa1) return console.log("faixa 1");
  else if (RBT12 > Faixa.faixa1 && RBT12 <= Faixa.faixa2)
    return console.log("faixa 2");
  else if (RBT12 > Faixa.faixa2 && RBT12 <= Faixa.faixa3)
    return console.log("faixa 3");
  else if (RBT12 > Faixa.faixa3 && RBT12 <= Faixa.faixa4)
    return console.log("faixa 4");
  else if (RBT12 > Faixa.faixa4 && RBT12 <= Faixa.faixa5)
    return console.log("faixa 5");
  else if (RBT12 > Faixa.faixa5 && RBT12 <= Faixa.faixa6)
    return console.log("faixa 6");
  else if (RBT12 > Faixa.faixa6) alert("Sua empresa ultrapassou o sublimite!");
}
