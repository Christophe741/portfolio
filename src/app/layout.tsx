import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christophe Winkel — Développeur Full-Stack",
  description:
    "Développeur Full-Stack en Lorraine. Je conçois et développe des applications web modernes avec React, Next.js et Node.js — du prototype au produit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
