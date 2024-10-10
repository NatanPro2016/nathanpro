import React from "react";

const AnimatedBtn = () => {
  return (
    <div className="flex relative bg-[#ffffff1c] rounded-lg backdrop-blur-sm">
      <div className="animated-bg bg-blur bg-s-big absolute h-[40px] w-[244px] top-0 left-0 mr-[-254px]"></div>
      <a
        href="mailto:nathanpro.web@gmail.com"
        className="z-10 relative py-[2px] px-[2px] text-white rounded-lg overflow-hidden flex"
      >
        <div className="animated-bg absolute h-full w-full top-0 left-0"></div>
        <span className="w-full rounded-[7px] py-2 px-[21px] h-full bg-black z-20">
          nathanPro.web@gmail.com
        </span>
      </a>
    </div>
  );
};

export default AnimatedBtn;
