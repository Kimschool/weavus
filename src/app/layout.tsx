import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WEAVUS | IT Solutions & Creative Services",
  description: "技術と創造で、ビジネスを前へ。アプリケーション開発からコンテンツ制作まで、ワンストップで対応するプロフェッショナルパートナー",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
