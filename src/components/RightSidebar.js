import React from 'react';
import emailEnvelope from '../assets/images/icons/gray-email.svg';
import websiteVisited from '../assets/images/icons/visited-website.svg';
import whiteEnvelope from '../assets/images/icons/white-email.svg';

const RightSidebar = () => {
  return (
    <div className="w-80 bg-white border-l-[0.5px] shadow-lf border-gray-100 hidden md:block">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-[#404650] mb-6">History</h2>

        <div className="relative">
          <div className="absolute left-4 top-0 border-[0.5px] border-dotted h-full w-px bg-gray-200"></div>

          <div className="ml-4 space-y-16">
            {/* History Items */}
            <HistoryItem img={whiteEnvelope} title="Email opened" time="July 2, 2021 8am" />
            <HistoryItem img={emailEnvelope} title="Email sent" time="July 2, 2021 8am" />
            <HistoryItem img={websiteVisited} title="Visited website" time="July 2, 2021 8am" />
            <HistoryItem img={emailEnvelope} title="Email sent" time="July 2, 2021 8am" />
            <HistoryItem img={emailEnvelope} title="Email sent" time="July 2, 2021 8am" />
          </div>
        </div>
      </div>
    </div>
  );
};

const HistoryItem = ({ img, title, time }) => {
  return (
    <div className="relative">
      <div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        <img src={img} />
      </div>
      <div className="pl-6">
        <h4 className="text-[#3579DC]">{title}</h4>
        <p className="text-xs text-[#88909C]">{time}</p>
      </div>
    </div>
  );
};

export default RightSidebar;
