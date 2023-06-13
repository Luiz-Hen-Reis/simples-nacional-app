import { data } from "@/utils/anexoTableData";
import Table from "rc-table";
import { AlignType } from "rc-table/lib/interface";

const columns = [
  {
    title: "Receita Bruta em 12 meses (em R$)",
    dataIndex: "RBT12",
    key: "Receita Bruta em 12 meses (em R$)",
    width: 400,
    align: "center" as AlignType,
  },
  {
    title: "Alíquota",
    dataIndex: "Aliquota",
    key: "Alíquota",
    width: 200,
    align: "center" as AlignType,
  },
  {
    title: "Valor a Deduzir (em R$)",
    dataIndex: "VDeduzir",
    key: "Valor a Deduzir (em R$)",
    width: 200,
    align: "center" as AlignType,
  },
];

type Props = {
  anexo: string;
};

export default function ITable({ anexo }: Props) {
  return <Table data={data[anexo]} columns={columns} />;
}
