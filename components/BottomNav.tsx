
import React from 'react';
import { Home, LayoutGrid, ShoppingBag, Headphones, User } from 'lucide-react';

const BottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 flex justify-between items-center z-50 max-w-md mx-auto">
      {/* Order for the requested layout: Home on the right, User on the left */}
      <NavItem icon={<Home size={28} />} active={false} />
      <NavItem icon={<LayoutGrid size={28} />} active={false} />
      <NavItem icon={<ShoppingBag size={28} />} active={false} />
      <NavItem icon={<Headphones size={28} />} active={false} />
      <NavItem icon={<User size={28} />} active={true} />
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, active }) => (
  <button className={`p-2 transition-colors ${active ? 'text-blue-500' : 'text-slate-400'}`}>
    {icon}
  </button>
);

export default BottomNav;
