    "use client";
    import { motion, Variants, AnimatePresence } from "framer-motion";
    import { useState, useEffect } from "react";

    // --- アイコンコンポーネント群（ Aboutから継承） ---
    function HearingIcon({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>
    );
    }
    function DesignIcon({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8l4 4-4 4-4-4 4-4z"/><path d="M12 2v20"/><path d="M2 12h20"/></svg>
    );
    }
    function BuildIcon({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="10" y1="22" x2="14" y2="2"/></svg>
    );
    }
    function DeliveryIcon({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    );
    }

    // --- Framer Motionアニメーション設定（ Aboutを継承・調整） ---

    const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.2, // 0.2秒ずつ順番に登場させる
        },
    },
    };

    const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 }, // 下からスライドイン
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
        duration: 4,       // ゆっくり呼吸
        repeat: Infinity,  // ループさせる
        ease: "easeInOut"
        },
    },
    };

    // 背景のフローティングシェイプのアニメーション（ Aboutを継承・調整）
    const shapeVariants: Variants = {
    animate: (i: number) => ({
        y: [0, -20 * i, 0],
        x: [0, 10 * i, 0],
        opacity: [0.1, 0.3, 0.1],
        transition: {
        duration: 10 + i * 2, // 異なるスピードで
        repeat: Infinity,
        ease: "easeInOut"
        },
    }),
    };

    export default function Flow() {
    // ステップデータ（追加した緑・紫・黄色を活用！）
    const steps = [
        { name: "Step 1", title: "ヒアリング", description: "あなたの「好き」や世界観をじっくりお聞きします。", Icon: HearingIcon, color: "brand-blue" },
        { name: "Step 2", title: "デザイン", description: "ヒアリングを元に、世界に一つだけのデザインを提案します。", Icon: DesignIcon, color: "brand-purple" }, // 紫追加！
        { name: "Step 3", title: "実装", description: "Framer Motionを駆使して、動きと質感のあるサイトを構築します。", Icon: BuildIcon, color: "brand-red" },
        { name: "Step 4", title: "納品", description: "ご確認いただき、本番公開へ。あなたのクリエイティブが形になります。", Icon: DeliveryIcon, color: "brand-green" }, // 緑追加！
    ];

    // 背景のフローティングシェイプの定義
    const shapes = [
        { type: "code", icon: " < /> ", className: "top-1/4 left-1/4 text-5xl" },
        { type: "art", icon: "🎨", className: "bottom-1/4 right-1/4 text-6xl" },
        { type: "gear", icon: "⚙️", className: "top-1/3 right-1/3 text-4xl" },
    ];

    return (
        // 💡 scroll-mt-[12vh] は必須！
        <section id="flow" className="scroll-mt-[12vh] py-24 bg-brand-light relative overflow-hidden">
        
        {/* 背景の動画背景の残像（環境光） */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 blur-3xl scale-[1.15]">
            <source src="/movie/movie2.mp4" type="video/mp4" />
            </video>
        </div>

        {/* 背景のフローティング・クリエイティブ・シェイプ（ Aboutを継承） */}
        {shapes.map((shape, i) => (
            <motion.div 
            key={i}
            variants={shapeVariants}
            custom={i}
            animate="animate"
            className={`absolute z-0 ${shape.className} text-brand-blue/30 font-black tracking-tight pointer-events-none`}
            >
            {shape.icon}
            </motion.div>
        ))}

        <div className="container mx-auto px-6 relative z-10 pt-[12vh]">
            
            {/* --- セクションタイトル（ motion統合） --- */}
            {/* Aboutのタイトルを motion統合して再実装 */}
            <div className="text-center mb-16 md:mb-24">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
            >
                依頼から制作の流れ
            </motion.h2>
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 h-1.5 bg-brand-blue mx-auto rounded-full"
            ></motion.div>
            </div>

            {/* --- ステップコンテナ（縦流れ・staggerChildren統合） --- */}
            <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-12 lg:gap-16 max-w-7xl mx-auto"
            >
            {steps.map((step, i) => (
                <motion.div 
                key={i}
                variants={itemVariants}
                // 💡 修正ポイント: 縦並びのオシャレ空間「Terminal-Creative」ブロック形式へ
                className={`flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-200 transition-all duration-300 shadow-sm relative overflow-hidden`}
                >
                {/* 💡 【新規実装】オシャレタイムライン（縦に流すスパイン） */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className={`flex flex-col items-center gap-2 text-${step.color}`}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl font-black border-4 border-${step.color}/20 bg-${step.color}/10 shadow-lg`}>
                        0{i + 1}
                    </div>
                    {i < steps.length - 1 && (
                        <div className={`w-1 h-full bg-gradient-to-b from-${step.color} to-${steps[i+1].color} rounded-full`}></div>
                    )}
                    </div>
                    <div className={`flex flex-col gap-2 text-${step.color}`}>
                    {/* 💡 アイコン */}
                    <div className={`w-14 h-14`}>
                        <step.Icon className="w-full h-full" />
                    </div>
                    {/* 💡 ステップ名 */}
                    <span className={`text-xs font-bold uppercase tracking-widest`}>{step.name}</span>
                    </div>
                </div>

                {/* 💡 【修正ポイント】Aboutの「Terminal-Creative」コンテナを継承（枠線とinset shadow） */}
                <motion.div 
                    whileHover={{ y: -10, boxShadow: `0px 10px 20px rgba(66, 133, 244, 0.1)` }} // ホバーで浮かせる
                    className="flex-1 text-left relative bg-white p-8 md:p-10 rounded-[2rem] border border-slate-800 shadow-[inset_0_0_15px_rgba(66,133,244,0.1)] overflow-hidden" // 💡 洗練された枠と光
                >
                    
                    {/* 💡 glowing blue コーナーブラケットを流用し、ステップごとにカラーを変える */}
                    {/* glowVariants を Aboutから継承 */}
                    <motion.span variants={glowVariants} animate="animate" className={`absolute top-4 left-4 text-3xl font-black text-${step.color}/70`}>{`{`}</motion.span>
                    <motion.span variants={glowVariants} animate="animate" className={`absolute top-4 right-4 text-3xl font-black text-${step.color}/70`}>{`}`}</motion.span>
                    <motion.span variants={glowVariants} animate="animate" className={`absolute bottom-4 left-4 text-3xl font-black text-${step.color}/70`}>{`< />`}</motion.span>
                    <motion.span variants={glowVariants} animate="animate" className={`absolute bottom-4 right-4 text-3xl font-black text-${step.color}/70 text-slate-400`}># Art</motion.span>

                    {/* 💡 ステップタイトル（Framer Motionで登場、デザイン/実装は shineVariants継承！） */}
                    {/* Aboutのタイトルコールを継承 */}
                    <h3 className="font-black text-3xl md:text-4xl leading-tight mb-8 w-full inline-block"> 
                    {/* アニメーション delay調整 */}
                    <motion.span 
                        animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 1 + i * 0.2 }}
                        style={{
                        backgroundImage: `linear-gradient(120deg, transparent 30%, rgba(234, 67, 53, 0.9) 50%, transparent 70%), linear-gradient(to bottom, #4285f4, #0f172a)`,
                        backgroundSize: "200% 100%, 100% 100%",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        }}
                        className="inline-block tracking-tighter pb-2"
                    >
                        {step.title}
                    </motion.span>
                    </h3>

                    {/* 💡 ステップ説明 */}
                    <p className="mt-4 text-slate-700 leading-relaxed font-medium text-lg md:text-xl">
                    {step.description}
                    </p>

                </motion.div>
                </motion.div>
            ))}
            </motion.div>
        </div>
        </section>
    );
    }