import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sankalpa Legal Services",
  description: "One Window legal Services in Nepal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col  text-white w-screen h-screen">
          <div className="h-16 fixed w-full bg-black z-50">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-4rem)] mt-16">{children}</div>
        </div>
      </body>
    </html>
  );
}
