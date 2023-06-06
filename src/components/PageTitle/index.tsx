import { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

export default function PageTitle({ children }: Props) {
  return (
    <h2 className="text-2xl mb-8 mt-2">{children}</h2>
  )
}
