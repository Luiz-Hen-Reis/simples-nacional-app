'use client';

import "./globals.css";
import { Inter } from "next/font/google";
import { Aside, Header, Modal } from "@/components";
import { ModalProvider } from "@/contexts/modalContext";

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
      
      <ModalProvider>
        <body
          className={`${inter.className} flex flex-col bg-gray-200`}
        >
          <Modal />
          <Header />
          <main className="flex flex-col md:flex-row">
            <Aside />
            <div className="flex-1 p-4 lg:p-6">
              {children}
            </div>
          </main>
        </body>
      </ModalProvider>
    </html>
  );
}