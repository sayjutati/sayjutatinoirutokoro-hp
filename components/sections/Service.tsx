    "use client";
    import { motion, Variants } from "framer-motion";
    import SectionTitle from "@/components/ui/SectionTitle";

    export default function Service() {
    const plans = [
        {
        name: "ライトプラン",
        price: "3,000",
        description: "まずは名刺代わりのサイトが欲しい方へ",
        features: ["構成・レイアウト固定", "カラー・テキスト変更可能", "画像10枚まで掲載", "レスポンシブ対応"],
        color: "brand-blue",
        recommended: false
        },
        {
        name: "スタンダードプラン",
        price: "10,000",
        description: "こだわりと世界観を詰め込みたい方へ",
        features: ["ヒアリングによるデザイン微調整", "リッチなアニメーション実装", "YouTube等の動画埋め込み(2個)", "SEO基本設定"],
        color: "brand-red",
        recommended: true
        }
    ];

    const options = [
        { title: "画像追加", price: "+¥500", note: "2枚ごと", type: "blue" },
        { title: "動画追加", price: "+¥1,000", note: "1個ごと", type: "red" },
        { title: "ドメイン設定", price: "+¥5,000", note: "代行費用", type: "blue" },
        { title: "その他オプションの相談", price: "+¥1,000 ~", note: "相談に応じて", type: "purple" }
    ];

    // アニメーション設定
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
        opacity: 1, 
        y: 0,
        transition: { type: "spring", damping: 15, stiffness: 70 }
        },
    };

    // 呼吸する青いブラケット用アニメーション
    const glowVariants: Variants = {
        animate: {
        opacity: [0.3, 0.7, 0.3],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        },
    };

    return (
        <section id="service" className="scroll-mt-[12vh] py-24 bg-brand-light relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            
            {/* --- セクションタイトル（共通コンポーネント！） --- */}
            <SectionTitle en="Service & Price" ja="提供プランと料金" watermark="SERVICE" color="red" />

            {/* --- プランカード --- */}
            <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            // 💡 スマホでは縦並び（flex-col）、PCでは横並び（md:flex-row）
            className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch"
            >
            {plans.map((plan, i) => (
                <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: plan.recommended ? "0px 20px 40px rgba(234, 67, 53, 0.2)" : "0px 20px 40px rgba(66, 133, 244, 0.1)" }}
                // 💡 Terminal-Creative仕様のオシャレなカード！
                className={`flex-1 relative bg-white rounded-[2.5rem] border transition-all duration-300 overflow-hidden flex flex-col p-8 md:p-10 lg:p-12
                    ${plan.recommended 
                    ? 'border-brand-red shadow-[inset_0_0_20px_rgba(234,67,53,0.05)] md:scale-105 z-10' 
                    : 'border-slate-200 hover:border-slate-800 shadow-[inset_0_0_15px_rgba(66,133,244,0.02)] hover:shadow-[inset_0_0_15px_rgba(66,133,244,0.1)]'
                    }`}
                >
                {/* 💡 装飾：コーナーブラケット */}
                <motion.span variants={glowVariants} animate="animate" className={`absolute top-4 left-5 text-2xl font-black ${plan.recommended ? 'text-brand-red/40' : 'text-brand-blue/30'}`}>{`{`}</motion.span>
                <motion.span variants={glowVariants} animate="animate" className={`absolute top-4 right-5 text-2xl font-black ${plan.recommended ? 'text-brand-red/40' : 'text-brand-blue/30'}`}>{`}`}</motion.span>
                <motion.span variants={glowVariants} animate="animate" className={`absolute bottom-4 left-5 text-2xl font-black ${plan.recommended ? 'text-brand-red/40' : 'text-brand-blue/30'}`}>{`< />`}</motion.span>

                {plan.recommended && (
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-red to-orange-400"></div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                    {plan.recommended && (
                    <span className="self-start inline-block bg-brand-red text-white text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full shadow-md tracking-widest uppercase mb-6">
                        Recommended
                    </span>
                    )}
                    
                    <h3 className={`text-xl md:text-2xl font-black mb-2 uppercase tracking-tight ${plan.recommended ? 'text-brand-red' : 'text-slate-800'}`}>
                    {plan.name}
                    </h3>
                    
                    <div className="flex items-baseline mb-4">
                    <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">¥{plan.price}</span>
                    <span className="text-slate-400 ml-1 font-bold">〜</span>
                    </div>
                    
                    <p className="text-slate-500 text-sm md:text-base mb-8 font-medium h-auto md:h-12">
                    {plan.description}
                    </p>
                    
                    <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map(f => (
                        <li key={f} className="flex items-start text-slate-700 font-medium text-sm md:text-base">
                        <svg className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${plan.recommended ? 'text-brand-red' : 'text-brand-blue'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        {f}
                        </li>
                    ))}
                    </ul>

                    <a 
                    href="#contact" 
                    className={`block text-center py-4 rounded-2xl font-black transition-all text-sm md:text-base tracking-wide
                        ${plan.recommended 
                        ? 'bg-brand-red text-white shadow-lg hover:shadow-xl hover:bg-red-600 active:scale-95' 
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200 active:scale-95'
                        }`}
                    >
                    このプランで相談する
                    </a>
                </div>
                </motion.div>
            ))}
            </motion.div>

            {/* --- オプション表（Terminal-Creative仕様！） --- */}
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-24 max-w-5xl mx-auto"
            >
            <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-200 relative overflow-hidden">
                {/* 💡 背景にうっすらウォーターマーク */}
                <span className="absolute -bottom-10 -right-10 text-[8rem] font-black text-slate-50 pointer-events-none select-none">OPT</span>

                <h4 className="text-center font-bold text-slate-700 mb-8 flex items-center justify-center gap-4 relative z-10">
                <span className="w-8 md:w-12 h-[1px] bg-slate-200"></span>
                <span className="tracking-widest text-base md:text-lg uppercase">Options</span>
                <span className="w-8 md:w-12 h-[1px] bg-slate-200"></span>
                </h4>
                
                {/* 💡 スマホでは2列（grid-cols-2）、PCでは4列（md:grid-cols-4） */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 relative z-10">
                {options.map((opt, i) => (
                    <motion.div 
                    key={opt.title} 
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`text-center p-4 lg:p-6 bg-white rounded-2xl shadow-sm border transition-all duration-300
                        ${opt.type === 'blue' ? 'border-brand-blue/20 hover:border-brand-blue/50 hover:shadow-[0_5px_15px_rgba(66,133,244,0.1)]' 
                        : opt.type === 'red' ? 'border-brand-red/20 hover:border-brand-red/50 hover:shadow-[0_5px_15px_rgba(234,67,53,0.1)]'
                        : 'border-brand-purple/20 hover:border-brand-purple/50 hover:shadow-[0_5px_15px_rgba(155,81,224,0.1)]'
                        }`}
                    >
                    <p className={`text-[10px] md:text-xs font-bold mb-2 tracking-wider ${
                        opt.type === 'blue' ? 'text-brand-blue/80' : opt.type === 'red' ? 'text-brand-red/80' : 'text-brand-purple/80'
                    }`}>
                        {opt.title}
                    </p>
                    <p className="text-xl md:text-2xl lg:text-3xl font-black text-slate-800 tracking-tight">
                        {opt.price}
                    </p>
                    <p className="text-[9px] md:text-[10px] lg:text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">
                        {opt.note}
                    </p>
                    </motion.div>
                ))}
                </div>
            </div>
            </motion.div>

        </div>
        </section>
    );
    }