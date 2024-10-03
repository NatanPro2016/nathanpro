"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const About = () => {
  const [opend, setOpen] = useState(false);
  return (
    <div className="w-full bg-dark flex flex-col pb-[90px]">
      <div className="max-w-[1280px] w-full mx-auto mt-[120px] p-4 xl:p-0">
        <h1 className="heading text-gradiant text-center ">About Me</h1>
        {/* first row */}
        <div className="flex flex-col md:flex-row w-full mt-[66px] items-center justify-center gap-4">
          <div className="flex flex-col relative min-h-[368px] py-[34px] md:py-0 rounded-[24px] justify-center px-[34px] md:px-[64px] xl:w-2/3 bg-gradient overflow-hidden">
            <div className="background w-full h-full absolute top-0 left-0 opacity-5"></div>
            <h1 className="z-10 text-white opacity-80 text-[20px]">
              I am Nathan
            </h1>
            <p className="z-10 mt-[30px] text-white max-w-[617.84px] opacity-80">
              I'm a dedicated front-end developer with a strong focus on
              crafting responsive and visually appealing user interfaces.
              Skilled in HTML, CSS, JavaScript, and modern frameworks like
              React,
            </p>
            <p className="z-10 mt-[30px] text-white max-w-[617.84px] opacity-80">
              I bring designs to life with clean, efficient code. continuously
              improving my skills to stay at the forefront of front-end
              technologies.
            </p>
          </div>

          <AnimatePresence>
            {opend && (
              <motion.div>
                <motion.h5>title</motion.h5>
                <motion.h2>sdfd</motion.h2>
                <motion.button onClick={() => setOpen(false)} />
              </motion.div>
            )}
          </AnimatePresence>
          <div
            className="flex justify-center items-center lg:w-1/3 w-full relative bg-gradient rounded-[24px] h-[368px] overflow-hidden "
            onClick={() => setOpen(true)}
          >
            <div className="background w-full h-full absolute top-0 left-0 w-2/3% opacity-5"></div>

            <img
              src="/profile-image.png"
              alt="nathanpro"
              className="w-[206px]"
            />
          </div>
        </div>
        {/* second row */}
        <div className="flex flex-col xl:flex-row w-full h-[368px] justify-center mt-[15px] gap-[15px] ">
          <div className="flex w-full xl:w-1/4 h-full relative bg-gradient rounded-[24px] items-center justify-center text-white overflow-hidden flex-col">
            <div className="background w-full h-full absolute top-0 left-0 opacity-5 "></div>

            <p className="text-[48px] font-bold"> 20+</p>
            <p className="opacity-80 text-center">
              Completed <br /> Projects
            </p>
          </div>
          <div className="flex xl:w-1/4 w-full h-full relative bg-gradient rounded-[24px] items-center justify-center text-white overflow-hidden flex-col">
            <div className="background w-full h-full absolute top-0 left-0 w-2/3% opacity-5 "></div>

            <p className="text-[48px] font-bold"> 4+</p>
            <p className="opacity-80 text-center">
              Learing <br /> Years
            </p>
          </div>
          <div className="flex xl:w-1/2 w-full p-2 xl:p-0  h-full relative bg-gradient rounded-[24px] items-center justify-center text-white overflow-hidden flex-col">
            <div className="background w-full h-full absolute top-0 left-0 w-2/3% opacity-5 "></div>

            <p className="opacity-80 text-start max-w-[603.87px] ml-[64px]">
              since high school learing porgraming the have TEVT deploma in web
              development and database adminsartion
            </p>
          </div>
        </div>

        {/* thred row */}
        <div className="flex w-full h-[200px] mt-[15px] gap-[15px] overflow-hidden">
          <div className="flex w-[502px] h-full relative bg-gradient rounded-[24px] justify-center items-center overflow-hidden ">
            <div className="background w-full h-full absolute top-0 left-0 w-2/3% opacity-5 "></div>
            <div className="rounded-[33px] p-[2px] three">
              <span className="bg-[#1D1D1D] h-[68px] w-[238px] rounded-[33px] flex items-center px-[14px] gap-[16px] cursor-pointer ">
                <img src="./tech-5.png" alt="" className="" />

                <p className="text-gradiant text-[20px] font-bold opacity-55 ">
                  React Expert
                </p>
              </span>
            </div>
          </div>
          {/* tech */}
          <div className="flex w-[502.41px] overflow-hidden h-full relative bg-gradient rounded-[24px] justify-center items-center flex-col pt-[24px]">
            <div className="background w-full h-full absolute top-0 left-0 opacity-5 "></div>
            <p className="opacity-80 text-white text-center"> Tech</p>
            <div className="flex  w-full overflow-hidden mask">
              <ul className="flex gap-[32px] w-fit flex-nowrap mt-[60px] scroll-animation ">
                <li>
                  <img src="/tech-1.png" alt="" />
                </li>
                <li>
                  <img src="/tech-2.png" alt="" />
                </li>
                <li>
                  <img src="/tech-3.png" alt="" />
                </li>
                <li>
                  <img src="/tech-4.png" alt="" />
                </li>
                <li>
                  <img src="/tech-5.png" alt="" />
                </li>
                <li>
                  <img src="/tech-6.png" alt="" />
                </li>
                <li>
                  <img src="/tech-7.png" alt="" />
                </li>
                <li>
                  <img src="/tech-8.png" alt="" />
                </li>
                <li>
                  <img src="/tech-9.png" alt="" />
                </li>
                <li>
                  <img src="/tech-10.png" alt="" />
                </li>
                <li>
                  <img src="/tech-11.png" alt="" />
                </li>
                {/* for the loop */}
                <li>
                  <img src="/tech-1.png" alt="" />
                </li>
                <li>
                  <img src="/tech-2.png" alt="" />
                </li>
                <li>
                  <img src="/tech-3.png" alt="" />
                </li>
                <li>
                  <img src="/tech-4.png" alt="" />
                </li>
                <li>
                  <img src="/tech-5.png" alt="" />
                </li>
                <li>
                  <img src="/tech-6.png" alt="" />
                </li>
                <li>
                  <img src="/tech-7.png" alt="" />
                </li>
                <li>
                  <img src="/tech-8.png" alt="" />
                </li>
                <li>
                  <img src="/tech-9.png" alt="" />
                </li>
                <li>
                  <img src="/tech-10.png" alt="" />
                </li>
                <li>
                  <img src="/tech-11.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
          {/* github */}
          <div className="flex w-[243.19px] overflow h-full relative bg-gradient rounded-[24px] justify-center items-center overflow-hidden">
            <div className="background w-full h-full absolute top-0 left-0 w-2/3% opacity-5 "></div>

            <img src="./github-big.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
