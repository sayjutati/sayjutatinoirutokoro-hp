"use client";
import { motion, Variants } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", damping: 15, stiffness: 70 },
    },
};

type GuideItem = {
    title: string;
    body: string[];
};

export default function Guide() {
    const items: GuideItem[] = [
        {
            title: "どんな人向け？",
            body: ["VTuberに限らず、企業に所属していない個人配信者・動画投稿者のためのオリジナルHPを作ってるよ。"],
        },
        {
            title: "どんなサイト？",
            body: ["1ページ構成が基本だよ。", "ページを増やしたいときは相談してね。"],
        },
        {
            title: "AIを使って作るよ",
            body: ["開発には Cursor（AI）を使ってるよ。"],
        },
        {
            title: "素材は用意してね",
            body: [
                "イラスト・画像・文章などの素材は、依頼者さんに用意してもらうよ。",
                "素材の権利と責任は、依頼者さんにあるよ。",
            ],
        },
        {
            title: "公開までおまかせ",
            body: [
                "Vercelでの公開まで、こっちで対応するよ。",
                "ドメインは依頼者さん名義で、依頼者さんに用意してもらうよ。",
            ],
        },
        {
            title: "修正について",
            body: [
                "テキストやイラストの差し替えなど、軽い修正は何回でもOK！",
                "全体や構成の変更など大きな変更は3回まで（公開前と公開後で別々に数えるよ）。",
                "納品後も、軽い変更には対応するよ。",
            ],
        },
        {
            title: "相談について",
            body: [
                "技術的に難しい依頼は、お断りすることもあるよ。",
                "相談したいことや、こだわりたいことは遠慮なく伝えてね！",
            ],
        },
        {
            title: "著作権・利用について",
            body: [
                "著作権は火日（かじつ）が持つよ。",
                "依頼者さんには、そのサイトの複製・改変・運用と、他の制作者さんへの改修依頼に使える利用許諾を渡すよ。",
                "他のサイトへの流用や、ソースの再配布・販売はできないよ。",
            ],
        },
        {
            title: "クレジットと実績掲載",
            body: [
                "サイトのクレジットに「サイト制作：火日-かじつ-」を入れるよ。",
                "制作したサイトは実績として掲載させてもらうよ（同意してもらえない場合は、お受けできないよ）。",
            ],
        },
        {
            title: "免責",
            body: ["サイトによって、活動の成果などを保証するものではないよ。"],
        },
    ];

    return (
        <section id="guide" className="scroll-mt-[12vh] py-24 bg-white relative overflow-hidden">
            <div className="absolute top-1/4 left-0 w-[40vw] h-[40vw] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3"></div>
            <div className="absolute bottom-1/4 right-0 w-[30vw] h-[30vw] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle en="Guide" ja="ご依頼について" watermark="GUIDE" color="red" />
                <p className="text-center text-slate-500 font-medium mt-4 mb-12 md:mb-16 text-sm md:text-base">
                    依頼を考えてくれている人に、<br className="block md:hidden" />先に知っておいてほしいことをまとめたよ。
                </p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
                >
                    {items.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                            className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <h3 className="font-black text-lg md:text-xl text-slate-800 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-brand-red shrink-0"></span>
                                {item.title}
                            </h3>
                            <div className="space-y-2 text-slate-600 font-medium text-sm md:text-base leading-relaxed">
                                {item.body.map((line) => (
                                    <p key={line}>{line}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
