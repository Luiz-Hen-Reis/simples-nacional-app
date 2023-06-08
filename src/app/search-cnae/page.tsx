"use client";

import { ContentLayout, PageTitle } from "@/components";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function SearchCnae() {
  const [cnaeList, setCnaeList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await axios.get(
        "https://servicodados.ibge.gov.br/api/v2/cnae/classes"
      );
      setCnaeList(await res.data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <PageTitle>Pesquisar CNAE</PageTitle>
      <ContentLayout>
        {loading && (
          <div className="h-[45rem] flex items-center justify-center">
            <Loader2 className="animate-spin" size={100} />
          </div>
        )}
        {cnaeList.map(cnae => (
          <div>{cnae.id}</div>
        ))}
      </ContentLayout>
    </>
  );
}
