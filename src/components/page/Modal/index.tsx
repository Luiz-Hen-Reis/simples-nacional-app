type Props = {
    isOpen: boolean;
}

export default function Modal({ isOpen=false }: Props) {
  return (
    <>
        {isOpen &&
            <div className="fixed top-0 right-0 left-0 bottom-0 bg-slate-700 text-white z-30">Modal</div>
        }
    </>
  )
}
