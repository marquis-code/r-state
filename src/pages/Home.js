import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TrendingTopics from '../components/TrendingTopics';
import BalanceSection from '../components/BalanceSection';
import RightSidebar from '../components/RightSidebar';

const DashboardUI = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const accounts = Array(4).fill({
    name: "Main account",
    amount: 413
  });

  return (
    <div className="flex h-screen w-full bg-gray-50 relative">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 overflow-auto pt-16 md:pt-0">
        <TrendingTopics />
        <BalanceSection accounts={accounts} />
      </div>
      <RightSidebar />
    </div>
  );
};

export default DashboardUI;
