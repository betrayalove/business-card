import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "betrayalove",
  description: "Кирилл - разработчик и музыкант из России. Личный сайт-визитка с контактами и социальными сетями.",
  keywords: "Кирилл, разработчик, музыкант, Россия, веб-разработка, программирование",
  authors: [{ name: "Кирилл" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "betrayalove",
    description: "Кирилл - разработчик и музыкант из России",
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["en_US", "zh_CN"]
  },
  twitter: {
    card: "summary",
    title: "betrayalove",
    description: "Кирилл - разработчик и музыкант из России"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
