"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Parallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0px", "306px"]);
  const raysY = useTransform(scrollYProgress, [0, 1], ["0px", "720px"]);
  const dustY = useTransform(scrollYProgress, [0, 1], ["0px", "405px"]);

  const mannyY = useTransform(scrollYProgress, [0, 1], ["0px", "594px"]);
  const jaxY = useTransform(scrollYProgress, [0, 1], ["0px", "423px"]);
  const lunnaY = useTransform(scrollYProgress, [0, 1], ["0px", "711px"]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="flex flex-col">
      <h1 className="heading text-gradiant text-center "> Show case</h1>
      <div
        className="min-h-screen relative max-w-screen flex items-center justify-start stack overflow-hidden mt-[66px]"
        ref={ref}
      >
        <motion.img src="/paralax/bg.jpg" alt="" style={{ y: bgY }} />
        <motion.img src="/paralax/rays.webp" alt="" style={{ y: raysY }} />
        <motion.img src="/paralax/dust.webp" alt="" style={{ y: dustY }} />
        <motion.img src="/paralax/jax.webp" alt="" style={{ y: jaxY }} />
        {/* <motion.p
          className="z-30 text-6xl text-white text-bold p-6 max-w-96 tex-gradiant"
          style={{ y: mannyY }}
        >
          Paralax Scrolling Effect
        </motion.p> */}
        <motion.img src="/paralax/luna.webp" alt="" style={{ y: lunnaY }} />
        <motion.img src="/paralax/manny.webp" alt="" style={{ y: mannyY }} />
        <img
          src="/paralax/foreground-back.webp"
          alt=""
          className="botto mix-blend-overlay"
        />
        <img src="/paralax/ff.png" alt="" className="z-40 opacity-0" />
      </div>
    </div>
  );
};

export default Parallax;
