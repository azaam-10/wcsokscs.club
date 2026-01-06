
import React from 'react';
import { Plus } from 'lucide-react';

const BalanceCard: React.FC = () => {
  return (
    <div className="bg-white rounded-[32px] shadow-xl overflow-hidden relative">
      <div className="p-8">
        <div className="flex items-center justify-between gap-4">
          {/* زر الإضافة - جهة اليمين في وضع RTL */}
          <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-blue-200 shrink-0">
            <Plus size={28} />
          </button>

          {/* نص الرصيد - جهة اليسار في وضع RTL مع حجم خط أصغر */}
          <div className="text-left overflow-hidden">
            <h2 className="text-2xl font-bold text-slate-800 break-all leading-tight">
              117945380.39 <span className="text-lg font-semibold whitespace-nowrap">ل.س</span>
            </h2>
            <p className="text-slate-400 mt-1 text-base">رصيدي</p>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F3FF] py-4 px-4 flex items-center">
        {/* المبلغ المجمد - جهة اليمين */}
        <div className="flex-1 text-center px-1">
          <div className="text-[#EF4444] font-bold text-sm sm:text-base break-all">0.00 ل.س</div>
          <div className="text-blue-500 text-xs sm:text-sm mt-1">المبلغ المجمد</div>
        </div>
        
        {/* فاصل منقط عمودي */}
        <div className="h-8 border-r-2 border-dotted border-slate-300 mx-1"></div>
        
        {/* المبلغ المتاح - جهة اليسار */}
        <div className="flex-1 text-center px-1">
          <div className="text-[#10B981] font-bold text-sm sm:text-base break-all">117945380.39 ل.س</div>
          <div className="text-blue-500 text-xs sm:text-sm mt-1">المبلغ المتاح</div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
