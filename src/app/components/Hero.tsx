"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import AnimatedBtn from "./AnimatedBtn";

const Hero = () => {
  const background = useRef<HTMLDivElement>(null);
  const contaner = useRef<HTMLDivElement>(null);
  useEffect(() => {
    for (let i = 300; i >= 0; i--) {
      const card = document.createElement("div");
      card.classList.add(
        "h-[75.44px]",
        "w-full",
        "min-w-[62px]",
        "max-w-[75px]",
        "bg-[#1A1A1A]"
      );
      contaner?.current?.appendChild(card);
    }
  }, [contaner]);
  const handleHover = (e: any) => {
    background?.current?.style.setProperty("--x", e.clientX + "px");
    background?.current?.style.setProperty("--y", e.clientY + "px");
    console.log();
  };
  return (
    <div
      className="flex flex-col h-[705px] w-full text relative"
      ref={background}
      onMouseMove={handleHover}
    >
      <nav className="flex justify-between max-w-[1280px] w-full mx-auto p-4 items-center ">
        <a href="/" className="text-white ">
          Nathan Pro <br />
          <span> Web Developer</span>
        </a>
        <ul className="flex gap-[40px]">
          <li>
            <a href="#projects" className="text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#Services" className="text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#abput" className="text-white">
              About
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="bg-light-background gap-2 flex flex-wrap h-full w-full absolute z-[-100] overflow-hidden background-glow "
        ref={contaner}
      ></div>

      <div className="flex pointer-events-none items-center justify-center flex-col h-full w-full text-center">
        <img
          src="/radial.png"
          alt=""
          className="h-[657px] max-w-[657px] w-full absolute opacity-5"
        />
        <Image
          src={"/profile-image.png"}
          alt="profile"
          width={80}
          height={80}
          className="z-10"
        />
        <h1 className="z-10 heading text-gradiant max-w-[532px]">
          Crafting Engaging Front-End Solutions
        </h1>
        <p className="z-10 max-w-[402px] text-center text-white mt-[16px]">
          I build modern, intuitive websites that are fast, responsive, and
          designed to deliver seamless user experiences across devices
        </p>
        <div className="mt-4">
          <AnimatedBtn />
        </div>
      </div>
    </div>
  );
};

export default Hero;
