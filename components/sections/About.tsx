    "use client";
    import { motion, AnimatePresence } from "framer-motion"; // 💡 motion インポート確認
    import { useState, useEffect } from "react";

    export default function About() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const tatieImages = ["/images/tatie1.png", "/images/tatie2.png"];

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % tatieImages.length);
        }, 5000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="scroll-mt-[12vh] py-24 bg-white relative overflow-hidden">
        
        {/* 背景の動画残像（環境光） */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 blur-3xl scale-[1.15]">
            <source src="/movie/movie2.mp4" type="video/mp4" />
            </video>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-[12vh]">
            
            {/* --- セクションタイトル --- */}
            <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                About Me
            </h2>
            <div className="mt-4 h-1.5 bg-brand-blue mx-auto rounded-full w-20"></div>
            </div>

            {/* --- コンテンツエリア --- */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 max-w-6xl mx-auto pt-[12vh]">
            
            {/* 左側：テキストエリア */}
            <div className="md:w-3/5 text-left flex flex-col items-start">
                
                {/* 💡 修正箇所：サブタイトル（サイズアップ、青系、赤い光） */}
                {/* 1. サイズアップ: text-2xl md:text-3xl -> text-4xl md:text-5xl (1.5倍!) */}
                {/* 2. 赤い光が通り抜けるアニメーションのため inline-block */}
                <motion.h3 
                // 💡 確実に表示させるためアニメーションなし
                className="font-black text-4xl md:text-5xl leading-snug tracking-tight mb-10 w-full inline-block" // サイズアップ、余白調整、inline-block
                > 
                {/* 💡 1行目：グラデーションとアニメーション（Hero流用） */}
                <motion.span 
                    // 💡 赤い光がループして通り抜けるアニメーション
                    animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 1 }}
                    style={{
                    // 💡 1つ目: 通り抜ける赤い光のグラデーション（斜め）
                    // 💡 2つ目: 上（青）から下（濃い青/黒）へのデフォルトグラデーション（ユーザー要望の青系）
                    backgroundImage: `
                        linear-gradient(120deg, transparent 30%, rgba(234, 67, 53, 0.9) 50%, transparent 70%),
                        linear-gradient(to bottom, #4285f4, #0f172a)
                    `,
                    backgroundSize: "200% 100%, 100% 100%",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    }}
                    className="inline-block tracking-tighter pb-2"
                >
                    あなたの「好き」を
                </motion.span>
                <br /> {/* 改行はグラデーション span の外に置く */}
                {/* 💡 2行目：グラデーションとアニメーション（delay調整で1行目の光が過ぎた後に開始） */}
                <motion.span 
                    animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                    // 💡 2行目：タイミングを半周期＝2秒ずらすために delay: 3）
                    transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 3 }}
                    style={{
                    backgroundImage: `
                        linear-gradient(120deg, transparent 30%, rgba(234, 67, 53, 0.9) 50%, transparent 70%),
                        linear-gradient(to bottom, #4285f4, #0f172a)
                    `,
                    backgroundSize: "200% 100%, 100% 100%",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    }}
                    className="inline-block tracking-tighter pb-2"
                >
                    世界に一つだけのカタチに
                </motion.span>
                </motion.h3>

                {/* 本文エリア */}
                <div className="space-y-6 md:space-y-8 text-slate-700 leading-relaxed font-medium text-lg md:text-xl">
                <p>
                    政獣たちのいるところで生活するクリエイター、
                    <span className="text-brand-blue font-bold text-2xl md:text-3xl mx-1">火日（かじつ）</span>です。
                </p>
                <p>
                    「ゆるく生活をクリエイティブに。」をコンセプトに「世界観」を大切にした創作活動を行っています。
                </p>
                <p>
                    「政獣たちのいるところ」という名前は<br />自分の中にいるたくさんの個性たちが自由にゆるく<br />でも本気でクリエイティブに向き合える場所、という意味を込めています。
                </p>
                <p>
                    あなたの「好き」や「伝えたい」という想いを<br />私の技術と感性で
                </p>
                <p>
                    世界に一つだけの魅力的なカタチにするお手伝いをさせてください。
                </p>
                </div>
            </div>

            {/* 右側：立ち絵ローテーション（四角いおしゃれな枠）省略 */}
            <div className="md:w-2/5 flex flex-col items-center justify-center relative">
                <div className="relative z-10 flex justify-center w-80 h-80 md:w-[28rem] md:h-[44rem] border border-slate-200 rounded-2xl bg-white shadow-[0_0_30px_rgba(66,133,244,0.15)] p-4">
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

        </div>
        </section>
    );
    }