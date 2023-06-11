"use client";

import { Button, ContentLayout, PageTitle } from "@/components";
import { useParams, useRouter } from "next/navigation";

export default function Anexo() {
  const router = useRouter();
  const params = useParams();
  const { anexo } = params;

  return (
    <>
      <div className="flex items-center justify-between">
        <PageTitle>{anexo.replace("-", " ").toUpperCase()}</PageTitle>
        <Button inputValue="&larr; Voltar" handleClick={() => router.back()} />
      </div>
      <ContentLayout>
      
      </ContentLayout>
    </>
  );
}
