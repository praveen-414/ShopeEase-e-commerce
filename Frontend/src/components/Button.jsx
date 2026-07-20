import React from "react";

const Button = ({ text, onclick, className = "", ...props }) => {
  return (
    <button
      onClick={onclick}
      className={`bg-[#4F46E5] text-[#FAFAFA] py-2 px-4 rounded-md cursor-pointer hover:bg-transparent hover:text-[#111827] border border-transparent hover:border-[#A1A1AA] active:scale-95 transition-all outline-none ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
