    "use client";
    import SectionTitle from "@/components/ui/SectionTitle";

    export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-[12vh] py-24 bg-brand-light relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
            
            {/* --- セクションタイトル（共通コンポーネント呼び出し！） --- */}
            <SectionTitle en="Contact" ja="お問い合わせ" watermark="CONTACT" color="yellow" />
            
            <p className="text-slate-600 mb-12 text-center text-lg md:text-xl font-medium">
            ご依頼の相談や、プランに関する質問など、お気軽にご連絡ください。<br className="hidden md:block" />
            X（旧Twitter）のDMからでも大歓迎です。
            </p>

            {/* 💡 FormspreeのURLをセット完了！ */}
            <form 
            action="https://formspree.io/f/xaqpzlpb" 
            method="POST"
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-slate-100"
            >
            <div className="mb-6">
                <label htmlFor="name" className="block text-slate-700 text-sm font-bold mb-2 ml-2 tracking-wide">お名前 / 活動名</label>
                <input id="name" name="name" type="text" required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-all font-medium" placeholder="火日" />
            </div>
            
            <div className="mb-6">
                <label htmlFor="email" className="block text-slate-700 text-sm font-bold mb-2 ml-2 tracking-wide">メールアドレス</label>
                <input id="email" name="email" type="email" required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-all font-medium" placeholder="info@example.com" />
            </div>
            
            <div className="mb-10">
                <label htmlFor="message" className="block text-slate-700 text-sm font-bold mb-2 ml-2 tracking-wide">ご相談内容</label>
                <textarea id="message" name="message" required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 transition-all h-48 resize-none font-medium" placeholder="スタンダードプランでのご依頼を検討しています..."></textarea>
            </div>
            
            {/* --- 2つのボタンを並べるエリア --- */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                
                {/* 1. メール直通送信ボタン */}
                {/* 💡 修正ポイント: 
                    bg-slate-900 -> bg-brand-blue (通常時を青に！)
                    hover:bg-slate-800 -> hover:bg-brand-red (ホバー時を赤に！)
                */}
                <button type="submit" className="flex-1 bg-brand-green text-white font-black py-4 px-6 rounded-2xl hover:bg-brand-red transition-all shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                メールで送信する
                </button>
                
                {/* 2. Twitter DMへ飛ぶボタン（数字IDセット完了！） */}
                {/* 💡 修正ポイント:
                    bg-black (維持)
                    hover:bg-slate-800 -> hover:bg-brand-blue (ホバー時を青に！)
                */}
                <a 
                href="https://twitter.com/messages/compose?recipient_id=2025773500615778304" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 bg-black text-white font-black py-4 px-6 rounded-2xl hover:bg-brand-blue transition-all shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
                >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                TwitterのDMを開く
                </a>

            </div>
            </form>

        </div>
        </section>
    );
    }