import { Menu } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <header className="h-16 bg-white px-4 shadow-lg flex items-center justify-between lg:h-20">
      <h1 className="font-bold text-lg">Contador App</h1>
      <div className="cursor-pointer lg:hidden">
      <Menu />
      </div>
    </header>
  );
}
