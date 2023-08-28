import React from "react";
import { BsBag } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      text: "shop",
    },
    {
      id: 2,
      text: "about",
    },
    {
      id: 3,
      text: "lookbook",
    },
    {
      id: 4,
      text: "contact us",
    },
  ];
  return (
    <nav className="container flex items-center justify-between h-24 bg-white">
      <div className="logo w-[16.6%]">
        <img
          className="w-full"
          src="https://irp.cdn-website.com/md/dmtmpl/f67fc932-23e9-4c99-a08c-01ab694e3064/dms3rep/multi/LOGO_daisy.svg"
          alt="logo"
        />
      </div>
      <div className="w-[66%]">
        <ul className="flex items-center justify-center">
          {navItems.map((item) => (
            <li
              className="flex items-center list-none tracking-[.5px] cursor-pointer capitalize text-black text-sm pr-[15px]"
              key={item.id}
            >
              {item.text}
              {item.id === 1 && (
                <RiArrowDropDownLine style={{ fontSize: "24px" }} />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end w-[16.6%]">
        <BsBag style={{ fontSize: "24px", color: "black" }} />
      </div>
    </nav>
  );
};

export default Navbar;
