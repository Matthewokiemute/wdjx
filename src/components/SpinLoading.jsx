import React from "react";

const SpinLoading = ({ size = 40 }) => {
  return (
    <span
      className="border-2 border-black border-l-transparent border-b-transparent rounded-full animate-spin"
      style={{ width: `${size}px`, height: `${size}px` }}
    ></span>
  );
};

export default SpinLoading;
