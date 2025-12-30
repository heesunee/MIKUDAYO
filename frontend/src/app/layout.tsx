import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIKUDAYO - 프로세카 노래 맞추기",
  description: "프로젝트 세카이 노래 맞추기 게임",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
