"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Nav from "./Nav";
import Lenis from "lenis";

interface CustomMouseEvent extends React.MouseEvent<HTMLDivElement> {
  clientX: number;
  clientY: number;
}
const Hero = () => {
  const background = useRef<HTMLDivElement>(null);

  const handleHover = (e: CustomMouseEvent) => {
    background?.current?.style.setProperty("--x", e.clientX + "px");
    background?.current?.style.setProperty("--y", e.clientY + "px");
  };
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div
      className="flex flex-col h-[705px] w-full text relative hero"
      ref={background}
      onMouseMove={handleHover}
    >
      <div className="bg-light-background gap-[4px] h-full z-10 w-full absolute overflow-hidden background-glow ">
        {[...Array(300)].map((_, i) => {
          return (
            <div
              key={i}
              className="max-w-[62px] w-full h-[75.44px] bg-[#1A1A1A]"
            ></div>
          );
        })}
      </div>
      <Nav />

      <div className="flex items-center justify-center flex-col h-full w-full text-center relatve z-10 p-4">
        <Image
          src="/radial.png"
          alt=""
          height={675}
          width={675}
          className="h-[657px] max-w-[657px] w-full  absolute pointer-events-none opacity-5 object-contain"
        />
        <Image
          src={"/zoomed-nathanpro.jpg"}
          alt="nathanPro"
          width={80}
          height={80}
          className="z-10 rounded-full"
        />
        <h1 className="z-10 heading text-gradiant max-w-[532px]">
          Bringing Ideas to Life, Front to Back
        </h1>
        <p className="z-10 max-w-[502px] text-center text-white mt-[16px]">
          I love building modern, intuitive websites and powerful back-end
          systems that work seamlessly together. From crafting smooth user
          experiences to making everything run fast and secure, I make sure
          every piece fits perfectly.
        </p>
        <div className="mt-4 relatve z-10">
          <a
            href="mailto:nathanpro.web@gmail.com"
            className="px-4 text-bold flex items-center gap-2 hover:gap-4 transition-all cursor-pointer py-2 rounded-full bg-white text-black relative z-10"
          >
            Email Me
            <Image
              src="/arrow-right.png"
              width={16}
              height={16}
              alt=""
              className="w-4"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
