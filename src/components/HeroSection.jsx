import React, { useEffect } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);
  return (
    <div className="relative px-5 my-16 lg:my-20 lg:px-40">
      <p className="mb-2 lg:mb-4 md:text-[17px] text-[#fff] lg:w-3/4 font-semibold italic">
        DEC 1 - 2, 2023. Warri, Nigeria
      </p>
      <h1
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 lg:mb-10 text-white -tracking-wide md:w-3/4 lg:3/5"
        // data-aos="fade-up"
        // data-aos-delay="400"
      >
        Join us for the <br className="hidden lg:inline-block" />
        first ever <span className="text-primary">design</span>
        <br className="hidden lg:inline-block" />
        <span className="text-green"> conference</span>{" "}
        <span className="text-pink">in </span>
        <span className="text-blue">warri</span>.
      </h1>
      <p className="mb-5 lg:mb-10 md:text-[17px] text-[#fff] md:w-3/4 lg:w-3/5">
        Combining modern designs with the Africans vibes to lite our Waffi
        people and city. As Warri nor dey carry last, if you sabi am and say you
        nor wan make you and your career take last secure your spot now.
      </p>
      <button
        className="flex items-center space-x-1 bg-primary text-black text-[18px] px-6 py-4 hover:opacity-80 ease-in duration-200 rounded-md"
        // data-aos="fade-up"
        // data-aos-delay="800"
      >
        <a href="#register">Make I secure my sit</a>
        <TbArrowUpRight className="w-6 h-6" />
      </button>
      <div className="absolute hidden md:inline md:-right-[360px] lg:-right-60 top-0">
        <Image
          src="/check.svg"
          alt="Square boxes"
          width={500}
          height={900}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
