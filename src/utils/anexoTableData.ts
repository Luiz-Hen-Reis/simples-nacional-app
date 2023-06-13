interface Anexo {
  RBT12: string;
  Aliquota: string;
  VDeduzir: string;
}

interface AnexoData {
  [tag: string]: Anexo[];
}

export const data: AnexoData = {
  "anexo-I": [
    { RBT12: "1ª faixa - até 180.000,00", Aliquota: "4,00", VDeduzir: "0,00" },
    {
      RBT12: "2ª faixa - de 180.000,01 até 360.000,00",
      Aliquota: "7,30",
      VDeduzir: "5.940,00",
    },
    {
      RBT12: "3ª faixa - de 360.000,01 até 720.000,00",
      Aliquota: "9,50",
      VDeduzir: "13.860,00",
    },
    {
      RBT12: "4ª faixa - de 720.000,01 até 1.800.000,00",
      Aliquota: "10,70",
      VDeduzir: "22.500,00",
    },
    {
      RBT12: "5ª faixa - de 1.800.000,01 até 3.600.000,00",
      Aliquota: "14,30",
      VDeduzir: "87.300,00",
    },
    {
      RBT12: "6ª faixa - de 3.600.000,01 até 4.800.000,00",
      Aliquota: "19,00",
      VDeduzir: "378.000,00",
    },
  ],
  "anexo-II": [
    { RBT12: "1ª faixa - até 180.000,00", Aliquota: "4,50", VDeduzir: "0,00" },
    {
      RBT12: "2ª faixa - de 180.000,01 até 360.000,00",
      Aliquota: "7,80",
      VDeduzir: "5.940,00",
    },
    {
      RBT12: "3ª faixa - de 360.000,01 até 720.000,00",
      Aliquota: "10,00",
      VDeduzir: "13.860,00",
    },
    {
      RBT12: "4ª faixa - de 720.000,01 até 1.800.000,00",
      Aliquota: "11,20",
      VDeduzir: "22.500,00",
    },
    {
      RBT12: "5ª faixa - de 1.800.000,01 até 3.600.000,00",
      Aliquota: "14,70",
      VDeduzir: "85.500,00",
    },
    {
      RBT12: "6ª faixa - de 3.600.000,01 até 4.800.000,00",
      Aliquota: "30,00",
      VDeduzir: "720.000,00",
    },
  ],
  "anexo-III": [
    { RBT12: "1ª faixa - até 180.000,00", Aliquota: "6,00", VDeduzir: "0,00" },
    {
      RBT12: "2ª faixa - de 180.000,01 até 360.000,00",
      Aliquota: "11,20",
      VDeduzir: "9.360,00",
    },
    {
      RBT12: "3ª faixa - de 360.000,01 até 720.000,00",
      Aliquota: "13,50",
      VDeduzir: "17.640,00",
    },
    {
      RBT12: "4ª faixa - de 720.000,01 até 1.800.000,00",
      Aliquota: "16,00",
      VDeduzir: "35.640,00",
    },
    {
      RBT12: "5ª faixa - de 1.800.000,01 até 3.600.000,00",
      Aliquota: "21,00",
      VDeduzir: "125.640,00",
    },
    {
      RBT12: "6ª faixa - de 3.600.000,01 até 4.800.000,00",
      Aliquota: "33,00",
      VDeduzir: "720.000,00",
    },
  ],
  "anexo-IV": [
    { RBT12: "1ª faixa - até 180.000,00", Aliquota: "4,50", VDeduzir: "0,00" },
    {
      RBT12: "2ª faixa - de 180.000,01 até 360.000,00",
      Aliquota: "9,00",
      VDeduzir: "8.100,00",
    },
    {
      RBT12: "3ª faixa - de 360.000,01 até 720.000,00",
      Aliquota: "10,20",
      VDeduzir: "12.420,00",
    },
    {
      RBT12: "4ª faixa - de 720.000,01 até 1.800.000,00",
      Aliquota: "14,00",
      VDeduzir: "39.780,00",
    },
    {
      RBT12: "5ª faixa - de 1.800.000,01 até 3.600.000,00",
      Aliquota: "22,00",
      VDeduzir: "183.780,00",
    },
    {
      RBT12: "6ª faixa - de 3.600.000,01 até 4.800.000,00",
      Aliquota: "33,00",
      VDeduzir: "828.000,00",
    },
  ],
  "anexo-V": [
    { RBT12: "1ª faixa - até 180.000,00", Aliquota: "15,50", VDeduzir: "0,00" },
    {
      RBT12: "2ª faixa - de 180.000,01 até 360.000,00",
      Aliquota: "18,00",
      VDeduzir: "4.500,00",
    },
    {
      RBT12: "3ª faixa - de 360.000,01 até 720.000,00",
      Aliquota: "19,50",
      VDeduzir: "9.900,00",
    },
    {
      RBT12: "4ª faixa - de 720.000,01 até 1.800.000,00",
      Aliquota: "20,50",
      VDeduzir: "17.100,00",
    },
    {
      RBT12: "5ª faixa - de 1.800.000,01 até 3.600.000,00",
      Aliquota: "23,00",
      VDeduzir: "62.100,00",
    },
    {
      RBT12: "6ª faixa - de 3.600.000,01 até 4.800.000,00",
      Aliquota: "30,50",
      VDeduzir: "540.000,00",
    },
  ],
};
