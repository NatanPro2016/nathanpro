import React from "react";
import EarthCanvas from "../canvas/Earth";
import StarsCanvas from "../canvas/StartCanvas";

const ThreeD = () => {
  return (
    <div className="h-screen relative z-10 w-full bg-[#1a1a1a] text-center text-white">
      {/* <div className="absolute top-[50%] left-[50%] z-20 w-[500px] h-[400px] bg-[#cccccc19] backdrop-blur-sm rounded-sm"></div> */}
      <EarthCanvas />
      <StarsCanvas />
    </div>
  );
};

export default ThreeD;
