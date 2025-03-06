import React from 'react';
import { Home } from 'lucide-react';

const TrendingTopics = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl text-[#404650] font-semibold mb-4">Trending topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-4 py-6 border border-gray-100">
          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-lg mr-4">
              <Home size={20} className="text-gray-600" />
            </div>
            <div>
              <h3 className="text-[#404650] font-semibold">Hashtag research</h3>
              <p className="text-sm text-[#404650]">Upgrade to pro subscription for $9 / month</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 py-6 border border-gray-100">
          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-lg mr-4">
              <Home size={20} className="text-gray-600" />
            </div>
            <div>
              <h3 className="font-semibold text-[#404650]">Hashtag research</h3>
              <p className="text-sm text-[#404650]">Upgrade to pro subscription for $9 / month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopics;
