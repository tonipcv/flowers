import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Cormorant_Garamond } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: "L'eau de Lily | Atelier Floral",
  description: "L'eau de Lily - Atelier Floral de alto padrão. Experiências florais únicas e sofisticadas para momentos especiais. Inauguração em 12 de abril de 2025.",
  keywords: ["floricultura", "flores", "arranjos florais", "buquês", "decoração", "eventos", "São Paulo", "luxo", "alto padrão"],
  authors: [{ name: "L'eau de Lily" }],
  openGraph: {
    title: "L'eau de Lily | Atelier Floral",
    description: "Experiências florais únicas e sofisticadas para momentos especiais",
    url: "https://leaudelily.com.br",
    siteName: "L'eau de Lily",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#000000",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
