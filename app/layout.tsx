import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lineSeed = localFont({
  src: [
    {
      path: "../public/fonts/LINESeedKR-Th.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/LINESeedKR-Rg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/LINESeedKR-Bd.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-line-seed",
});

export const metadata: Metadata = {
  title: "TINGLE - 대학생 소속 인증 기반 매칭 플랫폼",
  description: "대학생을 위한 안전하고 즐거운 매칭 서비스, TINGLE에서 새로운 인연을 만나보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className="light">
      <body
        className={`${lineSeed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
