export interface CnaeData {
  id: string;
  descricao: string;
  grupo: {
    id: string;
    descricao: string;
    divisao: {
      id: string;
      descricao: string;
      secao: {
        id: string;
        descricao: string;
      };
    };
  };
  observacoes: [string];
}
