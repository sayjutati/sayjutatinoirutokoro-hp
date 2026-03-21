    "use client";
    import { motion } from "framer-motion";

    export default function Hero() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-brand-light">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10">
            
            {/* 左側：テキストエリア */}
            <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
            >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                政獣たちのいるところ<br />
                <span className="text-brand-blue">@火日（かじつ）</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600">
                ゆるく生活をクリエイティブに。
            </p>
            <div className="mt-10">
                <a 
                href="#contact" 
                className="px-8 py-3 bg-brand-blue text-white rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg inline-block"
                >
                まずは無料で相談する
                </a>
            </div>
            </motion.div>

            {/* 右側：キャラクタービジュアル */}
            <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
            >
            {/* 白枠とカスタムのふんわり影を統合！ */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-8 border-white overflow-hidden bg-white shadow-[-15px_-15px_40px_rgba(253,234,237,0.8),_15px_15px_40px_rgba(232,240,254,0.8)]">
                <img 
                src="/images/main1.png" 
                alt="火日" 
                className="object-cover w-full h-full" 
                />
            </div>
            </motion.div>

        </div>
        </section>
    );
    }