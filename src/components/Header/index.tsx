import { Menu } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-lg flex items-center justify-between lg:justify-normal lg:h-20 sticky top-0">
      <div className="hidden lg:flex justify-center items-center h-20 w-72 bg-slate-900 text-slate-200 text-lg text-center">Módulos</div>
      <h1 className="py-6 font-bold text-lg px-4 lg:px-6">Contador App</h1>
      <div className="cursor-pointer lg:hidden px-4 lg:px-6">
        <Menu />
      </div>
    </header>
  );
}
