    "use client";
    import { motion, Variants, AnimatePresence } from "framer-motion";
    import { useState, useEffect } from "react";
    import SectionTitle from "@/components/ui/SectionTitle"; // 💡 共通タイトル部品をインポート！

    export default function About() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, 
        },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 }, 
        visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 70
        }
        },
    };

    // glowing blue コーナーブラケットのアニメーション
    const glowVariants: Variants = {
        animate: {
        opacity: [0.4, 0.8, 0.4],
        transition: {
            duration: 4,       
            repeat: Infinity,  
            ease: "easeInOut"
        },
        },
    };

    // 背景のフローティングシェイプのアニメーション
    const shapeVariants: Variants = {
        animate: (i: number) => ({
        y: [0, -20 * i, 0],
        x: [0, 10 * i, 0],
        opacity: [0.1, 0.3, 0.1],
        transition: {
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
        },
        }),
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const tatieImages = ["/images/tatie1.png", "/images/tatie2.png"];

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % tatieImages.length);
        }, 5000); 
        return () => clearInterval(interval);
    }, []);

    const shapes = [
        { type: "code", icon: " < /> ", className: "top-1/4 left-1/4 text-5xl" },
        { type: "art", icon: "🎨", className: "bottom-1/4 right-1/4 text-6xl" },
        { type: "gear", icon: "⚙️", className: "top-1/3 right-1/3 text-4xl" },
    ];

    return (
        <section id="about" className="scroll-mt-[12vh] py-24 bg-white relative overflow-hidden">
        
        {/* 背景の動画残像（環境光） */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 blur-3xl scale-[1.15]">
            <source src="/movie/movie2.mp4" type="video/mp4" />
            </video>
        </div>

        {/* 背景のフローティング・クリエイティブ・シェイプ */}
        {shapes.map((shape, i) => (
            <motion.div 
            key={i}
            variants={shapeVariants}
            custom={i}
            animate="animate"
            // 💡 スマホでは少し小さく表示されるように調整
            className={`absolute z-0 ${shape.className} text-brand-blue/30 font-black tracking-tight pointer-events-none md:scale-100 scale-75`}
            >
            {shape.icon}
            </motion.div>
        ))}

        <div className="container mx-auto px-6 relative z-10">
            
            {/* --- セクションタイトル（共通部品呼び出し！） --- */}
            <SectionTitle en="About Me" ja="私について" watermark="ABOUT" color="blue" />

            {/* オシャレ空間「Terminal-Creative」コンテナ */}
            <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            // 💡 スマホ時は余白を少し狭く（p-6）、PC時は広く（md:p-12）
            className="relative max-w-7xl mx-auto p-6 md:p-12 rounded-[2rem] border border-slate-800 shadow-[inset_0_0_15px_rgba(66,133,244,0.1)] bg-white overflow-hidden" 
            >
            
            {/* glowing blue コーナーブラケット */}
            <motion.span variants={glowVariants} animate="animate" className="absolute top-4 left-4 text-2xl md:text-3xl font-black text-brand-blue/70">{`{`}</motion.span>
            <motion.span variants={glowVariants} animate="animate" className="absolute top-4 right-4 text-2xl md:text-3xl font-black text-brand-blue/70">{`}`}</motion.span>
            <motion.span variants={glowVariants} animate="animate" className="absolute bottom-4 left-4 text-2xl md:text-3xl font-black text-brand-blue/70">{`< />`}</motion.span>
            <motion.span variants={glowVariants} animate="animate" className="absolute bottom-4 right-4 text-xl md:text-3xl font-black text-brand-blue/70 text-slate-400"># Art</motion.span>

            {/* コンテンツエリア */}
            {/* 💡 スマホは flex-col-reverse（画像が上、テキストが下）、PCは flex-row */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 z-10 relative pt-4 md:pt-[4vh]">
                
                {/* 左側：テキストエリア */}
                <div className="w-full md:w-3/5 text-left flex flex-col items-start">
                
                {/* サブタイトル */}
                {/* 💡 スマホ時は text-3xl に縮小して改行崩れを防止、PC時は text-5xl */}
                <h3 className="font-black text-3xl md:text-5xl leading-snug tracking-tight mb-8 md:mb-10 w-full inline-block"> 
                    <motion.span 
                    animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 1 }}
                    style={{
                        backgroundImage: `linear-gradient(120deg, transparent 30%, rgba(234, 67, 53, 0.9) 50%, transparent 70%), linear-gradient(to bottom, #4285f4, #0f172a)`,
                        backgroundSize: "200% 100%, 100% 100%",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                    }}
                    className="inline-block tracking-tighter pb-1 md:pb-2"
                    >
                    あなたの「好き」を
                    </motion.span>
                    <br />
                    <motion.span 
                    animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 3 }}
                    style={{
                        backgroundImage: `linear-gradient(120deg, transparent 30%, rgba(234, 67, 53, 0.9) 50%, transparent 70%), linear-gradient(to bottom, #4285f4, #0f172a)`,
                        backgroundSize: "200% 100%, 100% 100%",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                    }}
                    className="inline-block tracking-tighter pb-1 md:pb-2 mt-2 md:mt-0"
                    >
                    世界に一つだけのカタチに
                    </motion.span>
                </h3>

                {/* 本文エリア */}
                {/* 💡 スマホ時は text-base、PC時は text-xl に最適化 */}
                <motion.div variants={itemVariants} className="space-y-6 md:space-y-8 text-slate-700 leading-relaxed font-medium text-base md:text-xl">
                    <p>
                    政獣たちのいるところで生活するクリエイター、
                    <span className="text-brand-blue font-bold text-xl md:text-3xl mx-1">火日（かじつ）</span>です。
                    </p>
                    <p>
                    「ゆるく生活をクリエイティブに。」をコンセプトに「世界観」を大切にした創作活動を行っています。
                    </p>
                    <p>
                    「政獣たちのいるところ」という名前は<br className="hidden md:block" />自分の中にいるたくさんの個性たちが自由にゆるく<br className="hidden md:block" />でも本気でクリエイティブに向き合える場所、という意味を込めています。
                    </p>
                    <p>
                    あなたの「好き」や「伝えたい」という想いを<br className="hidden md:block" />私の技術と感性で
                    </p>
                    <p>
                    世界に一つだけの魅力的なカタチにするお手伝いをさせてください。
                    </p>
                </motion.div>
                </div>

                {/* 右側：立ち絵ローテーション */}
                <div className="w-full md:w-2/5 flex flex-col items-center justify-center relative mt-6 md:mt-0">
                {/* 💡 スマホ時は w-64 h-[24rem]（少しスリムに）、PC時は今まで通りに！ */}
                <div className="relative z-10 flex justify-center w-64 h-[24rem] md:w-[28rem] md:h-[44rem] border border-slate-200 rounded-2xl bg-white shadow-[0_0_30px_rgba(66,133,244,0.15)] p-4">
                    <AnimatePresence mode="wait">
                    <motion.img 
                        key={currentImageIndex}
                        src={tatieImages[currentImageIndex]} 
                        alt="火日立ち絵" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="object-contain w-full h-full mix-blend-multiply" 
                    />
                    </AnimatePresence>
                </div>
                </div>
                
            </div>
            </motion.div>

        </div>
        </section>
    );
    }