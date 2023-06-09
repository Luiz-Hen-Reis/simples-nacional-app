"use client";

import { CnaeData } from "@/types/cnaeList";
import GridItem from "../GridItem";

type Props = {
  cnaeList: CnaeData[];
};

export default function Grid({ cnaeList }: Props) {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {cnaeList.map((cnae) => (
        <GridItem key={cnae.id} cnae={cnae} />
      ))}
    </ul>
  );
}
