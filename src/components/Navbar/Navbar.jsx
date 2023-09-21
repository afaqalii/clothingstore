import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./style.css";
const Navbar = () => {
  const [showMenuItems, setShowMenuItems] = useState(false);
  const handleNavbar = () => {
    setShowMenuItems((prev) => !prev);
  };
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
    <div className="fixed w-full top-0 bg-white">
      <nav className="container  flex items-center justify-between h-16 md:h-24  bg-white">
      {/* Menu Icon */}
      <div
        onClick={handleNavbar}
        className="menu-icon flex flex-col justify-center gap-1 md:hidden h-[52px] w-[52px]"
      >
        <span className={`${showMenuItems ? 'baractive':''} bar bar-one my-0 ease-in duration-300`}></span>
        <span className={`${showMenuItems ? 'baractive':''} bar bar-two my-0 ease-in duration-300`}></span>
        <span className={`${showMenuItems ? 'baractive':''} bar bar-three my-0 ease-in duration-300`}></span>
      </div>
      {/* Navbar Logo */}
      <div className="logo  md:w-[16.6%]">
        <img
          className=" w-[260px] md:w-full"
          src="https://irp.cdn-website.com/md/dmtmpl/f67fc932-23e9-4c99-a08c-01ab694e3064/dms3rep/multi/LOGO_daisy.svg"
          alt="logo"
        />
      </div>
      {/* Navbar menuitems */}
      <div
        className={`md:w-[66%] bg-white fixed md:flex justify-center ${
          showMenuItems ? "top-[64px]" : "top-[-100%]"
        } ease-in duration-300 left-0 w-full h-[50%] md:static pt-[40px] md:pt-[0] `}
      >
        <ul className="flex flex-col  md:flex-row items-center md:justify-center">
          {navItems.map((item) => (
            <li
              className={`flex items-center list-none ${
                showMenuItems ? "mb-4" : ""
              } tracking-[.5px] cursor-pointer capitalize text-black text-2xl md:text-sm pr-[15px]`}
              key={item.id}
            >
              {item.text}
              {item.id === 1 && (
                <RiArrowDropDownLine 
                className="dropdown-icon"
                  style={{
                    fontSize: "24px",
                  }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end md:w-[16.6%]">
        <BsBag style={{ fontSize: "24px", color: "black" }} />
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
