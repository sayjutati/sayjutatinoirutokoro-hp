"use client";
import { motion, Variants } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

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
function ClockIcon({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
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
    const steps = [
        { 
            name: "Step 1", 
            title: "ヒアリング", 
            duration: "1〜3日",
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
            title: "デザイン制作", 
            duration: "3〜7日",
            description: "ヒアリングをもとに、サイトの構成とデザイン案を作成します。実際の画面をイメージできる形でお見せします。", 
            youDo: "デザイン案を見て「もっとこうしたい」等のフィードバック",
            Icon: DesignIcon, 
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
            title: "コーディング・実装", 
            duration: "1〜2週間",
            description: "決定したデザインをもとに、Webサイトとして動くように裏側で開発を進めます。ここはお任せください。", 
            youDo: "完成を楽しみに待つだけ！（創作活動に集中しててOK）",
            Icon: BuildIcon, 
            theme: {
                main: "text-red-500",
                bgLight: "bg-red-50",
                border: "border-red-200",
                bgSolid: "bg-red-500",
                from: "from-red-500",
                to: "to-emerald-500"
            }
        },
        { 
            name: "Step 4", 
            title: "確認・公開", 
            duration: "1〜3日",
            description: "実際のブラウザで動作確認をしていただき、問題がなければいよいよインターネット上に公開（納品）となります！", 
            youDo: "最終チェックと、公開されたサイトのシェア！",
            Icon: DeliveryIcon, 
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
                    ご相談から公開までのシンプルなステップです。<br className="hidden md:block" />
                    専門的な作業はすべてお任せいただき、要所でのご確認のみで進みます。
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
                                    
                                    {/* ヘッダー部分（Step, アイコン, 期間） */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div className={`flex items-center gap-3 md:gap-4 ${step.theme.main}`}>
                                            <div className={`w-12 h-12 ${step.theme.bgLight} rounded-xl p-2.5 shrink-0`}>
                                                <step.Icon className="w-full h-full" />
                                            </div>
                                            <div>
                                                <span className={`text-xs md:text-sm font-bold uppercase tracking-widest opacity-80 block`}>{step.name}</span>
                                                <h3 className="font-black text-xl md:text-2xl text-slate-800 leading-none mt-1">{step.title}</h3>
                                            </div>
                                        </div>
                                        
                                        {/* 期間バッジ */}
                                        <div className="flex items-center w-fit gap-1.5 bg-slate-100 text-slate-500 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold shrink-0">
                                            <ClockIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                            目安: {step.duration}
                                        </div>
                                    </div>

                                    {/* 説明文 */}
                                    <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed mb-5">
                                        {step.description}
                                    </p>

                                    {/* 💡 お客様がやること（視覚的に一番目立たせる） */}
                                    <div className={`mt-auto ${step.theme.bgLight} border ${step.theme.border} rounded-xl p-3.5 md:p-4 flex items-start gap-3`}>
                                        <div className={`${step.theme.bgSolid} text-white rounded-full p-1 mt-0.5 shrink-0`}>
                                            <CheckIcon className="w-3 h-3 md:w-4 md:h-4" />
                                        </div>
                                        <div>
                                            <p className={`${step.theme.main} text-[10px] md:text-xs font-bold mb-0.5`}>あなたにお願いすること</p>
                                            <p className="text-xs md:text-sm text-slate-800 font-bold leading-tight">{step.youDo}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}