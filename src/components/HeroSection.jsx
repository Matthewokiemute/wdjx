import React, { useEffect } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import "aos/dist/aos.css";
import AOS from "aos";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);
  return (
    <div className="px-4 my-16 lg:my-20 lg:px-40 ">
      <p className="mb-3 lg:mb-10 md:text-[17px] text-[#fff] lg:w-3/4">DEC 1 - 2, 2023. Warri, Nigeria</p>
      <h1
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-5 lg:mb-10 text-white leading-[55px]"
        data-aos="fade-up"
        data-aos-delay="400"
      >
       Waffi Design <br className="hidden lg:inline-block" />
        Conference
      </h1>
      <p
        className="mb-5 lg:mb-10 md:text-[17px] text-[#fff] lg:w-3/4"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        Combining modern designs with the Africans vibes to lite our Waffi
        people and city. As Warri nor dey carry last, if you sabi am and say you
        nor wan make you and your career take last secure your spot now.
      </p>
      <button
        class="flex items-center space-x-1 bg-[#FFC800] text-black text-[18px] px-6 py-4 hover:opacity-80 ease-in duration-200"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <a href="https://wa.me/message/PHODOTZ5RGMWC1">
          Make I secure my sit first
        </a>
        <TbArrowUpRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HeroSection;
