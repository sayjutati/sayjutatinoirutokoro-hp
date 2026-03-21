import Header from "@/components/layout/Header"; // ヘッダー追加！
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Service from "@/components/sections/Service";
import Works from "@/components/sections/Works";
import Flow from "@/components/sections/Flow";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer"; // フッター追加！

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* 画面の一番上にヘッダーを配置 */}
      <Header />
      
      {/* ヘッダーの高さ(15vh)の分だけ、Heroセクションの中身が隠れないように全体のレイアウトが調整される。
          ※Hero自体は画面全体に広がるから、すりガラスのヘッダー越しに動画が見えて超綺麗になるぜ！ */}
      <Hero />
      <About />
      <Service />
      <Works />
      <Flow />
      <Contact />
      
      {/* 画面の一番下にフッターを配置（既存の短いfooter要素は消して、こっちに差し替え！） */}
      <Footer />
    </main>
  );
}