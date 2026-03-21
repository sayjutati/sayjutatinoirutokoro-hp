    "use client";
    import { motion } from "framer-motion";

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

    return (
        <section id="service" className="py-24 bg-brand-light">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Service & Price</h2>
            <div className="mt-3 w-20 h-1.5 bg-brand-red mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-stretch">
            {plans.map((plan, i) => (
                <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`flex-1 relative p-1 rounded-[2.5rem] ${plan.recommended ? 'bg-gradient-to-br from-brand-red to-orange-400 shadow-2xl scale-105 z-10' : 'bg-slate-200'}`}
                >
                <div className="bg-white h-full rounded-[2.3rem] p-8 md:p-10 flex flex-col">
                    {plan.recommended && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white text-sm font-black px-6 py-2 rounded-full shadow-xl tracking-widest uppercase">Recommended</span>
                    )}
                    <h3 className="text-xl font-bold text-slate-500 mb-2 uppercase tracking-tighter">{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-black text-slate-900">¥{plan.price}</span>
                    <span className="text-slate-400 ml-1 font-bold">〜</span>
                    </div>
                    <p className="text-slate-500 text-sm mb-8 font-medium">{plan.description}</p>
                    
                    <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map(f => (
                        <li key={f} className="flex items-start text-slate-700 font-medium">
                        <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.recommended ? 'text-brand-red' : 'text-brand-blue'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        {f}
                        </li>
                    ))}
                    </ul>

                    <a href="#contact" className={`block text-center py-4 rounded-2xl font-black transition-all ${plan.recommended ? 'bg-brand-red text-white shadow-lg hover:shadow-brand-red/30' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>
                    このプランで相談する
                    </a>
                </div>
                </motion.div>
            ))}
            </div>

            {/* オプション表 */}
            <div className="mt-20 max-w-3xl mx-auto">
            <div className="bg-white/50 backdrop-blur-md border border-white p-8 rounded-[2rem] shadow-sm">
                <h4 className="text-center font-black text-slate-800 mb-8 flex items-center justify-center gap-3">
                <span className="w-8 h-[2px] bg-slate-200"></span>
                Options
                <span className="w-8 h-[2px] bg-slate-200"></span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "画像追加", price: "+¥500", note: "2枚ごと" },
                    { title: "動画追加", price: "+¥1,000", note: "1個ごと" },
                    { title: "ドメイン設定", price: "+¥5,000", note: "代行費用" }
                ].map(opt => (
                    <div key={opt.title} className="text-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <p className="text-xs font-bold text-slate-400 mb-1">{opt.title}</p>
                    <p className="text-xl font-black text-slate-800">{opt.price}</p>
                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{opt.note}</p>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    }