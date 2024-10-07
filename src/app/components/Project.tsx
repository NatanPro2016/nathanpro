"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
interface props {
  id: number;
  title: string;
  description: string;
  link: string;
  github: string;
  img: string;
}
const Project = ({ id, title, description, link, github, img }: props) => {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["150px", "0px"]);

  return (
    <li
      className="border border-[#ffffff11] rounded-[10px] overflow-hidden max-w-[632px] w-full"
      ref={ref}
      key={id}
    >
      <div className="flex gap-[6px] p-[5px] m-[5px] ">
        <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
        <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
        <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
      </div>
      <div className="sm:h-[524px] h-[450px] max-w-[622px] overflow-hidden rounded-[6px]">
        <motion.div
          className="relative h-full w-full bottom-[150px]"
          style={{ y }}
        >
          <Image
            src={img}
            alt="project"
            fill
            sizes="(max-width:622px) , 100vw , 1000px"
            className="h-full w-full object-cover rounded-[6px] mx-[5px] border border-[#ffffff00] "
          />
        </motion.div>
      </div>
      <div className="flex w-full justify-between items-center gap-2 bg-black px-[24px] mt-[-96px] z-10 relative min-h-[106px] p-2  ">
        <div className=" w-full h-full background flex absolute top-0 left-0 z-10 opacity-5"></div>
        <div className="flex flex-col relative z-20">
          <h1 className="text-white text-[20px] font-bold capitalize mt-[10px]">
            {title}
          </h1>
          <p className="text-white mt-[10px] max-w-[405px] opacity-60">
            {description}
          </p>
        </div>
        <div className="links h-full flex flex-col justify-center gap-4 z-20">
          <a href={link}>
            <Image
              src="/arrow.png"
              height={30}
              width={30}
              alt=""
              className="p-1"
            />
          </a>
          <a href={github}>
            <Image
              src="/github.png"
              height={30}
              width={30}
              alt=""
              className="p-1"
            />
          </a>
        </div>
      </div>
    </li>
  );
};

export default Project;
