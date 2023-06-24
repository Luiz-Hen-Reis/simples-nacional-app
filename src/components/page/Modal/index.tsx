import { useModalContext } from "@/contexts/modalContext"
import { X } from "lucide-react";
import AsideListItem from "../Aside/AsideListItem";


export default function Modal() {
  const { modalIsOpen, closeModal } = useModalContext();

  return (
    <>
      {modalIsOpen &&
        <div className="fixed md:hidden top-0 right-0 left-0 bottom-0 bg-slate-900 text-white z-30">
          <header className="flex justify-between items-center m-4">
            <span className="text-lg font-bold">Contador App</span>
            <div onClick={closeModal}>
              <X />
            </div>
          </header>
          <nav>
            <ul>
              <div onClick={closeModal}>
                <AsideListItem title='Home' path='/home' />
              </div>
              <div onClick={closeModal}>
                <AsideListItem title='Calcular Simples Nacional' path='/simples-nacional' />
              </div>
              <div onClick={closeModal}>
                <AsideListItem title='Calcular PIS/COFINS' path='/pis-cofins' />
              </div>
              <div onClick={closeModal}>
                <AsideListItem title='Pesquisar CNAE' path='/search-cnae' />
              </div>
            </ul>
          </nav>
        </div>
      }
    </>
  )
}
