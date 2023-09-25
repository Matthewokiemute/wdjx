import React, { useState } from "react";
import Sponsors from "../Sponsors";

const SpeakersTab = () => {
  const [currentTab, setCurrentTab] = useState('1');
  const tabs = [
    {
      id: 1,
      tabTitle: "Day 1",
      tabDesc: "1st of December(Online)",
      content: "First Day Speakers 10",
    },
    {
      id: 2,
      tabTitle: "Day 2",
      tabDesc: "2nd of December(Physical)",
      content: "Second Day Speakers 6",
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <div className="container py-20 w-full mx-auto">
      <div className="left flex items-center flex-col gap-[10px] md:gap-[18px] w-full mb-6 lg:mb-4 px-6">
        <span className="text-[#333] text-lg md:text-2xl font-medium mb-2">
          Timetable
        </span>
        <div className="text-center">
          <p className="text-2xl md:text-3xl text-black font-semibold">
            Packaging waffi best, 9ja best and world-class for one place!
          </p>
        </div>
        <div className="flex items-center justify-between bg-[#ccc] p-1 w-full md:w-4/5">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
              className={`flex flex-col items-center py-4 w-full disabled:bg-primary disabled:text-black cursor-pointer`}
            >
              <span className="text-[15px] md:text-base font-semibold">{tab.tabTitle}</span>
              <span className="text-[13px] md:text-base">{tab.tabDesc}</span>
            </button>
          ))}
        </div>
        <div className="mt-4">
          {tabs.map((tab, idx) => (
            <div key={idx} className="w-full text-primary">
              {currentTab === `${tab.id}` && <div>{tab.content}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakersTab;
