import React from 'react';
import { Minus, Plus } from 'lucide-react';
import womanStanding from '../assets/images/scratching-head.png'

const BalanceSection = ({ accounts }) => {
  return (
    <div className="bg-gray-50 p-4 flex items-center justify-center">
      <div className="relative w-full max-w-4xl lg:flex">
        <div className="hidden lg:block absolute left-0 bottom-0 z-10" style={{ height: '500px' }}>
          <img src={womanStanding} alt="Woman illustration" className="h-full object-contain object-bottom" style={{ maxWidth: '200px' }} />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 lg:ml-60 flex-1">
          <div>
            <h3 className="text-[#404650] font-semibold mb-1">Balances</h3>
            <h2 className="text-3xl font-bold text-[#404650] mb-6">$9,314</h2>

            {accounts.map((account, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-t border-gray-100">
                <div className="text-[#404650]">{account.name}</div>
                <div className="flex items-center">
                  <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#88909C] mr-3">
                    <Minus size={16} />
                  </button>
                  <span className="w-16 text-right text-[#404650]">${account.amount}</span>
                  <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#88909C] ml-3">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceSection;
