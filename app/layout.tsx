import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// 🟢 メタタグとOGP（Twitterシェア等のカード）の最強設定！
export const metadata: Metadata = {
  // 💡 Twitterクローラーが迷子にならないように、基準となる絶対URLを明記！(これで画像エラーを防ぐ)
  metadataBase: new URL('https://sayjutatinoirutokoro-hp.vercel.app/'),
  title: '政獣たちのいるところ | @火日（かじつ）',
  description: '「ゆるく生活をクリエイティブに。」をコンセプトに、世界観を大切にしたWebサイトやクリエイティブ制作を行っています。',
  openGraph: {
    title: '政獣たちのいるところ | @火日（かじつ）',
    description: '「ゆるく生活をクリエイティブに。」をコンセプトにしたクリエイター火日のポートフォリオサイト。',
    url: '/', 
    siteName: '政獣たちのいるところ',
    images: [
      {
        url: '/images/main1.png', // 💡 public/images/main1.png が確実に参照される！
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
    creator: '@sayju_create', // 💡 自分のTwitterアカウントIDになってるか確認！
    images: ['/images/main1.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}