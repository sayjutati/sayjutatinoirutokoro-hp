    "use client";
    import { motion } from "framer-motion";
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Navigation, Pagination, Autoplay } from 'swiper/modules';

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';

    export default function Works() {
    const works = [
        {
        title: "猫喰ぐるる 公式サイト",
        url: "https://example.com",
        images: [
            "/images/samune1.png",
            "/images/samune2.png",
            "/images/samune3.png",
            "/images/samune4.png",
        ],
        description: "VTuber公式サイトの制作。世界観を重視したデザインとアニメーションを実装。",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"]
        },
        // 他の実績もここに並べる
    ];

    return (
        <section id="works" className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Works</h2>
            <div className="mt-3 w-20 h-1.5 bg-brand-blue mx-auto rounded-full"></div>
            <div className="mt-6 inline-flex items-center bg-brand-light px-5 py-2 rounded-full border border-brand-blue/10">
                <span className="text-slate-500 font-bold text-sm">Total Productions:</span>
                <span className="text-xl font-black text-brand-blue ml-2">12+</span>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {works.map((work, index) => (
                <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-slate-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                <div className="aspect-video relative overflow-hidden">
                    <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        nextEl: `.next-${index}`,
                        prevEl: `.prev-${index}`,
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                    className="w-full h-full"
                    >
                    {work.images.map((img, i) => (
                        <SwiperSlide key={i}>
                        <img src={img} alt="" className="w-full h-full object-cover" />
                        </SwiperSlide>
                    ))}
                    <div className={`swiper-button-prev prev-${index} !text-white !w-10 !h-10 !bg-black/30 backdrop-blur-sm rounded-full after:!text-sm opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    <div className={`swiper-button-next next-${index} !text-white !w-10 !h-10 !bg-black/30 backdrop-blur-sm rounded-full after:!text-sm opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    </Swiper>
                </div>
                <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-800">{work.title}</h3>
                    <a href={work.url} target="_blank" className="bg-white p-2 rounded-full shadow-sm hover:bg-brand-blue hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">{work.description}</p>
                    <div className="flex flex-wrap gap-2">
                    {work.tags.map(tag => (
                        <span key={tag} className="text-[11px] font-bold px-3 py-1 bg-white text-slate-500 rounded-full border border-slate-200">{tag}</span>
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