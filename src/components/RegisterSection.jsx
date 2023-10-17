import React from "react";
import { TbArrowUpRight } from "react-icons/tb";

const RegisterSection = () => {
  function SubmitForm(e) {
    const formEl = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(formEl);
    fetch(
      "https://script.google.com/macros/s/AKfycbxkXEOX0HZ2xVZ0oD8eWuZ2tJcniGarD9cvfRmrkdJqO7EFaOyRR6iBMJ8J_FyOusoOSg/exec",
      {
        method: "POST",
        body: formData,
      }
    );
  }
  return (
    <div className="container mx-auto flex md:flex-row items-center justify-center flex-col-reverse gap-10 md:gap-40 py-28">
      <div>
        <form onSubmit={(e) => SubmitForm(e)} className="form w-full relative">
          <div className="flex flex-col gap-3 mb-3">
            <label className="text-2xl md:text-3xl font-medium">
              Wetin be your name?
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="pt-8 pb-3 border-b-2 border-gray-300 outline-none"
            />
          </div>
          <div className="flex flex-col gap-3 mb-3">
            <label className="text-2xl md:text-3xl font-medium">
              How we go fit take reach you?
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="pt-8 pb-3 border-b-2 border-gray-300 outline-none"
            />
          </div>
          <div className="flex flex-col gap-3 mb-3">
            <label className="text-2xl md:text-3xl font-medium">
              Which day you wan take show?
            </label>
            <select className="pt-8 pb-3 border-b-2 border-gray-300 outline-none">
              <option defaultChecked value="--choose" name="--choose">
                --choose
              </option>
              <option value="Day One" name="Day One">
                Day One
              </option>
              <option value="Day Two" name="Day Two">
                Day Two
              </option>
              <option value="Both Days" name="Both Days">
                Both Days
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-3 mb-10">
            <label className="text-2xl md:text-3xl font-medium">
              How you take hear about us?
            </label>
            <select className="pt-8 pb-3 border-b-2 border-gray-300 outline-none">
              <option
                defaultChecked
                value="--choose"
                name="--choose"
                className="text-[#e9e9e9]"
              >
                --choose
              </option>
              <option value="A friend" name="A friend">
                A friend
              </option>
              <option value="WhatsApp" name="WhatsApp">
                WhatsApp
              </option>
              <option value="Twitter" name="Twitter">
                Twiiter
              </option>
              <option value="Instagram" name="Instagram">
                Instagram
              </option>
              <option value="Facebook" name="Facebook">
                Facebook
              </option>
              <option value="Banner" name="Banner">
                Banners
              </option>
            </select>
          </div>
          <div className="flex items-center space-x-1 bg-primary text-black px-6 py-3 font-semibold hover:opacity-80 ease-in duration-200 absolute right-0">
            <input type="submit" placeholder="Send am like that" />

            <TbArrowUpRight className="w-6 h-6" />
          </div>
        </form>
      </div>
      <div className="flex flex-col items-start px-5 gap-4 w-full md:w-[450px] mb-5 md:mb-0">
        <p className="text-6xl md:text-[90px] md:leading-[1] leading-[1]">
          Make we keep your space abi?
        </p>
        <p>
          <span className="text-[#bbbbbb]">
            We just say make we tell you say refreshment dey o
          </span>
          , sha you nor hear anything here o. Hope say you go come?
        </p>
      </div>
    </div>
  );
};

export default RegisterSection;
