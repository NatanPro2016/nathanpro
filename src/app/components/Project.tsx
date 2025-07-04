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
  brand_new?: boolean;
  full_stack?: boolean;
}
const Project = ({
  id,
  title,
  description,
  link,
  github,
  img,
  brand_new,
  full_stack,
}: props) => {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0", "150px"]);

  return (
    <li
      className="border border-[#ffffff11] rounded-[10px] overflow-hidden max-w-[632px] w-full"
      ref={ref}
      key={id}
    >
      <div className="flex gap-[6px] p-[5px] m-[5px] items-center">
        <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
        <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
        <div className="h-2 w-2 bg-[#ffffff28] rounded-full "></div>
      </div>
      <div className="sm:h-[524px] h-[95vw] max-w-[622px] overflow-hidden rounded-[6px] relative">
        {brand_new && (
          <div className="absolute text-white -ml-14 mt-6 w-48 top-0 h-10 -rotate-45 flex z-10 justify-center items-center bg-[#D91656]">
            New
          </div>
        )}
        {full_stack && (
          <div className="absolute text-white -ml-14 mt-6 w-48 top-0 h-10 -rotate-45 flex z-10 justify-center items-center bg-[#52a447]">
            Full Stack
          </div>
        )}
        <a href={link} target="_blank">
          <motion.div
            className="relative h-full w-full bottom-[105px]"
            style={{ y }}
          >
            <Image
              src={img}
              alt="project"
              fill
              sizes="(max-width:622px) , 100vw , 1000px"
              className="h-full w-full object-contain rounded-[6px] mx-[5px] border border-[#ffffff00] "
            />
          </motion.div>
        </a>
      </div>
      <div className="flex w-full justify-between items-center gap-2 bg-black px-[24px] pb-[24px] mt-[-96px] z-10 relative min-h-[106px]  ">
        <div className=" w-full h-full background flex absolute top-0 left-0 z-10 opacity-5"></div>
        <div className="flex flex-col relative z-20">
          <h1 className="text-white text-[20px] font-bold capitalize mt-[10px]">
            {title}
          </h1>
          <p className="text-white mt-[10px] max-w-[405px] opacity-60">
            {description}
          </p>
        </div>
        <div className="links h-full flex flex-col justify-center gap-4 z-20 mt-[10px]">
          <a href={link} className="p-2" target="_blank">
            <img src="/arrow.png" alt="got to the web | Go" className="w-5" />
          </a>
          <a href={github} className="p-2" target="_blank">
            <img
              src="/github.png"
              alt="Go to git hub | githubi icon"
              className="md:w-5 w-3 object-conta"
            />
          </a>
        </div>
      </div>
    </li>
  );
};

export default Project;
