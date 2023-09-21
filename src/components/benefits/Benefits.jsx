import React from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import "./style.css"
const Benefits = () => {
  const benefitsData = [
    {
      icon: <AiOutlineCreditCard style={{fontSize:'32px'}} />,
      title: "International Delivery",
      text: "We offer free shipping to more than 40 countries around the world.",
    },
    {
      icon: <BsGlobe2 style={{fontSize:'32px'}} />,
      title: "International Delivery",
      text: "We offer free shipping to more than 40 countries around the world.",
    },
    {
      icon: <BsHandbag style={{fontSize:'32px'}} />,
      title: "International Delivery",
      text: "We offer free shipping to more than 40 countries around the world.",
    },
  ];
  return (
    <div className="container benefits px-[40px] py-[80px]">
      {benefitsData.map((benefit) => (
        <div className="flex gap-4 max-w-[370px] items-center text-center flex-col pl-[20px]">
          {benefit.icon}
          <h1 className="text-[15px]">{benefit.title}</h1>
          <p className="text-[13px]">{benefit.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
