import React from "react";
import "./style.css";
import Button from "../../utils/Button";
const Hero = () => {
  return (
    <div className="hero mt-12 md:mt-24 grid place-content-center">
      <div className="flex justify-center flex-col py-[250px]">
        <h1 className="text-[70px]  text-white text-center">New Fall-Winter</h1>
        <h1 className="text-[70px] text-white text-center">Collection</h1>
        <Button>shop now</Button>
      </div>
    </div>
  );
};

export default Hero;
