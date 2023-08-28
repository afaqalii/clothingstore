import React from "react";
import "./style.css";
import Button from "../../utils/Button";
const WhoWeAre = () => {
  return (
    <div className="container px-10 py-24 flex gap-4 flex-wrap">
      <div className="flex-1">
        <span className="block text-[15px] text-[#000000] uppercase mb-[20px]">
          who we are
        </span>
        <span className="text-[40px] capitalize text-[#000000]font-medium">
          <span className="block">hi, there.</span> we're blush boutique
        </span>
      </div>
      <div className="flex-1">
        <span className="block mb-[20px] text-left text-base font-light text-[#000000] leading-9">
          We make beautiful clothes that don’t just look great on the hanger.
          They look great on you, too! All of our clothes are designed for both
          comfort and style, so you look great and feel terrific, whatever
          you’re wearing.{" "}
        </span>
        <Button black={true}>learn more</Button>
      </div>
    </div>
  );
};

export default WhoWeAre;
