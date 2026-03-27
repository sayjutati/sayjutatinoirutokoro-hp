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
                    <td className="py-4 text-gray-800">火日（かじつ）<br /><span className="text-sm text-gray-500">※本名で活動していない場合は、請求があった際に遅滞なく開示いたします。</span></td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">代表責任者名</th>
                    <td className="py-4 text-gray-800">請求があった際に遅滞なく開示いたします。</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">所在地</th>
                    <td className="py-4 text-gray-800">請求があった際に遅滞なく開示いたします。</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">電話番号</th>
                    <td className="py-4 text-gray-800">請求があった際に遅滞なく開示いたします。</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">メールアドレス</th>
                    <td className="py-4 text-gray-800">sayju.official@gmail.com</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">販売価格</th>
                    <td className="py-4 text-gray-800">各サービスの案内ページをご参照ください。</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">支払方法</th>
                    <td className="py-4 text-gray-800">クレジットカード決済（Stripe）</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">代金の支払時期</th>
                    <td className="py-4 text-gray-800">各サービスの案内ページにて個別に定めます。</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">サービスの提供時期</th>
                    <td className="py-4 text-gray-800">ご契約時のヒアリングに基づく制作スケジュールによります。</td>
                </tr>
                <tr>
                    <th className="py-4 pr-4 w-1/3 text-gray-600 font-bold align-top">返品・キャンセル</th>
                    <td className="py-4 text-gray-800">商品の性質上、制作開始後のキャンセルおよび返金はお受けしておりません。</td>
                </tr>
                </tbody>
            </table>
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