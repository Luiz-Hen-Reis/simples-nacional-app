"use client";

import { ContentLayout, PageTitle } from "@/components";

export default function PisCofins() {
  return (
    <>
      <PageTitle>Cálculo PIS/COFINS</PageTitle>
      <ContentLayout>
        <h3 className="text-xl mb-4">Escolha seu regime:</h3>
        <div className="flex items-center">
          <input type="checkbox" value="Regime Cumulativo" name="cumulative" />
          <label htmlFor="cumulative">Regime Cumulativo</label>
          <input
            type="checkbox"
            value="Regime Não Cumulativo"
            name="non-cumulative"
          />
          <label htmlFor="non-cumulative">Regime Cumulativo</label>
        </div>
      </ContentLayout>
    </>
  );
}
