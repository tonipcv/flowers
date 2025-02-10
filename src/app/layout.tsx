import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500'],
});

export const metadata: Metadata = {
  title: "Floralier | Floral Atelier",
  description: "Floralier - Floral Atelier de alto padrão. Experiências florais únicas e sofisticadas para momentos especiais. Inauguração em 12 de abril de 2025.",
  keywords: ["floricultura", "flores", "arranjos florais", "buquês", "decoração", "eventos", "São Paulo", "luxo", "alto padrão"],
  authors: [{ name: "Floralier" }],
  openGraph: {
    title: "Floralier | Floral Atelier",
    description: "Experiências florais únicas e sofisticadas para momentos especiais",
    url: "https://floralier.com",
    siteName: "Floralier",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#E7EDDE",
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
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
