import { ContentLayout, Grid, PageTitle } from "@/components";
import { CnaeData } from "@/types/cnaeList";
import { getCnaeList } from "@/server-actions";

export default async function SearchCnae() {
  const cnaeList: CnaeData[] = await getCnaeList();

  return (
    <>
      <PageTitle>Pesquisar CNAE</PageTitle>
      <ContentLayout>
        <Grid cnaeList={cnaeList} />
      </ContentLayout>
    </>
  );
}
