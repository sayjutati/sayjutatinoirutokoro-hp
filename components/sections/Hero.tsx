    "use client";
    import { motion, Variants } from "framer-motion";

    export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.2 },
        },
    };

    const slideInVariants: Variants = {
        hidden: { opacity: 0, x: -50 }, // 💡 スマホ用にスライド距離を短く（-100 -> -50）
        visible: { 
        opacity: 1, 
        x: 0,
        transition: { type: "spring", damping: 15, stiffness: 70 }
        },
    };

    return (
        <section id="top" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-[12vh] md:pt-0">
        
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 blur-2xl scale-[1.15] opacity-80">
            <source src="/movie/movie2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-white/60 z-0 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-brand-light/50 z-0"></div>

        {/* 💡 flex-col-reverse にしてスマホでは画像を上に、テキストを下にする構成もアリだけど、今回は既存維持で調整 */}
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-between z-10 relative">
            
            {/* --- 左側：テキスト --- */}
            {/* 💡 スマホでは中央揃え（items-center, text-center）、PCでは左揃え（md:items-start, md:text-left） */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-20 mt-8 md:mt-0 order-2 md:order-1">
            <h1 className="font-extrabold leading-tight w-full flex flex-col items-center md:items-start">
                
                <motion.div variants={slideInVariants} className="text-4xl md:text-6xl">
                <motion.span 
                    animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 1 }}
                    style={{
                    backgroundImage: `linear-gradient(120deg, transparent 30%, rgba(234, 67, 53, 0.9) 50%, transparent 70%), linear-gradient(to bottom, #4285f4, #0f172a)`,
                    backgroundSize: "200% 100%, 100% 100%",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    }}
                    className="inline-block tracking-tighter pb-2"
                >
                    政獣たちのいるところ
                </motion.span>
                </motion.div>

                {/* 💡 スマホでは ml-0、PCでは ml-[3.75rem] */}
                <motion.div variants={slideInVariants} className="mt-2 md:mt-6 md:ml-[3.75rem] text-2xl md:text-5xl">
                <motion.span 
                    animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 3 }}
                    style={{
                    backgroundImage: `linear-gradient(120deg, transparent 30%, rgba(234, 67, 53, 0.9) 50%, transparent 70%), linear-gradient(to bottom, #4285f4, #0f172a)`,
                    backgroundSize: "200% 100%, 100% 100%",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    }}
                    className="inline-block tracking-tighter pb-2"
                >
                    @火日（かじつ）
                </motion.span>
                </motion.div>
            </h1>

            {/* 💡 スマホでは ml-0、PCでは ml-[7.5rem] */}
            <motion.p variants={slideInVariants} className="mt-6 md:mt-8 text-lg md:text-xl text-slate-800 font-bold md:ml-[7.5rem] drop-shadow-md">
                ゆるく生活をクリエイティブに。
            </motion.p>

            <motion.div variants={slideInVariants} className="mt-10 md:mt-12 md:ml-[7.5rem] w-full md:w-auto px-4 md:px-0">
                <motion.a 
                href="#contact" 
                animate={{ y: [0, -10, 0], boxShadow: ["0px 4px 10px rgba(66, 133, 244, 0.2)", "0px 15px 30px 5px rgba(66, 133, 244, 0.7)", "0px 4px 10px rgba(66, 133, 244, 0.2)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                // 💡 スマホではボタンを横幅いっぱい（w-full）にして押しやすく！
                className="w-full md:w-auto px-10 py-4 md:py-5 bg-brand-blue text-white rounded-full font-bold hover:bg-brand-red transition-colors inline-block text-lg md:text-xl text-center"
                >
                まずは無料で相談する
                </motion.a>
            </motion.div>
            </motion.div>

            {/* --- 右側：画像 --- */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="w-full md:w-1/2 flex justify-center relative order-1 md:order-2 mb-8 md:mb-0">
            {/* 💡 スマホでは画像を小さく（w-64 h-64）、PCでは今まで通り（w-[28rem]） */}
            <div className="relative w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-full border-4 md:border-8 border-white overflow-hidden bg-white shadow-[-10px_-10px_30px_rgba(253,234,237,0.8),_10px_10px_30px_rgba(232,240,254,0.8)] z-10">
                <img src="/images/main1.png" alt="火日" className="object-cover w-full h-full" />
            </div>
            </motion.div>

        </div>
        </section>
    );
    }