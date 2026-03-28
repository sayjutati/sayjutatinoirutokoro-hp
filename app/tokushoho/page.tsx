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
                    {/* 🔴 Stripe審査通過のため、具体的な最低価格を明記する！金額は自分の想定に合わせて変えてOK！ */}
                    <td className="py-4 text-gray-800">Webサイト制作：50,000円〜<br /><span className="text-sm text-gray-500">※ご要件に応じて個別にお見積りいたします。</span></td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">商品代金以外の必要料金</th>
                    <td className="py-4 text-gray-800">銀行振込時の振込手数料、インターネット接続料金等の通信費</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">支払方法</th>
                    <td className="py-4 text-gray-800">クレジットカード決済、銀行振込</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">代金の支払時期</th>
                    <td className="py-4 text-gray-800">クレジットカード：決済時<br />銀行振込：ご請求書発行後、指定の期日まで</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">役務の提供時期</th>
                    <td className="py-4 text-gray-800">ご契約時に合意した制作スケジュール・納期（通常1ヶ月〜2ヶ月）に従い納品いたします。</td>
                </tr>
                <tr>
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">返品・キャンセル</th>
                    <td className="py-4 text-gray-800">提供するサービスの性質上、制作開始後のキャンセル、返品、および返金はお受けしておりません。</td>
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