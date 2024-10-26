"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const TextParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "start end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["00%", "200%"]);

  return (
    <div
      className="min-h-screen w-full flex-col flex items-center justify-center overflow-hidden p-2"
      ref={ref}
    >
      <motion.h1 className="heading text-gradiant text-center" style={{ x }}>
        Are You Ready To Hire
      </motion.h1>
      <motion.h1
        className="heading text-gradiant text-center "
        style={{ x: x2 }}
      >
        Someone Professional
      </motion.h1>
      <motion.div className={`transition-all1 `} style={{ y: x2 }}>
        <a
          href="mailto:nathanpro.web@gmail.com"
          className="px-4 mt-4 text-bold flex items-center gap-2 hover:gap-4 transition-all cursor-pointer py-2 rounded-full bg-white text-black"
        >
          Email Me
          <Image
            sizes="fill"
            src="/arrow-right.png"
            height={20}
            width={20}
            alt=""
            className="w-4"
          />
        </a>
      </motion.div>
    </div>
  );
};

export default TextParallax;
