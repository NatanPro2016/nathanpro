import React from "react";
import AnimatedBtn from "./AnimatedBtn";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-[#121212] h-[380px] ">
      <div className="flex w-full justify-center items-center  h-[100px] py-[1px] bg-footer bg-white sticky top-0">
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
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-[#827D7D] text-[16px] hover:text-white transition-all "
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[#827D7D] text-[16px] hover:text-white transition-all"
              >
                About
              </a>
            </li>
          </ul>
        </nav>

        <ul className="flex gap-[20px] w-full justify-center">
          <li>
            <a href="https://github.com/NatanPro2016/NatanPro2016/">
              <Image
                height={25}
                width={25}
                src="/github-social.png"
                alt="my-github-profile"
                className="opacity-80 hover:opacity-100 transition-all"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_nathan___pro/">
              <Image
                height={25}
                width={25}
                src="/instagram.png"
                alt="my-instagram-profile"
                className="opacity-80 hover:opacity-100 transition-all"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/natan-haile-1bb674264/">
              <Image
                src="/linkedIn.png"
                height={25}
                width={25}
                alt="my-linked-in-profile"
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
