"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Nav from "./Nav";

const Hero = () => {
  const background = useRef<HTMLDivElement>(null);

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
      <Nav />
      <div className="bg-light-background gap-[4px] h-full w-full absolute z-[-100] overflow-hidden background-glow ">
        {[...Array(300)].map((_, i) => {
          return (
            <div
              key={i}
              className="max-w-[62px] w-full h-[75.44px] bg-[#1A1A1A]"
            ></div>
          );
        })}
      </div>

      <div className="flex pointer-events-none items-center justify-center flex-col h-full w-full text-center p-4">
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
          <a
            href=""
            className="px-4 text-bold  cursor-pointer py-2 rounded-full bg-white text-black"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
