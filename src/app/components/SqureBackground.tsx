"use client";
import React, { useEffect, useRef } from "react";

const SqureBackground = () => {
  const background = useRef<HTMLDivElement>(null);
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
      background?.current?.appendChild(card);
    }
  }, [background]);
  const handleHover = (e: any) => {
    e.setProperty("--x", e.clientX + "px");
    background.current.stylesetProperty("--y", e.clientY + "px");
    console.log();
  };
  return (
    <div
      className="flex flex-wrap gap-[1px] bg-light-background h-full w-full absolute z-[100] overflow-hidden background-glow "
      ref={background}
      onMouseMove={handleHover}
    ></div>
  );
};

export default SqureBackground;
