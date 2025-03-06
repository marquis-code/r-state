import React from 'react';
import { Menu, X } from 'lucide-react';
import home from '../assets/images/sidebar/home.svg';
import activity from '../assets/images/sidebar/activity.svg';
import browser from '../assets/images/sidebar/discover.svg';
import setting from '../assets/images/sidebar/settings.svg';
import logo from '../assets/images/logo.png';

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <div className={`fixed md:static inset-0 bg-white border-r border-gray-200 flex flex-col z-40 transition-transform duration-300 md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-60`}>
      <div className="p-6 flex justify-between items-center">
        <div className="flex items-center text-blue-500 font-semibold">
          <img src={logo} className='w-auto h-14' />
        </div>
        <button onClick={toggleSidebar} className="p-1 rounded-md text-gray-600 hover:bg-gray-100 md:hidden">
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-4">
        <div className="flex items-center text-[#88909C] p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img src={home} />
          <span className="ml-4">Home</span>
        </div>
        <div className="flex items-center text-blue-500 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img src={activity} />
          <span className="ml-4">Activity</span>
        </div>
        <div className="flex items-center text-[#88909C] p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img src={browser} />
          <span className="ml-4">Discover</span>
        </div>
        <div className="flex items-center text-[#88909C] p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img src={setting} />
          <span className="ml-4">Settings</span>
        </div>
        <section className="pt-6">
          <div className="mb-6 bg-blue-500 text-white bg-gradient-to-b from-[#3579DC] to-[#95D9FF] p-4 rounded-lg shadow-lg rounded-lg">
            <div className="font-bold mb-1">GET more with PRO</div>
            <div className="text-sm">Upgrade to pro subscription for $9 / month</div>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Sidebar;
