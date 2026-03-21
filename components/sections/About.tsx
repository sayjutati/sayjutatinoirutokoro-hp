    "use client";
    import { motion } from "framer-motion";

    export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
            >
            <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
            <div className="mt-2 w-16 h-1 bg-brand-blue mx-auto"></div>
            
            <p className="mt-10 text-xl font-bold text-brand-blue italic">
                「ゆるく生活をクリエイティブに」
            </p>

            <div className="mt-8 text-lg text-slate-600 leading-relaxed text-left md:text-center space-y-6">
                <p>
                はじめまして、火日（かじつ）です。<br />
                政獣たちのいるところという名前で、VTuberさんや個人クリエイターさん向けのWeb制作を行っています。
                </p>
                <p>
                自身の活動経験を活かして、VTuberさんや個人クリエイターさんの活動をWeb制作の面からサポートしていきます。
                </p>
                <p>
                「自分だけのホームページを作りたいけれど、何から始めればいいかわからない」<br />
                「自分の雰囲気にあったホームページを安く作りたい」<br />
                そんな方の個性を視覚的にわかりやすく形にし、リスナーとの繋がりを深めるお手伝いができたらいいなと思っています。
                </p>
            </div>
            </motion.div>
        </div>
        </section>
    );
    }