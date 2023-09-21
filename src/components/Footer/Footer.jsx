import React from "react";
import Button from "../../utils/Button";
import "./style.css";
const Footer = () => {
  const footerLogo =
    "https://irp.cdn-website.com/md/dmtmpl/f67fc932-23e9-4c99-a08c-01ab694e3064/dms3rep/multi/LOGO_white.svg";
  return (
    <footer className="bg-black text-white">
      <div className="container flex justify-between flex-wrap py-[80px]">
        <div className="max-w-[240px] pr-[40px]">
          <img className="max-w-[250px]" src={footerLogo} alt="logo" />
        </div>
        <div className="max-w-[260px] pr-[40px]">
          <p>
            10 Street Bahria Town,Lahore <span> Pakistan, Zip Code</span>
          </p>
          <p>
            03339271115 <span>hellodaisy@gmail.com</span>
          </p>
        </div>
        <div className="max-w-[150px] pr-[40px]">
          <h5 className="whitespace-nowrap">Shipping & Return</h5>
          <h5>Name</h5>
          <h5>Contact us</h5>
          <h5>About us</h5>
        </div>
        <div className="max-w-[290px]">
          <h5>be the first to know</h5>
          <button className="w-[260px] text-left h-[40px] capitalize mb-[20px] border-[1px] border-white px-[10px]">
            enter your email addres
          </button>
          <Button>sign up for discounts</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
