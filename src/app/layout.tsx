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
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col lg:flex-row bg-gray-200 lg:w-screen lg:h-screen`}
      >
        <Aside />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 px-4 py-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
