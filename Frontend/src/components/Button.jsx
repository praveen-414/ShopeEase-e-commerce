import React from "react";

const Button = ({text}) => {
  return (
    <button className="bg-[#4F46E5] text-[#FAFAFA] p-2 rounded-md cursor-pointer hover:bg-transparent hover:text-[#111827] border border-transparent hover:border hover:border-[#A1A1AA] active:scale-95 transition-all">
      {text}
    </button>
  );
};

export default Button;
