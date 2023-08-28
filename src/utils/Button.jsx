import React from "react";

const Button = ({black,children}) => {
  return (
    <button className={`${black ? '':'mx-auto'} w-[260px] ${black ? 'bg-black' :  'bg-white' }  rounded-sm uppercase font-semibold h-[57px] text-sm ${black ? 'text-[#ffffff]':'text-[#463939]'}`}>
      {children}
    </button>
  );
};

export default Button;
