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
        Unpending the Norm: <br className="hidden lg:inline-block" />
        Warri&apos;s <span className="text-primary">First-Ever</span>
        <br className="hidden lg:inline-block" />
        <span className="text-green"> Design</span>{" "}
        {/* <span className="text-pink">in </span> */}
        <span className="text-blue">Conference</span>.
      </h1>
      <p className="mb-5 lg:mb-10 md:text-[17px] text-[#fff] md:w-3/4 lg:w-3/5">
        Shake up your design creativity and skills, learn from industry experts,
        network with other designers, and gain valuable insights into the latest
        trends and techniques in design.
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
