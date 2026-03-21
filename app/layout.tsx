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

// 💡 修正ポイント1：ブラウザのタブに表示されるサイト名と説明文！
export const metadata: Metadata = {
  title: "政獣たちのいるところ | @火日（かじつ）",
  description: "ゆるく生活をクリエイティブに。クリエイター火日のポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 💡 修正ポイント2：lang="ja"にして、className="scroll-smooth"を追加！
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}