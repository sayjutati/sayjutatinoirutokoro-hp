    "use client";
    import { motion } from "framer-motion";
    

    type SectionTitleProps = {
    en: string;       // 英語のサブタイトル（例: About Me）
    ja: string;       // 日本語のメインタイトル（例: 私について）
    watermark: string;// 背後の巨大な透かし文字（例: ABOUT）
    color?: "blue" | "red" | "purple" | "green" | "yellow"; // テーマカラー
    };

    export default function SectionTitle({ en, ja, watermark, color = "blue" }: SectionTitleProps) {
    // 渡された色に合わせてTailwindのクラスを切り替えるマッピング
    const colorMap = {
        blue: "text-brand-blue",
        red: "text-brand-red",
        purple: "text-brand-purple",
        green: "text-brand-green",
        yellow: "text-brand-yellow",
    };
    const dotColor = colorMap[color];

    return (
        <div className="text-center mb-16 md:mb-24 relative flex flex-col items-center justify-center">
        {/* 💡 背後の巨大な透かし文字（ウォーターマーク） */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] md:text-[9rem] font-black text-slate-900/[0.03] uppercase tracking-tighter whitespace-nowrap pointer-events-none z-0 select-none">
            {watermark}
        </span>
        
        {/* 💡 メインタイトル群 */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center"
        >
            {/* Terminalライクな英語サブタイトル（先頭に // をつける） */}
            <span className={`text-xs md:text-sm font-bold ${dotColor} tracking-[0.3em] uppercase mb-2 md:mb-3`}>
            // {en}
            </span>
            {/* 日本語メインタイトル（末尾のドット . にアクセントカラーをつける！） */}
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight">
            {ja}<span className={dotColor}>.</span>
            </h2>
        </motion.div>
        </div>
    );
    }