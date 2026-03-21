    "use client";
    import { motion } from "framer-motion";
    import { useState } from "react";

    // --- Swiper（カルーセル）のインポート ---
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Navigation, Pagination, Autoplay } from 'swiper/modules';

    // SwiperのCSSをインポート（globals.cssに書くよりここで管理した方が楽！）
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';

    export default function Service() {
    // --- 実績データ（画像リストを配列に変更！） ---
    const works = [
        {
        title: "猫喰ぐるる 公式サイト",
        url: "https://example.com",
        // スクショを4枚並べる配列（public/images/内のファイル名に合わせて！）
        images: [
            "/images/samune1.png",    // 1枚目（メイン）
            "/images/samune1_2.png",  // 2枚目（仮のファイル名）
            "/images/samune1_3.png",  // 3枚目（仮のファイル名）
            "/images/samune1_4.png",  // 4枚目（仮のファイル名）
        ],
        description: "VTuber公式サイトの制作。世界観を重視したデザインとアニメーションを実装。",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"]
        },
        {
        title: "クリエイター向け ポートフォリオ",
        url: "#",
        images: [
            "/images/samune2.png",
            "/images/samune2_2.png", // 仮
        ],
        description: "イラストレーターさんの作品集サイト。シンプルで見やすさを追求。",
        tags: ["React", "CSS Modules"]
        }
    ];

    return (
        <section id="service" className="py-20 bg-brand-light">
        <div className="container mx-auto px-6">
            
            {/* --- プラン紹介（既存部分） --- */}
            <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Service & Price</h2>
            <div className="mt-2 w-16 h-1 bg-brand-red mx-auto"></div>
            <p className="mt-4 text-slate-600">個人クリエイター向けの作りやすいプランを用意しました。</p>
            </div>

            {/* ...（プランのカード部分は今のまま残す）... */}
            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mb-24">
            {/* さっきコピペしたライト・スタンダードプランのカードをここに入れる */}
            </div>


            {/* --- 実績セクション --- */}
            <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Works</h2>
            <div className="mt-2 w-16 h-1 bg-brand-blue mx-auto mb-4"></div>
            {/* 制作数バッジ */}
            <div className="inline-block bg-white px-6 py-2 rounded-full shadow-sm border border-brand-blue/20">
                <span className="text-slate-600 font-bold">Total Works: </span>
                <span className="text-2xl font-black text-brand-blue ml-2">12+</span>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {works.map((work, index) => (
                <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group"
                >
                {/* --- カルーセルエリア（Swiper実装！） --- */}
                <div className="aspect-video bg-slate-200 relative overflow-hidden group">
                    <Swiper
                    // 使うモジュール（ナビゲーション、ページネーション、自動再生）
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0} // スライド間の余白
                    slidesPerView={1}  // 一度に見せるスライド数
                    // 左右のボタンの設定（Tailwindで装飾しやすいようにクラス名を指定）
                    navigation={{
                        nextEl: `.swiper-button-next-${index}`,
                        prevEl: `.swiper-button-prev-${index}`,
                    }}
                    // 下のドット（ページネーション）の設定
                    pagination={{ clickable: true, el: `.swiper-pagination-${index}` }}
                    // 自動再生の設定（5秒ごとに切り替え）
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true} // ループさせる
                    className="w-full h-full"
                    >
                    {work.images.map((img, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                        <img 
                            src={img} 
                            alt={`${work.title} screen ${imgIndex + 1}`} 
                            className="w-full h-full object-cover" 
                        />
                        </SwiperSlide>
                    ))}

                    {/* 自作のナビゲーションボタン（Tailwindで装飾） */}
                    <div className={`swiper-button-prev swiper-button-prev-${index} !text-white !w-8 !h-8 !bg-black/50 rounded-full after:!text-sm group-hover:opacity-100 opacity-0 transition-opacity z-10`}></div>
                    <div className={`swiper-button-next swiper-button-next-${index} !text-white !w-8 !h-8 !bg-black/50 rounded-full after:!text-sm group-hover:opacity-100 opacity-0 transition-opacity z-10`}></div>
                    
                    {/* 自作のページネーション（ドット、Tailwindで装飾） */}
                    <div className={`swiper-pagination swiper-pagination-${index} !bottom-4 z-10`}></div>
                    </Swiper>
                </div>

                {/* 実績詳細 */}
                <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center justify-between">
                    {work.title}
                    <a href={work.url} target="_blank" className="text-sm text-brand-blue hover:underline">Visit Site ↗</a>
                    </h3>
                    <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                    {work.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                    {work.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-brand-light text-slate-500 rounded uppercase tracking-wider">{tag}</span>
                    ))}
                    </div>
                </div>
                </motion.div>
            ))}
            </div>

        </div>
        </section>
    );
    }