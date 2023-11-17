import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TbArrowUpRight } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { PiInstagramLogoLight } from "react-icons/pi";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const showMenuFunc = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="container relative px-5 lg:px-40 pt-4 top-0 z-50">
      <nav className="container py-6 text-white md:flex md:items-center md:justify-between">
        <div className="font-semibold text-2xl lg:text-3xl">
          <a href="#home">
            <Image src="/wdjx.png" alt="WDJX Logo" height={50} width={50} />
          </a>
        </div>
        <div>
          <ul className="hidden lg:flex lg:text-[18px] items-center space-x-6">
            <li className="hover:text-primary duration-700 ease-in-out">
              <a className="effect" href="#home">
                Who We Be?
              </a>
            </li>
            <li className="hover:text-primary duration-700 ease-in-out">
              <a href="#sponsors">Sponsors</a>
            </li>
            <li className="hover:text-primary duration-700 ease-in-out">
              <a href="https://vanilla-jasmine-b15.notion.site/82bb28c56fc34639b019a3a422f9e7a0">Timetable</a>
            </li>
            <li className="hover:text-primary duration-700 ease-in-out">
              <a href="#contact">Hala Us</a>
            </li>
            <li>
              <button className="flex items-center space-x-1 bg-primary text-black px-6 py-2 hover:opacity-80 ease-in duration-200 rounded-md">
                <a href="#register">Secure ur sit</a>
                <TbArrowUpRight className="w-6 h-6" />
              </button>
            </li>
          </ul>
        </div>
        {/* <!-- MOBILE SCREEN --> */}
        <div className="fixed top-10 right-8 z-50">
          {!showMobileMenu ? (
            <button
              onClick={showMenuFunc}
              className="lg:hidden cursor-pointer bg-white text-black rounded-md p-2"
            >
              <IoIosMenu className="w-6 h-6" />
            </button>
          ) : (
            <button
              onClick={showMenuFunc}
              className="lg:hidden cursor-pointer text-white rounded-md"
            >
              <AiOutlineClose className="w-6 h-6" />
            </button>
          )}
        </div>
        {showMobileMenu && (
          <div className="bg-[#141414] text-white h-[100vh] fixed inset-0">
            <div className="h-full grid place-items-start">
              <ul className="pt-28 text-2xl pl-10 pb-6 flex flex-col gap-6">
                <li
                  data-aos-delay="400"
                  data-aos="fade-up"
                  className="hover:text-primary duration-700 ease-in-out"
                  onClick={showMenuFunc}
                >
                  <a id="hLink" href="#home">
                    Who We Be?
                  </a>
                </li>
                <li
                  data-aos-delay="600"
                  data-aos="fade-up"
                  className="hover:text-primary duration-700 ease-in-out"
                  onClick={showMenuFunc}
                >
                  <a id="hLink" href="#sponsors">
                    Sponsors
                  </a>
                </li>
                <li
                  data-aos-delay="800"
                  data-aos="fade-up"
                  className="hover:text-primary duration-700 ease-in-out"
                  onClick={showMenuFunc}
                >
                  <a id="hLink" href="https://vanilla-jasmine-b15.notion.site/82bb28c56fc34639b019a3a422f9e7a0">
                    Timetable
                  </a>
                </li>
                <li
                  data-aos-delay="1000"
                  data-aos="fade-up"
                  className="hover:text-primary duration-700 ease-in-out"
                  onClick={showMenuFunc}
                >
                  <a id="hLink" href="#contact">
                    Hala Us
                  </a>
                </li>
                {/* <li data-aos-delay="1200" data-aos="fade-top">
                  <button onClick={showMenuFunc} className="flex items-center space-x-1 bg-primary text-black px-6 py-4 hover:opacity-80 ease-in duration-200">
                    <a href="#register">
                      Secure ur sit
                    </a>
                    <TbArrowUpRight className="w-6 h-6" />
                  </button>
                </li> */}
              </ul>

              <div className="text-xl pl-10 py-5 flex gap-10">
                <a href="https://twitter.com/wdjx23" target="_blank">
                <div className="p-2 border border-gray-100 rounded-md bg-transparent" data-aos="fade-in" data-aos-delay="600">
                  <CiTwitter className="w-6 h-6 text-white" />
                </div>
                </a>
                <a href="https://facebook.com/wdjx23" target="_blank">
                <div className="p-2 border border-gray-100 rounded-md bg-transparent" data-aos="fade-in" data-aos-delay="700">
                  <SlSocialFacebook className="w-6 h-6 text-white" />
                </div>
                </a>
                <a href="https://www.instagram.com/wdjx23/" target="_blank">
                <div className="p-2 border border-gray-100 rounded-md bg-transparent" data-aos="fade-in" data-aos-delay="800">
                  <PiInstagramLogoLight className="w-6 h-6 text-white" />
                </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
