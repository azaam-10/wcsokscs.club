
import React from 'react';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import NavList from './components/NavList';
import BottomNav from './components/BottomNav';
import NotificationModal from './components/NotificationModal';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto relative pb-20 overflow-x-hidden">
      <Header />
      
      <main className="px-4 -mt-16 z-10 space-y-4">
        <BalanceCard />
        <NavList />
      </main>

      <BottomNav />
      
      {/* مربع الحوار المتسلسل */}
      <NotificationModal />
    </div>
  );
};

export default App;
