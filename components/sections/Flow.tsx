    "use client";

    export default function Flow() {
    const steps = [
        { num: "01", title: "ご相談・ヒアリング", desc: "まずはXのDMやフォームから、どんなサイトにしたいかゆるくご相談ください。" },
        { num: "02", title: "プラン決定・お見積り", desc: "ヒアリング内容をもとに、最適なプランと最終的なお見積りをご提案します。" },
        { num: "03", title: "制作開始", desc: "素材（立ち絵やロゴなど）をいただき次第、HPの制作をスタートします。" },
        { num: "04", title: "ご確認・納品", desc: "完成したサイトをご確認いただき、問題がなければ公開（納品）となります。" },
    ];

    return (
        <section id="flow" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Flow</h2>
            <div className="mt-2 w-16 h-1 bg-brand-blue mx-auto"></div>
            </div>

            <div className="space-y-8">
            {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start md:items-center bg-slate-50 p-6 rounded-xl">
                <div className="text-5xl font-extrabold text-brand-blue opacity-20 mr-6 mb-4 md:mb-0">
                    {step.num}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                    <p className="mt-2 text-slate-600">{step.desc}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    }