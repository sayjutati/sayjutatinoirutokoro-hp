    "use client";
    import { motion, Variants } from "framer-motion";
    import SectionTitle from "@/components/ui/SectionTitle"; // 💡 共通タイトル部品！

    // --- アイコンコンポーネント群 ---
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

    // --- Framer Motionアニメーション設定 ---
    const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
    };

    const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 }, // 💡 縦流れに合わせて横からフワッと出す
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { type: "spring", damping: 15, stiffness: 70 }
    },
    };

    const glowVariants: Variants = {
    animate: {
        opacity: [0.3, 0.7, 0.3],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
    };

    const shapeVariants: Variants = {
    animate: (i: number) => ({
        y: [0, -20 * i, 0],
        x: [0, 10 * i, 0],
        opacity: [0.1, 0.3, 0.1],
        transition: { duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" },
    }),
    };

    export default function Flow() {
    const steps = [
        { name: "Step 1", title: "ヒアリング", description: "あなたの「好き」や世界観をじっくりお聞きします。", Icon: HearingIcon, color: "brand-blue" },
        { name: "Step 2", title: "デザイン", description: "ヒアリングを元に、世界に一つだけのデザインを提案します。", Icon: DesignIcon, color: "brand-purple" },
        { name: "Step 3", title: "実装", description: "Framer Motionを駆使して、動きと質感のあるサイトを構築します。", Icon: BuildIcon, color: "brand-red" },
        { name: "Step 4", title: "納品", description: "ご確認いただき、本番公開へ。あなたのクリエイティブが形になります。", Icon: DeliveryIcon, color: "brand-green" },
    ];

    const shapes = [
        { type: "code", icon: " < /> ", className: "top-1/4 left-1/4 text-5xl" },
        { type: "art", icon: "🎨", className: "bottom-1/4 right-1/4 text-6xl" },
        { type: "gear", icon: "⚙️", className: "top-1/3 right-1/3 text-4xl" },
    ];

    return (
        <section id="flow" className="scroll-mt-[12vh] py-24 bg-brand-light relative overflow-hidden">
        
        {/* 背景の動画残像（環境光） */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 blur-3xl scale-[1.15]">
            <source src="/movie/movie2.mp4" type="video/mp4" />
            </video>
        </div>

        {/* 背景のフローティングシェイプ */}
        {shapes.map((shape, i) => (
            <motion.div 
            key={i}
            variants={shapeVariants}
            custom={i}
            animate="animate"
            // スマホでは小さく
            className={`absolute z-0 ${shape.className} text-brand-blue/30 font-black tracking-tight pointer-events-none md:scale-100 scale-75`}
            >
            {shape.icon}
            </motion.div>
        ))}

        <div className="container mx-auto px-6 relative z-10">
            
            {/* --- セクションタイトル --- */}
            <SectionTitle en="Flow" ja="制作の流れ" watermark="FLOW" color="green" />

            {/* --- 💡 極上タイムラインコンテナ --- */}
            <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-4xl mx-auto flex flex-col"
            >
            {steps.map((step, i) => (
                <motion.div 
                key={i}
                variants={itemVariants}
                // スマホでもPCでも左に線、右にコンテンツの美しいレイアウト！
                className="flex flex-row gap-4 md:gap-8 lg:gap-12 relative"
                >
                
                {/* 💡 1. 左側のタイムライン（スパイン） */}
                <div className="flex flex-col items-center">
                    {/* 番号の丸 */}
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-3xl font-black border-4 border-${step.color}/20 bg-${step.color}/10 shadow-lg text-${step.color} relative z-10 shrink-0`}>
                    0{i + 1}
                    </div>
                    {/* 次のステップへ繋がるグラデーション線（最後のステップ以外） */}
                    {i < steps.length - 1 && (
                    <div className={`w-1 md:w-1.5 h-full bg-gradient-to-b from-${step.color} to-${steps[i+1].color} rounded-full my-2 opacity-50`}></div>
                    )}
                </div>

                {/* 💡 2. 右側のコンテンツブロック */}
                {/* 最後のブロック以外は下部に余白を空けて、線の長さを確保する */}
                <div className={`flex-1 ${i < steps.length - 1 ? 'pb-12 md:pb-16' : ''}`}>
                    
                    {/* メインの白いカード */}
                    <div className="flex flex-col gap-4 md:gap-6 bg-white p-5 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                    
                    {/* アイコンとStep名 */}
                    <div className={`flex items-center gap-3 md:gap-4 text-${step.color}`}>
                        <div className={`w-10 h-10 md:w-12 md:h-12 bg-${step.color}/5 rounded-xl p-2 md:p-2.5`}>
                        <step.Icon className="w-full h-full" />
                        </div>
                        <span className={`text-xs md:text-sm font-black uppercase tracking-widest`}>{step.name}</span>
                    </div>

                    {/* Terminal-Creative コンテナ（About等と統一！） */}
                    <motion.div 
                        whileHover={{ y: -5, boxShadow: `0px 10px 20px rgba(66, 133, 244, 0.08)` }}
                        // スマホ時はパディングを p-6 に最適化
                        className="w-full text-left relative bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-slate-800 shadow-[inset_0_0_15px_rgba(66,133,244,0.1)] overflow-hidden"
                    >
                        {/* スマホ時は装飾の文字サイズを text-xl に縮小 */}
                        <motion.span variants={glowVariants} animate="animate" className={`absolute top-4 left-4 text-xl md:text-3xl font-black text-${step.color}/70`}>{`{`}</motion.span>
                        <motion.span variants={glowVariants} animate="animate" className={`absolute top-4 right-4 text-xl md:text-3xl font-black text-${step.color}/70`}>{`}`}</motion.span>
                        <motion.span variants={glowVariants} animate="animate" className={`absolute bottom-4 left-4 text-xl md:text-3xl font-black text-${step.color}/70`}>{`< />`}</motion.span>

                        {/* タイトル */}
                        <h3 className="font-black text-2xl md:text-4xl leading-tight mb-4 md:mb-8 w-full inline-block mt-2 md:mt-0"> 
                        <motion.span 
                            animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 1 + i * 0.2 }}
                            style={{
                            backgroundImage: `linear-gradient(120deg, transparent 30%, rgba(234, 67, 53, 0.9) 50%, transparent 70%), linear-gradient(to bottom, #4285f4, #0f172a)`,
                            backgroundSize: "200% 100%, 100% 100%",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            }}
                            className="inline-block tracking-tighter pb-1 md:pb-2"
                        >
                            {step.title}
                        </motion.span>
                        </h3>

                        {/* 説明文 */}
                        <p className="text-slate-700 leading-relaxed font-medium text-sm md:text-xl">
                        {step.description}
                        </p>
                    </motion.div>

                    </div>
                </div>

                </motion.div>
            ))}
            </motion.div>

        </div>
        </section>
    );
    }