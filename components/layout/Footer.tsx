    export default function Footer() {
    const snsLinks = [
        { 
        name: "X (Twitter)", url: "https://twitter.com/", color: "hover:bg-slate-900",
        icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
        },
        { 
        name: "ツイキャス", url: "https://twitcasting.tv/c:sayju_tati", color: "hover:bg-[#0054a6]",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>
        },
        { 
        name: "YouTube", url: "https://www.youtube.com/@%E6%94%BF%E7%8D%A3%E3%81%9F%E3%81%A1%E3%81%AE%E3%81%84%E3%82%8B%E3%81%A8%E3%81%93%E3%82%8D", color: "hover:bg-[#FF0000]",
        icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        },
        { 
        name: "Spoon", url: "https://www.spooncast.net/jp/channel/317705181/tab/home/", color: "hover:bg-[#FF7A00]",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>
        },
        { 
        name: "TikTok", url: "https://www.tiktok.com/@user5903695770151/", color: "hover:bg-black",
        icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
        },
    ];

    return (
        // 💡 修正ポイント: bg-slate-900 -> bg-slate-800 に変更して少し明るく！
        <footer className="bg-slate-800 text-slate-300 pt-20 pb-10 border-t-[8px] border-brand-blue relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
            <div className="mb-12">
            <h2 className="text-3xl font-black text-white tracking-widest mb-2">政獣たちのいるところ</h2>
            <p className="text-brand-blue font-bold text-lg">@火日（かじつ）</p>
            <p className="mt-4 text-sm text-slate-400 font-medium">ゆるく生活をクリエイティブに。</p>
            </div>

            {/* --- SNSアイコン群 --- */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16 max-w-3xl">
            {snsLinks.map((sns) => (
                <a 
                key={sns.name} 
                href={sns.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
                >
                {/* 💡 修正ポイント: 背景に馴染みすぎないように bg-slate-700 に変更 */}
                <div className={`w-14 h-14 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center transition-all duration-300 shadow-sm ${sns.color} group-hover:text-white group-hover:-translate-y-2 group-hover:shadow-lg`}>
                    {sns.icon}
                </div>
                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-200 transition-colors">{sns.name}</span>
                </a>
            ))}
            </div>

            {/* 💡 修正ポイント: 境界線を border-slate-700 に変更 */}
            <div className="w-full max-w-2xl border-t border-slate-700 pt-8">
            <p className="text-xs text-slate-400 tracking-widest font-medium">
                &copy; {new Date().getFullYear()} 政獣たちのいるところ : 火日. All Rights Reserved.
            </p>
            </div>
        </div>
        </footer>
    );
    }