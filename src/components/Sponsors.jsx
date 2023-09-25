import React from "react";
import SlidingText from "./SlidingText";

const Sponsors = () => {
  return (
    <div className="pt-20 w-full md:px-8 md:mt-4 flex items-center justify-center">
      <div className="left flex items-center flex-col gap-[10px] md:gap-[18px] w-full mb-6 lg:mb-4 px-6">
        <span className="text-[#aaa] text-lg md:text-2xl font-medium mb-4">
          WDJX Sponsor?
        </span>
        <div className="text-center">
          <p className="text-2xl md:text-5xl text-black font-semibold">
            This event for nor dey possible{" "}
            <span className="md:hidden">without the help</span>
          </p>
          <p className="text-2xl md:text-5xl text-black font-semibold flex gap-2 items-center justify-center">
          <span className="hidden md:inline-block">without the help</span> of
            our <SlidingText />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
