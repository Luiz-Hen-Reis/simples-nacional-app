"use client";

import { CnaeData } from "@/types/cnaeList";
import GridItem from "./GridItem";

type Props = {
  cnaeList: CnaeData[];
  subclasses?: boolean;
};

export default function Grid({ cnaeList, subclasses }: Props) {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {cnaeList.map((cnae, index) => (
        <GridItem key={index} cnae={cnae} subclasse={subclasses} />
      ))}
    </ul>
  );
}
