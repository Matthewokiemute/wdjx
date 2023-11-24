import { FiArrowRight } from "react-icons/fi";


const WatinToExpect = () => {
  return (
    <>
      <div
        id="expectation"
        className="container mx-auto flex md:flex-row items-center md:justify-around md:px-18 flex-col gap-10 md:space-x-[20px] pt-28"
      >
        <div className="px-6 md:px-0 w-[380px] md:w-[450px]">
          <p className="font-semibold text-4xl md:text-5xl">
            We plan dis wan come. The world of design gigantic, plenty things
            dey for you. <span className="text-[#FF2768]">Dey play!</span>
          </p>
        </div>
        <div className="px-4 md:px-0 flex flex-col space-y-[18px]">
            <div className="flex items-center gap-4 hover:text-[#018EF8] transition-all ease-in-out duration-400 cursor-pointer">
              <FiArrowRight className="w-6 h-6" />
              <p className="font-semibold text-xl">Architechure</p>
            </div>
            <div className="flex items-center gap-4 hover:text-[#FF2768] transition-all ease-in-out duration-400 cursor-pointer">
              <FiArrowRight className="w-6 h-6" />
              <p className="font-semibold text-xl">Visual Design</p>
            </div>
            <div className="flex items-center gap-4 hover:text-green transition-all ease-in-out duration-400 cursor-pointer">
              <FiArrowRight className="w-6 h-6" />
              <p className="font-semibold text-xl">Brand Design</p>
            </div>
            <div className="flex items-center gap-4 hover:text-pink transition-all ease-in-out duration-400 cursor-pointer">
              <FiArrowRight className="w-6 h-6" />
              <p className="font-semibold text-xl">UX/UI Design</p>
            </div>
            <div className="flex items-center gap-4 hover:text-primary transition-all ease-in-out duration-400 cursor-pointer">
              <FiArrowRight className="w-6 h-6" />
              <p className="font-semibold text-xl">Fashion</p>
            </div>
            <div className="flex items-center gap-4 hover:text-gray-500 transition-all ease-in-out duration-400 cursor-pointer">
              <FiArrowRight className="w-6 h-6" />
              <p className="font-semibold text-xl">Embedded Systems</p>
            </div>
            <div className="flex items-center gap-4 hover:text-[#018EF8] transition-all ease-in-out duration-400 cursor-pointer">
              <FiArrowRight className="w-6 h-6" />
              <p className="font-semibold text-xl">Everything Tecnology</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default WatinToExpect;
