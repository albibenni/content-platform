import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Menu } from "./Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Content Platform",
  description: "My Content Platform testing next.js once more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <nav className="p-6 py-4 bg-gray-100 border-t-4 border-t-sky-500 flex items-center space-x-6">
          <h1 className="font-semibold tracking-tighter text-gray-700">
            Content Platform
          </h1>
          <Menu />
        </nav>
        {children}
      </body>
    </html>
  );
}
