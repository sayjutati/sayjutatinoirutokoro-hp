"use client"; // 🟢 useStateを使うために必須！必ず1行目に書く

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { X } from "lucide-react"; // 閉じるボタン用のアイコン
import SectionTitle from "@/components/ui/SectionTitle"; // 💡 メインHPの共通タイトル部品をインポート！

// Swiperのスタイルをインポート
import "swiper/css";
import "swiper/css/navigation";

export default function Demo() {
  // 🟢 ポップアップで表示している画像のインデックス（nullなら閉じてる状態）
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // 🟢 画像のデータ一覧（元のパスに戻したよ！）
  const images = [
    { id: 0, src: "/images/demosite/image1.png", alt: "デモサイト 導入" },
    { id: 1, src: "/images/demosite/image2.png", alt: "デモサイト 自己紹介" },
    { id: 2, src: "/images/demosite/image3.png", alt: "デモサイト リンク集" },
    { id: 3, src: "/images/demosite/image4.png", alt: "デモサイト 実績集" },
    { id: 4, src: "/images/demosite/image5.png", alt: "デモサイト お問い合わせ" },
  ];

  return (
    <section id="demo" className="w-full py-24 bg-gray-50 text-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* 🟢 タイトル部分 (元のデザインを維持！) */}
        <div className="mb-12 md:mb-16">
          <SectionTitle en="Demo Site" ja="デモサイトのご紹介" watermark="DEMO" color="blue" />
          
          <p className="text-center text-lg md:text-xl text-gray-600 font-medium mt-7 md:mt-12">
            ライトプランで制作可能なデザインの幅を、1つのページに詰め込みました。<br className="hidden md:block" />
            スクロールするたびに変わる5つの世界観を、ぜひ実際のブラウザで体験してください。
          </p>

          <p className="text-center text-blue-500 font-bold mt-4 text-sm md:text-base tracking-widest">
            ↓ 画像をクリックすると拡大して見れるよ！ ↓
          </p>
        </div>

        {/* 📸 通常時のオートスライドカルーセル */}
        <div className="w-full relative mb-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2} // スマホだと隣が少し見える
            centeredSlides={true}
            loop={true} // 無限ループ
            allowTouchMove={false} // 💡 ユーザーの操作を無効化
            autoplay={{ 
              delay: 5000, // 💡 5秒に1枚流れる
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }, // PCなら3枚並ぶ
            }}
            className="w-full py-4"
          >
            {images.map((image, index) => (
              <SwiperSlide key={image.id} className="pb-8">
                {/* 💡 画像カード。クリックでポップアップを開く */}
                <div 
                  className="cursor-pointer overflow-hidden rounded-xl shadow-md border border-gray-200 bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
                  onClick={() => setSelectedIndex(index)}
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 bg-black/60 text-white text-sm md:text-base font-bold tracking-widest px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        拡大表示
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 🚀 デモサイトへのリンクボタン (元のデザインを維持！) */}
        <div className="flex justify-center relative z-10">
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

      {/* 🔍 画像拡大ポップアップ (モーダル) 内のカルーセル */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          >
            {/* 閉じるボタン */}
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 z-[110] text-white bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full transition-colors"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={32} />
            </button>

            {/* 背景クリックで閉じるための見えないレイヤー */}
            <div className="absolute inset-0 z-0" onClick={() => setSelectedIndex(null)}></div>

            {/* ポップアップ内のスワイプ可能なカルーセル */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl z-10"
            >
              <Swiper
                modules={[Navigation]}
                navigation // 💡 自分で左右に操作できる矢印を表示
                loop={true}
                initialSlide={selectedIndex} // クリックした画像からスタート
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={true}
                className="w-full rounded-xl overflow-hidden"
              >
                {images.map((image) => (
                  <SwiperSlide key={image.id} className="flex justify-center items-center">
                    {/* object-containで全体が綺麗に収まるようにする */}
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl" 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <p className="text-center text-white/60 text-sm md:text-base mt-6 tracking-widest pointer-events-none">
                スワイプ または 左右の矢印で操作できます
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}