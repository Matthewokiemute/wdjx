import React, { useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import DayOneSpeakers from "../speakers/DayOneSpeakers";
import DayTwoSpeakers from "../speakers/DayTwoSpeakers";

const SpeakersTab = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Day 1",
      tabDesc: "1st Dec (Online)",
      content: <DayOneSpeakers />,
    },
    {
      id: 2,
      tabTitle: "Day 2",
      tabDesc: "2nd Dec (Physical)",
      content: <DayTwoSpeakers />,
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <div className="mt-20 py-20 w-full mx-auto bg-[#f7f7f7]">
      <div className="left flex items-center flex-col gap-[10px] md:gap-[18px] w-full mb-6 lg:mb-4 px-6">
        <span className="text-[#333] text-lg md:text-2xl font-medium mb-2">
          Timetable
        </span>
        <div className="text-center md:w-2/5">
          <p className="text-2xl md:text-4xl text-black font-semibold mb-2">
            Our speakers choke!
          </p>
        </div>
        <div className="flex items-center justify-between bg-[#ccc] p-1 w-full md:w-3/5">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
              className={`flex flex-col items-center py-4 w-full disabled:bg-primary disabled:text-black cursor-pointer`}
            >
              <span className="text-[15px] md:text-base font-semibold">
                {tab.tabTitle}
              </span>
              <span className="text-[13px] md:text-base">{tab.tabDesc}</span>
            </button>
          ))}
        </div>
        <div className="mt-4">
          {tabs.map((tab, idx) => (
            <div key={idx} className="w-full text-black">
              {currentTab === `${tab.id}` && <div>{tab.content}</div>}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#57C126] mt-20 flex items-center justify-center">
        <div className="py-20 px-16 md:px-[120px] flex flex-col gap-6 items-center text-center md:flex-row md:gap-10">
          <p className="text-white text-3xl w-full md:w-[400px]">
            All wetin them wan talk about dey here. Check am!
          </p>
          <div className="flex flex-col md:flex-row gap-3 items-center w-fit">
            <button class="flex items-center justify-center space-x-1 bg-primary text-black px-6 py-[18px] hover:opacity-80 ease-in duration-200">
              <a href="https://wa.me/message/PHODOTZ5RGMWC1">
                View all sessions
              </a>
              <TbArrowUpRight className="w-6 h-6" />
            </button>
            <button class="flex items-center space-x-1 bg-transparent border-2 border-black text-black px-6 py-4 hover:opacity-80 ease-in duration-200">
              <a href="https://wa.me/message/PHODOTZ5RGMWC1">
                Add to me calendar
              </a>
              <TbArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersTab;
