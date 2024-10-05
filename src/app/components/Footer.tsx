import React from "react";
import AnimatedBtn from "./AnimatedBtn";

const Footer = () => {
  return (
    <div className="w-full bg-[#121212] h-[380px] ">
      <div className="flex w-full justify-center items-center  h-[100px] py-[1px] bg-footer bg-white">
        <div className="w-full h-full  bg-[#121212] justify-center items-center flex gap-2">
          <p className="text-white opacity-80 text-[18px] hidden lg:flex">
            Interested in working with me? Send me a message
          </p>
          <AnimatedBtn />
        </div>
      </div>
      <div className="flex w-full flex-col items-center text-[#827D7D] text-center gap-[56px]">
        <nav>
          <ul className="flex gap-[31px] mt-2">
            <li>
              <a
                href="#"
                className="text-[#827D7D] text-[16px] hover:text-white transition-all "
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#827D7D] text-[16px] hover:text-white transition-all "
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#827D7D] text-[16px] hover:text-white transition-all"
              >
                About
              </a>
            </li>
          </ul>
        </nav>

        <ul className="flex gap-[20px] w-full justify-center">
          <li>
            <a href="">
              <img
                src="/github-social.png"
                alt=""
                className="opacity-80 hover:opacity-100 transition-all"
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="/instagram.png"
                alt=""
                className="opacity-80 hover:opacity-100 transition-all"
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="/linkedIn.png"
                alt=""
                className="opacity-80 hover:opacity-100 transition-all"
              />
            </a>
          </li>
        </ul>
        <p>
          All rights reserved. <br /> &copy; Copyright Nathan Solo 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
