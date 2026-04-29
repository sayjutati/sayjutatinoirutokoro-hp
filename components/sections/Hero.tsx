"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  // 💡 アニメーションの状態を管理するstate（10秒ごとに切り替える）
  const [animState, setAnimState] = useState("hidden");

  useEffect(() => {
    setIsMounted(true);
    
    // 初回ロード時は少し待ってから集める
    const initialTimer = setTimeout(() => {
        setAnimState("visible");
    }, 100);

    // 💡 10秒ごとに「散る → 1.2秒後に再び集まる」をループさせる！
    const loopInterval = setInterval(() => {
        setAnimState("hidden"); // 一旦四方に散らす
        setTimeout(() => {
            setAnimState("visible"); // 1.2秒後にまた集める
        }, 1200);
    }, 10000);

    return () => {
        clearTimeout(initialTimer);
        clearInterval(loopInterval);
    };
  }, []);

  // ① 表示するテキストを設定
  const nameText = "火日（かじつ）";
  const subText = "@政獣たちのいるところ";

  const nameLetters = Array.from(nameText);
  const subLetters = Array.from(subText);

  // ② コンテナのアニメーション設定
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  // ③ 1文字ごとのアニメーション設定（四方八方から集まる / 散る）
  const getLetterVariants = (index: number): Variants => {
    const angle = (index * 137.5) * (Math.PI / 180);
    const distance = 120 + (index % 5) * 60; 
    
    const startX = Math.round(Math.cos(angle) * distance);
    const startY = Math.round(Math.sin(angle) * distance);
    const startRotate = Math.round((index % 2 === 0 ? 1 : -1) * 45);

    return {
      hidden: {
        opacity: 0,
        x: startX,
        y: startY,
        rotate: startRotate,
        scale: 0.5,
        // 💡 散る時もフワッと動くようにアニメーションを追加
        transition: {
          duration: 0.8,
          ease: "easeInOut"
        }
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    };
  };

  const gradientStyle = {
    backgroundImage: `linear-gradient(120deg, transparent 30%, rgba(234, 67, 53, 0.9) 50%, transparent 70%), linear-gradient(to bottom, #4285f4, #0f172a)`,
    backgroundSize: "200% 100%, 100% 100%",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    <section id="top" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-[12vh] md:pt-0">
      
      {/* 背景動画 */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 blur-2xl scale-[1.15] opacity-80">
        <source src="/movie/movie2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-white/60 z-0 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-brand-light/50 z-0"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-between z-10 relative">
        
        {/* --- 左側：テキスト --- */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          // 💡 ここを animState に連動させて10秒ループさせる
          animate={isMounted ? animState : "hidden"} 
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-20 mt-8 md:mt-0 order-2 md:order-1"
        >
          <h1 className="font-extrabold leading-tight w-full flex flex-col items-center md:items-start">
            
            {/* 上段：火日（かじつ） */}
            <div className="text-5xl md:text-[5.5rem] flex flex-wrap justify-center md:justify-start overflow-visible mb-2 md:mb-6">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={`name-${i}`}
                  variants={getLetterVariants(i)}
                  className="inline-block origin-center tracking-tighter pb-2"
                  animate={isMounted ? { backgroundPosition: ["200% center", "-200% center"] } : {}}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: i * 0.1 }}
                  style={gradientStyle}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* 下段：@政獣たちのいるところ */}
            <div className="text-3xl md:text-6xl flex flex-wrap justify-center md:justify-start overflow-visible mt-2 md:mt-4 md:ml-[4.5rem]">
              {subLetters.map((letter, i) => (
                <motion.span
                  key={`sub-${i}`}
                  variants={getLetterVariants(i + nameLetters.length)}
                  className="inline-block origin-center tracking-tighter pb-2"
                  animate={isMounted ? { backgroundPosition: ["200% center", "-200% center"] } : {}}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: (i + nameLetters.length) * 0.1 }}
                  style={gradientStyle}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* サブタイトル */}
          {/* 💡 サブタイトルも親要素の animState (hidden / visible) に連動して消えたり出たりする */}
          <motion.p 
            variants={{
                hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                visible: { opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.8 } }
            }}
            className="mt-6 md:mt-10 text-lg md:text-xl text-slate-800 font-bold md:ml-[8.5rem] drop-shadow-md"
          >
            ゆるく生活をクリエイティブに。
          </motion.p>
        </motion.div>

        {/* --- 右側：画像 --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={isMounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} 
          transition={{ duration: 0.8, delay: 0.5 }} 
          className="w-full md:w-1/2 flex justify-center relative order-1 md:order-2 mb-8 md:mb-0"
        >
          <div className="relative w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-full border-4 md:border-8 border-white overflow-hidden bg-white shadow-[-10px_-10px_30px_rgba(253,234,237,0.8),_10px_10px_30px_rgba(232,240,254,0.8)] z-10">
            <img src="/images/main1.png" alt="火日" className="object-cover w-full h-full" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}