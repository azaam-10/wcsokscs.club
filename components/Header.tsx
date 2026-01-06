
import React from 'react';
import { Bell, Share2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="custom-gradient pt-8 pb-24 px-6 rounded-b-[40px] shadow-lg">
      <div className="flex justify-between items-start mb-6">
        {/* Notification bell on the far right in RTL */}
        <button className="text-white/90 hover:text-white p-2">
          <Bell size={24} />
        </button>

        {/* Profile info on the left side in RTL */}
        <div className="flex items-center gap-4">
          <div className="text-white text-left">
            <h1 className="text-xl font-bold">Ghaith 99</h1>
            <div className="flex items-center gap-2 mt-1 opacity-90">
              <span className="text-sm">رمز الدعوة: 246107</span>
              <Share2 size={14} className="cursor-pointer" />
            </div>
          </div>
          <div className="w-16 h-16 profile-gradient rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-inner border-2 border-white/20">
            A
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;