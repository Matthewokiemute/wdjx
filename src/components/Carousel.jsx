import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import React, { useState } from "react";

// const visibleItemsDesktop =

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const visibleItemsDesktop = items.slice(currentIndex, currentIndex + 5);
  const visibleItemsMobile = items.slice(currentIndex, currentIndex + 3);

  // const nextSlide = () => {
  //   if (currentIndex < items.length - 5) {
  //     setCurrentIndex(currentIndex + 1);
  //   } else {
  //     setCurrentIndex(0);
  //   }
  // };

  // const prevSlide = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex(currentIndex - 1);
  //   } else {
  //     setCurrentIndex(items.length - 5);
  //   }
  // };

  return (
    <div className="container mx-auto">
      <div className="mx-auto flex items-center justify-center">
        {/* <div
          className="hidden transition-transform space-x-[10px] duration-300 ease-in-out transform "
          style={{ transform: `translateX(${currentIndex * 5}%)` }}
        >
          {visibleItemsDesktop.map((item, index) => (
            <div
              key={index}
              className="w-full p-4 transform transition-transform hover:scale-105"
            >
              <div className="h-20 w-44 flex items-center justify-center">
                <Image
                  src={item}
                  alt="Sponsor"
                  width={400}
                  height={100}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div> */}
        <div
          className="flex flex-col md:flex-row transition-transform md:space-x-[50px] duration-300 ease-in-out transform"
        >
          {visibleItemsMobile.map((item, index) => (
            <div
              key={index}
              className="w-1/4 p-2 transform transition-transform hover:scale-105"
            >
              <div className="h-10 w-32 md:h-20 md:w-48 flex items-center contrast-150 justify-center">
                <Image
                  src={item}
                  alt="Sponsor"
                  width={400}
                  height={100}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        {/* <button
          className="absolute left-8 md:left-20 top-1/2 transform -translate-y-1/2 bg-white border-none w-8 h-8"
          onClick={prevSlide}
        >
          <Image
            src="/left-icon.png"
            width={20}
            height={20}
            alt="left icon"
            className="ml-1"
          />
        </button>
        <button
          className="absolute right-8 md:right-20 top-1/2 transform -translate-y-1/2 bg-white border-none w-8 h-8"
          onClick={nextSlide}
        >
          <Image
            src="/right-icon.png"
            width={20}
            height={20}
            alt="right icon"
            className="ml-[6px]"
          />
        </button> */}
      </div>
      <div className="flex items-center justify-center mt-4 pb-10">
        <button className="flex items-center space-x-1 rounded-md bg-primary text-black px-6 py-3 hover:opacity-80 ease-in duration-200">
          <a
            target="-blank"
            href="https://drive.google.com/file/d/1b1eDLqTcyI2YfMSz66a_rp7hygq_Ch3O/view?usp=drivesdk"
          >
            You wan be Odogu too?
          </a>
          <TbArrowUpRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
