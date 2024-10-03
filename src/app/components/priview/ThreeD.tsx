import React from "react";
import EarthCanvas from "../canvas/Earth";
import StarsCanvas from "../canvas/StartCanvas";

const ThreeD = () => {
  return (
    <div className="h-screen relative z-10 w-full bg-[#1a1a1a] text-center text-white">
      <EarthCanvas />
      <StarsCanvas />
    </div>
  );
};

export default ThreeD;
