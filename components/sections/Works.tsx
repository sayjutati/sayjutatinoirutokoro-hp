    "use client";
    import { motion } from "framer-motion";
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Navigation, Pagination, Autoplay } from 'swiper/modules';
    import SectionTitle from "@/components/ui/SectionTitle";

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';

    // TypeScriptの型定義
    type OtherWork = {
    title: string;
    category: string;
    image: string;
    };

    export default function Works() {
    // 💡 エラーの原因だったコメントアウト部分を一旦スッキリさせたよ！
    // 実績を追加するときは、この配列の中にオブジェクトを書いてね。
    const works: any[] = [];

    // その他の実績も今は空っぽ（将来追加するときはここに入れる）
    const otherWorks: OtherWork[] = [];

    return (
        <section id="works" className="scroll-mt-[12vh] py-24 bg-white relative">
        <div className="container mx-auto px-6 relative z-10">
            
            {/* --- セクションタイトル --- */}
            <SectionTitle en="Works" ja="実績紹介" watermark="WORKS" color="purple" />

            {/* --- メイン実績エリア --- */}
            {works.length > 0 ? (
            // 💡 スマホ時は1列、PC（lg）時は2列でゆったり配置
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                {works.map((work, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group bg-slate-50 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col"
                >
                    {/* Swiperによる画像スライダー */}
                    <div className="aspect-video relative overflow-hidden">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={{ nextEl: `.next-${index}`, prevEl: `.prev-${index}` }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000 }}
                        loop={true}
                        className="w-full h-full"
                    >
                        {work.images.map((img: string, i: number) => (
                        <SwiperSlide key={i}>
                            <img src={img} alt="" className="w-full h-full object-cover" />
                        </SwiperSlide>
                        ))}
                        {/* 💡 スマホ時はボタンを少し小さく（w-8 h-8）、PC時は標準サイズ（md:w-10 md:h-10） */}
                        <div className={`swiper-button-prev prev-${index} !text-white !w-8 !h-8 md:!w-10 md:!h-10 !bg-black/30 backdrop-blur-sm rounded-full after:!text-xs md:after:!text-sm opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                        <div className={`swiper-button-next next-${index} !text-white !w-8 !h-8 md:!w-10 md:!h-10 !bg-black/30 backdrop-blur-sm rounded-full after:!text-xs md:after:!text-sm opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    </Swiper>
                    </div>

                    {/* テキストエリア */}
                    <div className="p-6 md:p-10 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4 gap-4">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">{work.title}</h3>
                        <a href={work.url} target="_blank" rel="noopener noreferrer" className="bg-white p-2.5 rounded-full shadow-sm hover:bg-brand-purple hover:text-white transition-colors border border-slate-100 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </a>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6 font-medium text-sm md:text-base flex-grow">{work.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {work.tags.map((tag: string) => (
                        <span key={tag} className="text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 bg-white text-slate-500 rounded-full border border-slate-200 tracking-wider uppercase">{tag}</span>
                        ))}
                    </div>
                    </div>
                </motion.div>
                ))}
            </div>
            ) : (
            /* --- 実績0件時の「準備中」表示エリア --- */
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center py-12 md:py-24 px-6 bg-slate-50 border-2 border-slate-200 border-dashed rounded-[2rem] flex flex-col items-center justify-center"
            >
                <span className="text-4xl md:text-5xl mb-4">🛠️</span>
                <p className="text-lg md:text-2xl font-black text-slate-400 mb-2 tracking-widest uppercase">Coming Soon</p>
                <p className="text-sm md:text-base text-slate-500 font-bold">ただいま公開に向けて、新しい実績を準備中です。</p>
            </motion.div>
            )}

            {/* --- その他の実績エリア --- */}
            {otherWorks.length > 0 && (
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-24 md:mt-32 max-w-6xl mx-auto"
            >
                <div className="text-center mb-10 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">Other Works</h3>
                <div className="mt-3 w-10 md:w-12 h-1 bg-slate-300 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {otherWorks.map((item, i) => (
                    <motion.div 
                    key={i}
                    whileHover={{ y: -8, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
                    className="group relative bg-slate-50 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-100 transition-all duration-300 cursor-pointer"
                    >
                    <div className="aspect-square bg-slate-200 relative overflow-hidden">
                        {item.image ? (
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-sm md:text-base">No Image</div>
                        )}
                        
                        <div className="absolute top-3 md:top-4 left-3 md:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[9px] md:text-[10px] font-bold px-2 md:px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-purple rounded-full shadow-sm uppercase tracking-widest">
                            {item.category}
                        </span>
                        </div>
                    </div>
                    
                    <div className="p-4 md:p-5">
                        <h4 className="text-xs md:text-sm font-bold text-slate-800 line-clamp-2">{item.title}</h4>
                    </div>
                    </motion.div>
                ))}
                </div>
            </motion.div>
            )}

        </div>
        </section>
    );
    }