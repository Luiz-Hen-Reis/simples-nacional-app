import { useModalContext } from "@/contexts/modalContext";
import { Menu } from "lucide-react";

export default function Header() {
  const { openModal } = useModalContext();

  return (
    <header className="bg-white shadow-lg flex items-center justify-between md:justify-normal md:h-20 sticky top-0 z-20">
      <div className="hidden md:flex justify-center items-center h-20 w-72 bg-slate-900 text-slate-200 text-lg text-center">Módulos</div>
      <h1 className="py-6 font-bold text-lg px-4 lg:px-6">Contador App</h1>
      <div className="cursor-pointer md:hidden px-4 lg:px-6" onClick={openModal}
      >
        <Menu />
      </div>
    </header>
  );
}
