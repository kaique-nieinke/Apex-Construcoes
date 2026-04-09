import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Apex Construções | Construção e Remodelação em Lisboa",
  description:
    "Serviços de construção civil, remodelações, cozinhas, roupeiros, pavimentos e afagamento de madeira em Lisboa. Qualidade, organização e acabamento profissional.",

  openGraph: {
    title: "Apex Construções",
    description:
      "Construção e remodelação em Lisboa com qualidade e acabamento profissional.",
    url: "https://apexconstrucoes.pt",
    siteName: "Apex Construções",
    images: [
      {
        url: "https://apexconstrucoes.pt/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apex Construções - Construção e Remodelação",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Apex Construções",
    description:
      "Construção e remodelação em Lisboa com qualidade e acabamento profissional.",
    images: ["https://apexconstrucoes.pt/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-PT"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
