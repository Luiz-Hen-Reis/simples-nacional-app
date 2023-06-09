import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ContentLayout({ children }: Props) {
  return <div className="bg-white p-4 lg:p-6 shadow-lg mt-8">{children}</div>;
}
