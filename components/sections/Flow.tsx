"use client";
import { motion, Variants } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

// --- アイコンコンポーネント群 ---
function HearingIcon({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>
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
function EyeIcon({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
    );
}
function GlobeIcon({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    );
}
function PackageIcon({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
    );
}
function CheckIcon({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
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
    hidden: { opacity: 0, x: -20 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { type: "spring", damping: 15, stiffness: 70 }
    },
};

export default function Flow() {
    // 💡 分かりやすさ最優先！シンプルで直感的なステップ定義
    const steps: {
        name: string;
        title: string;
        description: string;
        youDo?: string;
        Icon: ({ className }: { className?: string }) => React.JSX.Element;
        theme: { main: string; bgLight: string; border: string; bgSolid: string; from: string; to: string };
    }[] = [
        { 
            name: "Step 1", 
            title: "ヒアリング", 
            description: "作りたいサイトのイメージや目的、必要な情報をお伺いします。難しく考えず、ざっくりとした要望でOKです！", 
            youDo: "載せたい情報や好みのデザインの雰囲気を伝える",
            Icon: HearingIcon, 
            theme: {
                main: "text-blue-500",
                bgLight: "bg-blue-50",
                border: "border-blue-200",
                bgSolid: "bg-blue-500",
                from: "from-blue-500",
                to: "to-purple-500"
            }
        },
        { 
            name: "Step 2", 
            title: "制作", 
            description: "ヒアリングをもとに、Cursor（AI）を使ってサイトを制作します。", 
            youDo: "イラスト・画像・文章などの素材を用意する",
            Icon: BuildIcon, 
            theme: {
                main: "text-purple-500",
                bgLight: "bg-purple-50",
                border: "border-purple-200",
                bgSolid: "bg-purple-500",
                from: "from-purple-500",
                to: "to-red-500"
            }
        },
        { 
            name: "Step 3", 
            title: "テスト版の確認", 
            description: "テスト版を限定公開するので、実際の画面で確認してください。", 
            youDo: "テスト版を見て、直したいところを伝える",
            Icon: EyeIcon, 
            theme: {
                main: "text-red-500",
                bgLight: "bg-red-50",
                border: "border-red-200",
                bgSolid: "bg-red-500",
                from: "from-red-500",
                to: "to-amber-500"
            }
        },
        { 
            name: "Step 4", 
            title: "公開", 
            description: "Vercelでサイトを公開します。", 
            Icon: DeliveryIcon, 
            theme: {
                main: "text-amber-500",
                bgLight: "bg-amber-50",
                border: "border-amber-200",
                bgSolid: "bg-amber-500",
                from: "from-amber-500",
                to: "to-cyan-500"
            }
        },
        { 
            name: "Step 5", 
            title: "ドメイン設定", 
            description: "依頼者さん名義で用意してもらったドメインを設定します。", 
            youDo: "ドメインを依頼者さん名義で用意する",
            Icon: GlobeIcon, 
            theme: {
                main: "text-cyan-500",
                bgLight: "bg-cyan-50",
                border: "border-cyan-200",
                bgSolid: "bg-cyan-500",
                from: "from-cyan-500",
                to: "to-emerald-500"
            }
        },
        { 
            name: "Step 6", 
            title: "クレジットを入れて納品", 
            description: "サイトのクレジットに「サイト制作：火日-かじつ-」を入れて納品します。", 
            Icon: PackageIcon, 
            theme: {
                main: "text-emerald-500",
                bgLight: "bg-emerald-50",
                border: "border-emerald-200",
                bgSolid: "bg-emerald-500",
                from: "from-emerald-500",
                to: "to-emerald-500"
            }
        },
    ];

    return (
        <section id="flow" className="scroll-mt-[12vh] py-24 bg-slate-50 relative overflow-hidden">
            
            <div className="container mx-auto px-6 relative z-10">
                
                {/* --- セクションタイトル --- */}
                <SectionTitle en="Flow" ja="制作の流れ" watermark="FLOW" color="green" />
                <p className="text-center text-slate-500 font-medium mt-4 mb-12 md:mb-16 text-sm md:text-base">
                    ご相談から納品までのシンプルなステップです。<br className="hidden md:block" />
                    素材やドメインの用意と、要所でのご確認をお願いしながら進めます。
                </p>

                {/* --- タイムラインコンテナ --- */}
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
                            className="flex flex-row gap-4 md:gap-8 relative"
                        >
                            
                            {/* 💡 左側のタイムライン */}
                            <div className="flex flex-col items-center">
                                {/* 数字アイコン */}
                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xl md:text-2xl font-black ${step.theme.bgLight} border-2 ${step.theme.border} ${step.theme.main} relative z-10 shrink-0`}>
                                    {i + 1}
                                </div>
                                {/* 縦線（グラデーション） */}
                                {i < steps.length - 1 && (
                                    <div className={`w-1 md:w-1.5 h-full bg-gradient-to-b ${step.theme.from} ${step.theme.to} rounded-full my-2 opacity-30`}></div>
                                )}
                            </div>

                            {/* 💡 右側のコンテンツブロック */}
                            <div className={`flex-1 ${i < steps.length - 1 ? 'pb-10 md:pb-12' : ''}`}>
                                
                                {/* メインのカード（余計な装飾を省いてスッキリ！） */}
                                <div className="flex flex-col bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                                    
                                    {/* ヘッダー部分（Step, アイコン） */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div className={`flex items-center gap-3 md:gap-4 ${step.theme.main}`}>
                                            <div className={`w-12 h-12 ${step.theme.bgLight} rounded-xl p-2.5 shrink-0`}>
                                                <step.Icon className="w-full h-full" />
                                            </div>
                                            <div>
                                                <span className={`text-xs md:text-sm font-bold uppercase tracking-widest opacity-80 block`}>{step.name}</span>
                                                <h3 className="font-black text-xl md:text-2xl text-slate-800 leading-tight mt-1">{step.title}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 説明文 */}
                                    <p className={`text-slate-600 font-medium text-sm md:text-base leading-relaxed ${step.youDo ? 'mb-5' : ''}`}>
                                        {step.description}
                                    </p>

                                    {/* 💡 お客様がやること（視覚的に一番目立たせる） */}
                                    {step.youDo && (
                                    <div className={`mt-auto ${step.theme.bgLight} border ${step.theme.border} rounded-xl p-3.5 md:p-4 flex items-start gap-3`}>
                                        <div className={`${step.theme.bgSolid} text-white rounded-full p-1 mt-0.5 shrink-0`}>
                                            <CheckIcon className="w-3 h-3 md:w-4 md:h-4" />
                                        </div>
                                        <div>
                                            <p className={`${step.theme.main} text-[10px] md:text-xs font-bold mb-0.5`}>あなたにお願いすること</p>
                                            <p className="text-xs md:text-sm text-slate-800 font-bold leading-tight">{step.youDo}</p>
                                        </div>
                                    </div>
                                    )}

                                </div>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}