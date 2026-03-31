import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deleite - Fusión Chileno-Argentina",
  description: "Sabores tradicionales de Chile en el corazón de San Juan, Argentina. Empanadas, completos y handrolls con un toque premium.",
};

import Providers from "./Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full bg-carbon text-cream font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
