"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import AnimatedBtn from "../AnimatedBtn";

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
      className="min-h-screen w-full flex-col flex items-center justify-center overflow-hidden"
      ref={ref}
    >
      <motion.h1 className="heading text-gradiant text-center" style={{ x }}>
        Are You Rady To Hire
      </motion.h1>
      <motion.h1
        className="heading text-gradiant text-center "
        style={{ x: x2 }}
      >
        Somemone Professional
      </motion.h1>
      <div className={`translate-y-60 opacity-0 transition-all1 `}>
        <AnimatedBtn />
      </div>
    </div>
  );
};

export default TextParallax;
