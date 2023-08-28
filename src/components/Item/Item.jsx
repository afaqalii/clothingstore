import React from "react";

const Item = ({ item }) => {
  return (
    <>
      {item && (
        <div className="text-center cursor-pointer">
          <div className="w-[230px]">
            <img
              className="rounded-[3%] w-full h-full object-cover"
              src={item.img}
            />
          </div>
          <div className="p-[15px]">
            <h3 className="text-[18px]  capitalize text-black font-medium">{item.title}</h3>
            <span className="pt-[12px] text-[16px] text-[#333333] font-light ">
              {item.price}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
