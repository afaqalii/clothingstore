import React from "react";
import Button from "../../utils/Button";

const OurStory = () => {
  const sisters =
    "https://lirp.cdn-website.com/md/dmtmpl/f67fc932-23e9-4c99-a08c-01ab694e3064/dms3rep/multi/opt/two_woman_wear_red_and_blue_suits-1920w.jpg";
  return (
    <div className="container py-[100px] flex flex-wrap lg:flex-nowrap justify-between items-center">
      <div className="w-[60%] h-[390px]">
        <div className="w-[484px] h-full">
          <img
            className="rounded-[3%] w-full h-full object-cover"
            src={sisters}
          />
        </div>
      </div>
      <div className="w-[45%] flex flex-col gap-10">
        <h1 className="text-[40px] text-black capitalize">our story</h1>
        <p className="text-black">
          I grew up in a small town, but always dreamed of moving to the big
          city. Once I moved to New York, there was no looking back. The noise,
          the bustle, the scents, the fashion. It was everything I had dream
          about.{" "}
        </p>
        <Button black={true}>learn more</Button>
      </div>
    </div>
  );
};

export default OurStory;
