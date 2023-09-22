import React from "react";
import { TbArrowUpRight } from "react-icons/tb";

const HeroSection = () => {
  return (
    <div className="mx-3 my-10 lg:my-20 lg:px-40 ">
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-medium mb-5 lg:mb-10 text-white">
        The First Waffi <br className="hidden lg:inline-block" />
        Design Conference
      </h1>
      <p className="mb-5 lg:mb-10 md:text-[17px] text-[#ddd] lg:w-3/4">
        Combining modern designs with the Africans vibes to lite our Waffi
        people and city. As Warri nor dey carry last, if you sabi am and say you
        nor wan make you and your career take last secure your spot now.
      </p>
      <button class="flex items-center space-x-1 bg-[#FFC800] text-black text-[18px] px-6 py-4 hover:opacity-80 ease-in duration-200">
        <a href="https://wa.me/message/PHODOTZ5RGMWC1">Make I secure my sit first</a>
        <TbArrowUpRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HeroSection;
