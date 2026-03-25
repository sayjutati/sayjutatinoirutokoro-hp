    "use client"; // 🟢 useStateを使うために必須！必ず1行目に書く

    import { useState } from "react";
    import { X } from "lucide-react"; // 閉じるボタン用のアイコン
    import SectionTitle from "@/components/ui/SectionTitle"; // 💡 メインHPの共通タイトル部品をインポート！

    export default function Demo() {
    // 🟢 拡大表示している画像のURLを保存するステート（nullの時は何も表示しない）
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // 画像のデータ一覧（パスと代替テキスト）
    const images = [
        { src: "/images/demosite/image1.png", alt: "デモサイト 導入" },
        { src: "/images/demosite/image2.png", alt: "デモサイト 自己紹介" },
        { src: "/images/demosite/image3.png", alt: "デモサイト リンク集" },
        { src: "/images/demosite/image4.png", alt: "デモサイト 実績集" },
        { src: "/images/demosite/image5.png", alt: "デモサイト お問い合わせ" },
    ];

    return (
        <section id="demo" className="w-full py-24 bg-gray-50 text-gray-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            {/* 🟢 タイトル部分を共通コンポーネントに置き換え！ */}
            <div className="mb-16">
            <SectionTitle en="Demo Site" ja="デモサイトのご紹介" watermark="DEMO" color="blue" />
            
            <p className="text-center text-lg md:text-xl text-gray-600 font-medium mt-7 md:mt-12">
                ライトプランで制作可能なデザインの幅を、1つのページに詰め込みました。<br className="hidden md:block" />
                スクロールするたびに変わる5つの世界観を、ぜひ実際のブラウザで体験してください。
            </p>
            </div>

            {/* 📸 スクショ5枚のギャラリー配置 (3段構成) */}
            <div className="grid grid-cols-2 gap-4 mb-12">
            
            {/* 🟢 1段目: メイン (col-span-2 で横幅いっぱい使う) */}
            <div 
                className="col-span-2 relative group overflow-hidden rounded-xl shadow-md border border-gray-200 aspect-video md:aspect-[21/9] cursor-pointer"
                onClick={() => setSelectedImage(images[0].src)} // クリックで拡大
            >
                <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 font-bold tracking-widest bg-black/60 px-6 py-3 rounded-full transition-opacity duration-300">
                    クリックで拡大表示
                </span>
                </div>
            </div>

            {/* 🟢 2段目・3段目: 残りの4枚を2枚ずつ並べる */}
            {images.slice(1).map((image, index) => (
                <div 
                key={index} 
                className="col-span-1 relative group overflow-hidden rounded-xl shadow-md border border-gray-200 aspect-video cursor-pointer"
                onClick={() => setSelectedImage(image.src)} // クリックで拡大
                >
                {/* object-topで、画像の上部が優先的に表示されるようにする */}
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-bold text-sm md:text-base tracking-widest bg-black/60 px-4 py-2 rounded-full transition-opacity duration-300">
                    拡大
                    </span>
                </div>
                </div>
            ))}

            </div>

            {/* 🚀 デモサイトへのリンクボタン */}
            <div className="flex justify-center">
            <a 
                href="https://demo-site-dusky-three.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
                デモサイトを実際に見てみる
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            </div>

        </div>

        {/* 🔍 画像拡大ポップアップ (モーダル) */}
        {selectedImage && (
            <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={() => setSelectedImage(null)} // 背景クリックで閉じる
            >
            {/* 閉じるボタン */}
            <button 
                className="absolute top-4 right-4 md:top-8 md:right-8 text-white bg-black/50 hover:bg-white/20 p-2 rounded-full transition-colors"
                onClick={(e) => {
                e.stopPropagation(); // ボタンのクリック判定が後ろの背景に貫通しないようにする
                setSelectedImage(null);
                }}
            >
                <X size={32} />
            </button>
            
            {/* 拡大画像 */}
            <img 
                src={selectedImage} 
                alt="拡大画像" 
                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()} // 画像本体をクリックしても閉じないようにする
            />
            </div>
        )}

        </section>
    );
    }