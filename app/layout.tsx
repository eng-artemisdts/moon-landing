import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artemis Digital Solutions - Soluções Digitais para Pequenos Negócios",
  description: "Desenvolvimento de sites, landing pages, e-commerces, automações e chatbots para pequenos negócios. Tecnologia acessível e de qualidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

