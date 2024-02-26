"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const TestPage = () => {
  const variants = {
    variant1: {
      x: 400,
      y: 300,
      opacity: 0.5,
      transition: { duration: 2, delay: 2 },
    },
    variant2: { x: -500, y: -300, rotate: 1215 },
  };
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(false);
    }, 800); // duration of the animation

    return () => clearTimeout(timer); // clean up on unmount
  }, []);

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-rose-400 rounded"
        // initial={{ x: -500 }}
        variants={variants}
        animate="variant2"
        transition={{ delay: 2, duration: 4 }}></motion.div>{" "}
      <AnimatePresence>
        {isMounted && (
          <motion.div
            className="fixed m-auto top-0 bottom-0 left-0 right-0 w-fit h-fit text-8xl cursor-default text-black font-bold z-30 text-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            Test
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestPage;
