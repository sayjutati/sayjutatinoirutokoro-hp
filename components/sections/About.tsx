"use client";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import SectionTitle from "@/components/ui/SectionTitle"; // 💡 共通タイトル部品

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 }, 
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 70
      }
    },
  };

  // glowing blue コーナーブラケットのアニメーション
  const glowVariants: Variants = {
    animate: {
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 4,       
        repeat: Infinity,  
        ease: "easeInOut"
      },
    },
  };

  // 背景のフローティングシェイプのアニメーション
  const shapeVariants: Variants = {
    animate: (i: number) => ({
      y: [0, -20 * i, 0],
      x: [0, 10 * i, 0],
      opacity: [0.1, 0.3, 0.1],
      transition: {
        duration: 10 + i * 2,
        repeat: Infinity,
        ease: "easeInOut"
      },
    }),
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const tatieImages = ["/images/tatie1.png", "/images/tatie2.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % tatieImages.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const shapes = [
    { type: "code", icon: " < /> ", className: "top-1/4 left-1/4 text-5xl" },
    { type: "art", icon: "🎨", className: "bottom-1/4 right-1/4 text-6xl" },
    { type: "gear", icon: "⚙️", className: "top-1/3 right-1/3 text-4xl" },
  ];

  return (
    <section id="about" className="scroll-mt-[12vh] py-24 bg-white relative overflow-hidden">
      
      {/* 背景の動画残像（環境光） */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 blur-3xl scale-[1.15]">
          <source src="/movie/movie2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 背景のフローティング・クリエイティブ・シェイプ */}
      {shapes.map((shape, i) => (
        <motion.div 
          key={i}
          variants={shapeVariants}
          custom={i}
          animate="animate"
          // 💡 スマホでは少し小さく表示されるように調整
          className={`absolute z-0 ${shape.className} text-brand-blue/30 font-black tracking-tight pointer-events-none md:scale-100 scale-75`}
        >
          {shape.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- セクションタイトル（共通部品呼び出し！） --- */}
        <SectionTitle en="About Me" ja="私について" watermark="ABOUT" color="blue" />

        {/* オシャレ空間「Terminal-Creative」コンテナ */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          // 💡 スマホ時は余白を少し狭く（p-6）、PC時は広く（md:p-12）
          className="relative max-w-7xl mx-auto p-6 md:p-12 rounded-[2rem] border border-slate-800 shadow-[inset_0_0_15px_rgba(66,133,244,0.1)] bg-white overflow-hidden" 
        >
          
          {/* glowing blue コーナーブラケット */}
          <motion.span variants={glowVariants} animate="animate" className="absolute top-4 left-4 text-2xl md:text-3xl font-black text-brand-blue/70">{`{`}</motion.span>
          <motion.span variants={glowVariants} animate="animate" className="absolute top-4 right-4 text-2xl md:text-3xl font-black text-brand-blue/70">{`}`}</motion.span>
          <motion.span variants={glowVariants} animate="animate" className="absolute bottom-4 left-4 text-2xl md:text-3xl font-black text-brand-blue/70">{`< />`}</motion.span>
          <motion.span variants={glowVariants} animate="animate" className="absolute bottom-4 right-4 text-xl md:text-3xl font-black text-brand-blue/70 text-slate-400"># Supporter</motion.span>

          {/* コンテンツエリア */}
          {/* 💡 スマホは flex-col-reverse（画像が上、テキストが下）、PCは flex-row */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-24 z-10 relative pt-4 md:pt-[4vh]">
            
            {/* 左側：テキストエリア */}
            <div className="w-full md:w-1/2 lg:w-3/5 text-left flex flex-col items-start">
              
              {/* サブタイトル */}
              {/* 💡 サイズ感と行間を調整。スマホ時は改行を入れてバランスよく */}
              <h3 className="font-black text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-snug tracking-tight mb-8 md:mb-12 w-full"> 
                <motion.span 
                  animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 1 }}
                  style={{
                    backgroundImage: `linear-gradient(120deg, transparent 30%, rgba(234, 67, 53, 0.9) 50%, transparent 70%), linear-gradient(to bottom, #4285f4, #0f172a)`,
                    backgroundSize: "200% 100%, 100% 100%",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                  className="inline-block tracking-tighter pb-1"
                >
                  あなたの『最高』を飾るための、<br className="block lg:hidden" />『最適』な額縁を用意する。
                </motion.span>
                <br className="hidden lg:block" />
                <motion.span 
                  animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 3 }}
                  style={{
                    backgroundImage: `linear-gradient(120deg, transparent 30%, rgba(234, 67, 53, 0.9) 50%, transparent 70%), linear-gradient(to bottom, #4285f4, #0f172a)`,
                    backgroundSize: "200% 100%, 100% 100%",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                  className="inline-block tracking-tighter pb-1 mt-3 lg:mt-4 text-xl md:text-2xl lg:text-3xl opacity-90"
                >
                  活動をバックアップする共犯者
                </motion.span>
              </h3>

              {/* 本文エリア */}
              {/* 💡 強制改行(br)を減らして、画面幅に応じた自然な折り返しに。段落間の余白で読みやすさを担保 */}
              <motion.div variants={itemVariants} className="space-y-6 md:space-y-7 text-slate-700 leading-[1.8] font-medium text-base md:text-lg">
                <p>
                  「政獣たちのいるところ」のクリエイター、
                  {/* 💡 火日のサイズを少し落ち着かせてバランス調整 */}
                  <span className="text-brand-blue font-bold text-lg md:text-xl mx-1">火日（かじつ）</span>です。
                </p>
                <p>
                  本命を輝かせる裏方。<br />
                  個人クリエイターを<strong className="text-brand-red font-black">全力でバックアップ</strong>する。
                </p>
                <p>
                  あなたが思い描く『理想の景色』を、私が持ちうる『現実の技術』で組み上げる。
                  サイトという『器』を造り上げる作業は、裏方である私にお任せください。
                  あなたはただ、そこに注ぐ『中身』を創り出す営みにだけ、向かい合えるように。
                </p>
                <p>
                  専属の「サイト制作班」。
                  班とは名ばかりの個人ですが、だからこそ小回りが利く。だからこそ寄り添える。
                  あなただけの世界を構築する<strong className="text-brand-blue font-black">共犯者</strong>として。一緒に、最高に面白いものを企てましょう。
                </p>
              </motion.div>
            </div>

            {/* 右側：立ち絵ローテーション */}
            <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col items-center justify-center relative mt-8 md:mt-0">
              {/* 💡 縦長になりすぎないように aspect-ratio を使って調整。最大幅も指定してシュッとさせる */}
              <div className="relative z-10 flex justify-center w-full max-w-[20rem] lg:max-w-[24rem] aspect-[3/4] border border-slate-200 rounded-2xl bg-white shadow-[0_0_30px_rgba(66,133,244,0.15)] p-4 md:p-6">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={tatieImages[currentImageIndex]} 
                    alt="火日立ち絵" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="object-contain w-full h-full mix-blend-multiply" 
                  />
                </AnimatePresence>
              </div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}