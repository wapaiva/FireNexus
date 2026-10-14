import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FireNexus",
  description:
    "Plataforma de apoio a profissionais de Segurança Contra Incêndio e Pânico.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
