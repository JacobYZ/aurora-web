"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ITEMS } from "../constants";
import { useMemo, useRef } from "react";

const ShowcasePage = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const renderedItems = useMemo(
    () =>
      ITEMS.map((item) => (
        <div
          key={item.id}
          className={`w-screen h-screen bg-gradient-to-r ${item.color} flex items-center justify-center`}>
          <div className="flex flex-col gap-8 text-black">
            <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
              {item.title}
            </h1>
            <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
              {item.desc}
            </p>
            <Link
              href={item.link}
              className="flex justify-end">
              <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-black text-stone-200 font-semibold m-4 rounded">
                See Demo
              </button>
            </Link>
          </div>
        </div>
      )),
    []
  );
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div
        className="h-[600vh] relative"
        ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Our Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex">
            <div className="w-screen h-screen bg-gradient-to-r from-purple-300 to-red-300 flex items-center justify-center" />
            {renderedItems}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex-col gap-16 text-center flex items-center justify-center bg-gradient-to-b from-black to-stone-800">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 16, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] ">
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#FFF">
              <textPath
                xlinkHref="#circlePath"
                className="text-xl">
                Full-Stack Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-white text-black rounded-full flex items-center justify-center">
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ShowcasePage;
