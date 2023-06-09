"use client";

import { Home, Coins, Banknote, SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
  path: string;
};

export default function AsideListItem({ title, path }: Props) {
  const pathname = usePathname();

  return (
    <li
      className={`items-center hover:bg-slate-700 cursor-pointer transition-all ${
        pathname === path ? "bg-slate-700" : ""
      }`}
    >
      <Link href={path} className="flex gap-2 p-4">
      {title === "Home" && (
        <>
          <Home /> {title}
        </>
      )}
      {title === "Calcular Simples Nacional" && (
        <>
          <Coins /> {title}
        </>
      )}
      {title === "Calcular PIS/COFINS" && (
        <>
          <Banknote /> {title}
        </>
      )}
      {title === "Pesquisar CNAE" && (
        <>
          <SearchIcon /> {title}
        </>
      )}
      </Link>
    </li>
  );
}
