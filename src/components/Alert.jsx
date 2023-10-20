import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Alert = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="w-screen h-[100vh] fixed bottom-0 left-0 bg-[rgba(27,_27,_28,_0.2)] z-50 grid place-items-center md:h-screen">
      <div className="bg-white py-6 px-8 z-50">
        <div className="flex items-center justify-between mb-2">
          <h1 className="font-bold text-lg">Wey you!! Form submitted 🎉</h1>
          <span onClick={onClose} className="cursor-pointer">
            <AiOutlineClose className="w-6 h-6 font-semibold" />
          </span>
        </div>
        <p className="text-[15px] leading-6 text-[#888]">
          Thanks for your interest in attending WDJX&apos;23. Click on the link to
          join our community group:{" "}
          <a href="https://chat.whatsapp.com/GWltvERAOHz8fwYRXKFkoo" className="font-bold underline">
            WDJX Community
          </a>
        </p>
      </div>
    </div>
  );
};

export default Alert;
