    "use client";
    import { useState, useEffect } from "react";
    import { motion, AnimatePresence } from "framer-motion";

    export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
        document.body.style.overflow = "hidden";
        } else {
        document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    const navLinks = [
        { name: "Top", href: "#top" },
        { name: "About", href: "#about" },
        { name: "Service", href: "#service" },
        { name: "Works", href: "#works" },
        { name: "Flow", href: "#flow" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 w-full h-[12vh] bg-white/80 backdrop-blur-md z-50 border-b border-slate-200/50 shadow-sm flex items-center">
        <div className="container mx-auto px-6 flex justify-between items-center w-full relative">
            
            {/* --- 左側：アイコン ＆ 名前 --- */}
            <a href="#top" className="flex items-center gap-3 md:gap-4 group z-50" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-brand-blue shadow-md group-hover:scale-105 transition-transform duration-300 bg-white flex-shrink-0">
                <img src="/images/main2.png" alt="火日アイコン" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
                <span className="font-extrabold text-base md:text-xl text-slate-800 tracking-wider">
                政獣たちのいるところ
                </span>
                <span className="text-[10px] md:text-sm text-brand-blue font-bold">
                @火日（かじつ）
                </span>
            </div>
            </a>

            {/* --- 右側：PC用メニューバー --- */}
            <nav className="hidden md:flex gap-8 lg:gap-10 items-center">
            {navLinks.map((link) => (
                <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 font-bold hover:text-brand-blue transition-all duration-300 hover:-translate-y-1 uppercase tracking-widest text-lg inline-block"
                >
                {link.name}
                </a>
            ))}
            <a 
                href="#contact" 
                className="px-8 py-3 bg-brand-blue text-white rounded-full font-bold hover:bg-brand-red transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-md text-lg ml-4 inline-block"
            >
                Contact
            </a>
            </nav>

            {/* --- モバイル用：バーガーボタン --- */}
            <button 
            className="md:hidden flex flex-col justify-center items-center w-12 h-12 space-y-1.5 z-50 bg-slate-100/50 rounded-full active:bg-slate-200 relative" 
            onClick={toggleMenu}
            aria-label="メニューを開く"
            >
            <motion.span animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-slate-800 block transition-transform"></motion.span>
            <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-slate-800 block transition-opacity"></motion.span>
            <motion.span animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-slate-800 block transition-transform"></motion.span>
            </button>
        </div>

        {/* --- モバイル用：展開メニュー（縦幅圧縮版） --- */}
        <AnimatePresence>
            {isOpen && (
            <>
                {/* メニューの外側をタップして閉じるための透明な背景（オーバーレイ） */}
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 top-[12vh] z-30 md:hidden"
                />

                {/* 右上に浮かぶコンパクトなメニュー本体 */}
                <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                // 💡 修正ポイント: コンテナの上下余白を py-6 -> py-4 に圧縮！
                className="fixed top-[13vh] right-4 w-64 bg-white/95 backdrop-blur-2xl shadow-2xl rounded-2xl flex flex-col items-center py-4 md:hidden z-40 border border-slate-100/50"
                >
                {/* 💡 修正ポイント: 要素間の余白を gap-4 -> gap-1 に圧縮！ */}
                <div className="flex flex-col items-center gap-1 w-full px-4">
                    {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        onClick={toggleMenu} 
                        // 💡 修正ポイント: リンク自体の余白も py-2 -> py-1.5 に圧縮！
                        className="text-lg font-black text-slate-800 hover:text-brand-blue tracking-widest w-full text-center py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                        {link.name}
                    </a>
                    ))}
                    
                    {/* 区切り線 */}
                    <div className="w-full h-px bg-slate-100 my-2"></div>

                    <a 
                    href="#contact" 
                    onClick={toggleMenu} 
                    // 💡 修正ポイント: ボタンの余白も少しだけ圧縮 (py-3 -> py-2.5)
                    className="mt-1 w-full text-center py-2.5 bg-brand-blue text-white rounded-xl font-black shadow-md hover:shadow-lg text-sm transition-all active:scale-95"
                    >
                    無料相談・お問い合わせ
                    </a>
                </div>
                </motion.div>
            </>
            )}
        </AnimatePresence>
        </header>
    );
    }