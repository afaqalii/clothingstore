import React from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";

const Benefits = () => {
  const benefitsData = [
    {
      icon: <AiOutlineCreditCard />,
      title: "International Delivery",
      text: "We offer free shipping to more than 40 countries around the world.",
    },
    {
      icon: <BsGlobe2 />,
      title: "International Delivery",
      text: "We offer free shipping to more than 40 countries around the world.",
    },
    {
      icon: <BsHandbag />,
      title: "International Delivery",
      text: "We offer free shipping to more than 40 countries around the world.",
    },
  ];
  return (
    <div className="container benefits px-[40px] py-[80px]">
      {benefitsData.map((benefit) => (
        <div className="pl-[20px]">
          {benefit.icon}
          <h1>{benefit.title}</h1>
          <p>{benefit.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
