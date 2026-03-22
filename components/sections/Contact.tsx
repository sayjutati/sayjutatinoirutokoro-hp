    "use client";
    import SectionTitle from "@/components/ui/SectionTitle";

    export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-[12vh] py-20 bg-brand-light">
        <div className="container mx-auto px-6 max-w-3xl text-center">
            {/* --- セクションタイトル --- */}
            <SectionTitle en="Contact" ja="お問い合わせ" watermark="CONTACT" color="yellow" />
            
            <p className="text-slate-600 mb-8">
            ご依頼の相談や、プランに関する質問など、お気軽にご連絡ください。<br />
            X（旧Twitter）のDMでも受け付けています。
            </p>

            <a 
            href="https://twitter.com/sayju_create" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-700 transition-colors mb-12 shadow-md"
            >
            X (Twitter) で相談する
            </a>

            {/* フォームのモック（見た目だけ） */}
            <form className="bg-white p-8 rounded-2xl shadow-lg text-left">
            <div className="mb-6">
                <label htmlFor="name" className="block text-slate-700 text-sm font-bold mb-2">お名前 / 活動名</label>
                <input id="name" type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="火日" />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block text-slate-700 text-sm font-bold mb-2">メールアドレス</label>
                <input id="email" type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="info@example.com" />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-slate-700 text-sm font-bold mb-2">ご相談内容</label>
                <textarea id="message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue h-32" placeholder="スタンダードプランでのご依頼を検討しています..."></textarea>
            </div>
            <button type="button" className="w-full bg-brand-blue text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                送信する（未実装）
            </button>
            </form>
        </div>
        </section>
    );
    }