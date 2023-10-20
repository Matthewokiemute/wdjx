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
      <p className="mb-2 lg:mb-4 md:text-[17px] text-[#fff] lg:w-3/4 font-semibold">DEC 1 - 2, 2023. Warri, Nigeria</p>
      <h1
        className="text-2xl md:text-3xl lg:text-7xl font-bold mb-5 lg:mb-10 text-white -tracking-wide"
        // data-aos="fade-up"
        // data-aos-delay="400"
      >
       Join us for the<br className="hidden lg:inline-block" />
       first ever <span className="text-primary">design</span><br className="hidden lg:inline-block" />
       <span className="text-green">conference</span> <span className="text-pink">in </span><span className="text-blue">warri</span>.
      </h1>
      <p
        className="mb-5 lg:mb-10 md:text-[17px] text-[#fff] lg:w-3/5"
      >
        Combining modern designs with the Africans vibes to lite our Waffi
        people and city. As Warri nor dey carry last, if you sabi am and say you
        nor wan make you and your career take last secure your spot now.
      </p>
      <button
        className="flex items-center space-x-1 bg-primary text-black text-[18px] px-6 py-4 hover:opacity-80 ease-in duration-200 rounded-md"
        // data-aos="fade-up"
        // data-aos-delay="800"
      >
        <a href="#register">
          Make I secure my sit first
        </a>
        <TbArrowUpRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HeroSection;
