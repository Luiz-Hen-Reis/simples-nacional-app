import axios from "axios";

export async function getCnaeList() {
  const res = await axios.get(
    "https://servicodados.ibge.gov.br/api/v2/cnae/classes"
  );

  return res.data;
}

export async function getCnaeInfo(cnae: string) {
  const res = await axios.get(
    `https://servicodados.ibge.gov.br/api/v2/cnae/classes/${cnae}`
  );

  return res.data;
}
