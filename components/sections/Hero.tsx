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
        hidden: { opacity: 0, x: -100 }, 
        visible: { 
        opacity: 1, 
        x: 0,
        transition: { type: "spring", damping: 15, stiffness: 70 }
        },
    };

    return (
        // 💡 修正ポイント: id="top" を追加してメニューから飛べるように！
        <section id="top" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 blur-2xl scale-[1.15] opacity-80">
            <source src="/movie/movie2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-white/60 z-0 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-brand-light/50 z-0"></div>

        {/* 💡 修正ポイント: pt-[12vh] を追加して、ヘッダーの高さ分だけ中身を押し下げる（被り防止！） */}
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10 relative pt-[12vh]">
            
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="md:w-1/2 text-left flex flex-col items-start">
            <h1 className="font-extrabold leading-tight w-full">
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

                <motion.div variants={slideInVariants} className="mt-6 ml-[2.25rem] md:ml-[3.75rem] text-3xl md:text-5xl">
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

            <motion.p variants={slideInVariants} className="mt-6 text-xl text-slate-800 font-bold ml-[4.5rem] md:ml-[7.5rem] drop-shadow-md">
                ゆるく生活をクリエイティブに。
            </motion.p>

            <motion.div variants={slideInVariants} className="mt-12 ml-[4.5rem] md:ml-[7.5rem]">
                <motion.a 
                href="#contact" 
                animate={{ y: [0, -10, 0], boxShadow: ["0px 4px 10px rgba(66, 133, 244, 0.2)", "0px 15px 30px 5px rgba(66, 133, 244, 0.7)", "0px 4px 10px rgba(66, 133, 244, 0.2)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="px-20 py-5 bg-brand-blue text-white rounded-full font-bold hover:bg-brand-red transition-colors inline-block text-lg md:text-xl text-center"
                >
                まずは無料で相談する
                </motion.a>
            </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative">
            <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full border-8 border-white overflow-hidden bg-white shadow-[-15px_-15px_40px_rgba(253,234,237,0.8),_15px_15px_40px_rgba(232,240,254,0.8)] z-10">
                <img src="/images/main1.png" alt="火日" className="object-cover w-full h-full" />
            </div>
            </motion.div>

        </div>
        </section>
    );
    }