"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loading = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);
  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            className="h-screen w-full flex items-center justify-center fixed bg-light-background z-20"
            animate={{ opacity: 1 }}
            exit={{ scaleX: 0.8, translateY: "-100%" }}
            
          >
            <motion.p
              style={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-[24px] text-white"
            >
              &nbsp; Fast &#44; &nbsp;
            </motion.p>
            <motion.p
              transition={{ delay: 0.5 }}
              style={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-[24px] text-white"
            >
              &nbsp;Responsive &#44; &nbsp;
            </motion.p>
            &nbsp;
            <motion.p
              transition={{ delay: 1 }}
              style={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-[24px] text-white"
            >
              &nbsp; Website
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Loading;
