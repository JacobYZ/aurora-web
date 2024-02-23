"use client";
import { motion } from "framer-motion";
import React from "react";

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

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-rose-400 rounded"
        // initial={{ x: -500 }}
        variants={variants}
        animate="variant2"
        transition={{ delay: 2, duration: 4 }}></motion.div>
    </div>
  );
};

export default TestPage;
