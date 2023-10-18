import Image from "next/image";
import React from "react";
import { CiTwitter } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { TbArrowUpRight } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-10">
      <div className="z-20 mx-auto">
        <Image
          src="/footer-img.png"
          width={800}
          height={800}
          alt="Chidera and Clement including Nelson"
          className="w-auto md:h-[500px] relative -bottom-16"
        />
      </div>
      <div className="bg-[#141414] py-10 w-full z-40">
        <div className="container mx-auto">
          {/* Mobile Screen */}
          <div className="flex flex-col md:hidden gap-2 items-center mb-16">
            <div className="flex gap-1">
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">Register</a>
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">About us</a>
            </div>
            <div className="flex gap-1">
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">Sessions</a>
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">Sponsors</a>
            </div>
            <div className="flex gap-1">
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">Speakers</a>
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">Be a volunteer</a>
            </div>
            <div className="flex gap-1">
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">Be a sponsor</a>
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">Contact us</a>
            </div>
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">WDJX merch</a>
          </div>
          {/* Desktop Screen */}
          <div className="hidden flex-col md:flex md:flex-col gap-2 items-center md:space-x-10 mb-16">
            <div className="flex gap-1">
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">Register</a>
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">About us</a>
            {/* </div> */}
            {/* <div className="flex gap-1"> */}
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">Sessions</a>
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">Sponsors</a>
            {/* </div> */}
            {/* <div className="flex gap-1"> */}
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">Speakers</a>
            </div>
            <div className="flex gap-1">
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">Be a volunteer</a>
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">Be a sponsor</a>
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">Contact us</a>
            <a href="#" className="bg-transparent text-white font-medium text-lg px-6 py-3 border-[1px] border-gray-200">WDJX merch</a>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:flex-row items-center justify-between py-5">
            <div className="flex items-center justify-center divide-solid divide-x-2 divide-gray-400">
              <div className="font-semibold text-2xl lg:text-3xl pr-4">
                <a href="#home">
                  <Image
                    src="/wdjx.png"
                    alt="WDJX Logo"
                    height={50}
                    width={50}
                  />
                </a>
              </div>
              {/* <span className="text-white divide-y-2">|</span> */}
              <div className="text-xl pl-4 flex gap-6">
                <div
                  className="p-2 border border-gray-100 rounded-md bg-transparent"
                  // data-aos="fade-in"
                  // data-aos-delay="600"
                >
                  <CiTwitter className="w-6 h-6 text-white" />
                </div>
                <div
                  className="p-2 border border-gray-100 rounded-md bg-transparent"
                  // data-aos="fade-in"
                  // data-aos-delay="700"
                >
                  <SlSocialFacebook className="w-6 h-6 text-white" />
                </div>
                <div
                  className="p-2 border border-gray-100 rounded-md bg-transparent"
                  // data-aos="fade-in"
                  // data-aos-delay="800"
                >
                  <PiInstagramLogoLight className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <p className="text-white text-[15px] leading-6 flex items-center gap-2">
              For suggestions or sponsorship:{" "}
              <span className="flex items-center gap-1">
              <a href="mailto:wdjx@gmail.com" className="text-[#575757] hover:text-white duration-500 ease-in">
                Tell us about am
              </a>
              <TbArrowUpRight className="w-5 h-5 text-white" />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full py-5 bg-white flex flex-col md:flex-row items-center justify-center text-[15px] leading-5">
        <p>&copy; 2023 All right reserved. </p>
        <p className="">
          Designed with{" "}
          <span className="text-[#999] stroke-inherent stroke-slate-500">
            sweet and blood
          </span>{" "}
          love at{" "}
        </p>
        <p>Warri Design Community</p>
      </div>
    </div>
  );
};

export default Footer;
