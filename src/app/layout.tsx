

import "./globals.css";
import { Inter } from "next/font/google";
import { Aside, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contador App",
  description: "O aplicativo do contador moderno",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} flex flex-col bg-gray-200`}
      >
      <Header />
      <main className="flex flex-col lg:flex-row">
        <Aside />
        <div className="flex-1 p-4 lg:p-6">
          {children}
        </div>
      </main>
      </body>
    </html>
  );
}