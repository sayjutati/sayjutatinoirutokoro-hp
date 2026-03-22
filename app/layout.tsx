import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// 💡 ここがメタタグとOGP（シェアした時のカード）の設定！
export const metadata: Metadata = {
  title: '政獣たちのいるところ | @火日（かじつ）',
  description: '「ゆるく生活をクリエイティブに。」をコンセプトに、世界観を大切にしたWebサイトやクリエイティブ制作を行っています。',
  openGraph: {
    title: '政獣たちのいるところ | @火日（かじつ）',
    description: '「ゆるく生活をクリエイティブに。」をコンセプトにしたクリエイター火日のポートフォリオサイト。',
    url: 'https://sayjutatinoirutokoro-hp.vercel.app/', 
    siteName: '政獣たちのいるところ',
    images: [
      {
        url: '/images/main1.png', // 💡 Twitterなどでシェアされた時にデカデカと出る画像！
        width: 1200,
        height: 630,
        alt: '政獣たちのいるところ カバー画像',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image', // デカい画像でシェアされる設定
    title: '政獣たちのいるところ | @火日（かじつ）',
    description: 'ゆるく生活をクリエイティブに。',
    creator: '@sayju_create', // 💡 これを君の普段のアカウントIDに変えておくと◎
    images: ['/images/main1.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // 💡 地味に重要！デフォルトの "en" を "ja"（日本語）に変えておこう！
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}