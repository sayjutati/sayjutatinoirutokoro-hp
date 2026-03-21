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

    // 4つ目のオプションを追加！
    const options = [
        { title: "画像追加", price: "+¥500", note: "2枚ごと", type: "blue" },
        { title: "動画追加", price: "+¥1,000", note: "1個ごと", type: "red" },
        { title: "ドメイン設定", price: "+¥5,000", note: "代行費用", type: "blue" },
        { title: "その他オプションの相談", price: "+¥1,000 ~", note: "相談に応じて", type: "purple" }
    ];

    return (
        <section id="service" className="scroll-mt-[12vh] py-24 bg-brand-light">
        <div className="container mx-auto px-6">
            
            {/* --- プラン表タイトル --- */}
            <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Service & Price</h2>
            <div className="mt-3 w-20 h-1.5 bg-brand-red mx-auto rounded-full"></div>
            </div>

            {/* --- プランカード --- */}
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

            {/* --- オプション表（4個1列バージョン！） --- */}
            <div className="mt-20 max-w-5xl mx-auto"> {/* ← 幅を広げたよ */}
            <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
                <h4 className="text-center font-bold text-slate-700 mb-8 flex items-center justify-center gap-4">
                <span className="w-12 h-[1px] bg-slate-200"></span>
                <span className="tracking-widest text-lg">Options</span>
                <span className="w-12 h-[1px] bg-slate-200"></span>
                </h4>
                
                {/* md:grid-cols-4 でPC表示時に4個横並びにする */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6">
                {options.map(opt => (
                    <motion.div 
                    key={opt.title} 
                    whileHover={{ y: -5 }}
                    className={`text-center p-4 lg:p-6 bg-white rounded-2xl shadow-sm border-2 transition-colors duration-300
                        ${opt.type === 'blue' 
                        ? 'border-brand-blue/10 hover:border-brand-blue/30 hover:bg-brand-blue/5' 
                        : 'border-brand-red/10 hover:border-brand-red/30 hover:bg-brand-red/5'
                        }`}
                    >
                    {/* 文字が長くても崩れないように text-xs や text-sm を調整 */}
                    <p className={`text-xs lg:text-sm font-bold mb-2 ${opt.type === 'blue' ? 'text-brand-blue/80' : 'text-brand-red/80'}`}>
                        {opt.title}
                    </p>
                    <p className="text-2xl lg:text-3xl font-black text-slate-800 tracking-tight">
                        {opt.price}
                    </p>
                    <p className="text-[10px] lg:text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">
                        {opt.note}
                    </p>
                    </motion.div>
                ))}
                </div>
            </div>
            </div>

        </div>
        </section>
    );
    }