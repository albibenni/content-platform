import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Menu } from "./Menu";
import { getMainFolders } from "@/cli/sdk";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Content Platform",
  description: "My Content Platform testing next.js once more",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const foldersResult = await getMainFolders();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <nav className="flex items-center bg-gray-100 border-t-4 border-t-sky-500 p-6 py-4 space-x-6">
          <h1 className="font-semibold tracking-tighter text-gray-700">
            Content Vault
          </h1>
          <Menu folders={foldersResult.folders} />
        </nav>
        {children}
      </body>
    </html>
  );
}
