import Image from "next/image";
import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleItemsDesktop = items.slice(currentIndex, currentIndex + 5);
  const visibleItemsMobile = items.slice(currentIndex, currentIndex + 3);

  const nextSlide = () => {
    if (currentIndex < items.length - 5) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(items.length - 5);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="hidden md:flex transition-transform -space-x-[100px] duration-300 ease-in-out transform "
        style={{ transform: `translateX(${currentIndex * 5}%)` }}
      >
        {visibleItemsDesktop.map((item, index) => (
          <div
            key={index}
            className="w-full p-4 transform transition-transform hover:scale-105 hover:shadow-md"
          >
            <div className="bg-gray-300 h-20 w-44 flex items-center justify-center">{item}</div>
          </div>
        ))}
      </div>
      <div
        className="flex md:hidden transition-transform space-x-[80px] duration-300 ease-in-out transform "
        style={{ transform: `translateX(${currentIndex * 33.33}%)` }}
      >
        {visibleItemsMobile.map((item, index) => (
          <div
            key={index}
            className="w-1/4 p-4 transform transition-transform hover:scale-105 hover:shadow-md"
          >
            <div className="bg-gray-300 h-16 w-40 flex items-center justify-center">{item}</div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-8 md:left-20 top-1/2 transform -translate-y-1/2 bg-white border-none w-8 h-8"
        onClick={prevSlide}
      >
        <Image src="/left-icon.png" width={20} height={20} alt="left icon" className="ml-1" />
      </button>
      <button
        className="absolute right-8 md:right-20 top-1/2 transform -translate-y-1/2 bg-white border-none w-8 h-8"
        onClick={nextSlide}
      >
        <Image src="/right-icon.png" width={20} height={20} alt="right icon" className="ml-[6px]" />
      </button>
    </div>
  );
};

export default Carousel;