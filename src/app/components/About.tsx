"use client";

import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full bg-dark flex flex-col pb-[90px]" id="about">
      <div className="max-w-[1280px] w-full mx-auto mt-[120px] p-4 xl:p-0">
        <h1 className="heading text-gradiant text-center ">About Me</h1>
        {/* first row */}
        <div className="flex flex-col md:flex-row w-full mt-[66px] items-center justify-batween gap-4">
          <div className="flex flex-col relative min-h-[368px] py-[34px] md:py-0 rounded-[24px] justify-center px-[34px] md:px-[64px] xl:w-2/3 bg-gradient overflow-hidden">
            <div className="background w-full h-full absolute top-0 left-0 opacity-5"></div>
            <h1 className="z-10 text-white opacity-80 text-[20px]">
              I&apos;am Nathan
            </h1>
            <p className="z-10 mt-[30px] text-white max-w-[617.84px] opacity-80">
              Im a dedicated front-end developer with a strong focus on crafting
              responsive and visually appealing user interfaces. Skilled in
              HTML, CSS, JavaScript, and modern frameworks like React,
            </p>
            <p className="z-10 mt-[30px] text-white max-w-[617.84px] opacity-80">
              I bring designs to life with clean, efficient code. continuously
              improving my skills to stay at the forefront of front-end
              technologies.
            </p>
          </div>

          <div className="flex justify-center items-center lg:w-1/3 w-full relative bg-gradient rounded-[24px] h-[368px] overflow-hidden ">
            <div className="background w-full h-full absolute top-0 left-0 w-2/3% opacity-5"></div>

            <Image
              src="/profile-nathanPro.jpg"
              alt="nathanpro"
              height={206}
              width={206}
              className="w-[206px] rounded-full grayscale  transition-all hover:grayscale-0"
            />
          </div>
        </div>
        {/* second row */}
        <div className="flex flex-wrap w-full min-h-[250px]  justify-center mt-[15px] gap-[15px] ">
          <div className="flex min-w-[140px] w-full sm:w-[calc(50%-7.5px)] xl:max-w-[243.2px] h-full min-h-[250px] relative bg-gradient rounded-[24px] items-center justify-center text-white overflow-hidden flex-col p-4">
            <div className="background w-full h-full absolute top-0 left-0 opacity-5 "></div>

            <p className="text-[48px] font-bold"> 20+</p>
            <p className="opacity-80 text-center">
              Completed <br /> Projects
            </p>
          </div>
          <div className="flex min-w-[140px] sm:w-[calc(50%-7.5px)] w-full xl:max-w-[243.2px] h-full min-h-[250px] relative bg-gradient rounded-[24px] items-center justify-center text-white overflow-hidden flex-col">
            <div className="background w-full h-full absolute top-0 left-0 w-2/3% opacity-5 "></div>

            <p className="text-[48px] font-bold"> 4+</p>
            <p className="opacity-80 text-center">
              Learning <br /> Years
            </p>
          </div>
          <div className="flex min-w-[140px] w-full xl:max-w-[761.59px] p-4 xl:p-0 min-h-[250px] h-full relative bg-gradient rounded-[24px] items-center justify-center text-white overflow-hidden flex-col">
            <div className="background w-full h-full absolute top-0 left-0 opacity-5 "></div>

            <p className="opacity-80 text-start xl:max-w-[603.87px] xl:ml-[64px]">
              since High-school learing programming the have TEVT deploma in web
              development and database adminsartion
            </p>
          </div>
        </div>

        {/* thred row */}
        <div className="flex flex-wrap xl:flex-row w-full min-h-[243px] mt-[15px] gap-[15px] overflow-hidden">
          {/* react expert */}
          <div className="flex w-full max-w-[502px] h-[200px] relative bg-gradient rounded-[24px] justify-center items-center overflow-hidden ">
            <div className="background w-full h-full absolute top-0 left-0 xl:w-2/ opacity-5 "></div>
            <div className="rounded-[33px] p-[2px] three">
              <span className="bg-[#1D1D1D] h-[68px] w-[238px] rounded-[33px] flex items-center px-[14px] gap-[16px] cursor-pointer ">
                <Image
                  height={60}
                  width={60}
                  src="/tech-5.png"
                  alt=""
                  className=""
                />

                <p className="text-gradiant text-[20px] font-bold opacity-55 ">
                  React Expert
                </p>
              </span>
            </div>
          </div>
          {/* tech */}
          <div className="flex p-4 w-full max-w-[502.41px] overflow-hidden h-[200px] relative bg-gradient rounded-[24px] justify-center items-center flex-col pt-[24px]">
            <div className="background w-full h-full absolute top-0 left-0 opacity-5 "></div>
            <p className="opacity-80 text-white text-center"> Tech</p>
            <div className="flex  w-full overflow-hidden mask">
              <ul className="flex gap-[32px] w-fit flex-nowrap mt-[60px] scroll-tech items-center p-[32px]">
                <li>
                  <Image
                    height={60}
                    width={60}
                    src="/tech-1.png"
                    alt=""
                    className="w-auto"
                  />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-2.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-3.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-4.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-5.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-6.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-7.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-8.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-9.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-10.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-11.png" alt="" />
                </li>
                {/* for the loop */}
                <li>
                  <Image height={60} width={60} src="/tech-1.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-2.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-3.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-4.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-5.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-6.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-7.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-8.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-9.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-10.png" alt="" />
                </li>
                <li>
                  <Image height={60} width={60} src="/tech-11.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
          {/* github */}
          <a
            href="https://github.com/natanPro2016/"
            className="flex w-full xl:max-w-[243.19px] max-w-[502px] overflow h-[200px] relative bg-gradient rounded-[24px] justify-center items-center overflow-hidden"
          >
            <div className="background w-full h-full absolute top-0 left-0 w-2/3% opacity-5 "></div>

            <Image
              height={60}
              width={60}
              src="/github-big.png"
              alt="my-git-hub-profile"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
