
import React from 'react';
import { ChevronRight, Grid, Bell, CreditCard, Lock, MessageCircle, Wallet } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => (
  <div className="flex items-center justify-between py-4 px-2 hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-0">
    {/* Navigation chevron on the far right */}
    <ChevronRight size={20} className="text-slate-300" />
    
    <div className="flex items-center gap-4">
      {/* Text starts from left next to icon */}
      <span className="text-slate-700 font-medium text-left">{label}</span>
      {/* Icon in blue square on the left of text */}
      <div className="w-10 h-10 bg-blue-100/60 rounded-lg flex items-center justify-center text-blue-500 shrink-0">
        {icon}
      </div>
    </div>
  </div>
);

const NavList: React.FC = () => {
  const items = [
    { label: 'سحب', icon: <Wallet size={20} fill="currentColor" className="fill-blue-500/30" /> },
    { label: 'طلبات الشحن', icon: <Grid size={20} /> },
    { label: 'طلبات السحب', icon: <Grid size={20} /> },
    { label: 'تفاصيل المستخدم', icon: <Grid size={20} /> },
    { label: 'معلومات', icon: <Bell size={20} /> },
    { label: 'معلومات الربط', icon: <CreditCard size={20} /> },
    { label: 'تغيير كلمة المرور', icon: <Lock size={20} /> },
    { label: 'اختر اللغة', icon: <MessageCircle size={20} /> },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-3">
      {items.map((item, idx) => (
        <NavItem key={idx} icon={item.icon} label={item.label} />
      ))}
    </div>
  );
};

export default NavList;
