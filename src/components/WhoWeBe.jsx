import Image from "next/image";
import React from "react";
import { TbArrowUpRight } from "react-icons/tb";

const WhoWeBe = () => {
  return (
    <div className="mx-auto flex flex-col lg:flex-row items-center justify-between w-3/4">
        <Image src="/images/shot.png" alt="Lady with WDJX Flag" width={500} height={500} className="object-cover mb-6 lg:hidden" />
      <div className="left flex items-start flex-col w-full lg:w-[450px] mb-6 lg:mb-4">
        <span className="text-[#aaa] text-xl font-medium mb-4">Who We Be?</span>
        <p className="text-5xl text-white font-semibold">The conference wen wan <span className="text-[#018EF8]">reshape</span> the future of design in Warri </p>
      </div>
      <div className="w-full lg:w-1/2">
        <Image src="/images/shot.png" alt="Lady with WDJX Flag" width={600} height={600} className="object-cover mb-6 hidden lg:inline-block animate-b" />
        <div className="-ml-6">
          <p className="text-[#ddd] leading-7 mb-10 lg:mb-4 lg:w-full">
            While we are rooted in Warri&apos;s unique cultural context, WDJX brings
            a global perspective to design by cumulating and showcasing
            international trends, best practices, and success stories. We aim to
            blend the rich local heritage with innovative global approaches. Our
            goal is to foster a community that understands the potential of
            design, to bring about socio-cultural, economic and life
            transformation in the city and beyond Warri.
          </p>
          <button class="flex items-center space-x-1 bg-primary text-black px-6 py-3 font-semibold hover:opacity-80 ease-in duration-200">
            <a href="https://wa.me/message/PHODOTZ5RGMWC1">Omo! you go volunteer</a>
            <TbArrowUpRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeBe;
