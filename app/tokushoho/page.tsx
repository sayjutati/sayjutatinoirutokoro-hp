    // src/app/tokushoho/page.tsx
    import Link from 'next/link';

    export default function Tokushoho() {
    return (
        <div className="min-h-screen bg-gray-50 py-24 text-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl md:text-4xl font-black mb-10 text-center text-blue-900">
            特定商取引法に基づく表記
            </h1>
            
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-200">
            <table className="w-full text-left border-collapse">
                <tbody>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">販売事業者名</th>
                    <td className="py-4 text-gray-800">請求がありましたら、遅滞なく開示いたします。</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">所在地</th>
                    <td className="py-4 text-gray-800">請求がありましたら、遅滞なく開示いたします。</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">電話番号</th>
                    <td className="py-4 text-gray-800">請求がありましたら、遅滞なく開示いたします。</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">メールアドレス</th>
                    <td className="py-4 text-gray-800">sayju.official@gmail.com</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">販売価格</th>
                    <td className="py-4 text-gray-800">
                    <ul className="space-y-1">
                        <li>ココナラ：20,000円（税込）</li>
                        <li>SKIMA：21,000円（税込）</li>
                        <li>ランサーズ（パッケージ）：20,000円（税込）</li>
                    </ul>
                    <span className="block mt-2 text-sm text-gray-500">※制作費には、公開と運用の費用を含みます。</span>
                    </td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">商品代金以外の必要料金</th>
                    <td className="py-4 text-gray-800">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>ドメイン費用（年額）は、ご依頼者様のご負担となります。</li>
                        <li>ドメインの取得代行、またはドメインの変更・移管を当方で行う場合の事務手数料：5,000円</li>
                        <li>大きな変更が3回を超えた場合の追加料金：3,000円/回（公開前・公開後で別々に数えます）</li>
                        <li>公開後のセクションの内容変更：2,000円から</li>
                        <li>リニューアル：要相談（作り直しの場合は10,000円）</li>
                        <li>他の制作者へ移管する場合の費用：50,000円（ソース一式のコピーの引き渡しと、当方のVercelからの取り外しのみ）</li>
                    </ul>
                    </td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">支払方法・支払時期</th>
                    <td className="py-4 text-gray-800">ご利用の出品先（ココナラ・SKIMA・ランサーズ）の決済方法と規定に従います。</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">役務の提供時期</th>
                    <td className="py-4 text-gray-800">制作開始から1〜2週間を目安にデモ版をご連絡します。デモ版のご確認後に、公開・納品します。</td>
                </tr>
                <tr>
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">返品・キャンセル・返金</th>
                    <td className="py-4 text-gray-800">ご利用の出品先（ココナラ・SKIMA・ランサーズ）の規定に従います。</td>
                </tr>
                </tbody>
            </table>

            {/* 💡 この「どうやって請求するか」の注意書きがないとStripeは省略を認めてくれない！ */}
            <div className="mt-6 p-4 bg-gray-50 text-sm text-gray-600 rounded-lg border border-gray-200">
                ※上記における「請求がありましたら、遅滞なく開示いたします」の項目につきましては、上記メールアドレス宛てにご請求をいただいた場合、遅滞なく開示いたします。
            </div>
            </div>

            <div className="mt-12 text-center">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-bold hover:underline transition-all">
                &larr; トップページに戻る
            </Link>
            </div>
        </div>
        </div>
    );
    }