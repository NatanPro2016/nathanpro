"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Glass = () => {
  return (
    <div className="w-full overflow-hidden h-screen flex justify-center items-center relative p-4">
      <img
        src="/glass/Icosahedron.png"
        alt=""
        className="absolute top-2 right-7"
      />
      <img
        src="/glass/Torus.png"
        alt=""
        className="absolute bottom-6 left-96"
      />
      {/* <motion.div className="flex flex-col justify-between p-12 w-[767px] h-[464px] relative z-10 -rotate-12 backdrop-blur rounded-[24px] bg-[#2323235c] shadow-xl ">
        // {/* <div className="background w-full h-full absolute top-0 left-0 opacity-5 "></div> 
        <img
          src="/glass/glass.png"
          alt=""
          className="absolute z-0 top-0 left-0 h-[464px] opacity"
        />
        <div className="flex justify-between items-center relative z-10">
          <div className="flex gap-[5.6px]">
            <div className="h-4 w-4 rounded-full bg-[#ffffff7d]"></div>
            <div className="h-4 w-4 rounded-full bg-[#ffffff7d]"></div>
            <div className="h-4 w-4 rounded-full bg-[#ffffff7d]"></div>
          </div>
          <img src="/glass/wifi.png" alt="" />
        </div>
        <div className="relative z-10 flex flex-col gap-0">
          <p className="heading text-gradiant w-56 text-[60px] opacity-60">
            Glass
          </p>
          <span className="text-white text-[80px]">Effect</span>
        </div> */}
      {/* </motion.div> */}
      <div className="max-w-[350px] w-full h-[250px] bg-[#ffffff0a] backdrop-blur-md rounded-lg flex flex-col items-center justify-center">
   
      </div>
    </div>
  );
};

export default Glass;
