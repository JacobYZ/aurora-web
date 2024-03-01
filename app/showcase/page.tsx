"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "../constants";
import { useMemo, useRef } from "react";
import { ShowcaseItem } from "@/components/ShowcaseItem";
import ScrollSVG from "@/components/ScrollSVG";

const ShowcasePage = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const transformedScrollProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-80%"]
  );

  const renderedItems = useMemo(
    () =>
      PROJECTS.map((item) => (
        <ShowcaseItem
          key={item.id}
          item={item}
        />
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
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center gap-16">
          Our Work
          <ScrollSVG/>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div
            style={{ x: transformedScrollProgress }}
            className="flex">
            <div className="w-screen h-screen bg-gradient-to-r from-purple-300 to-red-300 flex items-center justify-center" />
            {renderedItems}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex-col gap-16 text-center flex items-center justify-center bg-gradient-to-b from-black to-stone-800">
        <h1 className="text-5xl lg:text-8xl">Do you have a project?</h1>
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
