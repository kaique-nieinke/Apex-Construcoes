import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    "Empresa de construção civil em Lisboa especializada em remodelações, pavimentos, cozinhas e afagamento de madeira. Qualidade, organização e acabamento profissional.",

  openGraph: {
    title: "Apex Construções",
    description:
      "Construção e remodelação em Lisboa com qualidade e acabamento profissional.",
    url: "https://apexconstrucoes.pt",
    siteName: "Apex Construções",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-PT"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
