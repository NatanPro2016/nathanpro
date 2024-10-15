"use clinet";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 1100);
    });
    setIsMobile(window.innerWidth <= 1100);
  }, []);

  return (
    <div>
      <nav
        className={`flex justify-between max-w-[1280px] z-50 w-full mx-auto p-4 items-center ${
          isMobile && "hidden"
        }`}
      >
        <a href="/" className="text-white font-bold flex gap-2">
          <Image
            height={96}
            width={40.56}
            src="/logo.svg"
            alt="logo |home"
            className="w-24"
          />
          <span>
            Nathan Pro
            <br />
            <span className="text-[#ababab9a] font-normal"> Web Developer</span>
          </span>
        </a>
        <ul className="flex gap-[40px]">
          <li>
            <a
              href="#"
              className="text-[#d0d0d0d0] transition-all hover:text-white p-4"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-[#d0d0d0d0] transition-all hover:text-white p-4"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-[#d0d0d0d0] transition-all hover:text-white p-4"
            >
              About
            </a>
          </li>
        </ul>
      </nav>

      <nav
        className={`fixed w-full h-[66px] justify-between z-50 pb-[2px] bg-footer transition-all ${
          isMobile ? "flex" : "hidden"
        }`}
      >
        <div
          className={`flex flex-col px-4 w-full h-66 bg-[#242424] transition-all overflow-hidden ${
            openNav && " h-screen transition-all "
          }`}
          onClick={() => setOpenNav(!openNav)}
        >
          <div className="background w-screen h-full absolute top-0 left-0 opacity-5 z-10"></div>
          <div className="background-line w-screen h-[2px] absolute top-0 left-0 opacity-5 z-10"></div>

          <div className="flex justify-between h-[66px] items-center w-full relative z-20">
            <a href="/" className="text-white flex gap-2">
              <Image
                height={96}
                width={40.56}
                src="/logo.svg"
                alt="logo | home"
                className="w-24"
              />
              <span className="sm:block hidden ">
                Nathan Pro <br />
                <span className="text-[#ababab9a] font-normal">
                  {" "}
                  Web Developer
                </span>
              </span>
            </a>
            <div
              className="flex flex-col gap-2 cursor-pointer p-2 items-center justify-center"
              onClick={() => setOpenNav(!openNav)}
            >
              <div className={`nav-line ${openNav && "active"}`}></div>
              <div className={`nav-line reverse ${openNav && "active"}`}></div>
            </div>
          </div>
          {openNav && (
            <ul className="flex flex-col items-end gap-[40px] mt-[50px] p-3">
              <li>
                <a href="#" className="text-white opacity-80">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white opacity-80">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white opacity-80 hover:opacity-100 transition-all"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/NatanPro2016/"
                  className="text-white"
                >
                  Github
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
