import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Service from "@/components/sections/Service";
import Flow from "@/components/sections/Flow";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Hero />
      <About />
      <Service />
      <Flow />
      <Contact />
      
      {/* 簡易フッター */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>© 2026 政獣たちのいるところ: 火日. All rights reserved.</p>
      </footer>
    </main>
  );
}