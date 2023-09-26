import Image from "next/image";
import React, { useEffect } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import "aos/dist/aos.css";
import AOS from "aos";

const WhoWeBe = () => {
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);
  return (
    <div
      id="home"
      className="container mx-auto flex flex-col px-4 lg:flex-row items-center justify-between w-full pb-14"
    >
      <Image
        src="/images/shot.png"
        alt="Lady with WDJX Flag"
        width={500}
        height={500}
        className="object-cover mb-6 lg:hidden"
      />
      <div
        className="flex items-start flex-col w-full lg:ml-40 lg:w-[450px] mb-6 lg:mb-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <span className="text-[#aaa] text-xl font-medium mb-4">Who We Be?</span>
        <p className="text-5xl md:text-[52px] text-white font-semibold">
          The conference wen wan <span className="text-[#018EF8]">reshape</span>{" "}
          the future of design in Warri{" "}
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          src="/images/shot.png"
          alt="Lady with WDJX Flag"
          width={600}
          height={600}
          className="object-cover mb-6 hidden lg:inline-block animate-b"
          data-aos="fade-up"
          data-aos-delay="400"
        />
        <div className="lg:pr-40">
          <p
            className="text-[#fff] leading-7 mb-10 lg:mb-6 lg:w-full"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            While we are rooted in Warri&apos;s unique cultural context, WDJX
            brings a global perspective to design by cumulating and showcasing
            international trends, best practices, and success stories. We aim to
            blend the rich local heritage with innovative global approaches. Our
            goal is to foster a community that understands the potential of
            design, to bring about socio-cultural, economic and life
            transformation in the city and beyond Warri.
          </p>
          <button
            class="flex items-center space-x-1 bg-primary text-black px-6 py-3 font-semibold hover:opacity-80 ease-in duration-200"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a href="https://wa.me/message/PHODOTZ5RGMWC1">
              Omo! you go volunteer
            </a>
            <TbArrowUpRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeBe;
