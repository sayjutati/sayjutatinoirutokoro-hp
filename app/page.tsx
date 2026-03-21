import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Service from "@/components/sections/Service";
import Works from "@/components/sections/Works"; 
import Flow from "@/components/sections/Flow";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Hero />
      <About />
      <Service />
      <Works /> 
      <Flow />
      <Contact />
      
      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm border-t border-slate-800">
        <p className="font-bold tracking-widest">© 2026 政獣たちのいるところ: 火日</p>
        <p className="mt-2 text-slate-600 italic">Created with Passion and Code.</p>
      </footer>
    </main>
  );
}