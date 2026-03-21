    "use client";
    import { useState } from "react";
    import { motion, AnimatePresence } from "framer-motion";

    export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Top", href: "#top" },
        { name: "About", href: "#about" },
        { name: "Service", href: "#service" },
        { name: "Works", href: "#works" },
        { name: "Flow", href: "#flow" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 w-full h-[12vh] bg-white/70 backdrop-blur-md z-50 border-b border-slate-200/50 shadow-sm flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center w-full">
            
            {/* --- 左側：アイコン ＆ 名前 --- */}
            <a href="#top" className="flex items-center gap-4 group">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-brand-blue shadow-md group-hover:scale-105 transition-transform duration-300 bg-white">
                <img src="/images/main2.png" alt="火日アイコン" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
                <span className="font-extrabold text-lg md:text-xl text-slate-800 tracking-wider">
                政獣たちのいるところ
                </span>
                <span className="text-xs md:text-sm text-brand-blue font-bold">
                @火日（かじつ）
                </span>
            </div>
            </a>

            {/* --- 右側：PC用メニューバー --- */}
            {/* 💡 修正ポイント: gapを広げて、テキストを text-xl に！ hover:-translate-y-1 で浮かす！ */}
            <nav className="hidden md:flex gap-8 lg:gap-10 items-center">
            {navLinks.map((link) => (
                <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 font-bold hover:text-brand-blue transition-all duration-300 hover:-translate-y-1 uppercase tracking-widest text-xl inline-block"
                >
                {link.name}
                </a>
            ))}
            {/* ボタンも少し大きく(text-lg)して浮かす！ */}
            <a 
                href="#contact" 
                className="px-8 py-3 bg-brand-blue text-white rounded-full font-bold hover:bg-brand-red transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-md text-lg ml-4 inline-block"
            >
                Contact
            </a>
            </nav>

            {/* --- モバイル用：バーガーボタン --- */}
            <button 
            className="md:hidden flex flex-col justify-center items-center w-12 h-12 space-y-1.5 z-50 bg-white/50 rounded-full" 
            onClick={toggleMenu}
            >
            <motion.span animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-slate-800 block transition-transform"></motion.span>
            <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-slate-800 block transition-opacity"></motion.span>
            <motion.span animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-slate-800 block transition-transform"></motion.span>
            </button>
        </div>

        {/* --- モバイル用：展開メニュー --- */}
        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-[12vh] left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col items-center py-10 gap-8 md:hidden border-t border-slate-100"
            >
                {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={toggleMenu} className="text-3xl font-black text-slate-800 hover:text-brand-blue tracking-widest">
                    {link.name}
                </a>
                ))}
                <a href="#contact" onClick={toggleMenu} className="mt-4 px-10 py-4 bg-brand-red text-white rounded-full font-bold shadow-lg text-xl">
                Contact
                </a>
            </motion.div>
            )}
        </AnimatePresence>
        </header>
    );
    }