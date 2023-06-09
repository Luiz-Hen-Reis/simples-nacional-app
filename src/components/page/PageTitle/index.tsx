import { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

export default function PageTitle({ children }: Props) {
  return (
    <h2 className="text-xl lg:text-2xl mt-2">{children}</h2>
  )
}
