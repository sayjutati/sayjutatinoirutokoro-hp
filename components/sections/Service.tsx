"use client";
import { motion } from "framer-motion";

export default function Service() {
    const plans = [
        {
            name: "MINIMAL",
            kana: "ミニマル",
            price: "1,000円",
            tagline: "名刺代わりの千円サイト",
            description: "「SNSのリンク集だけじゃ物足りない！」って人向け。Google検索にもちゃんと載る、君だけの専用ページをランチ1回分の値段で作るよ。",
            features: [
                "名前・自己紹介の掲載",
                "各種SNS・リンクの設置",
                "検索エンジン(SEO)対応",
                "Vercel無料ドメインで公開",
            ],
            color: "from-emerald-400 to-teal-500",
            border: "border-emerald-500/50",
            buttonBg: "bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90",
            popular: false,
        },
        {
            name: "STANDARD",
            kana: "スタンダード",
            price: "5,000円〜",
            tagline: "自分らしさ全開の基本プラン",
            description: "「もっとこだわりたい！」「オシャレに動くサイトがいい！」という人向け。デザインからアニメーションまで、君の世界観をバッチリ表現するよ。",
            features: [
                "MINIMALプランの内容すべて",
                "オリジナルデザイン制作",
                "リッチなアニメーション",
                "スマホ・PC完全対応",
            ],
            color: "from-cyan-400 to-blue-600",
            border: "border-blue-500/50",
            buttonBg: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90",
            popular: true,
        },
        {
            name: "PREMIUM",
            kana: "プレミアム",
            price: "10,000円〜",
            tagline: "妥協なしのガチサイト",
            description: "ページ数が多かったり、複雑な構成にしたい人向け。本気で活動をブーストさせたいなら、完全オーダーメイドのこのプランで決まり！",
            features: [
                "STANDARDプランの内容すべて",
                "複数ページの構成",
                "より高度な導線設計",
                "※独自ドメインは要相談",
            ],
            color: "from-purple-400 to-pink-600",
            border: "border-purple-500/50",
            buttonBg: "bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90",
            popular: false,
        },
    ];

    return (
        <section id="service" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
            {/* 背景の装飾 */}
            <div className="absolute top-1/4 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-500/10 rounded-full blur-[120px] md:blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* 💡 共通タイトルの見た目を再現しつつ、ダーク背景用に文字を白くした専用タイトル */}
                <div className="relative mb-12 md:mb-16 py-4 text-center flex flex-col items-center justify-center">
                    {/* 後ろの透かし文字（ウォーターマーク） */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3.5rem] md:text-[6rem] font-black text-slate-800/80 uppercase tracking-[0.2em] pointer-events-none select-none z-0 whitespace-nowrap">
                        SERVICES
                    </div>
                    
                    {/* サブタイトル（// SERVICES ●） */}
                    <div className="relative z-10 flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                        <span className="text-blue-500 font-bold tracking-widest uppercase text-xs md:text-sm">
                            // SERVICES
                        </span>
                        <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    </div>
                    
                    {/* メインタイトル（白文字にしてクッキリ見えるように！） */}
                    <h2 className="relative z-10 text-2xl md:text-4xl font-black text-white tracking-tight">
                        料金プラン
                    </h2>
                </div>

                {/* 他社との比較表（圧倒的お得感をアピール） */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto mb-12 md:mb-16 bg-slate-800/80 border border-slate-700 p-4 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm shadow-xl"
                >
                    <h3 className="text-lg md:text-2xl font-bold text-center text-white mb-6 md:mb-8">ぶっちゃけ、普通の業者に頼むといくら？</h3>
                    
                    {/* 💡 overflow-x-auto でスマホ時は横スクロール可能に */}
                    <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
                        <table className="w-full text-left border-collapse min-w-[700px] md:min-w-[800px]">
                            <thead>
                                <tr className="border-b-2 border-slate-700 text-xs md:text-base">
                                    <th className="p-3 md:p-4 font-normal text-slate-400 w-1/4"></th>
                                    <th className="p-3 md:p-4 font-bold text-slate-300 text-center w-1/4">一般的な制作会社 🏢</th>
                                    <th className="p-3 md:p-4 font-bold text-slate-300 text-center w-1/4">一般的なフリーランス 💻</th>
                                    <th className="p-3 md:p-4 font-black text-cyan-400 text-center text-sm md:text-lg w-1/4 bg-cyan-900/20 rounded-t-xl">うち（火日） 🐺🔥</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300 text-xs md:text-base">
                                <tr className="border-b border-slate-700/50">
                                    <td className="p-3 md:p-4 font-medium text-slate-400">初期費用<br className="block md:hidden"/><span className="text-[10px] md:text-xs">（LP1ページ相場）</span></td>
                                    <td className="p-3 md:p-4 text-center">15万円 〜 30万円</td>
                                    <td className="p-3 md:p-4 text-center">5万円 〜 15万円</td>
                                    <td className="p-3 md:p-4 text-center text-brand-red font-black text-base md:text-xl bg-cyan-900/10">1,000円 〜</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="p-3 md:p-4 font-medium text-slate-400">毎月の維持費</td>
                                    <td className="p-3 md:p-4 text-center">5,000円 〜 2万円<br/><span className="text-[10px] md:text-xs text-slate-500">（サーバー・保守費）</span></td>
                                    <td className="p-3 md:p-4 text-center">3,000円 〜 1万円</td>
                                    <td className="p-3 md:p-4 text-center font-bold text-white bg-cyan-900/10">基本 0円！<br/><span className="text-[10px] md:text-xs text-slate-400">（無料ドメイン利用時）</span></td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="p-3 md:p-4 font-medium text-slate-400">納期</td>
                                    <td className="p-3 md:p-4 text-center">1ヶ月 〜 1.5ヶ月</td>
                                    <td className="p-3 md:p-4 text-center">2週間 〜 1ヶ月</td>
                                    <td className="p-3 md:p-4 text-center font-bold text-white bg-cyan-900/10">最短 数日 〜</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-medium text-slate-400">融通の利きやすさ</td>
                                    <td className="p-3 md:p-4 text-center text-[10px] md:text-sm text-slate-400">仕様変更は追加料金</td>
                                    <td className="p-3 md:p-4 text-center text-[10px] md:text-sm text-slate-400">契約範囲外は対応不可</td>
                                    <td className="p-3 md:p-4 text-center font-bold text-white bg-cyan-900/20 rounded-b-xl">制作中の柔軟な変更もOK！</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center text-slate-400 text-[10px] md:text-sm mt-4 md:mt-6">
                        ※複雑なシステム（予約機能や決済など）が必要な場合は別だけど、個人や活動者向けのサイトなら、<br className="hidden md:block" />うちの方が圧倒的にコスパ良く、おもろいものが作れるよ！
                    </p>
                </motion.div>

                {/* プランカード群 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            // 💡 外側の箱：出現アニメーションと、一番人気の時の位置ズレを担当
                            className={`relative h-full ${plan.popular ? 'md:-translate-y-4 z-10' : 'z-0'}`}
                        >
                            <motion.div
                                // 💡 内側の箱：ふわふわアニメーションを担当。ディレイをズラして独立して動くように！
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                                className={`flex flex-col h-full p-6 md:p-8 rounded-2xl md:rounded-3xl bg-slate-800/80 backdrop-blur-sm border ${plan.border} ${plan.popular ? 'shadow-2xl shadow-blue-900/20' : 'shadow-xl shadow-black/20'}`}
                            >
                                {/* おすすめバッジ */}
                                {plan.popular && (
                                    <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-1 rounded-full tracking-wider shadow-lg whitespace-nowrap">
                                        一番人気！
                                    </div>
                                )}

                                <div className="mb-2">
                                    <span className="text-[10px] md:text-xs font-bold text-slate-500 block mb-1">{plan.kana}</span>
                                    <h3 className={`text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r ${plan.color}`}>
                                        {plan.name}
                                    </h3>
                                </div>
                                
                                <div className="text-3xl md:text-4xl font-black text-white mb-2">{plan.price}<span className="text-xs md:text-sm text-slate-400 font-normal ml-1">(税込)</span></div>
                                <p className="text-slate-400 text-xs md:text-sm font-bold mb-4 md:mb-6">{plan.tagline}</p>

                                {/* 💡 スマホ時は高さを自動(h-auto)に、PC時は揃えるために固定(h-24) */}
                                <p className="text-slate-300 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed h-auto md:h-24">
                                    {plan.description}
                                </p>

                                <ul className="flex-grow space-y-3 md:space-y-4 mb-6 md:mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-start text-xs md:text-sm text-slate-300">
                                            <svg className={`w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 mt-0.5 shrink-0 text-transparent bg-clip-text bg-gradient-to-br ${plan.color}`} fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            {feature.includes("検索エンジン") ? <span className="font-bold text-white">{feature}</span> : feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* 💡 ここに hover:scale-[1.03] hover:-translate-y-1 などを追加してホバーエフェクトを付けたよ！ */}
                                <a href="#contact" className={`block w-full py-3 md:py-3 rounded-xl text-center text-sm md:text-base text-white font-bold transition-all duration-300 shadow-md hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl ${plan.buttonBg}`}>
                                    相談してみる
                                </a>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* 支払い方法に関する注意事項 */}
                <div className="mt-12 md:mt-16 text-center max-w-2xl mx-auto">
                    <p className="text-slate-400 text-xs md:text-sm bg-slate-800/50 p-4 md:p-5 rounded-xl border border-slate-700/50 leading-relaxed">
                        <span className="text-brand-red font-bold block mb-1 md:mb-2">💸 お支払いについて</span>
                        現在、お支払いは<strong className="text-slate-200">「銀行振込」のみ</strong>でお願いしています。<br />
                        振込手数料はお客様にご負担いただく形になりますが、よろしくお願いいたします🙇‍♂️
                    </p>
                </div>

            </div>
        </section>
    );
}