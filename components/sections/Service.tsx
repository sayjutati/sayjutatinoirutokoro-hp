    "use client";
    import { motion } from "framer-motion";

    export default function Service() {
    const plans = [
        {
        name: "MINIMAL",
        price: "¥500",
        tagline: "名刺代わりのワンコインサイト",
        description: "Lit.link等のまとめサービスとは違い、Google検索にインデックスされる「あなただけのWebサイト」を構築します。",
        features: [
            "名前・自己紹介の掲載",
            "各種SNS・リンクの設置",
            "検索エンジン(SEO)対応",
            "Vercel無料ドメインでの公開",
        ],
        color: "from-slate-400 to-slate-600",
        border: "border-slate-700",
        buttonBg: "bg-slate-800 hover:bg-slate-700",
        popular: false,
        },
        {
        name: "STANDARD",
        price: "¥3,000",
        tagline: "世界観を伝える基本プラン",
        description: "あなたらしさを表現するオリジナルデザインと、心地よいアニメーションを取り入れたスタンダードな構成です。",
        features: [
            "MINIMALプランの全て",
            "オリジナルデザイン適用",
            "リッチなアニメーション実装",
            "スマホ・PC完全レスポンシブ",
        ],
        color: "from-cyan-400 to-blue-600", // 💡 ここは君のブランドカラー（brand-blue等）に合わせて変えてね
        border: "border-blue-500/50",
        buttonBg: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90",
        popular: true, // 💡 真ん中を目立たせるフラグ
        },
        {
        name: "PREMIUM",
        price: "¥10,000",
        tagline: "妥協なしの本格Webサイト",
        description: "複雑な構成や複数ページなど、あなたの活動をより強力に後押しする、完全オーダーメイドのプランです。",
        features: [
            "STANDARDプランの全て",
            "複数ページの構成対応",
            "より高度なSEO・導線設計",
            "※独自ドメイン適用は要相談",
        ],
        color: "from-purple-400 to-pink-600", // 💡 ここもブランドカラー（brand-purple等）に合わせて
        border: "border-purple-500/50",
        buttonBg: "bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90",
        popular: false,
        },
    ];

    return (
        <section id="service" className="bg-slate-900 py-20 relative overflow-hidden">
        {/* 背景の装飾 */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            >
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-widest mb-4 flex items-center justify-center gap-2">
                <span className="text-blue-500/40">{`{`}</span>
                SERVICES
                <span className="text-blue-500/40">{`}`}</span>
            </h2>
            <p className="text-slate-400 font-medium">用途に合わせた3つのプラン</p>
            </motion.div>

            {/* 💡 Lit.linkとの違いをアピールするマーケティングバナー */}
            <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16 bg-slate-800/50 border border-slate-700 p-6 rounded-2xl text-center backdrop-blur-sm"
            >
            <h3 className="text-xl font-bold text-white mb-2">SNSのリンク集だけで満足していませんか？</h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                よくあるリンクまとめサービスは手軽ですが、検索エンジンには表示されにくい弱点があります。<br className="hidden md:block"/>
                当サービスの<span className="text-cyan-400 font-bold">「MINIMALプラン(¥500)」</span>なら、Google検索にもインデックスされる<br className="hidden md:block"/>
                "ちゃんとしたWebサイト"として、あなただけのページを持つことができます。
            </p>
            </motion.div>

            {/* プランカード群 */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
                <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm border ${plan.border} ${plan.popular ? 'transform md:-translate-y-4 shadow-2xl shadow-blue-900/20' : 'shadow-xl shadow-black/20'}`}
                >
                {/* おすすめバッジ */}
                {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full tracking-wider">
                    MOST POPULAR
                    </div>
                )}

                <h3 className={`text-xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r ${plan.color}`}>
                    {plan.name}
                </h3>
                <div className="text-4xl font-black text-white mb-2">{plan.price}<span className="text-sm text-slate-400 font-normal ml-1">(税込)</span></div>
                <p className="text-slate-400 text-sm font-medium mb-6">{plan.tagline}</p>

                <p className="text-slate-300 text-sm mb-8 leading-relaxed h-20">
                    {plan.description}
                </p>

                <ul className="flex-grow space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start text-sm text-slate-300">
                        <svg className={`w-5 h-5 mr-3 mt-0.5 shrink-0 text-transparent bg-clip-text bg-gradient-to-br ${plan.color}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {/* ★がついている項目（検索エンジン）はハイライトする */}
                        <span className={feature.includes("検索エンジン") ? "font-bold text-white" : ""}>
                        {feature}
                        </span>
                    </li>
                    ))}
                </ul>

                <button className={`w-full py-3 rounded-xl text-white font-bold transition-all duration-300 ${plan.buttonBg}`}>
                    依頼を相談する
                </button>
                </motion.div>
            ))}
            </div>

            {/* 💡 支払い方法に関する注意事項 */}
            <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-slate-400 text-sm bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <span className="text-brand-red font-bold">※ お支払い方法について</span><br />
                現在、制作費のお支払いは<strong className="text-slate-200">「銀行振込」のみ</strong>とさせていただいております。<br />
                恐れ入りますが、振込手数料はお客様にてご負担をお願いいたします。
            </p>
            </div>

        </div>
        </section>
    );
    }