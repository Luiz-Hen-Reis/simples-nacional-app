"use client";

import {
  ContentLayout,
  CustomInput,
  Grid,
  Loading,
  PageTitle,
} from "@/components";
import { CnaeData } from "@/types/cnaeList";
import { getCnaeList } from "@/utils/fetchData";
import { ChangeEvent, useEffect, useState } from "react";

export default function SearchCnae() {
  const [cnaeList, setCnaeList] = useState<CnaeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState<string>("");

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.currentTarget.value.toString());
  }

  function resetSearch() {
    setSearch("");
  }

  useEffect(() => {
    async function getCnaeData() {
      setLoading(true);
      setCnaeList(await getCnaeList());
      setLoading(false);
    }

    getCnaeData();
  }, []);

  useEffect(() => {
    async function searchCnae() {
      if (search.length > 0) {
        const searchedCnae = cnaeList.filter((cnae) =>
          cnae.id.includes(search)
        );
        setCnaeList(searchedCnae);
        console.log(cnaeList.length);
      } else {
        setCnaeList(await getCnaeList());
      }
    }

    searchCnae();
  }, [search]);

  return (
    <>
      <div className="flex items-center gap-4 lg:gap-0 justify-between flex-wrap">
        <PageTitle>PESQUISAR CLASSE</PageTitle>
        <CustomInput
          inputType="number"
          inputValue={search}
          resetSearch={resetSearch}
          handleChange={handleSearch}
          placeholder="Pesquise uma classe..."
          maxLength={5}
        />
      </div>
      <ContentLayout>
        {loading && <Loading />}
        {!loading && <Grid cnaeList={cnaeList} />}
      </ContentLayout>
    </>
  );
}
